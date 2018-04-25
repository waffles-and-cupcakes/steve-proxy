import React from 'react';
import Slider from 'react-slick';
import style from './CarouselThumbnail.css';

const getNumSlides = (windowWidth) => {
  let numSlides = 9;
  if (window.innerWidth < 600) {
    numSlides = 1;
  } else if (window.innerWidth < 850) {
    numSlides = 3;
  } else if (window.innerWidth < 1050) {
    numSlides = 5;
  } else if (window.innerWidth < 1200) {
    numSlides = 6;
  } else if (window.innerWidth < 1500) {
    numSlides = 7;
  }
  return numSlides;
};

const CarouselThumbnail = (props) => {
  const numSlides = getNumSlides(props.windowWidth);

  return (
    <Slider
      accessability={true}
      swipe={false}
      arrows={false}
      focusOnSelect={true}
      centerMode={true}
      slidesToShow={numSlides}
      asNavFor={props.main}
      ref={props.setThumbnail} >
      {props.photos.map((photo, index) => {
        return (
          <div key={photo.thumbnailUrl + index} >
            <div className={style.thumbContainer} >
              <img className={style.thumbnailImage} src={`${photo.thumbnailUrl}`} />
            </div>
          </div>
        );
      })}
    </Slider>
  );
};

export default CarouselThumbnail;