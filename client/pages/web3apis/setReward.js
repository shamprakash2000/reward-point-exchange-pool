// const LIQUIDITY_ADDRESS = '0x792Ae3E0aF515346f52Ca078322E809847b7de34';
import { getContractbyName } from "../../lib/getContractbyName";
import swal from "sweetalert";
//this function transfers from wallet address- > to wallet address of reward(amount)
export const  setReward = async(web3,name,to,from,reward,cost=0)=>{
        getContractbyName(name,web3).then((contractInstance)=>{
            if(contractInstance){
                //purchasing produuct
                contractInstance.methods.transferFrom(to[0],from,cost).send({from:to[0]}).then((response)=>{
                        //giving reward
                        contractInstance.methods.transferFrom(from,to[0],reward).send({from:to[0]}).then((response)=>{
                            swal("Payment Sucessfull!",`Your Reward ${reward}${name} Credited`,'success').then(()=>{
                            window.location.reload(true);
                            });
                            }).catch((err)=>{
                                swal("Payment Failed!",``,'error').then(()=>{
                                     window.location.reload(true);
                                });
                            })
                }).
                catch((err)=>{
                    swal("Payment Failed!",``,'error').then(()=>{
                         window.location.reload(true);
                    });
                })

            }
        })
}
