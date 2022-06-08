import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

import {useNavigate} from 'react-router-dom';
import { useHistory } from "react-router-dom";
import { useState } from 'react';
import {useRouter} from 'next/router'





export default function Login({loginType}) {
    const login = (username,password,loginType,router) =>{
    let sucess = false;
     
    if(username && password){
        console.log(username,password)
         if(loginType=="Admin"){
             if(username=="Admin" && password == "blockchain"){
                sucess=true;        
                router.push("./admindashboard");
             }
         }
         else{
             //logic for organization verification
             if(username && password){
                 sucess=true;
                 router.push("./orgdashboard");
             }
         }
        if(sucess){
            alert('login sucessfull');
        }
        else{
            alert('invalid username / password')
        }

    }
    else{
        alert('enter all fiels')
    }
    
}

const signup=(username,password)=>{
      let sucess = false;
     
    if(username && password){
        console.log(username,password)

    }
    else{
        alert('enter all fiels')
    }
}


const [username, setUsername] = useState('');
const [password, setPassword] = useState('');
let router=useRouter()
const style={
        'margin-top':'100px',
}
  return (
    <center>
    <Box
    style={style}
      sx={{
        width: 500,
        height: 300,
        backgroundColor: '#b8ffef',
        '&:hover': {
          backgroundColor: '#b8ffef',
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    >
        <h2>{loginType}</h2>
        <TextField
          onChange={event => setUsername(event.target.value)}
          sx={{width:350}}
          style={{'margin-top':'6px'}}
          required
          id="outlined-required"
          label="User name"
          defaultValue=""
        />

        <TextField
          onChange={event => setPassword(event.target.value)}
          sx={{width:350}}
          style={{'margin-top':'6px'}}
          required
          id="outlined-required"
          label="Password"
          defaultValue=""
        />
        <br/>

        <Button onClick={()=>login(username,password,loginType,router)} style={{'margin-top':'10px'}} variant="outlined" color="error">
          Login
        </Button >
        <br/>
        {loginType=="Admin"?<></>:  <Button onClick={()=>signup(username,password)} style={{'margin-top':'6px'}} variant="outlined" color="error">
          Signin
        </Button>}

    </Box>
    </center>
  );
}
