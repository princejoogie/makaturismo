import React from 'react';
import { View, TextInput, StyleSheet, Dimensions, Image } from 'react-native';
import AppBar from './components/AppBar.js';

const nWidth = Math.round(Dimensions.get('window').width);
const nHeight = Math.round(Dimensions.get('window').height);

const App = () => {
  const [value, onChangeText] = React.useState('');

  return (
    <View style={styles.appView}>
      <AppBar />
      <View style={styles.searchArea}>
        <TextInput
          style={styles.searchBox}
          onChangeText={text => onChangeText(text)}
          value={value}
          placeholder={'Search keywords'}
        />
      </View>
      <Image 
      style={styles.bgImage}
      source={{uri: 'https://github.com/princejoogie/makaturismo/blob/master/Assets/dashboard_bg.jpg?raw=true'}}/>
    </View>
  );
};

const styles = StyleSheet.create({
  appView: {
    flex: 1,
  },
  bgImage: {
    height: nHeight - 200,
    width: nWidth,
  },
  searchArea: {
    height: 50,
    margin: 20,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    borderRadius: 25,
    elevation: 10,
  },
  searchBox: {
    paddingHorizontal: 15,
    height: 50,
    flex: 5,
  },
  img: {
    width: 50,
    height: 50,
    borderRadius: 25,
    flex: 1,
  }
})



export default App;
