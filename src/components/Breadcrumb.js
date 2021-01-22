import React from 'react';
//Material UI imports
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

//Custom components
import { blackColor, greyColor } from '../constants/colors';
import Link from './Link';

const useStyles = makeStyles((theme) => ({
  root: {
    fontWeight: 300,
    marginTop: 50,
    marginBottom: 24,
    color: greyColor[2],
    transition: 'all .3s ease-in-out',
    '& a:hover': {
      textDecoration: 'none',
      color: blackColor[0],
      transition: 'all .3s ease-in-out',
    },
  },
  arrowLeft: {
    border: `solid ${greyColor[2]}`,
    borderWidth: '0 1px 1px 0',
    display: 'inline-block',
    padding: 3,
    marginBottom: 3,
    marginRight: 6,
    transform: 'rotate(135deg)',
  },
}));

export default function Breadcrumb({ label, href }) {
  const classes = useStyles();

  return (
    <Typography className={classes.root}>
      <i className={classes.arrowLeft} />
      <Link color='inherit' href={href}>
        {label}
      </Link>
    </Typography>
  );
}
