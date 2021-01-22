import React from 'react';

//Material UI components
import { Container, Grid, makeStyles, Typography } from '@material-ui/core';

// custom components
import Link from '../Link';
import { greyColor } from '../../constants/colors';
import { socialLinks, navigationLinks, copyright } from '../../constants/data';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: 220,
    display: 'flex',
    whiteSpace: 'nowrap',
    paddingTop: 55,
    paddingBottom: 55,
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  socialContainer: {
    padding: 10,
    [theme.breakpoints.down('sm')]: {
      order: 2,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      flexBasis: '100%',
    },
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
  copyright: { fontSize: 12, color: greyColor[2], fontWeight: 300 },

  linkContainer: {
    display: 'flex',
    alignItems: 'flex-start',
    fontSize: 12,
    padding: 10,
    [theme.breakpoints.down('sm')]: {
      flexBasis: '100%',
      justifyContent: 'center',
    },
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
  subLinkContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  link: {
    color: '#434343',
    textAlign: 'center',
    margin: '0 12px',
    marginBottom: theme.spacing(1),
    fontWeight: 500,
    '&:hover': {
      textDecoration: 'none',
    },
  },
  subLink: {
    color: greyColor[2],
    textAlign: 'center',
    fontWeight: 300,
    margin: '0 12px',
    marginBottom: theme.spacing(1),
    '&:hover': {
      textDecoration: 'none',
    },
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.root}>
      <Container maxWidth='md' className={classes.container}>
        <Grid
          container
          direction='row'
          justify='space-between'
          alignItems='center'
        >
          <Grid item sm={12} md={3} className={classes.socialContainer}>
            <div>
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
          </Grid>
          <Grid item className={classes.linkContainer}>
            {navigationLinks.map((link) => {
              if (link.subLinks) {
                return (
                  <div className={classes.subLinkContainer} key={link.label}>
                    <Link className={classes.link} href={link.href}>
                      {link.label}
                    </Link>
                    {link.subLinks.map((subLink) => (
                      <Link
                        className={classes.subLink}
                        href={subLink.href}
                        key={subLink.label}
                      >
                        {subLink.label}
                      </Link>
                    ))}
                  </div>
                );
              } else {
                return (
                  <Link
                    className={classes.link}
                    href={link.href}
                    key={link.label}
                  >
                    {link.label}
                  </Link>
                );
              }
            })}
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
