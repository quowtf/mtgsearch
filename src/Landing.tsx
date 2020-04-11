import React from 'react';
import {StyleSheet, SafeAreaView, Image, Text, View} from 'react-native';
import {Button} from 'native-base';

interface Props {
  handleSwitchScreen: (screen: string) => void;
}

const bgImage = require('../assets/landing.png');

const Landing: React.FC<Props> = ({handleSwitchScreen}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to</Text>
      <Text style={styles.title}>Magic the gatherin Searcher</Text>
      <Image source={bgImage}></Image>
      <Button
        style={styles.button}
        block={true}
        onPress={() => {
          handleSwitchScreen('search');
        }}>
        <Text>Start</Text>
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgb(248,248,248)',
    alignItems: 'center'
  },
  button: {
    margin: 10
  },
  title: {
    fontSize: 25
  }
});

export default Landing;
