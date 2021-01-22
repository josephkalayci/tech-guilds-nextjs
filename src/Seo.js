import Head from 'next/head';

const siteName = 'TechGuilds';

const Seo = ({ seo }) => {
  return (
    <Head>
      {seo.metaTitle && <title>{`${seo.metaTitle} | ${siteName}`}</title>}
      {seo.metaDescription && (
        <meta name='description' content={seo.metaDescription} />
      )}

      {/* Other dynamic seo information can be added here */}
    </Head>
  );
};

export default Seo;
