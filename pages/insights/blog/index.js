import React from 'react';

// Material UI components
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

// Custom components
import Layout from '../../../src/components/Layout';

const useStyles = makeStyles((theme) => ({
  heading: { marginTop: 60 },
  section: {
    height: '80vh',
  },
}));

const parentRoute = { label: 'insights', href: '/insights' };

const Blog = ({ pageData }) => {
  const classes = useStyles();

  return (
    <Layout parentRoute={parentRoute}>
      <section className={classes.section}>
        <Typography variant='h1' className={classes.heading}>
          {'Blog page is coming soon...'}
        </Typography>
      </section>
    </Layout>
  );
};

export async function getStaticProps() {
  return {
    props: {},
    revalidate: 1,
  };
}
export default Blog;
