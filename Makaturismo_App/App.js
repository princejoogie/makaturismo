import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Dimensions,
  Image,
  Text,
  ScrollView,
  ImageBackground,
  SafeAreaView,
} from 'react-native';
import AppBar from './components/AppBar.js';

const nWidth = Math.round(Dimensions.get('window').width);
const nHeight = Math.round(Dimensions.get('window').height);

const App = () => {
  const [value, onChangeText] = React.useState('');

  return (
    <SafeAreaView style={styles.appView}>
      <ImageBackground
        source={{ uri: 'https://github.com/princejoogie/makaturismo/blob/master/Assets/dashboard_bg.jpg?raw=true' }}
        style={{ flex: 1 }}
>
        <ScrollView>

          <AppBar />
          <View style={styles.searchArea}>
            <TextInput
              style={styles.searchBox}
              onChangeText={text => onChangeText(text)}
              value={value}
              placeholder={'Search keywords'}
            />
          </View>
          <Text style={styles.txtWhatsNew}>What's new?</Text>

          <View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              <View style={styles.cardWidget}>
                <Text style={styles.cardTextTwo}>to eat?</Text>
                <Text style={styles.cardTextOne}>Where</Text>
              </View>
              <View style={styles.cardWidgetTwo}>
                <Text style={styles.cardTextTwo}>to stay?</Text>
                <Text style={styles.cardTextOne}>Where</Text>
              </View>
              <View style={styles.cardWidget}>
                <Text style={styles.cardTextTwo}>to ride?</Text>
                <Text style={styles.cardTextOne}>Where</Text>
              </View>
            </ScrollView>

            <Text style={{
              color: '#333333',
              marginHorizontal: 25,
              fontSize: 30,
              fontWeight: 'bold',
            }}>Most visted</Text>
          </View>

        </ScrollView>
      </ImageBackground>
      <View style={{
        width: nWidth - 100,
        height: 65,
        backgroundColor: '#f2f2f2',
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        marginLeft: 50,
        marginBottom: 25,
        borderRadius: 65 / 2,
        elevation: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
      }}>

        <View style={{width: 40, height: 40, backgroundColor: '#cccccc', borderRadius: 20}}></View>
        <View style={{width: 40, height: 40, backgroundColor: '#cccccc', borderRadius: 20}}></View>
        <View style={{width: 40, height: 40, backgroundColor: '#cccccc', borderRadius: 20}}></View>
        <View style={{width: 40, height: 40, backgroundColor: '#cccccc', borderRadius: 20}}></View>

      </View>
    </SafeAreaView>

  );
};

const styles = StyleSheet.create({
  cardTextOne: {
    fontSize: 35,
    marginBottom: -20,
    fontWeight: 'bold',
    letterSpacing: 2,
    color: '#f4f9f4'
  },
  cardTextTwo: {
    fontSize: 45,
    fontWeight: 'bold',
    letterSpacing: 2,
    color: '#f4f9f4'
  },
  cardWidget: {
    elevation: 15,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 25,
    marginLeft: 25,
    width: 225,
    height: 250,
    backgroundColor: '#F65E5D', //#1F2E57
    borderRadius: 20,
    flexDirection: 'column-reverse',
  },
  cardWidgetTwo: {
    elevation: 15,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 25,
    marginLeft: 25,
    width: 225,
    height: 250,
    backgroundColor: '#1F2E57', //#1F2E57
    borderRadius: 20,
    flexDirection: 'column-reverse',
  },
  appView: {
    flex: 1,
  },
  txtWhatsNew: {
    color: '#333333',
    marginTop: 10,
    marginHorizontal: 25,
    fontSize: 30,
    fontWeight: 'bold',
  },
  bgImage: {
    position: 'absolute',
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
