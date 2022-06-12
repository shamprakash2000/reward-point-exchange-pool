import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { useRouter } from 'next/router';


export default function RecipeReviewCard({props,shopingsitedata,isPaymentPage}) {
    let router = useRouter();
    function paymentPage(webdata,productId){
        router.push(`/payment?siteid=${webdata.id}&productid=${productId}`)
  }
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.productName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.productdescription}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {isPaymentPage?<Button>{props.costInRS} ₹</Button>:<Button onClick={()=>paymentPage(shopingsitedata,props.id)} size="small" color="primary">
          Buy at ₹{props.costInRS}
        </Button>}
      </CardActions>
    </Card>
  );
}
