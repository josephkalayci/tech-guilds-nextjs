import React from 'react';

// nodejs library to set properties for components
import PropTypes from 'prop-types';

//Material UI imports
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

//Custom components
import Link from '../Link';
import { greenColor } from '../../constants/colors';

const useStyles = makeStyles((theme) => ({
  root: {
    '&:hover $image': {
      transition: 'transform .5s ease',
      transform: 'scale(1.1)',
    },
  },
  contentContainer: {
    display: 'flex',
    flexDirection: 'column',
    paddingTop: ({ heading }) => (heading ? 40 : 64),
    paddingBottom: ({ heading }) => (heading ? 40 : 64),
    paddingRight: ({ reverseOrder }) => (reverseOrder ? 70 : 40),
    paddingLeft: ({ reverseOrder }) => (reverseOrder ? 40 : 70),
    order: ({ reverseOrder }) => (reverseOrder ? 1 : -1),
    [theme.breakpoints.down('sm')]: {
      padding: () => 20,
    },
    [theme.breakpoints.down('xs')]: {
      order: () => 0,
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
  },
  heading: {
    marginBottom: 40,
    textTransform: 'uppercase',
    [theme.breakpoints.down('sm')]: {
      marginBottom: 20,
    },
  },
  subheading: {
    color: greenColor[0],
    textTransform: 'uppercase',
    marginBottom: ({ heading }) => (heading ? 0 : 40),
    [theme.breakpoints.down('sm')]: {
      marginBottom: ({ heading }) => (heading ? 0 : 20),
    },
  },
  divider: {
    margin: '0 8px',
    borderColor: 'inherit',
    borderRight: '1px solid',
  },
  title: {
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
  icon: { height: 64, width: 64, borderRadius: 32, marginTop: 8 },
}));

const CaseStudyCard = ({
  heading,
  slug,
  category,
  title,
  image,
  reverseOrder,
  className,
  ...rest
}) => {
  const classes = useStyles({ reverseOrder, heading });

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
        <Typography variant='body2' className={classes.subheading}>
          {category}
        </Typography>
        <Typography variant='h4' className={classes.title}>
          <Link href={slug} color='inherit' className={classes.link}>
            {title}
          </Link>
        </Typography>

        <img
          src={'/caseStudyIcon.png'}
          alt={'case study icon'}
          className={classes.icon}
        />
      </Grid>
    </Grid>
  );
};

CaseStudyCard.propTypes = {
  heading: PropTypes.string,
  slug: PropTypes.string,
  category: PropTypes.string,
  category: PropTypes.string,
  image: PropTypes.shape({
    scr: PropTypes.string,
    alt: PropTypes.string,
  }),
  reverseOrder: PropTypes.bool,
  className: PropTypes.string,
};

export default CaseStudyCard;
