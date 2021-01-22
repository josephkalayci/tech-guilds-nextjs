import React from 'react';

// nodejs library to set properties for components
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import HeroSlide from './HeroSlide';

let settings = {
  dots: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  pauseOnFocus: true,
  pauseOnDotsHover: true,
};

//TODO:add dot color variant as a prop
const Carausel = (props) => {
  const { slides } = props;

  return (
    <Slider {...settings}>
      {slides.map((slide, index) => (
        <HeroSlide
          key={index}
          heading={slide.heading}
          text={slide.text}
          bgImage={slide.image}
          button={slide.button}
        />
      ))}
    </Slider>
  );
};

Carausel.propTypes = {
  slides: PropTypes.arrayOf(
    PropTypes.shape({
      heading: PropTypes.string,
      text: PropTypes.string,
      image: PropTypes.string,
      button: PropTypes.shape({
        text: PropTypes.string,
        variant: PropTypes.oneOf(['outlined', 'contained']),
        color: PropTypes.string,
        actionUrl: PropTypes.string,
      }),
    })
  ),
};

export default Carausel;
