import React from 'react';

// nodejs library to set properties for components
import PropTypes from 'prop-types';

// material-ui components
import { makeStyles } from '@material-ui/core/styles';
import { Checkbox as MuiCheckbox, Typography } from '@material-ui/core';

// custom components
import { greyColor } from '../../constants/colors';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
  root: {
    cursor: 'pointer',
  },
  checkboxRoot: {
    color: greyColor[0],
    marginRight: theme.spacing(1),
    fontSize: 24,
    transition: 'all .3s ease-in-out',
    transform: 'scale(1.3)',
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  checkboxChecked: {
    '&:hover': {
      backgroundColor: 'transparent !important',
    },
  },
}));

const Checkbox = (props) => {
  const { label, muiClasses, className, ...rest } = props;
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)}>
      <MuiCheckbox
        disableTouchRipple
        classes={{
          root: classes.checkboxRoot,
          checked: classes.checkboxChecked,
          muiClasses,
        }}
        inputProps={{ 'aria-label': label }}
        {...rest}
      />
      <Typography component='span' variant='body1'>
        {label}
      </Typography>
    </div>
  );
};

Checkbox.propTypes = {
  label: PropTypes.string,
  className: PropTypes.string,
  // use this to pass the classes props from Material-UI
  muiClasses: PropTypes.object,
  children: PropTypes.node,
};

export default Checkbox;
