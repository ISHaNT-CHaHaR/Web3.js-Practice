const Web3 = require('web3');

const Ether = new web3('./build/contracts/Ether.json')

const init = async() =>{

    const web3 = new Web3("http://127.0.0.1:9545/");
    const id = await web3.eth.net.getId();

    const deploy = Ether.networks[id];

    const contract = new web3.eth.contract(
        Ether.abi,
        deploy.address
    )

    const res = await contract.methods.getData().call();




}