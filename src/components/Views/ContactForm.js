import React from 'react';

// Material UI imports
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Typography } from '@material-ui/core';

// Custom components
import TextField from '../Inputs/TextField';
import Button from '../Buttons/Button';
import { redColor } from '../../constants/colors';
import UploadButton from '../Inputs/UploadButton';
import Checkbox from '../Inputs/CheckBox';
import clsx from 'clsx';
import Select from '../Inputs/Select';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    paddingTop: 100,
    paddingBottom: 95,
    boxShadow: '0px 31px 27px -11px rgba(76,76,76,0.19)',
  },
  heading: {
    color: redColor[0],
    textAlign: 'center',
    marginBottom: 90,
  },
  submitButtonContainer: { display: 'flex', justifyContent: 'center' },
  uploadButton: { float: 'left' },
  checkboxContainer: { fontWeight: 400, fontSize: 16, textAlign: 'center' },
  gridItem: {
    padding: '24px 10px',
    [theme.breakpoints.down('sm')]: {
      padding: '16px 0',
    },
  },
}));

const ContactForm = () => {
  const classes = useStyles();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={classes.root} id='contactForm'>
      <Container component='form' maxWidth='md' onSubmit={handleSubmit}>
        <Typography variant='h3' component='h2' className={classes.heading}>
          GET IN TOUCH
        </Typography>
        <Grid container>
          <Grid item xs={12} sm={6} className={classes.gridItem}>
            <TextField
              autoComplete='given-name'
              name='firstName'
              required
              fullWidth
              id='firstName'
              placeholder='full name'
              aria-label='first name'
            />
          </Grid>
          <Grid item xs={12} sm={6} className={classes.gridItem}>
            <TextField
              required
              fullWidth
              id='email'
              placeholder='email'
              type='email'
              name='email'
              aria-label='email'
              autoComplete='email'
            />
          </Grid>
          <Grid item xs={12} sm={6} className={classes.gridItem}>
            <TextField
              required
              fullWidth
              placeholder='phone'
              type='tel'
              id='phone'
              name='phone'
              aria-label='phone number'
            />
          </Grid>
          <Grid item xs={12} sm={6} className={classes.gridItem}>
            <Select
              placeholder='subject'
              name='subject'
              id='subject'
              required
              fullWidth
              aria-label='subject'
              options={[
                { label: 'Option 1', value: '1' },
                { label: 'Option 2', value: '2' },
                { label: 'Option 3', value: '3' },
              ]}
            />
          </Grid>
          <Grid item xs={12} className={classes.gridItem}>
            <TextField
              id='message'
              name='message'
              placeholder='message ...'
              fullWidth
              multiline
            />
          </Grid>
          <Grid item xs={12} className={classes.gridItem}>
            <UploadButton
              label='Attach File'
              accept='image/*'
              id='file-upload'
              multiple
              type='file'
              className={classes.uploadButton}
            />
          </Grid>
          <Grid
            item
            xs={12}
            className={clsx(classes.gridItem, classes.checkboxContainer)}
          >
            <Checkbox label='Subscribe to newsletter' />
          </Grid>
          <Grid
            item
            xs={12}
            className={clsx(classes.gridItem, classes.submitButtonContainer)}
          >
            <Button
              type='submit'
              variant='contained'
              color={redColor[0]}
              className={classes.button}
            >
              CALL TO ACTION
            </Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default ContactForm;
