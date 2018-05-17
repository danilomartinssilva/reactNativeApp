/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */


import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  Alert
} from 'react-native';
import Header from './components/Header';
import placeImage from './assets/perfil.jpg';
import Content from './components/Content';





/*
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
*/

//type Props = {};
export default class App extends Component {
  state= {
    placeImage
            
  }

  render() {
    return (
      
        <View style={styles.container}>              

            <Header images = {this.state.placeImage} />            
            
            <Content/>

        </View>      

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column', 
    //background:li 
    //justifyContent: 'flex-start',
    //alignItems: 'center',
    backgroundColor: 'orange' 
  },
  
  
 
  /*
  ,

  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  */
});
