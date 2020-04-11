import React from 'react';
import {StyleSheet, SafeAreaView, Image, Text, Platform} from 'react-native';
import {
  Button,
  Header,
  Left,
  Right,
  Item,
  Icon,
  Input,
  Title,
  Body
} from 'native-base';

class Search extends React.Component {
  bgImage = require('../assets/landing.png');
  render() {
    return (
      <SafeAreaView>
        <Header>
          <Left>
            <Button transparent>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Search</Title>
          </Body>
          <Right />
        </Header>
        <Header searchBar rounded style={styles.container}>
          <Item>
            <Icon name="search"></Icon>
            <Input placeholder="Search"></Input>
          </Item>
        </Header>
        <Button style={styles.button} block={true}>
          <Text>back</Text>
        </Button>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderBottomColor: '#fff'
  },
  button: {
    margin: 10
  },
  header: {}
});

export default Search;
