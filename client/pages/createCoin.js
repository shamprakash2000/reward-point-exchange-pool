import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Web3Container from '../lib/Web3Container';
import Er from '../components/Er'
import { Button } from '@mui/material';
import {getContractbyName} from '../lib/getContractbyName';

import {ConvertStringToHex} from '../lib/Helper';

// import { deploy } from '../lib/deployer';

// const NewCoin = require('../lib/ScripttedDeployement/NewCoin');

 function createCoin(web3,accounts,name,symbol,amount){
     getContractbyName('NewCoin',web3).then( (respone)=> {
       console.log(accounts[0]);
      respone.methods.create(name,symbol,amount).send({ from:accounts[0]}).then((respone)=>{
        console.log(respone.events[0].address)
      });
    })
   
} 

function getBalance(web3,accounts,name){
     getContractbyName('NewCoin',web3).then((respone)=>{
       console.log(accounts[0])
       respone.methods.checkBalance(accounts[0],name).call({ from:accounts[0]}).then((respone)=>{
              console.log(respone);

          })
    })
}

function getSymobl(web3,accounts,name){
   getContractbyName('NewCoin',web3).then((response)=>{
     response.methods.checkSymobol(name).call({from:accounts[0]}).then((response)=>{
       console.log(response);
     })
   })
}

function transfer(web3,accounts,from,to,amount,name){
   getContractbyName('NewCoin',web3).then((response)=>{;
      response.methods.transferFromAcc(from,to,amount,name).send({from:accounts[0]}).then((response)=>{
       console.log(response);
     })
   })
}


const Createcoin = ({accounts,web3})=>{
  return(
      <>
       <Button onClick={()=>createCoin(web3,accounts,"Coin","CIN",100000)}>CreateCoin</Button>
       <Button onClick={()=>getBalance(web3,accounts,"Coin")}>getBalance</Button>
       <Button onClick={()=>getSymobl(web3,accounts,"Coin")}>getSymobol</Button>
       <Button onClick={()=>transfer(web3,accounts,"0x232dD8763a68937dDFc42DA4D7C92826D29Fa449","0x792Ae3E0aF515346f52Ca078322E809847b7de34",1,"Coin")}>Transfer</Button>
      </>
  )
}





export default () => (
  <Web3Container
    renderLoading={() => <div>Loading Accounts Page...</div>}
    render={({ web3,accounts }) => {
        return(      
        <>
        { accounts.length!=0 ? <Createcoin accounts={accounts} web3={web3}/>: <Er/>}
        </>
        )
    }}
  />
)