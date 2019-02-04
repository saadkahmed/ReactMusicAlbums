import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      albumData: []
    };
  }

  componentWillMount() {
    console.log('AlbumList has Mounted');
    axios.get('http://rallycoding.herokuapp.com/api/music_albums')
    .then((response) => {
        console.log(response.data);
        this.setState({ albumData: response.data });
        //albumlist gets re-rendered here because
        //setState was called
      });
  }
  renderAlbums() {
    return this.state.albumData.map(album => <Text key={album.title}>{album.title}</Text>);
  }
  render() {
    console.log(this.state);
      return (
      <View>
          {this.renderAlbums()}
          <AlbumDetail />
      </View>
    );
  }
}

export default AlbumList;
