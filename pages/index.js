import React from 'react';

// Material ui imports
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import MailIcon from '@material-ui/icons/Mail';
import ShareIcon from '@material-ui/icons/Share';
import SearchIcon from '@material-ui/icons/Search';

// custom components
import Layout from '../src/components/Layout';
import BlogCard from '../src/components/Cards/BlogCard';
import CaseStudyCard from '../src/components/Cards/CaseStudyCard';
import WhitepaperCard from '../src/components/Cards/WhitepaperCard';
import Button from '../src/components/Buttons/Button';
import TextField from '../src/components/Inputs/TextField';
import Select from '../src/components/Inputs/Select';
import Checkbox from '../src/components/Inputs/CheckBox';
import UploadButton from '../src/components/Inputs/UploadButton';
import SocialButton from '../src/components/Buttons/SocialButton';
import ServiceButton from '../src/components/Buttons/ServiceButton';
import {
  blueColor,
  orangeColor,
  redColor,
  turquoiseColor,
} from '../src/constants/colors';
import { fetchAPI } from '../src/api';

const useStyles = makeStyles((theme) => ({
  root: {},
  section: {
    paddingTop: 80,
    paddingBottom: 80,
  },
  gridItem: {
    [theme.breakpoints.down('xs')]: {
      justifyContent: 'center',
    },
  },
  uiComponent: { marginBottom: 40 },
  sectionTitle: {
    fontWeight: 500,
    padding: 8,
    marginBottom: 40,
    [theme.breakpoints.down('xs')]: {
      textAlign: 'center',
    },
  },
}));

const Home = ({ pageData }) => {
  const classes = useStyles();

  return (
    <Layout seo={pageData.seo} carausel={pageData.carausel}>
      {/* Ctx Buttons */}
      <Grid container className={classes.section}>
        <Grid item xs={12} sm={3}>
          <Typography className={classes.sectionTitle}>
            {'CTA Buttons'}
          </Typography>
        </Grid>
        <Grid container item xs={12} sm={9}>
          <Grid
            container
            item
            xs={12}
            sm={6}
            direction='column'
            justify='center'
            alignItems='center'
          >
            <Typography variant='body1' className={classes.sectionTitle}>
              Outlined
            </Typography>
            <Button
              variant='outlined'
              color={redColor[0]}
              className={classes.uiComponent}
            >
              {'CALL TO ACTION'}
            </Button>
            <Button
              variant='outlined'
              color={blueColor[0]}
              className={classes.uiComponent}
            >
              {'CALL TO ACTION'}
            </Button>
            <Button
              variant='outlined'
              color={turquoiseColor[0]}
              className={classes.uiComponent}
            >
              {'CALL TO ACTION'}
            </Button>
            <Button
              variant='outlined'
              color={orangeColor[0]}
              className={classes.uiComponent}
            >
              {'CALL TO ACTION'}
            </Button>
          </Grid>
          <Grid
            container
            item
            xs={12}
            sm={6}
            direction='column'
            justify='center'
            alignItems='center'
          >
            <Typography variant='body1' className={classes.sectionTitle}>
              Contained
            </Typography>
            <Button
              variant='contained'
              color={redColor[0]}
              className={classes.uiComponent}
            >
              {'CALL TO ACTION'}
            </Button>
            <Button
              variant='contained'
              color={blueColor[0]}
              className={classes.uiComponent}
            >
              {'CALL TO ACTION'}
            </Button>
            <Button
              variant='contained'
              color={turquoiseColor[0]}
              className={classes.uiComponent}
            >
              {'CALL TO ACTION'}
            </Button>
            <Button
              variant='contained'
              color={orangeColor[0]}
              className={classes.uiComponent}
            >
              {'CALL TO ACTION'}
            </Button>
          </Grid>
        </Grid>
      </Grid>

      {/* Form Fields */}
      <Grid container className={classes.section}>
        <Grid item xs={12} sm={3}>
          <Typography className={classes.sectionTitle}>
            {'Form Fields'}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={9} className={classes.gridItem}>
          <TextField
            placeholder='hint text'
            className={classes.uiComponent}
            fullWidth
          />
          <TextField
            placeholder='hint text'
            value='Joseph Y. Kalayci'
            className={classes.uiComponent}
            fullWidth
          />
          <TextField
            placeholder='hint text'
            value='Joseph Y. Kalayci'
            className={classes.uiComponent}
            fullWidth
            error
            helperText='error message'
          />
        </Grid>
      </Grid>

      {/* Drop Down */}
      <Grid container className={classes.section}>
        <Grid item xs={12} sm={3}>
          <Typography className={classes.sectionTitle}>
            {'Drop Down'}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={9} className={classes.gridItem}>
          <Select
            placeholder='Hint text'
            fullWidth
            options={[
              { label: 'Option 1', value: '1' },
              { label: 'Option 2', value: '2' },
              { label: 'Option 3', value: '3' },
            ]}
          />
        </Grid>
      </Grid>

      {/* Checkbox */}
      <Grid container className={classes.section}>
        <Grid item xs={12} sm={3}>
          <Typography className={classes.sectionTitle}>{'Checkbox'}</Typography>
        </Grid>
        <Grid item xs={9} className={classes.gridItem}>
          <Checkbox label='Subscribe to newsletter' />
          <Checkbox label='Subscribe to newsletter' checked />
        </Grid>
      </Grid>

      {/* Contextual Search Bar */}
      <Grid container className={classes.section}>
        <Grid item xs={12} sm={3}>
          <Typography className={classes.sectionTitle}>
            {'Contextual Search Bar'}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={9} className={classes.gridItem}>
          <TextField
            placeholder='search here'
            className={classes.uiComponent}
            fullWidth
            InputProps={{
              endAdornment: <SearchIcon />,
            }}
          />
        </Grid>
      </Grid>

      {/* Form Action button */}
      <Grid container className={classes.section}>
        <Grid item xs={12} sm={3}>
          <Typography className={classes.sectionTitle}>
            {'Action button'}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={9} className={classes.gridItem}>
          <UploadButton
            label='Attach File'
            id='file-upload-2'
            accept='image/*'
            id='file-upload'
            multiple
            type='file'
          />
        </Grid>
      </Grid>

      {/* Social button */}
      <Grid container className={classes.section}>
        <Grid item xs={12} sm={3}>
          <Typography className={classes.sectionTitle}>
            {'Social button'}
          </Typography>
        </Grid>
        <Grid
          item
          container
          xs={12}
          sm={9}
          className={classes.gridItem}
          direction='row'
          alignItems='flex-start'
        >
          <SocialButton>
            <LinkedInIcon fontSize='inherit' />
          </SocialButton>
          <SocialButton>
            <TwitterIcon fontSize='inherit' />
          </SocialButton>
          <SocialButton>
            <InstagramIcon fontSize='inherit' />
          </SocialButton>
          <SocialButton>
            <YouTubeIcon fontSize='inherit' />
          </SocialButton>
          <SocialButton>
            <MailIcon fontSize='inherit' />
          </SocialButton>
          <SocialButton>
            <ShareIcon fontSize='inherit' />
          </SocialButton>
        </Grid>
      </Grid>

      {/* Social button */}
      <Grid container className={classes.section}>
        <Grid item xs={12} sm={3}>
          <Typography className={classes.sectionTitle}>
            {'Social button'}
          </Typography>
        </Grid>
        <Grid
          item
          container
          xs={12}
          sm={9}
          className={classes.gridItem}
          direction='row'
          alignItems='flex-start'
        >
          <ServiceButton label='Service Offering' />
        </Grid>
      </Grid>

      {/* Cards */}
      <Typography
        variant='h2'
        style={{ margin: '80px 0', textAlign: 'center' }}
      >
        {'Cards'}
      </Typography>
      {/* Case study card */}
      <div className={classes.section}>
        <CaseStudyCard
          heading={pageData.caseStudy.heading}
          title={pageData.caseStudy.title}
          image={pageData.caseStudy.image}
          slug={pageData.caseStudy.slug}
          category={pageData.caseStudy.category}
        />
      </div>
      <div className={classes.section}>
        <CaseStudyCard
          heading={pageData.caseStudy.heading}
          title={pageData.caseStudy.title}
          image={pageData.caseStudy.image}
          slug={pageData.caseStudy.slug}
          category={pageData.caseStudy.category}
          reverseOrder
        />
      </div>
      {/* Whitepaper card */}
      <div className={classes.section}>
        <WhitepaperCard
          title={pageData.whitepaper.title}
          slug={pageData.whitepaper.slug}
        />
      </div>
      {/* Blog card */}
      <div className={classes.section}>
        <BlogCard
          heading={pageData.blogPost.heading}
          title={pageData.blogPost.title}
          author={pageData.blogPost.author}
          slug={pageData.blogPost.slug}
          category={pageData.blogPost.category}
        />
      </div>
      <div className={classes.section}>
        <BlogCard
          title={pageData.blogPost.title}
          author={pageData.blogPost.author}
          slug={pageData.blogPost.slug}
          category={pageData.blogPost.category}
          reverseOrder
        />
      </div>
    </Layout>
  );
};

export async function getStaticProps() {
  // Fake api calls. Ideally, graphql query
  const pageData = await fetchAPI('api/home');

  return {
    props: { pageData },
    revalidate: 1,
  };
}
export default Home;
