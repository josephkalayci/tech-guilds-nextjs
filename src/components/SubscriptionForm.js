import React from 'react';

//Material UI imports
import { Grid, TextField, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

//Custom components
import Button from './Buttons/Button';
import { redColor } from '../constants/colors';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    height: 390,
    color: '#fff',
  },
  heading: {
    textTransform: 'uppercase',
    [theme.breakpoints.down('sm')]: {
      fontSize: 22,
    },
  },
  subHeading: {
    fontWeight: 500,
    fontSize: 24,
    marginBottom: 50,
    [theme.breakpoints.down('sm')]: {
      fontSize: 18,
    },
  },
  contentContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
    padding: '0px 200px',
    [theme.breakpoints.down('sm')]: {
      padding: 16,
    },
  },
  image: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: `url(${'/subscriptionBg.png'})`,
    backgroundPosition: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    borderRadius: 2,
  },
  underline: {
    borderBottomWidth: 0,
    borderBottomColor: '#fff',
    '&&&&:hover:before': {
      borderBottom: '2px solid #fff',
    },
    '&:after': {
      borderBottom: '2px solid #fff',
      transition: 'none',
    },
    '&:before': {
      borderBottom: '2px solid #fff',
    },
  },
  input: {
    color: '#fff',
    '&::placeholder': {
      fontSize: 20,
      fontWeight: 300,
      color: '#fff',
      opacity: 0.9,
    },
  },
  buttonLabel: {
    fontSize: 22,
    fontWeight: 500,
    letterSpacing: '2px',
    [theme.breakpoints.down('sm')]: {
      fontSize: 16,
    },
    '&:hover': {
      color: redColor[0],
    },
  },
}));

const data = {
  heading: 'Want to stay up to date?',
  subHeading: 'Join Our Mailing List',
};

const SubscriptionForm = () => {
  const classes = useStyles();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={classes.root}>
      <div className={classes.image} />
      <div className={classes.contentContainer}>
        <Typography variant='h3' component='div' className={classes.heading}>
          {data.heading}
        </Typography>
        <Typography className={classes.subHeading}>
          {data.subHeading}
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={6} justify='center' alignItems='center'>
            <Grid item xs={6}>
              <TextField
                autoComplete='given-name'
                name='firstName'
                required
                fullWidth
                placeholder='name'
                aria-label='name'
                InputProps={{
                  classes: {
                    input: classes.input,
                    underline: classes.underline,
                  },
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                required
                fullWidth
                placeholder='email'
                type='email'
                name='email'
                aria-label='email'
                autoComplete='email'
                InputProps={{
                  classes: {
                    input: classes.input,
                    underline: classes.underline,
                  },
                }}
              />
            </Grid>
            <Grid item>
              <Button
                onClick={handleSubmit}
                variant='outlined'
                color='#fff'
                muiClasses={{ label: classes.buttonLabel }}
              >
                CALL TO ACTION
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    </div>
  );
};

export default SubscriptionForm;
