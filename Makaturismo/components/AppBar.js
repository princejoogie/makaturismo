import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';

const nWidth = Math.round(Dimensions.get('window').width);
const nHeight = Math.round(Dimensions.get('window').height);

const AppBar = () => {
  return (
    <View style={styles.header}>
      <Image source={{ uri: 'https://lh3.googleusercontent.com/E2hPCNljK5iuj_Ux43TbfVjkqj_T8sRykL0PS6rMN-s230wfVU9VJ_Q18BuetwmnT_KklxSQ7J-zqdzB-_vx5VgBkR7K8sbX1iBcQ6MVyZywQQ9TTJdLLqdOxZofw40yPGYNAFA1' }}
        style={styles.logo}
      />
      <Image source={{ uri: 'https://trello-attachments.s3.amazonaws.com/5e4c8ff7e30e64140ee35332/960x959/97e3b7fbba18f1addef8f8e7467a613d/qwe.jpg' }}
        style={styles.img}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    height: 100,
    padding: 30,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fcf5ee',
    borderBottomWidth: 1,
    borderBottomColor: '#ffc4d0',
  },
  text: {
    color: '#000',
    fontSize: 30,
    fontFamily: 'Nunito',
    textAlign: 'center',
  },
  img: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#ffc4d0',
  },
  logo: {
    width: 100,
    height: 50,
  },
});

export default AppBar;
