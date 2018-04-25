import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Modal from './Modal';
import style from './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      photos: [
        {
          photoUrl: ''
        }
      ]
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.toggleScrolling = this.toggleScrolling.bind(this);
  }

  componentDidMount() {
    const id = window.location.pathname.split('/')[2];
    axios.get(`http://localhost:3002/rooms/${id}/photos`)
      .then(res => {
        this.setState({
          photos: res.data
        });
      })
      .catch(err => {
        console.error(err);
      });
  }

  toggleModal(e) {
    this.setState({ isOpen: !this.state.isOpen }, this.toggleScrolling);
  }

  toggleScrolling() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.toggle(style.modalOpen);
  }

  render() {
    let backgroundStyle = {
      backgroundImage: `url('${this.state.photos[0].photoUrl}')`
    };
    return (
      <div>
        <div onClick={this.toggleModal} className={style.bannerImg} style={backgroundStyle}>
          <button className={style.viewPhotos}>View Photos</button>
        </div>
        <Modal
          photos={this.state.photos}
          open={this.state.isOpen}
          toggleModal={this.toggleModal} />
      </div>
    );
  }
}

export default App;