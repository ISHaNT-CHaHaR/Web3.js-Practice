const Web3 = require('web3');

//var url = 'https://mainnet.infura.io/v3/998d783144dc4f9e824a3ab0a9982964';

const web3 = new Web3(
   'https://mainnet.infura.io/v3/998d783144dc4f9e824a3ab0a9982964'
);
const mst = async (address) => {
   // let address = '0x742d35Cc6634C0532925a3b844Bc454e4438f44e';
   let balance;
   await web3.eth.getBalance(address, (err, bal) => {
      // to get balance of an address

      balance = bal;
      console.log(balance);
      let any = web3.utils.fromWei(balance, 'ether');
      console.log(any);
   });

   await web3.eth.getTransactionCount(address, (err, data) => {
      console.log(data);
   });

   await web3.eth.getGasPrice((err, data) => {
      console.log(data);
   });

   await web3.eth.getBlockNumber((err, data) => {
      console.log(data);
   });

   setTimeout(() => {
      console.log('MAGIC! TADADADADADDADADDADDADADADDADDADADDA');
   }, 10000);
};
mst('0x742d35Cc6634C0532925a3b844Bc454e4438f44e');
