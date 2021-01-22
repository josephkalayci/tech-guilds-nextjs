import React from 'react';

// Material UI components
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

//Custom components
import InnovationCard from '../../src/components/Cards/InnovationCard';
import Layout from '../../src/components/Layout';
import { fetchAPI } from '../../src/api';

const useStyles = makeStyles((theme) => ({
  root: {},
  heading: {
    marginBottom: 50,
    marginTop: 70,
  },
  subHeading: {
    marginLeft: 90,
    marginRight: 45,
    [theme.breakpoints.down('sm')]: {
      marginLeft: 45,
      marginRight: 22,
    },
  },
  content: {
    marginTop: 130,
    marginLeft: 45,
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
      marginTop: 60,
    },
  },
  card: { marginBottom: 200 },
}));

const parentRoute = { label: 'home', href: '/' };

const Innovation = ({ pageData }) => {
  const classes = useStyles();

  return (
    <Layout parentRoute={parentRoute} seo={pageData.seo}>
      {/* Page heading */}
      <Typography variant='h1' className={classes.heading}>
        {pageData.heading}
      </Typography>

      {/* Page subheading, optionally this section might be rendered with markdown viewer */}
      <Typography variant='body1' className={classes.subHeading}>
        {pageData.subHeading}
      </Typography>

      {/* Render innovations */}
      <div className={classes.content}>
        {pageData.innovations.map((innovation, index) => (
          <InnovationCard
            key={index}
            heading={innovation.heading}
            text={innovation.text}
            image={innovation.image}
            actions={innovation.actions}
            className={classes.card}
          />
        ))}
      </div>
    </Layout>
  );
};

export async function getStaticProps() {
  // Fake api calls. Ideally, graphql query
  const pageData = await fetchAPI('api/innovation');

  return {
    props: { pageData },
    revalidate: 1,
  };
}
export default Innovation;
