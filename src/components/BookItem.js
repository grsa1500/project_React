import React, { useState, useEffect, Component } from 'react'
import BookUpdate from './admin/BookUpdate'
import PropTypes from 'prop-types';


export class BookItem extends Component {
 

  render() {

    
    const { title, author, image, read, dateRead, ISBN, lang, pages, year } = this.props.book;
   
var readDate = dateRead.substring(0, 10);

var readIt = <p><b>Datum läst: </b>{dateRead.substring(0, 10)}</p>;


if (!read) {

  readIt = '';

}
  

    return (
      <div className="gridelement">

        <div className="imgbox">
          <div className={'background' + Math.floor(Math.random() * 7) + ' backimg'}></div>
          <img className="bookimg" src={image} alt="" />
        </div>


        <br></br>
        <h3 className={read.toString()}>{title}</h3>
        <p><b>{author}</b></p>
        <p>{ISBN}</p>
        <p>{year}</p>
        <p>{lang}</p>
        <p>{pages} sidor</p>
     {readIt}
      </div>
     )
  } }


BookItem.propTypes = {
  book: PropTypes.object.isRequired
}

export default BookItem;
