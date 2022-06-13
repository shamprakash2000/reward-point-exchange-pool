import { Card } from "@mui/material";
import { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import axios from "axios";

import { db } from "../../config/firebase";
import { collection,getDocs,updateDoc,doc } from "firebase/firestore";

export default function Pending({props}){
const [loginInfo,setLoginInfo] = useState([]);
const [chainMates,setchainMates] = useState([]);
const [websiteData,setwebsiteData] = useState([]);
const [cardData,setCardData]=useState([]);
const [status,setStatus]=useState(false);
const {contract,setcoinSymbol}=useState('');

const approve = async (contract,logid,webid,sitename)=>{
  
    console.log(logid,webid,status);
    const login={
        status:true
    }
    console.log(login)
    chainMates.map(async(item)=>{
    if(item.companyName == sitename){
        await updateDoc(doc(db,"chainmaster",item.objid),login)
    }
   })
    await updateDoc(doc(db,"loginInfo",logid),login)
 
    
     const website={
        contractAddress:contract
    }
    //send to websitedata
    await updateDoc(doc(db,"websiteData",webid),website)
    //Update to chainmates
    
    //reload the page
     window.location.reload(true);
    

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
                  if(item.username == data.sitename ){
                      let temp = {
                          sitename:data.sitename,
                          coinName:data.coinName,
                          coinSymbol:data.coinSymbol,
                          siteWalltet:data.siteWalltet,
                          status:item.status,
                          logid:item.objid,
                          webid:data.objid
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
                        <input id={data.webid} type='text' style={{'width':'400px'}} placeholder="Enter Contract Address" required/>
                        
                        <input type="button" onClick={()=>approve( document.getElementById(data.webid).value , data.logid, data.webid,data.sitename)} value="Approve"/>
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