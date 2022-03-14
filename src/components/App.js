import React, { Component } from 'react';
import SearchBar from './SearchBar';
import Video from './video/Video';
import CurrentVideo from './video/CurrentVideo';
import axios from 'axios';
import './App.css';
class App extends Component {
  state = {
    searchTerm: '',
    videosArr: [],
    currentVideo: null,
  };

  getSearchTerm = (term) => {
    this.setState(
      {
        searchTerm: term,
      },
      () => this.searchVideo(term)
    );
  };

  searchVideo = async (term) => {
    const key = process.env.REACT_APP_KEY;
    const response = await axios.get(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=10&q=${term}&key=${key}`
    );
    this.setState(
      {
        videosArr: response.data.items,
      },
      () =>
        this.setState({
          currentVideo: this.state.videosArr[0],
        })
    );
  };

  setCurrentVideo = (video) => {
    this.setState({
      currentVideo: video,
    });
  };

  render() {
    return (
      <div className='container'>
        <h2 style={{ textAlign: 'center' }}>YT Clone 😊</h2>
        <SearchBar searchTermFunc={this.getSearchTerm} />
        <div className='videoMain'>
          <div className='currentVideo'>
            <CurrentVideo video={this.state.currentVideo} />
          </div>
          <div className='videoList'>
            <Video
              videosArr={this.state.videosArr}
              setCurrentVideo={this.setCurrentVideo}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
