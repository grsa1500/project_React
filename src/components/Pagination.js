import React, { Component } from 'react'
import ReactPaginate from 'react-paginate';

export class Pagination extends Component {


  render() {

    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(this.props.books.length /this.props.booksPerPage); i++) {
pageNumbers.push(i);
    }
    return (
      <nav >
<ul className="pagination">
{pageNumbers.map(number => (
  <li key={number} >
<span onClick={() =>this.props.paginate(number)} >{number}</span>
  </li>
))}
</ul>
      </nav>
    )
  }
}

export default Pagination
