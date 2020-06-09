const Web3 = reqiuire('web3'); // web3 object
//
//
//  When You initiate Web3 you need to initiate a provider object. that will help to connect to ethereum node
// and ethereum node will connect to web 3.
/* 
    
/////////////////////////               //////////////////// 
////WEB3    /////Provider/   <----->   ////ETHEREUM NODE//// <-------> SMART CONTRACT  
/////////////////////////               ////////////////////



 */

//Actually we will set a method but behind the scene this method will call out provider
//  and Web3 will connect

// The reason behind this complexity is web3

const web3 = new Web3('127.0.0.1:8545'); //  web3 instance
//  connected to blockchain.
//  here BEHIND the scene WEB3 is going to convert it into a provider
const provider = new Web3.providers.HttpProvider('127.0.0.1:8545'); // this is what actual function look like other than function.

const customProvider = {
   sendAsync: (payload, cb) => {
      console.log('you called!');
      console.log(payload);
      cb(undefined, 100); // first argument is error.
      // asume 100 to be the response of API.
   }, // payload identify the API of ethereum we gonna call
};

web3.eth
   .getBlockNumber()

   .then(() => console.log('done!'));
