import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';

//According to specification following infos can be fetced from CMS as a static prop
const navigationLinks = [
  { label: 'Services', href: '/services' },
  { label: 'Work', href: '/work' },
  { label: 'Innovation', href: '/innovation' },
  {
    label: 'Insights',
    href: '/insights',
    subLinks: [
      { label: 'Blog', href: '/insights/blog' },
      { label: 'Whitepapers', href: '/insights/whitepapers' },
    ],
  },
  {
    label: 'About Us',
    href: '/about-us',
    subLinks: [
      { label: 'Team', href: '/team' },
      { label: 'Careers', href: '/careers' },
    ],
  },
  { label: 'Privacy', href: '/privacy' },
];

const socialLinks = [
  {
    label: 'Instagram',
    href: '/#',
    icon: <InstagramIcon fontSize='inherit' />,
  },
  { label: 'Linkedin', href: '/#', icon: <LinkedInIcon fontSize='inherit' /> },
  { label: 'Facebook', href: '/#', icon: <FacebookIcon fontSize='inherit' /> },
  { label: 'Twitter', href: '/#', icon: <TwitterIcon fontSize='inherit' /> },
];

const companyInfo = {
  email: 'engage@techguilds.com',
  phones: ['+1 877 317 4118 (toll free)', '+1 877 317 4118'],
  address: {
    street: '5353 Dundas St. W.',
    unit: '#510',
    city: 'Toronto',
    province: 'ON',
    postcode: 'M9B6H8',
    country: 'Canada',
  },
};

const copyright = '© TechGuilds Consulting Inc. 2020';

export { navigationLinks, socialLinks, copyright, companyInfo };
