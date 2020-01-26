import React, { Component } from 'react'
import axios from 'axios';
import BookList from './BookList';

export class BookForm extends Component {
   state = {
            title: '',
            author: '',
            year: '',
            pages: '',
            ISBN: '',
            image: '',
            lang: '',
            read: '',
            dateRead: '2010-01-02',
            
            checked: false
        };
    

    mySubmitHandler = (event) => {
        event.preventDefault();

      
 this.props.addBook(this.state.author, this.state.title,this.state.year,this.state.pages,this.state.ISBN, this.state.image,this.state.checked,this.state.dateRead,this.state.lang)
        

        this.setState({
            title: '',
            author: '',
            year: '',
            pages: '',
            ISBN: '',
            image: '',
            lang: '',
            read: '',
            dateRead: '2010-01-02',
            
            checked: false
        });
    
    }

    myChangeHandler = (event) => {
        this.setState({
            checked: !this.state.checked
        })
    }

    onChange = (event) => this.setState({ [event.target.name]: event.target.value });


    render() {
        const content = this.state.checked
            ? <label >
                Läst:<br></br>
                <input
                    type="date"

                    name="dateRead"
                    onChange={this.onChange}

                />
            </label>
            : null;

        return (
            <div>
                <h2><i className="fa fa-pen"></i> Lägg till bok</h2>
                <br></br>
                <form onSubmit={this.mySubmitHandler}>
                    <label>
                        Titel:<br></br>
                        <input

                            type="text"
                            required
                            name="title"
                            onChange={this.onChange}
                            value={this.state.title}
                        />
                    </label>
                    <label>
                        Författare:<br></br>
                        <input name="author"
                        value={this.state.author}
                            onChange={this.onChange} type="text" id="code" required />
                    </label>

                    <label>
                        Utgivningsår: <br></br>
                        <input name="year"
                        value={this.state.year}
                            onChange={this.onChange} type="text" id="syllabus" required />
                    </label>
                    <label>
                        Sidor:<br></br>
                        <input
                        value={this.state.pages}
                            name="pages"
                            onChange={this.onChange}
                            type="text"
                            required
                        />
                    </label>
                    <label>
                        ISBN:<br></br>
                        <input
                        value={this.state.ISBN}
                            name="ISBN"
                            onChange={this.onChange}
                            type="text"
                            required
                        />
                    </label>
                    <label>
                        Språk:<br></br>
                        <input
                        value={this.state.lang}
                            name="lang"
                            onChange={this.onChange}
                            type="text"
                            required
                        />
                    </label>
                    <label>
                        Bild:<br></br>
                        <input
                        value={this.state.image}
                            name="image"
                            onChange={this.onChange}
                            type="text"
                            required
                        />
                    </label>

                    <label className="readCheck">
                        Läst:<br></br>
                        <input
                    
                            name="read"
                            type="checkbox"
                            checked={this.state.checked}
                            onChange={this.myChangeHandler}

                        />
                        <span className="checkmark"></span>
                    </label>

                    {content}


                    <label>
                        <input type="submit" value="Lägg till" className="btn btn-blue" /></label>
                </form>
            </div>

        )
    }
}

export default BookForm
