import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Web3Container from '../../lib/Web3Container';
import Er from '../../components/Er'
import {getContractbyName} from '../../lib/getContractbyName';
import axios from 'axios';

import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Approved from '../../components/Admin/Approved';
import Pending from '../../components/Admin/Pending';


const AdminDashBoard = ({accounts,web3})=>{
  
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
    return(
      <>
      <center><h1>Admin Dashboard</h1></center>
      <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Pending" {...a11yProps(0)} />
          <Tab label="Approved" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Pending/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Approved/>
      </TabPanel>
    </Box>
    </>
    )

}


  //Company Name
  //Coin symbol
  //Coin Name
  //wallet Address
  //contract Address
  //status
  // useEffect(()=>{
  //   axios.get('../api/getloginInfo').then((response)=>{
  //     setLoginInfo(response);
      
  //   })
  //   axios.get('../api/getChainmates').then((response)=>{
  //     setchainMates(response);

  //   })
  //    axios.get('../api/getwebsiteData').then((response)=>{
  //      setwebsiteData(response);

  //   })
  // },[])


  function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}




export default () => (
  <Web3Container
    renderLoading={() => <div>Loading Accounts Page...</div>}
    render={({ web3,accounts }) => {
        return(      
        <>
        { accounts.length!=0 ? <AdminDashBoard accounts={accounts} web3={web3}/>: <Er/>}
        </>
        
        )
    }}
  />
)