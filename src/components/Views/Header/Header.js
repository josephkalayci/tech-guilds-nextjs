import React from 'react';

import Image from 'next/image';

// Material UI components
import { Container, Hidden, IconButton, makeStyles } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import PersonIcon from '@material-ui/icons/Person';
import MenuIcon from '@material-ui/icons/Menu';

// Custom components
import { greyColor } from '../../../constants/colors';
import Navbar from './Navbar';
import Link from '../../Link';
import Drawer from './Drawer';

const useStyles = makeStyles((theme) => ({
  root: {
    color: greyColor[2],
  },
  firstRow: {
    height: 64,
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
  },
  secondRow: {
    height: 44,
    display: 'flex',
    justifyContent: 'flex-end',
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
  loginIcon: {},
  menuIcon: { fontSize: 38 },
  searchIcon: {
    marginLeft: 'auto',
    marginRight: theme.spacing(2),
  },

  inputRoot: { flexGrow: 1, backgroundColor: 'grey' },
}));

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const classes = useStyles();

  //Toggle drawer
  const toggleDrawer = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <header className={classes.root}>
      <Container maxWidth='lg' className={classes.firstRow}>
        <Link href='/'>
          <Image src='/logo.png' alt='company logo' width={110} height={32} />
        </Link>

        <SearchIcon className={classes.searchIcon} />
        <Hidden xsDown>
          <PersonIcon />
        </Hidden>
        <Hidden smUp>
          <IconButton
            className={classes.menuIcon}
            onClick={toggleDrawer}
            aria-label='menu button'
          >
            <MenuIcon fontSize='inherit' />
          </IconButton>
        </Hidden>
      </Container>
      <Container maxWidth='md' className={classes.secondRow}>
        <Navbar />
      </Container>
      <Drawer isOpen={isOpen} toggleDrawer={() => toggleDrawer()} />
    </header>
  );
};

export default Header;
