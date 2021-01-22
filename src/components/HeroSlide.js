import React from 'react';
import { Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Button from './Buttons/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    height: 'calc(80vh - 128px)',
    minHeight: 400,
    backgroundImage: ({ bgImage }) =>
      `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${bgImage})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  contentContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    height: 'calc(80vh - 128px)',
    minHeight: 400,
    color: '#fff',
    [theme.breakpoints.down('sm')]: {
      alignItems: 'center',
    },
  },
  text: { marginTop: 16, marginBottom: 32, fontWeight: 300 },
}));

const HeroSlide = ({ heading, text, bgImage, button }) => {
  const classes = useStyles({ bgImage });

  const handleNavigation = () => {};

  return (
    <div className={classes.root}>
      <Container maxWidth='md' className={classes.contentContainer}>
        <Typography variant='h1' align='center' component='div'>
          {heading}
        </Typography>
        {text && (
          <Typography variant='body1' className={classes.text}>
            {text}
          </Typography>
        )}
        {button && (
          <Button
            variant={button.variant}
            color={button.color}
            onClick={() => handleNavigation(button.actionUrl)}
          >
            {button.text}
          </Button>
        )}
      </Container>
    </div>
  );
};

export default HeroSlide;
