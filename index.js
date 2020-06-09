// const Web3 = require('web3'); // web3 object
// //
// //
// //  When You initiate Web3 you need to initiate a provider object. that will help to connect to ethereum node
// // and ethereum node will connect to web 3.
// /*

// /////////////////////////               ////////////////////
// ////WEB3    /////Provider/   <----->   ////ETHEREUM NODE//// <-------> SMART CONTRACT
// /////////////////////////               ////////////////////

//  */

// //Actually we will set a method but behind the scene this method will call out provider
// //  and Web3 will connect

// // The reason behind this complexity is web3

// const customProvider = {
//    sendAsync: (payload, cb) => {
//       console.log('you called!');
//       console.log(payload);
//       cb(undefined, 100); // first argument is error.
//       // asume 100 to be the response of API.
//    }, // payload identify the API of ethereum we gonna call
// };
// const web3 = new Web3(window.web3.currentProvider); //  web3 instance

// //  connected to blockchain.
// //  here BEHIND the scene WEB3 is going to convert it into a provider
// //const provider = new Web3.providers.HttpProvider('127.0.0.1:8545'); // this is what actual function look like other than function.

// web3.eth
//    .getBlockNumber()

//    .then(() => console.log('done!'));

const Web3 = require('web3');

const MyContract = require('./build/contracts/MyContract.json');

const init = async () => {
   const web3 = new Web3('http://127.0.0.1:9545/');

   const id = await web3.eth.net.getId();
   const deployedNetwork = MyContract.networks[id];
   const contract = new web3.eth.Contract(
      MyContract.abi,
      deployedNetwork.address
   );
   //abi,
   //address optional.

   const result = await contract.methods.getData().call();

   console.log(result);
};

init();
