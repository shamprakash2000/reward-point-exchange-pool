import SimpleStorage from '../../build/contracts/SimpleStorage.json'
import NewCoin from '../../build/contracts/NewCoin.json'
// import CoinManager from '../../build/contracts/CoinManager.json'
import Token from '../../build/contracts/Token.json'

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
        case "CoinManager": return await getContract(web3,CoinManager).then((response)=>{
            return response;
        });
        case "Token": return await getContract(web3,Token).then((response)=>{
            return response;
        });
    }
} 

