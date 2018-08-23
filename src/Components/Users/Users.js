import React, { Component } from 'react';
import axios from 'axios';
import '../Users/Users.css'
import Repositories from '../Repositories/Repositories';

class Search extends Component{
    constructor(props){
        super(props);
        this.state = {
            results: []
        }
    }

    getRepoHandler (event) {
        let gitHubUser = event.target.value;
        // console.log(gitHubUser);
        axios.get(`https://api.github.com/users/${gitHubUser}/repos?client_id=d9625e102465b04deecf&client_secret=c5b943b5cd568064ad2539b2938fa64d39e54b58`)
        .then(res => {
            // console.log(res.data);
            this.setState({ results: res.data })
        })
        .catch(error => {
            console.log(error);
        })
        // console.log(this.refs.ghUser.innerHTML);
    }

    render(){
        const options = this.props.results.map(r => (
            <div className="col-md-3" key={r.id}>
                <div className="col-md-12 searched_item_block">
                    <img className="searched_item_img img-fluid" src={r.avatar_url} alt={"r.login"} />
                    <h6 className="card-title c_name">{r.login ? r.login : 'N/A'}</h6>
                    <button type="button" className="btn btn-primary btn-block" value={r.login} onClick={(event) => this.getRepoHandler(event)} data-toggle="modal" data-target="#myModal">Repositories</button>
                </div>
            </div>
        ))

        return(
            <div>
            <div className="row">
                {options}
                
            </div>
            <div className="modal fade" id="myModal">
            <div className="modal-dialog modal-dialog-centered modal-lg">
              <div className="modal-content">
              
                
                <div className="modal-header">
                  <h4 className="modal-title">Repositories List</h4>
                  <button type="button" className="close" data-dismiss="modal" >&times;</button>
                </div>
                
                
                <div className="modal-body">
                <Repositories results={this.state.results} />
                </div>
                
                
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
                
              </div>
            </div>
          </div>
          </div>
        );
    }
}

export default Search;