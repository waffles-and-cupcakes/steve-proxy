import React from 'react';
import CarouselImage from './CarouselImage';
import CarouselThumbnail from './CarouselThumbnail';
import style from './Carousel.css';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      main: null,
      thumbnail: null,
      currentImageIndex: 0,
      windowWidth: 0,
    };

    this.photosCount = this.props.photos.length;

    this.setMain = this.setMain.bind(this);
    this.setThumbnail = this.setThumbnail.bind(this);
    this.setCurrentImageIndex = this.setCurrentImageIndex.bind(this);
    this.updateInnerWidth = this.updateInnerWidth.bind(this);
  }

  componentDidMount() {
    this.setState({
      main: this.sliderMain,
      thumbnail: this.sliderThumbnail,
    });
    this.updateInnerWidth();
    window.addEventListener('resize', this.updateInnerWidth);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateInnerWidth);
  }

  updateInnerWidth() {
    this.setState({
      windowWidth: window.innerWidth
    });
  }

  setMain(slider) {
    this.sliderMain = slider;
  }

  setThumbnail(slider) {
    this.sliderThumbnail = slider;
  }

  setCurrentImageIndex(index) {
    this.setState({currentImageIndex: index});
  }

  render() {
    return (
      <div className={style.container}>
        <CarouselImage
          setMain={this.setMain}
          sliderMain={this.sliderMain}
          photos={this.props.photos}
          thumbnail={this.state.thumbnail}
          setCurrentImageIndex={this.setCurrentImageIndex} />
        <ul className={style.photoDescription}>
          <li>{`${this.state.currentImageIndex + 1}/${this.photosCount}: ${this.props.photos[this.state.currentImageIndex].title}`}</li>
          {this.props.photos[this.state.currentImageIndex].isVerified ? <li className={style.verified}>Verified Photo</li> : ''}
        </ul>
        <CarouselThumbnail windowWidth={this.state.windowWidth} setThumbnail={this.setThumbnail} sliderThumbnail={this.sliderThumbnail} photos={this.props.photos} main={this.state.main} />
      </div>
    );
  }
}

export default Carousel;