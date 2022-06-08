
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Web3Container from '../lib/Web3Container';
import Er from '../components/Er'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';


export default () => {
    const [data,setData] = useState('');
    const [metamask,setmetamask] = useState(false);

    useEffect(()=>{
      if (typeof window.ethereum !== 'undefined') {
        setmetamask(true)
      }
    },[])

    return(
      <>
      <center>
      <h2>Points Exchange Pool Using Permissioned Block chain</h2>
      <h4>How to You want to login?</h4>
      <Box component="span" sx={{ p: 2, border: '1px dashed grey' }}>
      <ButtonGroup variant="contained" aria-label="outlined primary button group">
      <Link href='./user/userdashboard'><Button>User</Button></Link>
      <Link href='./organizaion/orglogin'><Button>Organization</Button></Link>
      <Link href='./admin/adminLogin'><Button>Admin</Button></Link>
      </ButtonGroup>
      </Box>
      {metamask?<h3>Metamask is installed</h3>:<h3>Metamask is not installed <br/><a href='https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en'>Install Here</a></h3>}
      <h4>The blockchain is the financial challenge of our time. It is going to change the way that our financial world operates.</h4>
      </center>
      <br/>
      
      </>

    )
}