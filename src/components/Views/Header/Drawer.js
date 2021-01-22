import React from 'react';

import PropTypes from 'prop-types';
import Image from 'next/image';
import { useSpring, animated } from 'react-spring/web.cjs';
import { scroller } from 'react-scroll';

//Material UI components
import { fade, makeStyles } from '@material-ui/core/styles';
import MuiDrawer from '@material-ui/core/Drawer';
import TreeView from '@material-ui/lab/TreeView';
import TreeItem from '@material-ui/lab/TreeItem';
import { Divider, IconButton, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Collapse from '@material-ui/core/Collapse';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import CloseIcon from '@material-ui/icons/Close';

//Custom components
import { greyColor } from '../../../constants/colors';
import {
  navigationLinks,
  socialLinks,
  copyright,
} from '../../../constants/data';
import Link from '../../Link';
import { useRouter } from 'next/router';

const useStyles = makeStyles((theme) => ({
  root: {
    //width: '240px',
    padding: theme.spacing(2),
    height: '100%',
    flexGrow: 1,
  },
  link: {
    fontSize: 18,
    padding: theme.spacing(1, 0),
  },
  subLink: {
    display: 'block',
    fontSize: 16,
    padding: theme.spacing(1, 0),
    color: greyColor[2],
  },
  treeView: {
    marginTop: theme.spacing(2),
  },
  linkContainer: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0.5, 0),
  },
  labelText: {
    fontWeight: 'inherit',
    flexGrow: 1,
    '&:hover': {
      textDecoration: 'none',
      transition: 'color .3s ease-in-out',
      cursor: 'pointer',
      color: '#5d6c7a',
    },
  },
  icon: {
    marginLeft: 'auto',
    fontSize: 28,
    height: 40,
    width: 40,
  },
  socialLink: {
    display: 'inline-flex',
    padding: 2,
    borderRadius: 4,
    margin: '0 12px',
    marginBottom: theme.spacing(6),
    color: greyColor[2],
    border: `1px solid ${greyColor[2]}`,
    fontSize: 18,
    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing(2),
    },
  },
  socialContainer: {
    marginTop: 'auto',
    paddingTop: 24,
    textAlign: 'center',
  },
  copyright: {
    fontSize: 12,
    color: greyColor[2],
    fontWeight: 300,
    textAlign: 'center',
  },
  logoContainer: {
    display: 'flex',

    alignItems: 'center',
  },
  closeButton: { fontSize: 34, marginLeft: 'auto' },
}));

function TransitionComponent(props) {
  const style = useSpring({
    from: { opacity: 0, transform: 'translate3d(20px,0,0)' },
    to: {
      opacity: props.in ? 1 : 0,
      transform: `translate3d(${props.in ? 0 : 20}px,0,0)`,
    },
  });

  return (
    <animated.div style={style}>
      <Collapse {...props} />
    </animated.div>
  );
}

TransitionComponent.propTypes = {
  /**
   * Show the component; triggers the enter or exit states
   */
  in: PropTypes.bool,
};

const StyledTreeItem = withStyles((theme) => ({
  iconContainer: {
    display: 'none',
  },
  root: {
    '&:hover > $content $label': {
      backgroundColor: 'inherit',
    },
    '&$selected > $content $label': { backgroundColor: 'transparent' },
    '&$selected > $content $label:hover, &$selected:focus > $content $label': {
      backgroundColor: 'transparent',
    },
  },
  content: {},
  group: {
    marginLeft: 32,
  },
  expanded: {},
  selected: {},
  label: {
    paddingLeft: 0,
  },
}))((props) => (
  <TreeItem {...props} TransitionComponent={TransitionComponent} />
));

export default function Drawer(props) {
  const { isOpen, toggleDrawer } = props;
  const router = useRouter();
  const classes = useStyles();

  return (
    <MuiDrawer
      anchor='top'
      classes={{
        paper: classes.root,
      }}
      open={isOpen}
      onClose={toggleDrawer}
      transitionDuration={1000}
    >
      <div className={classes.logoContainer}>
        <Link href='/'>
          <Image
            src='/logo.png'
            alt='Tech quildslogo'
            width={110}
            height={32}
          />
        </Link>

        <IconButton className={classes.closeButton} onClick={toggleDrawer}>
          <CloseIcon fontSize='inherit' />
        </IconButton>
      </div>

      <TreeView className={classes.treeView}>
        {navigationLinks.map((link, index) => (
          <StyledTreeItem
            key={link.label}
            nodeId={String(index * 10)}
            label={
              <React.Fragment>
                {link.subLinks ? (
                  <div className={classes.linkContainer}>
                    <Typography className={classes.link}>
                      {link.label}
                    </Typography>

                    <NavigateNextIcon
                      className={classes.icon}
                      fontSize={'inherit'}
                      onClick={() => {
                        router.pathname === link.href
                          ? toggleDrawer()
                          : router.push(link.href);
                      }}
                    />
                  </div>
                ) : (
                  <Typography variant='body2' className={classes.link}>
                    <Link noWrap color='inherit' href={link.href}>
                      {link.label}
                    </Link>
                  </Typography>
                )}
                <Divider />
              </React.Fragment>
            }
          >
            {link.subLinks &&
              link.subLinks.map((subLink, index) => (
                <Link
                  noWrap
                  key={index}
                  href={subLink.href}
                  className={classes.subLink}
                >
                  {subLink.label}
                </Link>
              ))}
          </StyledTreeItem>
        ))}
        <StyledTreeItem
          nodeId={'contactForm'}
          label={
            <Typography
              variant='body2'
              className={classes.link}
              onClick={() => {
                toggleDrawer();
                scroller.scrollTo('contactForm', {
                  smooth: 'easeInOutQuart',
                  duration: 800,
                  delay: 600,
                });
              }}
            >
              {'Get in touch'}
            </Typography>
          }
        />
      </TreeView>

      <div className={classes.socialContainer}>
        {socialLinks.map((socialProvider) => (
          <Link
            className={classes.socialLink}
            key={socialProvider.label}
            href={socialProvider.href}
            aria-label={socialProvider.label}
          >
            {socialProvider.icon}
          </Link>
        ))}
      </div>
      <Typography className={classes.copyright}>{copyright}</Typography>
    </MuiDrawer>
  );
}
