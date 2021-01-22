import {
  redColor,
  blueColor,
  orangeColor,
  turquoiseColor,
} from './constants/colors';

// Dummy api calls to fetc page data
export async function fetchAPI(path) {
  /* const setTimeoutPromise = (timeout) => {
    return new Promise((resolve) => setTimeout(resolve, timeout));
  };
  await setTimeoutPromise(100); */

  if (path === 'api/home') {
    return data.homepage;
  } else if (path === 'api/insights') {
    return data.insightPage;
  } else if (path === 'api/innovation') {
    return data.innovationPage;
  }
}

const data = {
  homepage: {
    seo: { metaTitle: 'TechGuilds', metaDescription: 'company info' },
    carausel: [
      {
        image: '/hero.jpg',
        heading: 'Turn your ideas to Sitecore',
        text: 'Turn your ideas to Sitecore',
        button: {
          color: redColor[0],
          variant: 'contained',
          text: 'EXPLORE NOW',
          actionUrl: '/#',
        },
      },
      {
        image: '/hero.jpg',
        heading: 'Turn your ideas to Sitecore',
        text: 'Turn your ideas to Sitecore',
        button: {
          color: turquoiseColor[0],
          variant: 'contained',
          text: 'EXPLORE NOW',
          actionUrl: '/#',
        },
      },
    ],
    caseStudy: {
      heading: 'Get started',
      title:
        'Canadian Nurses Association: Automated Personalized Portal Build on Sitecore',
      slug: '/#',
      category: 'healthcare',
      image: {
        src: 'https://source.unsplash.com/0YBIMOqQzt0',
        alt: 'alternative text',
      },
    },
    blogPost: {
      heading: 'keep learning',
      category: 'healthcare',
      slug: '/#',
      title:
        'Optimizing Sitecore Experience Editor - Rendering Multiple child Items in One Component',
      image: { src: '', alt: 'alternative text' },
      author: {
        name: 'Joseph Y. Kalayci',
        slug: '/#',
        title: 'React Developer',
        avatar: {
          src:
            'https://josephkalayci.com/static/997ebc70d9047281da6decebc22fdf07/e8026/d6428f857cd99935bd4793333988e67f.png',

          alt: 'alternative text',
        },
      },
    },
    innovation: {
      heading: 'TORONTO SITECORE USER GROUP',
      text:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum  of letters',
      image: {
        src: 'https://source.unsplash.com/Ajcipx1VDXI',
        alt: 'alt text',
      },
      actions: [
        {
          label: 'JOIN US!',
          buttonColor: redColor[0],
          buttonType: 'outlined',
          action: 'Pre defined action',
        },
      ],
    },
    whitepaper: {
      title:
        'Optimizing Sitecore Experience Editor - Rendering Multiple child Items in One Component',
      slug: '/#',
    },
  },
  insightPage: {
    heading: 'INSIGHTS',
    seo: { metaTitle: 'Insight', metaDescription: 'company info' },
    blogPosts: [
      {
        heading: 'keep learning',
        category: 'healthcare',
        slug: '/#',
        title:
          'Optimizing Sitecore Experience Editor - Rendering Multiple child Items in One Component',
        image: { src: '', alt: 'alternative text' },
        author: {
          name: 'Joseph Y. Kalayci',
          slug: '/#',
          title: 'React Developer',
          avatar: {
            src:
              'https://josephkalayci.com/static/997ebc70d9047281da6decebc22fdf07/e8026/d6428f857cd99935bd4793333988e67f.png',
            alt: 'alternative text',
          },
        },
      },
      {
        heading: 'keep learning',
        category: 'healthcare',
        slug: '/#',
        title:
          'Optimizing Sitecore Experience Editor - Rendering Multiple child Items in One Component',
        image: { src: '', alt: 'alternative text' },
        author: {
          name: 'Joseph Y. Kalayci',
          slug: '/#',
          title: 'React Developer',
          avatar: {
            src:
              'https://josephkalayci.com/static/997ebc70d9047281da6decebc22fdf07/e8026/d6428f857cd99935bd4793333988e67f.png',
            alt: 'alternative text',
          },
        },
      },
      {
        heading: 'keep learning',
        category: 'healthcare',
        slug: '/#',
        title:
          'Optimizing Sitecore Experience Editor - Rendering Multiple child Items in One Component',
        image: { src: '', alt: 'alternative text' },
        author: {
          name: 'Joseph Y. Kalayci',
          slug: '/#',
          title: 'React Developer',
          avatar: {
            src:
              'https://josephkalayci.com/static/997ebc70d9047281da6decebc22fdf07/e8026/d6428f857cd99935bd4793333988e67f.png',
            alt: 'alternative text',
          },
        },
      },
    ],
    whitepapers: [
      {
        title:
          'Optimizing Sitecore Experience Editor - Rendering Multiple child Items in One Component',
        slug: '/#',
      },
      {
        title:
          'Optimizing Sitecore Experience Editor - Rendering Multiple child Items in One Component',
        slug: '/#',
      },
      {
        title:
          'Optimizing Sitecore Experience Editor - Rendering Multiple child Items in One Component',
        slug: '/#',
      },
    ],
    innovation: {
      heading: 'TORONTO SITECORE USER GROUP',
      text:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum  of letters',
      image: {
        src: 'https://source.unsplash.com/Ajcipx1VDXI',
        alt: 'alt text',
      },
      actions: [
        {
          label: 'JOIN US!',
          buttonColor: redColor[0],
          buttonType: 'outlined',
          action: 'Pre defined action',
        },
      ],
    },
  },
  innovationPage: {
    seo: { metaTitle: 'Innovation', metaDescription: 'company info' },
    heading: 'INNOVATION',
    subHeading:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum  of letters readable content of a page when looking at its layout. The point of using Lorem Ipsum  of letters',
    innovations: [
      {
        heading: 'PEEK',
        text:
          'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum  of letters',
        image: {
          src: 'https://source.unsplash.com/Ajcipx1VDXI',
          alt: 'alt text',
        },
        actions: [
          {
            label: 'GET PEEK',
            buttonColor: redColor[0],
            buttonType: 'outlined',
            action: 'Pre defined action',
          },
        ],
      },
      {
        heading: 'MOCKUP TO CODE',
        text:
          'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum  of letters',

        image: {
          src: 'https://source.unsplash.com/Ajcipx1VDXI',
          alt: 'alt text',
        },
        actions: [
          {
            label: `\u25B6 SEE HOW IT WORK`,
            buttonColor: blueColor[0],
            buttonType: 'outlined',
            action: 'Pre defined action',
          },
          {
            label: 'GET MOCKUP TO CODE',
            buttonColor: blueColor[0],
            buttonType: 'contained',
            action: 'Pre defined action',
          },
        ],
      },
    ],
  },
};
