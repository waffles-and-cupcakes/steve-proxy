import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import s from './../css/reviewsList.css';


class Review extends React.Component {
  constructor(props) {
    super(props);

    this.state = {readMoreClicked: false};
  } 

  readMore() {
    console.log('clicked');
    this.setState({readMoreClicked: true});
  }

  renderBody() {
    if (this.props.review.body.length > 280 && !this.state.readMoreClicked) {
      return (
        <div>
          <span className="comment">{this.props.review.body.substr(0, 279)}...</span>
          <span className={s['read-more']} onClick={this.readMore.bind(this)}>Read more</span>
        </div>
      );
    } else {
      return (<div><span className="comment">{this.props.review.body}</span></div>);
    }
  }

  render() {
    return (
      <li className={`collection-item avatar ${s['collection-item']}`}>
        <img src={this.props.review.user_avatar} className="circle" />
        <span className="title"><b>{this.props.review.first_name}</b></span>
        <p>{moment(this.props.review.created_at, "MM/DD/YY").format('MMMM YYYY')}</p>
        <a href="#!" className="secondary-content"><i className={`material-icons ${s['icon-flag']}`}>flag</i></a>
        {this.renderBody()}
      </li>
    );
  }
}

export default Review;