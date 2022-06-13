import { getContractbyName } from "../../lib/getContractbyName";

export const  signupUser = async(web3,accounts,username,password)=>{
    let response = await getContractbyName("OrganizationLogin",web3);
    let data = await response.methods.add(username,password).send({from:accounts[0]});
}