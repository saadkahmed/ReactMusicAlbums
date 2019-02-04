import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Header = (props) => {
  const { mainView, headerTitle } = styles;
  return (
    <View style={mainView}>
      <Text style={headerTitle}>
        {props.headerText}
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  mainView: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#F8F8F8',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    height: 60,
    paddingTop: 20,
    elevation: 2,
    position: 'relative'
  },
  headerTitle: {
    fontSize: 20
  }
}
);
export default Header;
