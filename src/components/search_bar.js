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
    <input onChange={eventObject => this.setState({term : eventObject.target.value})}/>
   
    </div>
    );
  }

}

export default SearchBar ;