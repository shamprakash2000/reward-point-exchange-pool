import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { useRouter } from 'next/router';
//logo scrs
import amazon from "../asset/amazon.jpg"
import flipcart from "../asset/FlipKart.jpg"
import Myntra from "../asset/Myntra.png"
import Reliance from "../asset/Reliance.png"


import Image from 'next/image';


export default function MultiActionAreaCard({props}) {
  let images= ["",amazon,flipcart,Myntra,Reliance];
  let router = useRouter();
  const shopfromSite=(link,name)=>{
    router.push(`/shoping?name=${name}`);
  }
  return (
      <>
      {console.log(props)}
    <Card sx={{ height:500,Width: 345,margin:1 }}>
       <Image src={images[props.id]}  objectFit="cover" width={500} height={350}/>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.companyName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
             {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button onClick={()=>shopfromSite(props.link,props.companyName)} size="small" color="primary">
          Shop Now
        </Button>
      </CardActions>
    </Card>
    </>
  );
}
