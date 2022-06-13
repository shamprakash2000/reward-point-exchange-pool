import { getContractbyName } from "../../lib/getContractbyName";

export const  Authentication = async(web3,accounts,username,password)=>{
    console.log(username,password,accounts[0])
    let response = await getContractbyName("OrganizationLogin",web3);
    console.log(response)
    let data = await response.methods.login(username,password).call({from:accounts[0]})
    return data;
}