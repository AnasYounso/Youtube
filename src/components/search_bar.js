import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props){
        super(props);

        this.state = {term : ''};
    }


 render(){
    return (
    <div>
    <input onChange={eventObject => this.setState({term : eventObject.target.value})}/>
   
    </div>
    );
  }

}

export default SearchBar ;