import React from 'react';

// Material UI components
import { Container, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

// Custom components
import { redColor } from '../../constants/colors';
import { companyInfo } from '../../constants/data';

const useStyles = makeStyles((theme) => ({
  root: {},
  map: {
    filter: 'grayscale(90%)',
  },
  contentContainer: {
    backgroundColor: redColor[0],
    marginTop: -8,
  },
  gridContainer: { color: '#fff', minHeight: 200 },
  headingContainer: {
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
    },
  },
}));

const Location = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {/* TODO:replace iframe with google map api for further customization */}
      <iframe
        className={classes.map}
        width='100%'
        height='400'
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.5602572596!2d-79.5413200161051!3d43.636510700547475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b37953f60d8e3%3A0xeea69b885b941ef!2sTechGuilds%20Consulting%20Inc.!5e0!3m2!1sen!2sca!4v1610774261813!5m2!1sen!2sca'
        tabIndex='0'
        frameBorder='0'
        scrolling='no'
        marginHeight='0'
        marginWidth='0'
        aria-label='Google map shows store address'
        title='Google map shows store address'
      />

      <div className={classes.contentContainer}>
        <Container maxWidth='md'>
          <Grid
            container
            direction='row'
            justify='space-between'
            alignItems='center'
            className={classes.gridContainer}
          >
            <Grid item xs={12} sm={4} className={classes.headingContainer}>
              <Typography variant='h2'>{'WE ARE HERE'}</Typography>
            </Grid>
            <Grid
              item
              xs={12}
              sm={8}
              direction='row'
              container
              justify='space-around'
            >
              <Grid item>
                <Typography variant='body1'>{companyInfo.email}</Typography>
                <Typography variant='body1'>{companyInfo.phones[0]}</Typography>
                <Typography variant='body1'>{companyInfo.phones[1]}</Typography>
              </Grid>
              <Grid item>
                <Typography variant='body1'>{`${companyInfo.address.street} ${companyInfo.address.unit}`}</Typography>
                <Typography variant='body1'>{`${companyInfo.address.city}, ${companyInfo.address.province} ${companyInfo.address.postcode}`}</Typography>
                <Typography variant='body1'>{`${companyInfo.address.country}`}</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
};

export default Location;
