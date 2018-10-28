import React, { Component } from 'react';
import './compstyles.css';
class SearchBar extends Component {
    constructor(props){
        super(props);

        this.state = {term : ''};
    }


 render(){
    return (
    <div className="search-bar">
    <input onChange={eventObject => this.onInputChange(eventObject.target.value)}/>
   
    </div>
    );
  }
  onInputChange(term){
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar ;