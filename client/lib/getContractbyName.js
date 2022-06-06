import SimpleStorage from '../../build/contracts/SimpleStorage.json'
import NewCoin from '../../build/contracts/NewCoin.json'

import getContract from './getContract'


export const  getContractbyName = async(name,web3) => {
    console.log(name,web3.eth.net.getId());
    switch(name){
        case "SimpleStorage":await getContract(web3,SimpleStorage).then((response)=>{
            return response;
        });
        case "NewCoin": return await getContract(web3,NewCoin).then((response)=>{
            return response;
        });
    }
} 

