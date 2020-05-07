const Web3 = require('web3');
const EthereumTransaction = require('ethereumjs-tx').Transaction;
const web3 = new Web3('HTTP://127.0.0.1:7545');
//////// setting addresss
let sendingAddress = '0x241A3eCb5F327F9EC0F67549CaAe20b5Dde6Ff47';

let receivingAddress = '0x6eaA410369f8e68A5688A9c38aDE15b060cd7402';

/// checking balance
web3.eth.getBalance(sendingAddress).then((data) => {
   console.log(data);
});

web3.eth.getBalance(receivingAddress).then(console.log);

//////////////////// Set up a transdaction

var rawTransaction = {
   nonce: 9,
   to: receivingAddress,
   gasPrice: 20000000,
   gasLimit: 30000,
   value: 9970744700429015940,
   data: null,
};

////////////////////////   Sign the transaction with the hex of private key

var privatekeySender =
   '61a600df99bc28e113051fbdb5d41331f17d3ba4bd8e55a60c2ba7a56c83edfa';
var privateKeySenderHex = Buffer.from(privatekeySender, 'hex');
var transaction = new EthereumTransaction(rawTransaction);

transaction.sign(privateKeySenderHex);

///send the etherium transaction to network
var serializedTransaction = transaction.serialize();
web3.eth.sendSignedTransaction(serializedTransaction);

// web3.eth.getAccounts().then((data) => {
//    data.forEach((el) => {
//       console.log(el);
//    });
// });

// //var url = 'https://mainnet.infura.io/v3/998d783144dc4f9e824a3ab0a9982964';

// const web3 = new Web3(
//    'https://mainnet.infura.io/v3/998d783144dc4f9e824a3ab0a9982964'
// );
// const mst = async (address) => {
//    // let address = '0x742d35Cc6634C0532925a3b844Bc454e4438f44e';
//    let balance;
//    await web3.eth.getBalance(address, (err, bal) => {
//       // to get balance of an address

//       balance = bal;
//       console.log(balance);
//       let any = web3.utils.fromWei(balance, 'ether');
//       console.log(any);
//    });

//    await web3.eth.getTransactionCount(address, (err, data) => {
//       console.log(data);
//    });

//    await web3.eth.getGasPrice((err, data) => {
//       console.log(data);
//    });

//    await web3.eth.getBlockNumber((err, data) => {
//       console.log(data);
//    });

//    await web3.eth.getCode(address, (err, data) => {
//       console.log(data);
//    });
//    setTimeout(() => {
//       console.log('MAGIC! TADADADADADDADADDADDADADADDADDADADDA');
//    }, 10000);
// };
// mst('0x742d35Cc6634C0532925a3b844Bc454e4438f44e');

// let ABI = [
//    {
//       constant: true,
//       inputs: [],
//       name: 'batFundDeposit',
//       outputs: [{ name: '', type: 'address' }],
//       payable: false,
//       type: 'function',
//    },
//    {
//       constant: true,
//       inputs: [],
//       name: 'name',
//       outputs: [{ name: '', type: 'string' }],
//       payable: false,
//       type: 'function',
//    },
//    {
//       constant: false,
//       inputs: [
//          { name: '_spender', type: 'address' },
//          { name: '_value', type: 'uint256' },
//       ],
//       name: 'approve',
//       outputs: [{ name: 'success', type: 'bool' }],
//       payable: false,
//       type: 'function',
//    },
//    {
//       constant: true,
//       inputs: [],
//       name: 'totalSupply',
//       outputs: [{ name: '', type: 'uint256' }],
//       payable: false,
//       type: 'function',
//    },
//    {
//       constant: true,
//       inputs: [],
//       name: 'batFund',
//       outputs: [{ name: '', type: 'uint256' }],
//       payable: false,
//       type: 'function',
//    },
//    {
//       constant: false,
//       inputs: [
//          { name: '_from', type: 'address' },
//          { name: '_to', type: 'address' },
//          { name: '_value', type: 'uint256' },
//       ],
//       name: 'transferFrom',
//       outputs: [{ name: 'success', type: 'bool' }],
//       payable: false,
//       type: 'function',
//    },
//    {
//       constant: true,
//       inputs: [],
//       name: 'decimals',
//       outputs: [{ name: '', type: 'uint256' }],
//       payable: false,
//       type: 'function',
//    },
//    {
//       constant: true,
//       inputs: [],
//       name: 'tokenExchangeRate',
//       outputs: [{ name: '', type: 'uint256' }],
//       payable: false,
//       type: 'function',
//    },
//    {
//       constant: false,
//       inputs: [],
//       name: 'finalize',
//       outputs: [],
//       payable: false,
//       type: 'function',
//    },
//    {
//       constant: true,
//       inputs: [],
//       name: 'version',
//       outputs: [{ name: '', type: 'string' }],
//       payable: false,
//       type: 'function',
//    },
//    {
//       constant: false,
//       inputs: [],
//       name: 'refund',
//       outputs: [],
//       payable: false,
//       type: 'function',
//    },
//    {
//       constant: true,
//       inputs: [],
//       name: 'tokenCreationCap',
//       outputs: [{ name: '', type: 'uint256' }],
//       payable: false,
//       type: 'function',
//    },
//    {
//       constant: true,
//       inputs: [{ name: '_owner', type: 'address' }],
//       name: 'balanceOf',
//       outputs: [{ name: 'balance', type: 'uint256' }],
//       payable: false,
//       type: 'function',
//    },
//    {
//       constant: true,
//       inputs: [],
//       name: 'isFinalized',
//       outputs: [{ name: '', type: 'bool' }],
//       payable: false,
//       type: 'function',
//    },
//    {
//       constant: true,
//       inputs: [],
//       name: 'fundingEndBlock',
//       outputs: [{ name: '', type: 'uint256' }],
//       payable: false,
//       type: 'function',
//    },
//    {
//       constant: true,
//       inputs: [],
//       name: 'symbol',
//       outputs: [{ name: '', type: 'string' }],
//       payable: false,
//       type: 'function',
//    },
//    {
//       constant: true,
//       inputs: [],
//       name: 'ethFundDeposit',
//       outputs: [{ name: '', type: 'address' }],
//       payable: false,
//       type: 'function',
//    },
//    {
//       constant: false,
//       inputs: [
//          { name: '_to', type: 'address' },
//          { name: '_value', type: 'uint256' },
//       ],
//       name: 'transfer',
//       outputs: [{ name: 'success', type: 'bool' }],
//       payable: false,
//       type: 'function',
//    },
//    {
//       constant: false,
//       inputs: [],
//       name: 'createTokens',
//       outputs: [],
//       payable: true,
//       type: 'function',
//    },
//    {
//       constant: true,
//       inputs: [],
//       name: 'tokenCreationMin',
//       outputs: [{ name: '', type: 'uint256' }],
//       payable: false,
//       type: 'function',
//    },
//    {
//       constant: true,
//       inputs: [],
//       name: 'fundingStartBlock',
//       outputs: [{ name: '', type: 'uint256' }],
//       payable: false,
//       type: 'function',
//    },
//    {
//       constant: true,
//       inputs: [
//          { name: '_owner', type: 'address' },
//          { name: '_spender', type: 'address' },
//       ],
//       name: 'allowance',
//       outputs: [{ name: 'remaining', type: 'uint256' }],
//       payable: false,
//       type: 'function',
//    },
//    {
//       inputs: [
//          { name: '_ethFundDeposit', type: 'address' },
//          { name: '_batFundDeposit', type: 'address' },
//          { name: '_fundingStartBlock', type: 'uint256' },
//          { name: '_fundingEndBlock', type: 'uint256' },
//       ],
//       payable: false,
//       type: 'constructor',
//    },
//    {
//       anonymous: false,
//       inputs: [
//          { indexed: true, name: '_to', type: 'address' },
//          { indexed: false, name: '_value', type: 'uint256' },
//       ],
//       name: 'LogRefund',
//       type: 'event',
//    },
//    {
//       anonymous: false,
//       inputs: [
//          { indexed: true, name: '_to', type: 'address' },
//          { indexed: false, name: '_value', type: 'uint256' },
//       ],
//       name: 'CreateBAT',
//       type: 'event',
//    },
//    {
//       anonymous: false,
//       inputs: [
//          { indexed: true, name: '_from', type: 'address' },
//          { indexed: true, name: '_to', type: 'address' },
//          { indexed: false, name: '_value', type: 'uint256' },
//       ],
//       name: 'Transfer',
//       type: 'event',
//    },
//    {
//       anonymous: false,
//       inputs: [
//          { indexed: true, name: '_owner', type: 'address' },
//          { indexed: true, name: '_spender', type: 'address' },
//          { indexed: false, name: '_value', type: 'uint256' },
//       ],
//       name: 'Approval',
//       type: 'event',
//    },
// ];

// let CAaddress = '0x0D8775F648430679A709E98d2b0Cb6250d2887EF';

// let contra = new web3.eth.Contract(ABI, CAaddress);
// // console.log(contra.methods);

// contra.methods.name().call((err, result) => {
//    console.log(result);
// });
// contra.methods.symbol().call((err, result) => {
//    console.log(result);
// });

// contra.methods.totalSupply().call((err, result) => {
//    console.log(result);
// });
