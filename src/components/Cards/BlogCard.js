import React from 'react';

// nodejs library to set properties for components
import PropTypes from 'prop-types';

//Material UI imports
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PersonIcon from '@material-ui/icons/Person';
import PeopleIcon from '@material-ui/icons/People';

//Custom components
import Link from '../Link';
import ProfileCard from './ProfileCard';
import { orangeColor } from '../../constants/colors';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
  root: {},
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
      padding: () => 20,
    },
  },
  imageContainer: {
    position: 'relative',
    borderRadius: 2,
    overflow: 'hidden',
    boxShadow: '17px 10px 31px -7px rgba(150,150,150,0.23)',
    paddingTop: '50%',
    backgroundImage: `url(${'/orangeBox.png'})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    color: '#fff',
  },

  heading: {
    marginBottom: 40,
    textTransform: 'uppercase',
    [theme.breakpoints.down('sm')]: {
      marginBottom: 20,
    },
  },
  subheading: {
    color: orangeColor[0],
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
  animatedContent: {
    margin: 'auto',
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },

    '& $icon:first-child': { '&:before': { transform: 'rotate(175deg)' } },

    '& $icon:nth-child(-n+2)': {
      marginLeft: -130,

      '&:before': {
        content: '""',
        position: 'absolute',
        top: 26,
        left: -28,
        transform: 'rotate(135deg)',
        width: '0',
        height: '0',
        borderLeft: '9px solid transparent',
        borderRight: '9px solid transparent',
        borderBottom: '9px solid #fff',
      },
    },

    '& $icon:nth-child(-n+2):after': {
      left: 84,
    },
    '& $icon:first-child:after': { left: 88, width: 140 },
    '&:hover $icon': {
      transition: 'all .3s ease-in-out',
      marginTop: 4,
      marginBottom: 4,
    },
    '&:hover $icon:nth-child(-n+2)': {
      transition: 'all .3s ease-in-out',
      marginLeft: -154,
    },
  },
  icon: {
    display: 'inline-block',
    position: 'relative',
    fontSize: 50,
    lineHeight: 0,
    margin: 0,
    padding: 0,
    transition: 'all .3s ease-in-out',
    '&:after': {
      transition: 'all .3s ease-in-out',
      content: '""',
      position: 'absolute',
      left: 74,
      top: 18,
      height: 14,
      width: 90,
      backgroundColor: '#fff',
    },
  },
}));

const BlogCard = ({
  heading,
  slug,
  category,
  title,
  author,
  reverseOrder,
  className,
}) => {
  const classes = useStyles({ reverseOrder, heading });

  return (
    <Grid container className={clsx(classes.root, className)}>
      <Grid item xs={12} sm={6} className={classes.imageContainer}>
        <div className={classes.animatedContent}>
          <div className={classes.icon}>
            <PeopleIcon fontSize='inherit' />
          </div>
          <div className={classes.icon}>
            <PeopleIcon fontSize='inherit' />
          </div>
          <div className={classes.icon}>
            <PersonIcon fontSize='inherit' />
          </div>
          <div className={classes.icon}>
            <PersonIcon fontSize='inherit' />
          </div>
          <div className={classes.icon}>
            <PersonIcon fontSize='inherit' />
          </div>
        </div>
      </Grid>
      <Grid item xs={12} sm={6} className={classes.contentContainer}>
        {heading && (
          <Typography variant='h3' component='div' className={classes.heading}>
            {heading}
          </Typography>
        )}
        <Typography variant='body2' className={classes.subheading}>
          <Typography variant='inherit' component='span'>
            {'BLOG'}
          </Typography>
          <span className={classes.divider} />
          {category}
        </Typography>
        <Typography variant='h4' component='div' className={classes.title}>
          <Link href={slug} color='inherit' className={classes.link}>
            {title}
          </Link>
        </Typography>

        {author && (
          <ProfileCard
            image={author.avatar}
            name={author.name}
            title={author.title}
          />
        )}
      </Grid>
    </Grid>
  );
};

BlogCard.propTypes = {
  heading: PropTypes.string,
  slug: PropTypes.string,
  category: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.shape({
    avatar: PropTypes.shape({
      src: PropTypes.string,
      alt: PropTypes.string,
    }),
    name: PropTypes.string,
    title: PropTypes.string,
  }),
  reverseOrder: PropTypes.bool,
  className: PropTypes.string,
};

export default BlogCard;
