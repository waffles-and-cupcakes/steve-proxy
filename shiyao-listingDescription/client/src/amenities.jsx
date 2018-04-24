import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    overflow: 'scroll',
    height: '600px',
    width: '600px',
  }
};

class Amenities extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.renderAmenities = this.renderAmenities.bind(this);
  }

  componentDidMount() {
    Modal.setAppElement('#readmore');
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  renderAmenities() {
    return this.props.homeData.amenities.map((type, index) => {
      return (
        <div key={index}>
          <div className="amenityType">{type.amenityType}</div>
          { type.amenityValue.map((amenity, index) => {
              return (
                <div className="section" key={index}>
                  <div className="amenityName">{amenity.name}</div>
                  <div>{amenity.value}</div>
                </div>
              )
            })
          }
        </div>
      )   
    })
  }

  render() {
 
    return (
      <div>
        <div className="link"><span onClick={this.openModal}>Show all amenities</span></div>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
        <a className="btn-floating btn-small waves-effect waves-light white" onClick={this.closeModal}><i className="material-icons cyan-text text-darken-4">clear</i></a>
          <div id="amenityTitle">Amenities</div>
          <div>
            {this.renderAmenities()}
          </div>
          <div>
            <div className="amenityType">Not included</div>
            {this.props.homeData.notIncludedAmenities.map((amenity) => {
              return <div id="notIncludedAmenities" className="section">{amenity}</div>
            })}
          </div>       
        </Modal>
      </div>
    );
  }
}

export default Amenities;

