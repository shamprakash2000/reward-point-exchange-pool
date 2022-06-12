
import { getContractbyName } from "../../lib/getContractbyName";

export const  getBalance = async(web3,accounts,name)=>{
       console.log(name,web3);
       let response = await getContractbyName(name,web3);
       try{
       let balance =await response.methods.balanceOf(accounts[0]).call({ from:accounts[0]})
       return parseFloat(balance);
       }catch(err){

       }
       
}