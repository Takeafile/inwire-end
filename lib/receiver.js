const {Transform} = require('stream')


module.exports = function(options)
{
  return new Transform({
    ...options,
    objectMode: true,
    transform(chunk, _, callback)
    {
      callback(null, chunk === 'end' ? null : chunk)
    }
  })
}
