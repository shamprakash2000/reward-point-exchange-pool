import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function MultiActionAreaCard({posts}) {
  return (
      <>
      <Card container>
          {console.log(posts)}

      </Card>
    {/* <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={props.cardData.logo}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.cardData.companyName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
             {props.cardData.decription}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Shop Now
        </Button>
      </CardActions>
    </Card>
    {console.log(props.cardData)} */}
    </>
  );
}
