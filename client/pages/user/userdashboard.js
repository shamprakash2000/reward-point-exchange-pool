import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Web3Container from '../../lib/Web3Container';
import Er from '../../components/Er'
import {getContractbyName} from '../../lib/getContractbyName';
import { Grid } from '@mui/material';
import { Paper } from '@mui/material';
import { Alert } from '@mui/material';
import { Button } from '@mui/material';
import MultiActionAreaCard from '../../components/Card';
import { db } from "../../config/firebase";
import { collection,getDocs, } from "firebase/firestore";
const axios = require('axios');

 const chainmasterdata = collection(db,"chainmaster");
 function openmetamask(){
  ethereum
    .request({ method: 'eth_requestAccounts' })
    .then((handleAccountsChanged)=>{

    })
    .catch((error) => {
      if (error.code === 4001) {
        // EIP-1193 userRejectedRequest error
        console.log('Please connect to MetaMask.');
      } else {
        console.error(error);
      }
    });
}
const UserDashBoard = ({accounts,web3})=>{
   const [chainmatesdata,setchainmatesdata] = useState([]);
   const [logininfo,setloginInfo] = useState([]);
   useEffect(()=>{
     axios.get('../api/getChainmates').then((response)=>{
       console.log(response);
       //convert JSON to JS object
       setchainmatesdata(response.data);
     })

    
   },[])

   
    return(
        <>
        <Grid container> 
          <Grid item xs={12} 
           sx={{ width: 500,
           height: 200,
           backgroundColor:'#f2f4f6'}}>
              <center><h3>Welcome🙏, Decentralized Web awaits👋</h3></center>
              <Alert style={{'paddingLeft':'300px'}} severity="info">Your wallet Id is:<b>{accounts[0]}</b><Button onClick={()=>openmetamask()} style={{'marginLeft':'60px'}} variant="outlined" color="error">Open Metamask</Button></Alert>
          </Grid>
           <Grid  item xs={12} spacing={2}>
             <center><h1>Our ChainMates</h1></center>
             <Grid container spacing={2}>
               {chainmatesdata.map((item,i)=>{
                if(item.status){
                 return(
                  <Grid xs={3}>
                    <MultiActionAreaCard props={item}/>
                 </Grid>
                 )
                }

               })}
               
               
            </Grid>
          </Grid>
        </Grid>
        </>
    )
}


export default () => (
  <>
  <Web3Container
    renderLoading={() => <div>Loading Page...</div>}
    render={({ web3,accounts }) => {
        return(  
        <>
        { accounts.length!=0 ? <UserDashBoard accounts={accounts} web3={web3}/>: <Er/>}
        </>
        )
    }}
  />
  </>
)