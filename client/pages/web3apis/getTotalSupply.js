import { getContractbyName } from "../../lib/getContractbyName";

export const  getTotalSupply = async(web3,accounts,name)=>{
    let response = await getContractbyName(name,web3);
    console.log(response)
    let data = await response.methods.totalSupply().call({from:accounts[0]})
    return data;
}