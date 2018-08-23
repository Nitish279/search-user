import React, { Component } from 'react';
import axios from 'axios';
import '../Search/Search.css';
import Users from '../Users/Users';

class Search extends Component{
    constructor(props){
        super(props);
        this.state = {
            inpValue: '',
            searchedText: '',
            results: []
        }
    }

    validateString (userString) {
        let trimedString = userString.trim();
        let finalVal = RegExp(/^[a-z0-9](?!.*?[^\na-z0-9]{2}).*?[a-z0-9]/gmi).test(trimedString);
        return finalVal ? finalVal : alert("Invalid String");
    }

    handleChange (e) {
        this.setState({inpValue: e.target.value});
    }

    getUsers () {
        axios.get(`https://api.github.com/search/users?q=${this.state.inpValue}`)
        .then(res => {
            const persons = res.data;
            this.setState({ results: persons.items })
          })
        .catch(error => alert(error))
    }

    handleClick = (e) => {
        this.getUsers();
    }

    render(){
        return(
            <div className="container">
                <br /><br />
                <div className="row justify-content-center">
                    {/* <h1>Get Users Profile On GitHub</h1> */}
                </div>
                <br />
                <div className="row justify-content-center">
                    <form className="form-inline">
                        <input type="text" className="form-control" name="users" placeholder="GitHub User Name" onChange={(e) => this.handleChange(e)}/>
                        <button type="button" className="btn btn-primary search_btn" onClick={(e) => this.handleClick(e)}>Search</button>
                    </form>
                </div>
                <br /><br />
                <div className="row">
                    <div className="col-md-1"></div>
                        <div className="col-md-10">
                            <div className="row">
                                <Users results={this.state.results} />
                            </div>
                        </div>
                    <div className="col-md-1"></div>
                </div>
                <br /><br /><br />
            </div>
        );
    }
}

export default Search;