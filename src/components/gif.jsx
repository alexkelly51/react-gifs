import React, { Component } from 'react';

class Gif extends Component {

    handleClick = () => {
    if (this.props.updateGif) {
      this.props.updateGif(this.props.id);
    }
  }


  render() {
    const src = `https://media.giphy.com/media/${this.props.id}/giphy.gif`;
    return (
      <img onClick={this.handleClick} className='gif' src={src} alt="gif"/>
    )}
};

export default Gif;

