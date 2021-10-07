const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const bytecode = require('./compile').evm.bytecode.object;
const { abi } = require('./compile');

const provider = new HDWalletProvider (
    "right fluid employ turtle quarter scene voice wreck silver master butter legal",
    "https://rinkeby.infura.io/v3/4a6ddb668c1b4c9d83d7149055df904e"
)

const web3 = new Web3(provider)

const deploy = async () => {
    const accounts = await web3.eth.getAccounts()

    console.log("Attempting to deploy from the account: " + accounts[0])
    const result = await new web3.eth.Contract(abi)
        .deploy({ data: bytecode})
        .send({ gas: 1000000, from: accounts[0] })

        console.log("Contract deployed to: " + result.options.address)
}
deploy()