const Web3 = require('web3');

const web3 = new Web3('HTTP://127.0.0.1:7545');

web3.eth
   .getTransactionCount('0xbe21fC7470d7956028878d966E8E4AA9BBB8Cb2f')
   .then(console.log);
