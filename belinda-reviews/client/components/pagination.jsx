import React from 'react';
import ReactDOM from 'react-dom';
import s from './../css/reviewsList.css';


class Pagination extends React.Component {
  constructor(props) {
    super(props); //changePage, activePage, numPages
    // console.log('num pages in constructor' + this.props.numPages);

    this.state = {
      numbers: this.setLayout(parseInt(this.props.activePage))
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps !== this.props) {
      this.setState({
        numbers: this.setLayout(parseInt(this.props.activePage))
      });
    }
  }
  
  setLayout(active) {
    var nPages = parseInt(this.props.numPages);
    // console.log('nPages: ', nPages, ', active: ', active);
    // var active = parseInt(this.props.activePage);
    var numbers = [];
    // console.log('nPages' + nPages);
    if (nPages > 5) {
      if (active !== 1) numbers.push('<');
      numbers.push('1');
      
      if (active === 1) {
        numbers = numbers.concat(['2', '3', '...']);
      } else if (active === 2 || active === 3) {
        numbers = numbers.concat(['2', '3', '4', '...']);
      } else if (active === nPages - 1 || active === nPages - 2) {
        numbers = numbers.concat(['...', (nPages - 3).toString(), (nPages - 2).toString(), (nPages - 1).toString()]);
      } else if (active === nPages) {
        numbers = numbers.concat(['...', (nPages - 2).toString(), (nPages - 1).toString()]);
      } else {
        numbers = numbers.concat(['...', (active - 1).toString(), (active).toString(), (active + 1).toString(), '...']);
      }

      numbers.push(nPages.toString());
      if (active !== nPages) numbers.push('>');
    } else {
      for (var i = 1; i <= nPages; i++) {
        numbers.push(i.toString());
      }
    }
    // console.log(numbers);
    return numbers;
  }

  handlePageClick(event) {
    this.setState({numbers: this.setLayout(parseInt(event.currentTarget.textContent))});
    this.props.changePage(event.currentTarget.textContent);
  }

  handleArrowClick(direction, event) {
    var newPg;
    if (direction === 'left') {
      newPg = (parseInt(this.props.activePage) - 1).toString()
    } else if (direction === 'right') {
      newPg = (parseInt(this.props.activePage) + 1).toString();
    }
    this.setState({numbers: this.setLayout(parseInt(newPg))});
    this.props.changePage(newPg);
  }

  listElement(elem, index) {
    const handlePageClick = this.handlePageClick.bind(this);
    if (elem === '<') {
      return <li key={index} className={`${s['pg-arrow']}`} onClick={this.handleArrowClick.bind(this, 'left')}><a href="#!"><i className={`material-icons ${s['icon-arrow-left']}`}>arrow_drop_down</i></a></li>;
    } else if (elem === '>') {
      return <li key={index} className={s['pg-arrow']} onClick={this.handleArrowClick.bind(this, 'right')}><a href="#!"><i className={`material-icons ${s['icon-arrow-right']}`}>arrow_drop_down</i></a></li>; //disabled
    } else if (elem === '...') {
      return <li key={index}>...</li>;
    } else {
      if (this.props.activePage === elem) {
        return <li key={index} className={`${s['pg-active']} ${s['pg-num']}`} onClick={handlePageClick}><a href="#!">{elem}</a></li>
      } else {
        return <li key={index} className={s['pg-num']} onClick={handlePageClick}><a href="#!">{elem}</a></li>
      }
    }
  }

  /*
  4-5 numbers
  */
  render() {
    const listElement = this.listElement.bind(this);
    return (
      <ul className={`row pagination ${s.pagination}`}>
        {this.state.numbers.map(listElement)}
      </ul>
    )
  }
}

export default Pagination;