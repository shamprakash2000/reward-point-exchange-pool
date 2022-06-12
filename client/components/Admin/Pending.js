import { Card } from "@mui/material";
import { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import axios from "axios";

export default function Pending({props}){
const [loginInfo,setLoginInfo] = useState([]);
const [chainMates,setchainMates] = useState([]);
const [websiteData,setwebsiteData] = useState([]);
const [cardData,setCardData]=useState([]);
const [status,setStatus]=useState(false);
const {contract,setcoinSymbol}=useState('');

const approve = (contract,sitename)=>{
    const data={
        contractAddress:contract,
        sitename:sitename

    }
    //send to websitedata
    data={
        status:true,
        sitename:sitename
    }
    //Update to chainmates
    
    //reload the page
    

}
  //Company Name
  //Coin symbol
  //Coin Name
  //wallet Address
  //contract Address
  //status
  useEffect(()=>{
    axios.get('../api/getloginInfo').then((response)=>{
      setLoginInfo(response.data);
      console.log(response.data)
      
    })
    axios.get('../api/getChainmates').then((response)=>{
      setchainMates(response.data);

    })
     axios.get('../api/getwebsiteData').then((response)=>{
       setwebsiteData(response.data);

    })
  },[])

  useEffect(()=>{
      let Data = []
      loginInfo.map((item,i)=>{
          if(!item.status){
              websiteData.map((data,i)=>{
                  if(item.username == data.sitename){
                      let temp = {
                          sitename:data.sitename,
                          coinName:data.coinName,
                          coinSymbol:data.coinSymbol,
                          siteWalltet:data.siteWalltet,
                          status:item.status
                      }
                      console.log(temp)
                      Data.push(temp);
                  }
              })
          }
      })
      setCardData(Data);
  },[loginInfo,websiteData])
    return(
        <>
         <Grid container spacing={2}>
             {console.log(cardData)}
              {cardData.map((data,i)=>{
                  return(
                <Grid item xs={12}>
                 <Card sx={{
                        height:100
                    }}><center>
                        company name:<b>{data.sitename}</b> | coin:<b>{data.coinName}</b> |  Symbol:<b>{data.coinSymbol}</b> | Wallet Address:<b>{data.siteWalltet}</b><br>
                        </br>
                        <br></br>
                        <form>
                        <input id={data.coinName} type='text' style={{'width':'400px'}} placeholder="Enter Contract Address" required/>
                        
                        <input type="button" onClick={()=>approve( document.getElementById(data.coinName).value ,data.sitename)} value="Approve"/>
                        </form>
                        </center>
                    </Card>
                </Grid> 
                      
                  )

              })}
                       
            </Grid>
        </>
    )

}