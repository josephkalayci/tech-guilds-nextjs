import React from 'react';
// nodejs library to set properties for components
import PropTypes from 'prop-types';

//Material UI components
import { makeStyles } from '@material-ui/core/styles';
import { IconButton } from '@material-ui/core';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    margin: theme.spacing(1),
    color: theme.palette.secondary.main,
    fontSize: 24,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: 'none',
    background: 'none',
    cursor: 'pointer',
    width: 40,
    height: 40,
    '&:hover': { backgroundColor: 'transparent' },
    '&:focus $border': {
      transition: 'all .3s ease-in-out',
      transform: 'scale(1.05, 1.05)',
    },
  },
  border: {
    position: 'absolute',
    border: `2px solid ${theme.palette.secondary.main}`,
    width: 42,
    height: 42,
    borderRadius: '50%',
    transition: 'all .3s ease-in-out',
    '&:hover': {
      transition: 'all .3s ease-in-out',
      transform: 'scale(1.05, 1.05)',
    },
  },
}));

const SocialButton = (props) => {
  const { className, children, ...rest } = props;

  const classes = useStyles();

  return (
    <IconButton
      disableRipple
      className={clsx(classes.root, className)}
      {...rest}
    >
      <div className={classes.border} />
      {children}
    </IconButton>
  );
};

SocialButton.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default SocialButton;
