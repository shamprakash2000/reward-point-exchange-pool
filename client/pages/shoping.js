import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Web3Container from '../lib/Web3Container'
import axios from 'axios';
import { Grid } from '@mui/material';
import { Alert } from '@mui/material';
import { Button } from '@mui/material';
import { useRouter } from 'next/router';
import RecipeReviewCard from '../components/ShopingCard';
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
function Shoping({ accounts,web3 }) {
  const [ShopingData,setShopingData] = useState({});
  const [Products,setProducts] = useState([]);
  let router = useRouter();

  useEffect(()=>{
      
      let { name } = router.query;
      console.log(name);

      axios.get('./api/getwebsiteData'). then((response)=>{
          //convert response to js obj
          response.data.map((item,i)=>{
              if(item.sitename == name){
                  setShopingData(response.data[i]);
                  setProducts(response.data[i].products)
                  
              }
          })
          
      })
  },[])
  return(
      <>
      <Grid container> 
        <Grid item xs={12} 
           sx={{ width: 500,
           height: 200,
           backgroundColor:'#f2f4f6'}}>
              <center><h1>{ShopingData.sitename}</h1></center>
              <center><h3></h3></center>
               <Alert style={{'paddingLeft':'500px'}} severity="info">Coin Name:<b>{ShopingData.coinName}</b> and Coin Symbol:<b>{ShopingData.coinSymbol}</b><Button onClick={()=>openmetamask()} style={{'marginLeft':'60px'}} variant="outlined" color="error">Open Metamask</Button></Alert>
        </Grid>
        <Grid  item xs={12}>
             <center><h1>Products</h1></center>
             <Grid container spacing={2}>
                   {Products.map((item)=>{
                       return(
                           <>
                           <Grid item xs={3}>
                           <RecipeReviewCard props={item} shopingsitedata={ShopingData} isPaymentPage={false}/>
                           </Grid>
                           </>
                       )
                    })}
            </Grid>
        </Grid>
    </Grid>
      </>
  );
}

export default () => (
  <Web3Container
    renderLoading={() => <div>Loading Accounts Page...</div>}
    render={({ web3,accounts }) => {
        return(      
        <>
        { accounts.length!=0 ? <Shoping accounts={accounts} web3={web3}/>: <Er/>}
        </>
        )
    }}
  />
)
