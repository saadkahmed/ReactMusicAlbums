import React from 'react';
import { View, AppRegistry } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList'

//components are objects
const App = () => {
  return (
    <View>
      <Header headerText={'Music Albums'} />
      <AlbumList />
    </View>
  );
};

AppRegistry.registerComponent('MusicAlbumsApp', () => App);
