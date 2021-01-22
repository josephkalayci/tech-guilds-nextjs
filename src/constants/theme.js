import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

let theme = createMuiTheme();
/* theme = responsiveFontSizes(theme); */

theme = createMuiTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#DA3127',
      // contrastText: will be calculated to contrast with palette.primary.main
      //contrastText: '#fff',
    },
    secondary: {
      //light: '#EE72A6',
      main: '#190099',
      //dark: '#D71968',
      //contrastText: '#fff',
    },
  },
  overrides: {
    //Global custom styles for input
    MuiInput: {
      input: {
        '&::placeholder': {
          fontWeight: '300',
        },
      },
    },
    //Global custom styles for checkbox
    MuiCheckbox: {
      colorSecondary: {
        checked: {
          backgroundColor: 'transparent',
        },
        '& $checked:hover': {
          backgroundColor: 'transparent',
        },
      },
    },
    //Global custom styles for select
    MuiSelect: {
      select: {
        '&:focus': {
          backgroundColor: 'transparent',
        },
        '& .Mui-focused': {},
        '&:before': {},
        '&:after': {},
      },
    },
  },
  props: {
    //Default props for select
    MuiSelect: {
      MenuProps: {
        getContentAnchorEl: null,
        anchorOrigin: {
          vertical: 'bottom',
          horizontal: 'left',
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 730,
      md: 1090,
      lg: 1280,
      xl: 1920,
    },
  },
  typography: {
    fontFamily: `'Ubuntu', sans-serif,"Roboto", "Helvetica", "Arial"`,
    h1: {
      fontSize: '30px',
      fontWeight: 500,
      letterSpacing: '4px',
      lineHeight: '1.3',
      '@media (min-width:1060px)': {
        fontSize: '58px',
      },
    },
    h2: {
      fontSize: '30px',
      fontWeight: 500,
      letterSpacing: '2px',
      lineHeight: '1.6',
      '@media (min-width:1060px)': {
        fontSize: '44px',
      },
    },
    h3: {
      fontSize: '30px',
      fontWeight: 500,
      letterSpacing: '1px',
      lineHeight: '1.4',
      '@media (min-width:1060px)': {
        fontSize: '36px',
      },
    },
    h4: {
      fontSize: '16px',
      fontWeight: 500,
      letterSpacing: '1px',
      lineHeight: '1.5',
      textDecoration: 'underline',
      textDecorationThickness: '2px',
      textDecorationSkipInk: 'auto',
      textUnderlineOffset: '3px',
      '@media (min-width:1060px)': {
        fontSize: '30px',
      },
    },
    body1: {
      fontSize: '14px',
      lineHeight: '1.75',
      fontWeight: 400,

      '@media (min-width:1060px)': {
        fontSize: '18px',
      },
    },
    body2: {
      fontSize: '12px',
      lineHeight: '1.85',
      fontWeight: 300,
      '@media (min-width:1060px)': {
        fontSize: '17px',
      },
    },
  },
});

export default theme;
