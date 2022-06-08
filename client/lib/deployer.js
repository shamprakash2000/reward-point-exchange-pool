const solc = require("../node_modules/solc");
export const  deploy = (web3,accounts,contract,name,symbol,amount) => {

var input = contract;
var output = solc.compile(input, 1);

for (var contractName in output.contracts) {


    var bc = output.contracts[contractName].bytecode;
    var abi =  output.contracts[contractName].abi;


    var contact = web3.eth.contract(abi).new(name,symbol,amount,{from: web3.eth.accounts[0], data: bc});


    if (typeof contact.address !== 'undefined') {
         console.log('Contract mined! address: ' + contact.address + ' transactionHash: ' + contact.transactionHash);
    }

}
}