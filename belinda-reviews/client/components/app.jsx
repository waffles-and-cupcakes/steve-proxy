import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import RatingsHeader from './ratingsHeader';
import ReviewsList from './reviewsList';

import mockData from './../mockData';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reviews: mockData,
      filtered: mockData,
      activePage: '1'
    }
  }

  componentDidMount() {
    var roomNum = window.location.pathname.split('/')[2];
    axios.get(`http://localhost:3004/rooms/${roomNum}/reviews`)
    .then((res) => {
      // console.log('RESPONSE: ', res);
      this.setState({
        reviews: res.data,
        filtered: res.data
      });
    })
    .catch((err) => {
      console.log(`error GET-ing /rooms/${roomNum}/reviews`);
    });
  }

  changePage(newPage) {
    this.setState({activePage: newPage});
  }

  filterReviews(term) {
    term = term.toLowerCase();
    // console.log('reach app.jsx: ', term);
    var filtered = this.state.reviews.filter(review => review.body.toLowerCase().includes(term));
    this.setState({
      filtered: filtered,
      activePage: '1'
    });
  }

  render() {
    return (
      <div>
        <RatingsHeader reviews={this.state.reviews} filterReviews={this.filterReviews.bind(this)} />
        <ReviewsList changePage={this.changePage.bind(this)} activePage={this.state.activePage} reviews={this.state.filtered} />
      </div>
    );
  }
}

export default App;