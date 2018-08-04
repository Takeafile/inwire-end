const {PassThrough} = require('stream')


module.exports = function(options)
{
  return new PassThrough({
    ...options,
    flush(callback)
    {
      callback(null, {eos: 1})
    },
    objectMode: true
  })
}
