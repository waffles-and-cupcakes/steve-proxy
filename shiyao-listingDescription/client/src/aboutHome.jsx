import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

const customStyles = {
  content : {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    overflow: 'scroll',
    width: '600px',
    height: '600px',
  }
};

class AboutHome extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
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

  render() {

    var summaryArr = this.props.homeData.aboutHome.summary.split('\n \r');
    var spaceArr = this.props.homeData.aboutHome.space.split('\n \r');
    var guestArr = this.props.homeData.aboutHome.guestAccess.split('\n \r');
    var interactionArr = this.props.homeData.aboutHome.interactionWithGuests.split('\n \r');
    var otherNotesArr = this.props.homeData.aboutHome.otherNotes.split('\n \r');

    return (
      <div>
        <div><span className="link" onClick={this.openModal}>Read more about this home</span></div>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="AboutHome"
        >
        <a className="btn-floating btn-small waves-effect waves-light white" onClick={this.closeModal}><i className="material-icons cyan-text text-darken-4">clear</i></a>
          <div className="smtitle">Summary </div>
            <div className="para">
              {summaryArr.map((para, index) => {
                return <p key={index}>{para}<br/></p>;
              })}
            </div>      
          <div className="smtitle">Space</div>
            <div className="para">
              {spaceArr.map((para, index) => {
                return <p key={index}>{para}<br/></p>;
              })}
            </div>    
          <div className="smtitle">Guest access</div>
            <div className="para">
              {guestArr.map((para, index) => {
                return <p key={index}>{para}<br/></p>;
              })}
            </div>    
          <div className="smtitle">Interaction with guests</div>
            <div className="para">
              {interactionArr.map((para, index) => {
                return <p key={index}>{para}<br/></p>;
              })}
            </div>    
          <div className="smtitle">Other notes</div>
            <div className="para">
              {otherNotesArr.map((para, index) => {
                return <p key={index}>{para}<br/></p>;
              })}
            </div>       
        </Modal>
      </div>
    );
  }
}

export default AboutHome;

