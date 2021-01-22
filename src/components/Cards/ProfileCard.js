import React from 'react';

// nodejs library to set properties for components
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import { Avatar, Typography } from '@material-ui/core';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
  root: { display: 'flex' },
  image: { marginRight: 24, height: 70, width: 70 },
  contentContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  name: { textTransform: 'uppercase', fontWeight: 600, fontSize: 16 },
  title: { fontSize: 12 },
}));

const ProfileCard = (props) => {
  const { image, name, title, className } = props;
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)}>
      <Avatar alt={image.alt} src={image.src} className={classes.image} />
      <div className={classes.contentContainer}>
        {name && (
          <Typography variant='body1' className={classes.name}>
            {name}
          </Typography>
        )}
        {title && (
          <Typography variant='body2' className={classes.title}>
            {title}
          </Typography>
        )}
      </div>
    </div>
  );
};

ProfileCard.propTypes = {
  image: PropTypes.shape({
    scr: PropTypes.string,
    alt: PropTypes.string,
  }),
  title: PropTypes.string,
  name: PropTypes.string,
  className: PropTypes.string,
};

export default ProfileCard;
