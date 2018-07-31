const {PassThrough} = require('stream')

const {duplex} = require('..')


test('basic', function(done)
{
  expect.assertions(1)

  const expected = 'asdf'

  duplex(new PassThrough({objectMode: true}))
  .on('data', function(data)
  {
    expect(data).toBe(expected)
  })
  .on('end', done)
  .end(expected)
})
