import React, { Component } from 'react';
import giphy from 'giphy-api';
import SearchBar from './search_bar';
import GifList from './gif_list';
import Gif from './gif';


class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      gifs :[],
      selectedGifId : "3oEdv4hwWTzBhWvaU0"
    }
  }

  search = (query) => {
    giphy().search ({
      q: query,
      rating: 'g',
      limit: 11
        }, (err, results) => {
        this.setState({
          gifs: results.data
        })
    });
  };

  updateGif = (id) => {
    this.setState({
      selectedGifId : id
    });
  }


  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar searchFunction={this.search}/>
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <div className="gif-list">
            <GifList updateGif={this.updateGif} gifs={this.state.gifs} />
          </div>
        </div>
      </div>
      )
  }
}

export default App;

