const {PassThrough} = require('stream')


module.exports = function(options)
{
  return new PassThrough({
    ...options,
    flush(callback)
    {
      callback(null, 'end')
    },
    objectMode: true
  })
}
