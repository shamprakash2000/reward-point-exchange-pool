import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Button, Card } from '@mui/material';
import Swap from './Swap';
import { getBalance } from '../pages/web3apis/getBalence';
import swal from 'sweetalert';
import { setReward } from '../pages/web3apis/setReward';
import { CircularProgress } from '@mui/material';


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

export default function PaymentOptions({Balance,ProductData,allToken,web3,accounts,coinName,totalBalance,reward,siteWalltet,Balances}) {
  const [value, setValue] = React.useState(0);
  const [load,setloader]=React.useState(false);

  const payment = (paymentType,web3,to,name,reward,from,cost)=>{
  console.log(to,name,reward,from,cost);

      if(paymentType=='UPI'){
        reward =parseInt(reward*cost);
        setloader(true);
        setReward(web3,name,to,from,reward);
      }
      else
      {
        let cutoff = 3/4;
        reward =parseInt(reward*cutoff*cost);
        setloader(true);
        setReward(web3,name,to,from,reward,cost);
      }

}


  
 

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
      <>
    {load?<><CircularProgress color="secondary" /><p>Please Wait! Payment processing...</p></>:<></>}
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="UPI/Card" {...a11yProps(0)} />
          <Tab label="Token" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
       <Button onClick={()=>payment('UPI',web3,accounts,coinName,reward,siteWalltet,ProductData.costInRS)}>Pay</Button>
      </TabPanel>
      <TabPanel value={value} index={1}>
       <h4>Balance:{Balance}</h4>
       {Balance>=ProductData.costInRS?<Button onClick={()=>payment('Token',web3,accounts,coinName,reward,siteWalltet,ProductData.costInRS)}>Pay</Button>:<Swap reward={reward} totalBalance={totalBalance} cost={ProductData.costInRS} allToken={allToken} coinName={coinName} accounts={accounts} web3={web3} Balances={Balances}></Swap>}
      </TabPanel>
    </Box>
    </>
  );
}
