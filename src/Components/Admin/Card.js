import * as React from 'react'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { Button, CardActionArea, CardActions } from '@mui/material';


export default function MUICard(props) {
    return (
        <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="250"
            width="350"
            image={props.image}
            alt=""
          />
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
           {props.name}
          </Button>
        </CardActions>
      </Card>
    );
  }