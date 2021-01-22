import React from 'react';

// Material UI components
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import clsx from 'clsx';

// Custom components
import Layout from '../../src/components/Layout';
import BlogCard from '../../src/components/Cards/BlogCard';
import Button from '../../src/components/Buttons/Button';
import { blueColor, orangeColor } from '../../src/constants/colors';
import WhitepaperCard from '../../src/components/Cards/WhitepaperCard';
import InnovationCard from '../../src/components/Cards/InnovationCard';
import SubscriptionForm from '../../src/components/SubscriptionForm';
import { fetchAPI } from '../../src/api';

const useStyles = makeStyles((theme) => ({
  heading: { marginTop: 60, marginBottom: 50 },
  section: {
    paddingTop: 100,
    paddingBottom: 0,

    [theme.breakpoints.down('sm')]: {
      paddingTop: 50,
    },
  },
  sectionHeading: { textAlign: 'center', marginBottom: 70 },
  card: { marginBottom: 130 },
  ctaButtonContainer: {
    marginTop: 140,
    marginBottom: 120,
    textAlign: 'center',
  },
  ctaButton: {},
  subscriptionForm: { paddingBottom: 200 },
}));

const parentRoute = { label: 'home', href: '/' };

const Insights = ({ pageData }) => {
  const classes = useStyles();

  return (
    <Layout parentRoute={parentRoute} seo={pageData.seo}>
      {/* Page heading */}
      <Typography variant='h1' className={classes.heading}>
        {pageData.heading}
      </Typography>
      {/* Render blog posts */}
      <section className={classes.section}>
        <Typography
          variant='h3'
          component='h2'
          className={classes.sectionHeading}
        >
          {'BLOG'}
        </Typography>
        {pageData.blogPosts.map((post, id) => (
          <BlogCard
            className={classes.card}
            key={id}
            heading={post.heading}
            title={post.title}
            author={post.author}
            slug={post.slug}
            category={post.category}
            reverseOrder={id % 2 == 0 ? true : false} //Optionally, order information can be read from post data
          />
        ))}
        <div className={classes.ctaButtonContainer}>
          <Button
            variant='outlined'
            color={orangeColor[0]}
            onClick={() => alert('CTA button pressed')}
          >
            VIEW ALL POSTS
          </Button>
        </div>
      </section>
      {/* Render whitepapers */}
      <section className={classes.section}>
        <Typography
          variant='h3'
          component='h2'
          className={classes.sectionHeading}
        >
          {'WHITEPAPERS'}
        </Typography>
        {pageData.whitepapers.map((whitepaper, id) => (
          <WhitepaperCard
            className={classes.card}
            key={id}
            title={whitepaper.title}
            slug={whitepaper.slug}
          />
        ))}
        <div className={classes.ctaButtonContainer}>
          <Button
            variant='outlined'
            color={blueColor[0]}
            onClick={() => alert('CTA button pressed')}
          >
            VIEW ALL WHITEPAPERS
          </Button>
        </div>
      </section>
      {/* Render innovations */}
      <section className={classes.section}>
        <InnovationCard
          heading={pageData.innovation.heading}
          text={pageData.innovation.text}
          image={pageData.innovation.image}
          actions={pageData.innovation.actions}
          className={classes.card}
        />
      </section>
      {/* Render subscription form */}
      <section className={clsx(classes.section, classes.subscriptionForm)}>
        <SubscriptionForm />
      </section>
    </Layout>
  );
};

export async function getStaticProps() {
  // Fake api calls. Ideally, graphql query
  const pageData = await fetchAPI('api/insights');

  return {
    props: { pageData },
    revalidate: 1,
  };
}
export default Insights;
