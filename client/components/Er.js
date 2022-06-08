import { Button } from '@mui/material';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';


function connectToMetaMask(){
   console.log("clicked")
   ethereum.request({ method: "eth_requestAccounts" });   

}
function refreshPage(){
   window.location.reload(true);
} 


const Er = ()=>{
    return(
      <>
       <Stack sx={{ width: '100%' }} spacing={2}>
       <Alert severity="error">You are not connected to metaMak</Alert>
      </Stack>
      <center><Button onClick={()=>connectToMetaMask()}>Connect To MetaMask</Button></center>
      <cnter><p> <marquee>After Connection refresh the page   </marquee></p></cnter>
      <center><Button onClick={refreshPage}>Click to reload!</Button></center>
      </>
    )
}

export default Er;