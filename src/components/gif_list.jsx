import React, { Component } from 'react';
import Gif from './gif';

class GifList extends Component {

  render() {
    return (
        this.props.gifs.map((gif) => {
          return ( <Gif id={gif.id} key={gif.id} updateGif={this.props.updateGif}/> );
        })
    )
  }
};

export default GifList;
