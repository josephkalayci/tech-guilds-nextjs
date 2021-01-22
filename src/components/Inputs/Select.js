import React from 'react';
// nodejs library to set properties for components
import PropTypes from 'prop-types';

// material-ui components
import MenuItem from '@material-ui/core/MenuItem';
import MuiSelect from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {},
  menuItemRoot: {
    '&:hover': {
      color: theme.palette.secondary.main,
      backgroundColor: 'transparent',
    },
    '&:focus': {
      backgroundColor: 'transparent',
    },
  },
  menuItemSelected: {
    '&$menuItemSelected, &$menuItemSelected:focus, &$menuItemSelected:hover': {
      color: theme.palette.secondary.main,
      backgroundColor: 'transparent',
      borderLeft: `3px solid ${theme.palette.secondary.main}`,
    },
  },
}));

const usePlaceholderStyles = makeStyles((theme) => ({
  placeholder: {
    color: '#8E8E8E',
    fontWeight: 300,
  },
}));

const Placeholder = ({ children }) => {
  const classes = usePlaceholderStyles();
  return <div className={classes.placeholder}>{children}</div>;
};

const Select = (props) => {
  const { options, placeholder, muiClasses, ...rest } = props;
  const classes = useStyles();
  const [value, setValue] = React.useState('');

  return (
    <MuiSelect
      color='secondary'
      value={value}
      displayEmpty
      onChange={(event) => setValue(event.target.value)}
      renderValue={
        value !== ''
          ? undefined
          : () => <Placeholder>{placeholder}</Placeholder>
      }
      classes={muiClasses}
      {...rest}
    >
      {options.map((_option) => (
        <MenuItem
          disableRipple
          key={_option.value}
          value={_option.value}
          classes={{
            root: classes.menuItemRoot,
            selected: classes.menuItemSelected,
          }}
        >
          {_option.label}
        </MenuItem>
      ))}
    </MuiSelect>
  );
};

Select.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ),
  placeholder: PropTypes.string,
  className: PropTypes.string,
  // use this to pass the classes props from Material-UI
  muiClasses: PropTypes.object,
};

export default Select;
