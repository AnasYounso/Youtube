import _ from 'lodash';
import React, {Component} from 'react';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyCXWrQ5KzamnFC3oCdJhOeOdPYq68Fler8';


 class App extends Component {
   constructor(props){
     super(props);
     this.state = {
       videos: [],
       selectedVideo: null
       };
       this.videoSearch('light & motion');
     
   }

   videoSearch(term) {
      YTSearch({key: API_KEY,term:term}, (videos) => {
         this.setState({
          videos: videos,
          selectedVideo :videos[0]
           });
        });
   }

   render () {
     const videoSearch = _.debounce((term)=>{this.videoSearch(term)},500);
    return (  
            <div>
            <SearchBar onSearchTermChange={videoSearch}/>
            <VideoList 
            onVideoSelect={selectedVideo => this.setState({selectedVideo})}
            videos={this.state.videos}/>
            <VideoDetail video={this.state.selectedVideo} /> 
                                  
            </div>      
    );
   }
  }

export default App;

