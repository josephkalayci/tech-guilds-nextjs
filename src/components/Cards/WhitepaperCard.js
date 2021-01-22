import React from 'react';

// nodejs library to set properties for components
import PropTypes from 'prop-types';

//Material UI imports
import { Hidden, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

//Custom components
import Link from '../Link';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    width: '100%',
    paddingTop: '50%',
    overflow: 'hidden',
    color: '#fff',
    '&:hover $image': {
      transition: 'transform .5s ease',
      transform: 'scale(1.1)',
    },
  },
  contentContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    padding: 80,
    paddingRight: '40%',
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.down('sm')]: {
      padding: 20,
    },
  },
  image: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: `url(${'/whitepaperBg.png'})`,
    backgroundPosition: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    borderRadius: 2,
    transition: 'transform .5s ease',
  },
  category: { marginBottom: 16 },
  title: {
    flexGrow: 1,
  },
  link: {
    '&:hover': {
      textDecoration: 'none',
    },
  },
  icon: {
    height: 64,
    width: 64,
    borderRadius: 32,
  },
}));

const WhitepaperCard = (props) => {
  const { title, slug, className } = props;
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)}>
      <div className={classes.image} />
      <div className={classes.contentContainer}>
        <Typography variant='body2' className={classes.category}>
          {'WHITEPAPER'}
        </Typography>
        <Typography variant='h4' component='div' className={classes.title}>
          <Link href={slug} color='inherit' className={classes.link}>
            {title}
          </Link>
        </Typography>
        <Hidden xsDown>
          <img
            src={'/whitepaperIcon.png'}
            alt={'icon'}
            className={classes.icon}
          />
        </Hidden>
      </div>
    </div>
  );
};

WhitepaperCard.propTypes = {
  title: PropTypes.string,
  slug: PropTypes.string,
  className: PropTypes.string,
};

export default WhitepaperCard;
