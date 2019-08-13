import React, { Component } from 'react';
import paginate from 'paginate-array';
import Axios from 'axios';

class body1 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todos: [],
            size: 5,
            page: 1,
            card: [],
            currPage: null
        }

        this.previousPage = this.previousPage.bind(this);
        this.nextPage = this.nextPage.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {

        var link = "http://localhost:8123/viewMovie"
        Axios.get(link).then(response => console.log(response))
      .then(todos => {
        const { page, size } = this.state;

        const currPage = paginate(todos, page, size);

        this.setState({
          ...this.state,
          todos,
          currPage
        });
      });

    }

    previousPage() {
        const { currPage, page, size, todos } = this.state;

        if (page > 1) {
            const newPage = page - 1;
            const newCurrPage = paginate(todos, newPage, size);

            this.setState({
                ...this.state,
                page: newPage,
                currPage: newCurrPage
            });
        }
    }

    nextPage() {
        const { currPage, page, size, todos } = this.state;

        if (page < currPage.totalPages) {
            const newPage = page + 1;
            const newCurrPage = paginate(todos, newPage, size);
            this.setState({ ...this.state, page: newPage, currPage: newCurrPage });
        }
    }

    handleChange(e) {
        const { value } = e.target;
        const { todos, page } = this.state;

        const newSize = +value;
        const newPage = 1;
        const newCurrPage = paginate(todos, newPage, newSize);

        this.setState({
            ...this.state,
            size: newSize,
            page: newPage,
            currPage: newCurrPage
        });
    }

    render() {
        const { page, size, currPage } = this.state;

        return (
            <div>
                <div>page: {page}</div>
                <div>size: {size}</div>
                <div>
                    <label for="size">Size</label>
                    <select name="size" id="size" onChange={this.handleChange}>
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="25">25</option>
                    </select>
                </div>

                {currPage &&
          <ul>
            {currPage.data.map(todo => <li key={todo.id}>{todo.title}</li>)}
          </ul>
        }

                <button onClick={this.previousPage}>Previous Page</button>
                <button onClick={this.nextPage}>Next Page</button>
            </div>
        )
    }
}

export default body1;