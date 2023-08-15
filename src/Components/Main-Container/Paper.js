import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import array from './Data';


export default function Paper() {
    const dataarray = array;
    return (
        <div style={{ display: 'grid', gridTemplateColumns: '30% 30% 30%', margin: '7% 0% 10% 12%' }}>
            {dataarray.map((data) => (
                <Card sx={{ maxWidth: 345, height:'325px',backgroundColor:'#d6d6d8b3' }} style={{ margin: '20px 0' }}>
                    <CardMedia sx={{ height: 140 }} >
                        <img src={data.imgURL} alt='' style={{ height: '120px', width: '45%',marginTop:'10px' }} />
                    </CardMedia>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {data.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" >
                            {data.description}
                        </Typography>
                    </CardContent>
                </Card>

            ))}
        </div>

    );
}