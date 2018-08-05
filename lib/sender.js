const {Transform} = require('stream')


module.exports = function(options)
{
  return new Transform({
    ...options,
    flush(callback)
    {
      callback(null, {eos: 1})
    },
    objectMode: true,
    transform(chunk, _, callback)
    {
      if(typeof chunk.eos === 'number') chunk.eos++

      callback(null, chunk)
    }
  })
}
