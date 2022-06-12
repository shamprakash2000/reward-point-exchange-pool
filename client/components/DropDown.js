import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Grid } from '@mui/material';
import { Card } from '@mui/material';
import { CardContent } from '@mui/material';
import { Typography } from '@mui/material';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import { swapToken } from '../pages/web3apis/swapToken';
import { CircularProgress } from '@mui/material';
export default function Dropdown({allToken,coinName,accounts,web3,reward,Balances}) {

function transferFrom(FromContarct,ToContract,amount,from,web3){
    if(From && amount){
    setloader(true);
    swapToken(web3,FromContarct,ToContract,from,amount);
}else{
    alert('Enter All fields')
}

        
}

  const [From, setFrom] = React.useState('');
  const [tokens,setTokens] = React.useState([]);
  const [amount,setAmount] = React.useState([]);
  const [load,setloader] =  React.useState(false);

  React.useEffect(()=>{
      let Tokens = [];
      Object.keys(allToken).map((item)=>{
          Tokens.push(allToken[item]);
          setTokens(Tokens);
      })
  },[]);

  const handleChange = (event) => {
    setFrom(event.target.value);
  };

  return (
      <>
      {console.log(Balances,allToken)}
      {load?<><CircularProgress color="secondary" /><p>Please Wait! Swapping...</p></>:<></>}
           <Grid container>
                <Grid item xs={4}>
                        <Box sx={{ minWidth: 120 }}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">From</InputLabel>
                                <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={From}
                                label="From"
                                onChange={handleChange}
                                >
                               {tokens.map((item,i)=>{
                                   if(item!=coinName)
                                   return(
                                       <MenuItem value={item}>{item}</MenuItem>
                                   )
                               })}
                                
                                </Select>
                            </FormControl>
                            </Box>
                </Grid>
                <Grid item xs={8}>
                    <Card>
                        <CardContent>
                            <Typography>
                               To {coinName}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={4}>
                    <TextField onChange={e=>setAmount(e.target.value)} type='number' id="outlined-basic" label="Enter Amount" variant="outlined" required />
                </Grid>
                <Grid item xs={8}>
                    <Card>
                        <CardContent>
                            <Typography>
                               {amount} {coinName}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                {/* <Grid item xs={12}>
                        {tokens.map((item,i)=>{
                                   if(item!=coinName)
                                   return(
                                       <p value={item}>{item} : {Balances[i]}</p>
                                   )
                               })}
                </Grid> */}
            </Grid>
             <Button onClick={()=>transferFrom(From,coinName,amount,accounts[0],web3)}>Swap</Button>
    </>
  );
}
