const LIQUIDITY_ADDRESS = '0x792Ae3E0aF515346f52Ca078322E809847b7de34';
import { getContractbyName } from "../../lib/getContractbyName";

export const  swapToken = async(web3,cointosend,coinrecive,from,amount)=>{
      let  contractInstanceforSend= await getContractbyName(cointosend,web3);
      let  contractInstanceforRecive= await getContractbyName(coinrecive,web3);

      if(contractInstanceforSend && contractInstanceforRecive){
           contractInstanceforSend.methods.transferFrom(from,LIQUIDITY_ADDRESS,amount).send({from:from}).then((response)=>{
            contractInstanceforRecive.methods.transferFrom(LIQUIDITY_ADDRESS,from,amount).send({from:from}).then((response)=>{
                    swal("Coin Swapped Sucessfully!",``,'success').then(()=>{
                        window.location.reload(true);
                    })
                }).catch((err)=>{
                    swal("Transcation Failed!",``,'error').then(()=>{
                         window.location.reload(true);
                    })
                });
            }).catch((err)=>{
                swal("Transcation Failed!",``,'error').then(()=>{
                     window.location.reload(true);
                })
            });
      }
      else
        return false;
}
