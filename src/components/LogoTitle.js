import React from 'react';
import { Text, Image, StyleSheet, View } from 'react-native';

function LogoTitle() {
    return (
      <View style={styles.header}>
      <Image
        style={styles.image}
        source={require('../images/logo.png')}
      />
      <Text style={styles.text}>Grow: Work</Text>
      </View>
    );
  }

  const styles = StyleSheet.create({
    image: {
        margin: 15,
        width: 40, 
        height: 40
    },
    text: {
      fontSize: 30,
      fontWeight: 'bold',
      color: '#5ea303'
    },
    header: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      marginLeft: 35
    }
})

  export default LogoTitle