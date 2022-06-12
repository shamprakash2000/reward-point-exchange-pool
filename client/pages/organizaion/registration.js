import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Web3Container from '../../lib/Web3Container';
import Er from '../../components/Er';
import { useRouter } from 'next/router';
import { Grid } from '@mui/material';
import { Paper } from '@mui/material';
import axios from 'axios';
import swal from 'sweetalert';



const Registration = ({accounts,web3})=>{
    let router = useRouter();
    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');

    const [id,setid]=useState(0);
    const [companyName,setcompanyName] = useState('');
    const [description,setdescription]=useState('');
    const [link,setlink]=useState('');
    const [sid,setssid]=useState('');
    const [sitename,setsitename]=useState('');
    const [coinName,setcoinName]=useState('');
    const [coinSymbol,setcoinSymbol]=useState('');
    const [inRs,setinRs]=useState(0);
    const [discountPerProduct,setdiscountPerProduct]=useState(0);
    const [siteWalltet,setsiteWalltet]=useState('');
    const [status,setStatus]=useState(false);

    const Register = ()=>{
        const loginInfo = {
            username:username,
            password:password,
            status:status
        }
        const chainmasterData = {
                id:id,
                companyName:companyName,
                description:description,
                link:link
        }
        const websiteData = {
        id:sid,
        sitename:sitename,
        coinName:coinName,
        coinSymbol:coinSymbol,
        oneAMEZinRS:inRs,
        discountPerProduct:discountPerProduct,
        siteWalltet:siteWalltet,
        contractAddress:"",
        products:[]
        }
        

        axios.post("../api/postloginInfo",loginInfo).then((response)=>{
              axios.post("../api/postChainmates",chainmasterData).then((response)=>{
                    axios.post("../api/postwebsiteData",websiteData).then((response)=>{
                       swal("Registation SucessFull",'','success');
                       router.push('./orglogin');
                    }).catch((err)=>{
                        swal("Registation Failed",``,'error').then(()=>{
                        });
                        
                    })
                }).catch(()=>{
                    swal("Registation Failed",``,'error');
                }).catch(()=>{
                    swal("Registation Failed",``,'error');
                })
            })

        console.log(loginInfo,chainmasterData,websiteData)

    }


    useEffect(()=>{
        let { username,password } = router.query;
         setUsername(username);
         setPassword(password);
    },[])
    
      const style = {
            'width':'600px'
    }
    return(
    
        <>
        
        <form>
            <center>Enter this carefully You cant change this later</center>
            <center>
            <Grid container style={{'margin-left':'250px'}}>
                <Paper  sx={{
                width:1000,
                height:500,
            }} ><center>
                <table style={{'margin-top':'100px'}}>
                    <tr>
                        <td>Company id</td>
                        <td>
                            <input onChange={e=>setid(parseInt(e.target.value))} style={style} type='number' min='1' placeholder='Enter Company id' required></input>
                        </td>
                   </tr>
                    <tr>
                          <td>Company Name</td>
                        <td>
                            <input onChange={e=>setcompanyName(e.target.value)} style={style} type='text' placeholder='Enter Company Name' required></input>
                        </td>
                   </tr>
                    <tr>
                        <td>Company Description</td>
                        <td>
                            <input onChange={e=>setdescription(e.target.value)} style={style} type='text' placeholder='Enter Company Description' required></input>
                        </td>
                   </tr>
                    <tr>
                        <td>Company Link</td>
                        <td>
                            <input onChange={e=>setlink(e.target.value)} style={style} type='text' placeholder='Enter Company Link' required></input>
                        </td>
                   </tr>
                   <tr>
                        <td>Site Name</td>
                        <td>
                            <input onChange={e=>setsitename(e.target.value)} style={style} type='text' placeholder='Enter Site Name' required></input>
                        </td>
                    </tr>
                    <tr>
                        <td>site id</td>
                        <td>
                            <input onChange={e=>setssid(e.target.value)} style={style} type='text' placeholder='Enter ID' required></input>
                        </td>
                    </tr>
                    <tr>
                        <td>Coin Name</td>
                        <td>
                            <input onChange={e=>setcoinName(e.target.value)} style={style} type='text' placeholder='Enter Coin Name' required></input>
                        </td>
                    </tr>
                    <tr> 
                        <td>Coin Symbol</td>
                        <td>
                            <input onChange={e=>setcoinSymbol(e.target.value)} style={style} type='text' placeholder='Enter Coin Symbol' required></input>
                        </td>
                    </tr>
                      <tr> 
                        <td>One coin in RS</td>
                        <td>
                            <input onChange={e=>setinRs(parseInt(e.target.value))} style={style} type='number' min='1' placeholder='Enter Coin value in RS' required></input>
                        </td>
                    </tr>
                    <tr> 
                        <td>Reward in percentage</td>
                        <td>
                            <input onChange={e=>setdiscountPerProduct(e.target.value/100)} style={style} type='number' min='0' placeholder='Reward in percentage(1-100)' required></input>
                        </td>
                    </tr>
                    <tr> 
                        <td>Wallet Address</td>
                        <td>
                            <input onChange={e=>setsiteWalltet(e.target.value)} style={style} type='text' placeholder='Enter Wallet Address' required></input>
                        </td>
                    </tr>
                    <br></br>
                    <tr>  <input onClick={()=>Register()} type="button" value="Submit" /></tr>
                </table>
                </center>
                </Paper>
            </Grid>
            </center>
        </form>
        </>
    )

}

export default () => (
  <Web3Container
    renderLoading={() => <div>Loading Accounts Page...</div>}
    render={({ web3,accounts }) => {
        return(      
        <>
        { accounts.length!=0 ? <Registration accounts={accounts} web3={web3}/>: <Er/>}
        </>
        )
    }}
  />
)