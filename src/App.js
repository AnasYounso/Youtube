import React, {Component} from 'react';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import './App.css';
const API_KEY = 'AIzaSyCAJ6_T1dQIeK0B3N9b-df7rvcpnGIfP34';



 class App extends Component {
   constructor(props){
     super(props);
     this.state = {videos: [] };

     YTSearch({key: API_KEY,term:'National Geography'}, (videos) => {
      this.setState({videos});
    });

   }

   render () {
    return (  
            <div>
            <SearchBar/>
            <VideoDetail video={this.state.videos[3]} /> 
            <VideoList videos={this.state.videos}/>                      
            </div>      
    );
   }
  }

export default App;

