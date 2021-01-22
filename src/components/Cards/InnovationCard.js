import React from 'react';

// nodejs library to set properties for components
import PropTypes from 'prop-types';

//Material UI imports
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

//Custom components
import Button from '../Buttons/Button';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
  root: {},
  contentContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    paddingTop: 40,
    paddingBottom: 40,
    paddingRight: ({ reverseOrder }) => (reverseOrder ? 70 : 40),
    paddingLeft: ({ reverseOrder }) => (reverseOrder ? 40 : 70),
    order: ({ reverseOrder }) => (reverseOrder ? 1 : -1),
    [theme.breakpoints.down('sm')]: {
      padding: () => 20,
    },
    [theme.breakpoints.down('xs')]: {
      order: () => 0,
    },
    '& button': {
      marginTop: 18,
    },
  },
  imageContainer: {
    position: 'relative',
    borderRadius: 2,
    overflow: 'hidden',
    boxShadow: '17px 10px 31px -7px rgba(150,150,150,0.23)',
    paddingTop: '50%',
  },
  image: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform .5s ease',
    '&:hover': {
      transition: 'transform .5s ease',
      transform: 'scale(1.1)',
    },
  },
  heading: {
    marginBottom: 40,
    textTransform: 'uppercase',
    [theme.breakpoints.down('sm')]: {
      marginBottom: 20,
    },
  },
  text: {
    flexGrow: 1,
    [theme.breakpoints.down('sm')]: {
      minHeight: 120,
    },
  },
  link: {
    '&:hover': {
      textDecoration: 'none',
    },
  },
  icon: { height: 64, width: 64, borderRadius: 32 },
}));

const InnovationCard = ({
  heading,
  text,
  image,
  actions,
  reverseOrder,
  className,
  ...rest
}) => {
  const classes = useStyles({ reverseOrder });

  return (
    <Grid container className={clsx(classes.root, className)} {...rest}>
      <Grid item xs={12} sm={6} className={classes.imageContainer}>
        <img src={image.src} alt={image.alt} className={classes.image} />
      </Grid>
      <Grid item xs={12} sm={6} className={classes.contentContainer}>
        {heading && (
          <Typography variant='h3' component='div' className={classes.heading}>
            {heading}
          </Typography>
        )}
        <Typography variant='body1' className={classes.text}>
          {text}
        </Typography>
        {actions.map((_action) => (
          <Button
            key={_action.label}
            variant={_action.buttonType}
            color={_action.buttonColor}
            onClick={() => {
              'handle pre defined action';
            }}
          >
            {_action.label}
          </Button>
        ))}
      </Grid>
    </Grid>
  );
};

InnovationCard.propTypes = {
  heading: PropTypes.string,
  text: PropTypes.string,
  image: PropTypes.shape({
    scr: PropTypes.string,
    alt: PropTypes.string,
  }),
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      buttonType: PropTypes.oneOf(['outlined', 'contained']),
      buttonColor: PropTypes.string,
      action: PropTypes.string, //TODO:define action types
    })
  ),
  reverseOrder: PropTypes.bool,
  className: PropTypes.string,
};

export default InnovationCard;
