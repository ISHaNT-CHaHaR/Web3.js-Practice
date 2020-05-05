const Web3 = require('web3');

//var url = 'https://mainnet.infura.io/v3/998d783144dc4f9e824a3ab0a9982964';

const web3 = new Web3(
   'https://mainnet.infura.io/v3/998d783144dc4f9e824a3ab0a9982964'
);

let address = '0x742d35Cc6634C0532925a3b844Bc454e4438f44e';
let balance;
web3.eth.getBalance(address, (err, bal) => {
   // to get balance of an address

   balance = bal;
   console.log(balance);
});
