import React from 'react';
import ReactDOM from 'react-dom';
import s from './../css/ratingsHeader.css';


class Search extends React.Component {
  
  constructor(props) {
    super(props);
    this.state =  {
      value: ''
    };
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  search(event) {
    if(event.key == 'Enter'){
      this.props.filterReviews(this.state.value);
    }  
  }

  render() {
    const handleChange = this.handleChange.bind(this);
    const search = this.search.bind(this);
    return (
      <div className="input-field col s12 m4">
        <input className={s['rev-search']} value={this.state.value} onChange={handleChange} 
        onKeyPress={search} placeholder="Search reviews"></input>
      </div>
    )
  }
}

export default Search;