import React from 'react';

import { Link as ScrolLink } from 'react-scroll';

// Material UI components
import { makeStyles, Typography } from '@material-ui/core';
import clsx from 'clsx';

// Custom components
import Link from '../../Link';
import { blackColor, greyColor, redColor } from '../../../constants/colors';

const useStyles = makeStyles((theme) => ({
  root: {
    overflow: 'hidden',
  },
  link: {
    fontSize: '16px',
    fontWeight: 400,
    float: 'left',
    color: blackColor[0],
    textAlign: 'center',
    margin: '4px 16px',
    textDecoration: 'none',
    transition: 'all .3s ease-in-out',
    cursor: 'pointer',
    '&:hover': {
      transition: 'all .3s ease-in-out',
      textDecoration: 'none',
      color: redColor[0],
    },
  },
  highlighedLink: {
    color: redColor[0],
    position: 'relative',
    '&:after': {
      transition: 'all .3s ease-in-out',
      display: 'block',
      opacity: 0,
      content: '""',
      position: 'absolute',
      marginTop: -4,
      width: '100%',
      height: 2,
      background: redColor[0],
    },
    '&:hover:after': { transition: 'all .3s ease-in-out', opacity: 1 },
  },
  dropdown: {
    float: 'left',
    margin: '4px 16px',
    overflow: 'hidden',
    '&:focus-within $dropdownContent': {
      display: 'block',
    },
    '&:hover $dropdownContent': {
      display: 'block',
    },
    '&:hover $dropbtn': {
      transition: 'all .3s ease-in-out',
      color: redColor[0],
    },
    '&:hover i': {
      transition: 'all .3s ease-in-out',
      borderWidth: '0 2px 2px 0',
      border: `solid ${redColor[0]}`,
    },
    '&:hover a': {
      textDecoration: 'none',
    },
  },
  dropbtn: {
    fontSize: '16px',
    fontWeight: 400,
    color: blackColor[0],
    border: 'none',
    outline: 'none',
    textAlign: 'center',
    marginRight: 8,
    backgroundColor: 'inherit',
    fontFamily: 'inherit',
    cursor: 'pointer',
  },
  dropdownLink: {
    float: 'none',
    color: greyColor[2],
    fontSize: 13,
    padding: '0 6px',
    textDecoration: 'none',
    display: 'block',
    textAlign: 'left',
    backgroundColor: '#fefefe',
    marginBottom: 4,
    '&:hover': {
      transition: 'all .3s ease-in-out',
      color: blackColor[0],
    },
  },
  dropdownContent: {
    display: 'none',
    position: 'absolute',
    zIndex: 1,
  },
  arrowDown: {
    border: `solid ${blackColor[0]}`,
    borderWidth: '0 2px 2px 0',
    display: 'inline-block',
    padding: 2,
    marginBottom: 3,
    marginLeft: 6,
    transform: 'rotate(45deg)',
  },
}));

const Navbar = () => {
  const classes = useStyles();

  return (
    <nav className={classes.root}>
      <Link className={classes.link} href='/services'>
        Services
      </Link>
      <Link className={classes.link} href='/work'>
        Work
      </Link>
      <Link className={classes.link} href='/innovation'>
        Innovation
      </Link>
      <div className={classes.dropdown}>
        <Typography className={classes.dropbtn}>
          <Link color='inherit' href='/insights'>
            Insights
          </Link>
          <i className={classes.arrowDown} />
        </Typography>
        <div className={classes.dropdownContent}>
          <Link className={classes.dropdownLink} href='/insights/blog'>
            Blog
          </Link>
          <Link className={classes.dropdownLink} href='/insights/whitepapers'>
            Whitepapers
          </Link>
        </div>
      </div>
      <div className={classes.dropdown}>
        <Typography className={classes.dropbtn}>
          <Link color='inherit' href='/about-us'>
            About Us
          </Link>
          <i className={classes.arrowDown} />
        </Typography>
        <div className={classes.dropdownContent}>
          <Link className={classes.dropdownLink} href='/about-us/team'>
            Team
          </Link>
          <Link className={classes.dropdownLink} href='/about-us/careers'>
            Careers
          </Link>
        </div>
      </div>
      <ScrolLink
        className={clsx(classes.link, classes.highlighedLink)}
        to='contactForm'
        spy={true}
        smooth={true}
      >
        Get in Touch
      </ScrolLink>
    </nav>
  );
};

export default Navbar;
