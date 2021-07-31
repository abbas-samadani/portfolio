import React, { useState, useContext, useLayoutEffect } from 'react'
import { post } from "../services/HttpClient";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
//import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { AuthContext } from '../context/Auth/AuthContext'
import {LoginData} from '../services'
import {useStyles} from '../Styles/MaterialStyles'


//building a Schema for validating form
const schema = yup.object().shape({
  email: yup.string().required(),
  password: yup.string(),
})

export default function Login(props) {
  const [kind, setKind] = useState("");
  const [message, setMessage] = useState("");
  const { dispatch } = useContext(AuthContext);

  //handle form 
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });
  const onSubmit = data => {
    dispatch({ type: 'mobileState', payload: data.email })
    
    // for login using email
    if (kind === 'email') {
      post('login.php', {
        username: data.email,
        password: data.password
      }).then(res => {
        if (res.error) {
          setMessage('email or phone is not valid');
        } else {
          const token = res.token;
          dispatch({ type: 'loginEmail', payload: token })
          props.history.replace('/dashboard');
        }
      })
        .catch(err => {
          setMessage('email or phone is not valid');
        })

    }else {
      //for login using mobile
      const params = LoginData(data.email)
      post('login.php', params).then(res => {
        if (res.content.error) {
          setMessage('email or phone is not valid');
        } else {
          console.log(res);          
          props.history.replace('/otpbox')
        }
      })
        .catch(err => {
          //console.log(err);
          setMessage('email or phone is not valid');
        })      
    }
  }     
  // handeling kind of login
  const handleDiagnosis = (e) => {
    if (e.target.value[0] >= '0' && e.target.value[0] <= '9') {
      setKind('phone');
    } else {
      setKind('email');
    }
  }
  //permission for access
  useLayoutEffect(() => {        
    dispatch({type: 'accessToLogin' , payload: props})
})

  const classes = useStyles();
  return (
    <div>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
        </Typography>
          <div style={{ margin: '15px', color: 'red' }}>{message}</div>
          <form className={classes.formLogin} noValidate onSubmit={handleSubmit(onSubmit)}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Phone Number"
              {...register("email")}
              autoComplete="email"
              autoFocus
              onChange={e => handleDiagnosis(e)}
            />
            <p>{errors.email?.message}</p>
            {kind === 'email' &&
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                {...register("password")}
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            }
            <p>{errors.password?.message}</p>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
          </Button>
            <Grid container>              
              <Grid item>
                <Link href="/register" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    </div>
  )
}
