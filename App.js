import React, { Component } from 'react';

import { Platform, StyleSheet, View, Linking, TouchableOpacity, Text } from 'react-native';

export default class App extends Component {

  open_WhatsApp = () => {

    Linking.openURL("market://details?id=com.whatsapp");
  }

  open_GoogleChrome = () => {

    Linking.openURL("market://details?id=com.android.chrome");
  }

  render() {
    return (

      <View style={styles.MainContainer}>

        <TouchableOpacity onPress={this.open_WhatsApp} activeOpacity={0.6} style={styles.button} >

          <Text style={styles.TextStyle}>Open WhatsApp in Play Store</Text>

        </TouchableOpacity>

        <TouchableOpacity onPress={this.open_GoogleChrome} activeOpacity={0.6} style={styles.button} >

          <Text style={styles.TextStyle}>Open Google Chrome in Play Store</Text>

        </TouchableOpacity>

      </View>

    );
  }
}

const styles = StyleSheet.create({

  MainContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    paddingTop: (Platform.OS) === 'ios' ? 20 : 0
  },

  button: {
    
    width: '80%',
    paddingTop:12,
    paddingBottom:12,
    backgroundColor: '#00BCD4',
    borderRadius:7,
    marginTop: 20

  },
   
  TextStyle:{
      color:'#fff',
      textAlign:'center',
  }

});