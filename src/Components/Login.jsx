import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {makeStyles} from '@mui/styles';
import Alert from '@mui/material/Alert';
import { Button, CardActions } from '@mui/material';
import TextField from '@mui/material/TextField';
import './Login.css';
import insta from '../Assets/Instagram.jpg';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import {Link} from 'react-router-dom';

const useStyles = makeStyles({
    text1:{
        display:'flex', 
        justifyContent:'center',
        textAlign : 'center',
        color : 'grey'
    },
    text2:{
        display:'flex', 
        justifyContent:'center',
    },
    card2:{
        marginTop:'4px',
        width:'22vw',
        height:'6vh'
    }
})

export default function Login() {

  const classes = useStyles()

  return (
    <div className='login-wrapper'>
        <div className='login-card'>
            <Card sx={{ maxWidth: 345 }} variant="outlined" >
                    <div className='insta-logo'>
                        <img src={insta} alt="logo"/>
                    </div>
                <CardContent>
                <Typography className={classes.text1} variant="subtitle1">
                    Sign-Up
                </Typography>
                {true && <Alert severity="error">This is an error alert — check it out!</Alert>}
                <TextField id="outlined-basic" label="E-mail" variant="outlined" fullWidth={true} margin="dense" size='small' />
                <TextField id="outlined-basic" label="Password" variant="outlined" fullWidth={true} margin="dense" size='small' />
                <TextField id="outlined-basic" label="Full Name" variant="outlined" fullWidth={true} margin="dense" size='small' />
                <Button size="small" color="secondary" fullWidth={true} variant="outlined" margin="dense" startIcon={<CloudUploadIcon/>} component="label" >
                   Upload Profile Image
                   <input type="file" accept='image/*' hidden/>
                </Button>
                </CardContent>
            <CardActions>
                <Button  color="primary" fullWidth={true} variant="contained" >
                Sign Up
                </Button>
            </CardActions>
                <CardContent>
                    <Typography className={classes.text1} variant="subtitle1" style={{fontSize:'small'}} >
                        By Signing up, you are agreed to our Terms, Conditions and Cookie Policy.
                    </Typography>
                </CardContent>
            </Card>
            <Card variant='outlined' className={classes.card2} >
                <CardContent>
                    <Typography className={classes.text1} variant="subtitle1" >
                        Having an account ? <Link style={{textDecoration:'none',marginLeft:'4px'}} to='/login' > LogIn </Link>
                    </Typography>
                </CardContent>
            </Card>
        </div>
        <div className='login-card'>
            <Card sx={{ maxWidth: 345 }} variant="outlined" >
                    <div className='insta-logo'>
                        <img src={insta} alt="logo"/>
                    </div>
                <CardContent>
                <Typography className={classes.text1} variant="subtitle1">
                    Login
                </Typography>
                {true && <Alert severity="error">This is an error alert — check it out!</Alert>}
                <TextField id="outlined-basic" label="E-mail" variant="outlined" fullWidth={true} margin="dense" size='small' />
                <TextField id="outlined-basic" label="Password" variant="outlined" fullWidth={true} margin="dense" size='small' />
                
                </CardContent>
            <CardActions>
                <Button  color="primary" fullWidth={true} variant="contained" >
                    Login
                </Button>
            </CardActions>
                <CardContent>
                    <Typography color="primary" className={classes.text2} variant="subtitle1"  >
                       Forget Password
                    </Typography>
                </CardContent>
            </Card>
            <Card variant='outlined' className={classes.card2} >
                <CardContent>
                    <Typography className={classes.text1} variant="subtitle1" >
                       Don't have an account ? <Link style={{textDecoration:'none',marginLeft:'4px'}} to='/signup' > SignUp </Link>
                    </Typography>
                </CardContent>
            </Card>
        </div>
    </div>
    
  );
}
