import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Web3Container from '../lib/Web3Container'
import axios from 'axios';
import { Grid } from '@mui/material';
import { Alert } from '@mui/material';
import { Button } from '@mui/material';
import { useRouter } from 'next/router';
import RecipeReviewCard from '../components/ShopingCard';
import { Card } from '@mui/material';
import { CardHeader } from '@mui/material';
import { CardContent } from '@mui/material';
import { Typography } from '@mui/material';
import { getBalance } from './web3apis/getBalence';
// import WalletDetails from '../components/WalletDetails.JS';
import PaymentOptions from '../components/PaymentOprions';
function openmetamask(){
  ethereum
    .request({ method: 'eth_requestAccounts' })

    .then((handleAccountsChanged)=>{
  window.location.reload(true);
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

function Payment({ accounts,web3 }) {
  const [ProductData,setProductData] = useState([]);
  const [Tokens,setTokens] = useState({});
  const [coinName,setCoinName] = useState('');
  const [siteWalltet,setsiteWallet]=useState();
  const [coinSymbol,setcoinSymbol] = useState('');
  const [discount,setDiscount] = useState(0);
  const [siteData,setSiteData] = useState({});
  const [productId,setProductId]=useState();
  const [Balance,setBalance] =useState(0);
  const [contractAddress,setcontractAddress]=useState(0);
  const [totalBalance,settotalBalanece] = useState(0);
  const [Balances,setbalances]=useState([]);
  let router = useRouter();

  useEffect(()=>{
      let allToken = {};
      let { siteid,productid } = router.query;
      axios.get('./api/getwebsiteData'). then((response)=>{
          //convert response to js obj
          response.data.map((item,i)=>{
              if(item.id == siteid){
                  console.log("setting props")
                  setSiteData(item);
                  setCoinName(item.coinName);
                  setcoinSymbol(item.coinSymbol);
                  setDiscount(item.discountPerProduct);
                  setsiteWallet(item.siteWalltet); 
                  setProductData(item.products[productid-1]);
                  setcontractAddress(item.contractAddress);
              }
              allToken[item.coinSymbol]=item.coinName;
          })
          setTokens(allToken);
          
     
          
      })
      //API for getting list of token and symbol

      //getBalence
      
  },[])
   let TotalBalence=0;
  useEffect(()=>{
    console.log("non",coinName)
         getBalance(web3,accounts,coinName).then((response)=>{
          setBalance(response)
      })   
  },[coinName])

    useEffect(()=>{
     let TotalBalence=0;
     let balances=[];
     Object.keys(Tokens).map((item)=>{
         getBalance(web3,accounts,Tokens[item]).then((response)=>{
               TotalBalence = TotalBalence + response ;
                balances.push(response);
                settotalBalanece(TotalBalence);
                setbalances(balances);
         })
     })    
  },[Tokens])

  useEffect(()=>{
    settotalBalanece(totalBalance)
    console.log(totalBalance);
  },[totalBalance])

  return(
      <>
      {console.log(Tokens,siteWalltet,ProductData,coinName)}
      <Grid container spacing={2}>
        <Grid item xs={3} >
          <>
          <RecipeReviewCard 
           props={ProductData} shopingsitedata={siteData} isPaymentPage={true} />
           <Card style={{'margin-top':'10px'}}>
             <CardContent>
               <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                <h3><center> Wallet Details</center></h3>
                <h4>Account:</h4>
                <h5>{accounts[0]}</h5>
                <h4>contract Address:</h4>
                <h5>{contractAddress}</h5>
                <h4>coinname:{coinName} coinSymbol:{coinSymbol}</h4>
                <h4>Balence:{Balance}</h4>
                <center><Button onClick={()=>openmetamask()} style={{'marginLeft':'60px'}} variant="outlined" color="error">Refresh</Button></center>
               </Typography>
             </CardContent>
           </Card>
           </>
        </Grid>
        <Grid item xs={7}>
          <Card sx={{
            width:1200,
            height:650
          }}>
            <CardContent>
              <center><Typography><h1>Payment</h1></Typography></center>
               <PaymentOptions reward={discount} Balance={Balance} ProductData={ProductData} allToken={Tokens} totalBalance={totalBalance} web3={web3} accounts={accounts} coinName={coinName} siteWalltet={siteWalltet} Balances={Balances}/>
            </CardContent>
          </Card>

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
        { accounts.length!=0 ? <Payment accounts={accounts} web3={web3}/>: <Er/>}
        </>
        )
    }}
  />
)
