import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Web3Container from '../../lib/Web3Container';
import Er from '../../components/Er'
import {getContractbyName} from '../../lib/getContractbyName';
import {useRouter} from 'next/router'
import axios from 'axios';
import { getTotalSupply } from '../web3apis/getTotalSupply';
import { Button } from '@mui/material';

const OrgDashBoard = ({accounts,web3})=>{
  function logout(){
    router.back();
  }
  let router = useRouter();
  const [orgData,setOrgData] = useState({});
  const [totalSupply,settotalSupply] = useState(0);

  const data = 1;
  useEffect(async()=>{
    let { name } = router.query;
    const response = await axios.get('../api/getwebsiteData')
    response.data.map(async(item)=>{
      if(item.sitename == name ){
        setOrgData(item);
        const data = await getTotalSupply(web3,accounts,item.coinName)
        settotalSupply(data)
      }
    })
  },[])

    return(
        <>
        {console.log(orgData)}
        <center><h1>Organzation Dashboard</h1></center>
      
        <center>
          <table>
            <tr>
              <td>Site name</td>
              <td>{orgData.sitename}</td>
            </tr>
             <tr>
              <td>Coin name</td>
              <td>{orgData.coinName}</td>
            </tr>
            <tr>
              <td>Coin Symbol</td>
              <td>{orgData.coinSymbol}</td>
            </tr>
            <tr>
              <td>My Wallet</td>
              <td>{orgData.siteWalltet}</td>
            </tr>
             <tr>
              <td>My Contract</td>
              <td>{orgData.contractAddress}</td>
            </tr>
             <tr>
              <td>Total Supply</td>
              <td>{totalSupply}</td>
            </tr>
            <center><Button onClick={()=>logout()}>Logout</Button></center>


          </table>
        </center>


          
        </>
    )

}
export default () => (
  <Web3Container
    renderLoading={() => <div>Loading Accounts Page...</div>}
    render={({ web3,accounts }) => {
        return(      
        <>
        { accounts.length!=0 ? <OrgDashBoard accounts={accounts} web3={web3}/>: <Er/>}
        </>
        
        )
    }}
  />
)