import React, {Component} from 'react';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyCAJ6_T1dQIeK0B3N9b-df7rvcpnGIfP34';



 class App extends Component {
   constructor(props){
     super(props);
     this.state = {
       videos: [],
       selectedVideo: null
       };

     YTSearch({key: API_KEY,term:'light and motion'}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo :videos[0]
        });
    });

   }

   render () {
    return (  
            <div>
            <SearchBar/>
            <VideoList 
            onVideoSelect={selectedVideo => this.setState({selectedVideo})}
            videos={this.state.videos}/>
            <VideoDetail video={this.state.selectedVideo} /> 
                                  
            </div>      
    );
   }
  }

export default App;

