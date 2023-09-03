import React from 'react'
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Box } from '@mui/material';
import CardActions from '@mui/material/CardActions';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '65%',
    height: '35%',
    bgcolor: "background.paper",
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const Modalcomponent = (props) => {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <CardActions>
            <Button size="small" onClick={handleOpen}>View Details</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} style={{ display: 'flex', flexDirection: 'row' }}>
                    <Typography style={{ width: '30%', height: '100%' }}>
                        <img src={props.data.logo} style={{ height: '100%', width: '100%' }} alt="" />
                    </Typography>
                    <Typography variant="h6" component="h2" style={{ display: 'flex', flexDirection: 'column', width: '70%'}}>
                        <Typography id="modal-modal-title" variant="h6" component="h2" style={{  fontSize: '2rem', fontStyle: 'Ubuntu',marginLeft:'3%' }}>
                            {props.data.companyname}
                        </Typography>
                        <Typography  style={{ display: 'flex',height:'30%', flexDirection: 'row',marginTop:'5%',marginBottom:'5%'}} >
                            <Typography  style={{ display: 'flex', flexDirection: 'column',width:'50%',marginRight:'5%' }}>
                                <Typography style={{marginBottom:'2%'}}>
                                    <p style={{ display: 'inline', color: '#8b7f7f',marginRight:'10%' }}>Headquaters</p><p style={{ display: 'inline', color: 'black',fontWeight:'600' }}>{props.data.country}</p>
                                </Typography>
                                <Typography style={{ marginBottom:'2%'}}>
                                    <p style={{ display: 'inline', color: '#8b7f7f',marginRight:'25%' }}>Email</p><p style={{ display: 'inline', color: 'black',fontWeight:'600' }}>{props.data.email}</p>
                                </Typography>
                            </Typography>
                            <Typography style={{ display: 'flex', flexDirection: 'row'}} variant="h6" component="h2">
                                <Typography style={{marginRight:'5%'}}>
                                   <p style={{ color: '#8b7f7f',marginBottom:'2%',lineHeight:'0' }}>Website</p><p style={{  color: 'black',fontWeight:'500' }}>{props.data.website}</p>
                                </Typography>
                                <Typography>
                                   <p style={{ color: '#8b7f7f',marginBottom:'2%',lineHeight:'0' }}>Phone</p><p style={{  color: 'black',fontWeight:'500' }}>{props.data.phone}</p>
                                </Typography>
                            </Typography>
                        </Typography>
                        <Typography >
                            <p  style={{  color: '#8b7f7f',lineHeight:'0'}}>Description</p><p style={{height:'80%',textOverflow:'ellipsis', color: 'black'}}>{props.data.companydesc}</p>
                        </Typography>
                    </Typography>
                </Box>
            </Modal>
        </CardActions>
    )
}

export default Modalcomponent