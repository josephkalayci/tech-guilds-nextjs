import React from 'react';

// nodejs library to set properties for components
import PropTypes from 'prop-types';

// material-ui components
import MuiTextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

//Custom components
import { blueColor } from '../../constants/colors';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .Mui-error': {
      fontWeight: 300,
    },
  },
  underline: {
    borderBottomWidth: 2,
    '&:hover': {
      '&:before': {
        borderBottomColor: blueColor[0],
        borderBottomWidth: 2,
      },
    },
    '&:after': {
      borderBottomColor: blueColor[0],
      transition: 'none',
    },
    '&:before': {
      borderBottomColor: blueColor[0],
      borderBottomWidth: 2,
    },
  },
}));

const TextField = (props) => {
  const { className, value, muiClasses, ...rest } = props;
  const classes = useStyles();
  const [userInput, setUserInput] = React.useState(value);

  return (
    <MuiTextField
      color='secondary'
      value={userInput}
      onChange={(event) => setUserInput(event.target.value)}
      InputProps={{
        classes: { underline: !userInput ? undefined : classes.underline },
      }}
      classes={muiClasses}
      className={clsx(classes.root, className)}
      {...rest}
    />
  );
};

TextField.propTypes = {
  className: PropTypes.string,
  // use this to pass the classes props from Material-UI
  muiClasses: PropTypes.object,
  children: PropTypes.node,
};

export default TextField;
