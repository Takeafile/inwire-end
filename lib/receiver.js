const {Transform} = require('stream')


module.exports = function(options)
{
  return new Transform({
    ...options,
    objectMode: true,
    transform(chunk, _, callback)
    {
      if(typeof chunk.eos === 'number')
      {
        chunk.eos--

        if(!chunk.eos)
        {
          this.end()

          return callback()
        }
      }

      callback(null, chunk)
    }
  })
}
