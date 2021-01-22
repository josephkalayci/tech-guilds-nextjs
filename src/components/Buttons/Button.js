import React from 'react';

// nodejs library to set properties for components
import PropTypes from 'prop-types';

//Material UI components
import MuiButton from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 330,
    height: 60,
    borderRadius: 2,
    borderWidth: 2,
    boxShadow: '8px 8px 14px -2px rgba(0,0,0,0.19)',
    borderColor: ({ color }) => color,
    transition: 'all .3s ease-in-out',
    '&:hover ': {
      backgroundColor: ({ color }) => color,
      transition: 'all .3s ease-in-out',
      transform: 'scale(1.03,1)',
    },
    [theme.breakpoints.down('sm')]: {
      minWidth: 250,
      height: 54,
    },
  },

  label: {
    fontSize: 22,
    fontWeight: 500,
    letterSpacing: '2px',
    [theme.breakpoints.down('sm')]: {
      fontSize: 16,
    },
  },
  outlined: {
    color: ({ color }) => color,
    '&:hover ': {
      color: '#ffffff',
    },
  },
  contained: {
    color: '#ffff',
    backgroundColor: ({ color }) => color,
  },
}));

const Button = (props) => {
  const { color, children, muiClasses, className, ...rest } = props;

  const classes = useStyles({ color });

  return (
    <MuiButton
      classes={{
        root: classes.root,
        label: classes.label,
        outlined: classes.outlined,
        contained: classes.contained,
        ...muiClasses,
      }}
      className={className}
      {...rest}
    >
      {children}
    </MuiButton>
  );
};

Button.propTypes = {
  color: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Button;
