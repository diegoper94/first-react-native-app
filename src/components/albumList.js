import React, { Component } from 'react';
import axios from 'axios';
import { View } from 'react-native';
import AlbumDetails from './albumDetails';

class AlbumList extends Component {
  state = {
    albums: []
  };

  componentDidMount() {
    axios
      .get('http://rallycoding.herokuapp.com/api/music_albums')
      .then(response => {
        this.setState({ albums: response.data });
      });
  }

  renderList() {
    return this.state.albums.map(album => {
      return <AlbumDetails key={album.title} album={album} />;
    });
  }

  render() {
    return <View>{this.renderList()}</View>;
  }
}

export default AlbumList;
