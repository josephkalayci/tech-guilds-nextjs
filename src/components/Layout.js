import React from 'react';

// nodejs library to set properties for components
import PropTypes from 'prop-types';

import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Header from './Views/Header/Header';
import Location from './Views/Location';
import ContactForm from './Views/ContactForm';
import Footer from './Views/Footer';
import Breadcrumb from './Breadcrumb';
import Seo from '../Seo';
import Carausel from './Carausel';

const useStyles = makeStyles((theme) => ({
   root: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    minHeight: 100,
    paddingTop: theme.spacing(4),
  },
}));

const Layout = ({
  children,
  parentRoute,
  carausel,
  showLocation,
  showContactForm,
  seo,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {seo && <Seo seo={seo} />}
      <Header />
      <main>
        {/* Render carausel if enabled */}
        {carausel && <Carausel slides={carausel} />}

        <Container maxWidth='md' className={classes.content}>
          {/* Render back button if enabled */}
          {parentRoute && (
            <Breadcrumb label={parentRoute.label} href={parentRoute.href} />
          )}
          {children}
        </Container>

        {showLocation && <Location />}
        {showContactForm && <ContactForm />}
      </main>
      <Footer />
    </div>
  );
};

Layout.defaultProps = {
  showLocation: true,
  showContactForm: true,
};

Layout.propTypes = {};

export default Layout;
