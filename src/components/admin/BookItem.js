import React, { Component } from 'react'

export class BookItem extends Component {

    

    render() {
        const {title, author, image, read, dateRead, ISBN, lang, pages, year, _id } = this.props.book;


    return (
   
            <tr>
                <td className="title">
                    {title}
                </td>

                <td> {author} </td>

                <td>   {year}  </td>

                <td>
                    {pages}
                </td>
            
                <td><img src={image} />

                </td>
                <td>
                    {read.toString()}
                </td>
            
                    <td className="center">
                    <a onClick={this.props.updateBook.bind(this, _id)}>
                            <i className="fas fa-cog"></i>
                      </a> 
                            
                         / <a onClick={this.props.deleteBook.bind(this, _id)}>
                            <i className="fas fa-trash-alt"></i>
                      </a> </td>
                             
                    </tr>         
                ) 
        
 }
}
        export default BookItem
