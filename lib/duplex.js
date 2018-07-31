const {obj: pumpify} = require('pumpify')

const receiver = require('./receiver')
const sender   = require('./sender')


module.exports = function(duplex, {receiver: recvOpts, sender: sendOpts} = {})
{
  return pumpify(sender(sendOpts), duplex, receiver(recvOpts))
}
