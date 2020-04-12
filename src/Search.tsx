import React, {useState} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Image,
  Text,
  ActivityIndicator,
  Keyboard
} from 'react-native';
import {
  Button,
  Header,
  Left,
  Right,
  Item,
  Icon,
  Input,
  Title,
  Body,
  View
} from 'native-base';
import {Cards, Card} from 'scryfall-sdk';

import ListCards from './ListCards';

const bgImage = require('../assets/landing.png');
interface ViewStatus {
  status: 'loading' | string;
}

const Search: React.FC = () => {
  const [searchText, setSearchText] = useState<string>('');
  const [viewStatus, setViewStatus] = useState<ViewStatus>({status: ''});
  const [data, setData] = useState<Array<Card>>();
  return (
    <SafeAreaView style={{flex: 1}}>
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
          <Input
            placeholder="Search"
            onChangeText={(text) => {
              setSearchText(text);
            }}></Input>
        </Item>
        <Button
          bordered
          small
          onPress={() => {
            setViewStatus({status: 'loading'});
            Keyboard.dismiss;
            Cards.query('/cards/search', {
              q: searchText.toLowerCase() + ' lang:es'
            })
              .then((response: any) => {
                setData(response.data);
                setViewStatus({status: ''});
              })
              .catch((err) => {
                console.log(err);
              });
          }}>
          {viewStatus.status === 'loading' ? (
            <ActivityIndicator color="grey" />
          ) : (
            <Text>Go</Text>
          )}
        </Button>
      </Header>
      {data ? (
        <View style={{flex: 1}}>
          <ListCards data={data} searchText={searchText.toLowerCase()} />
          <Button block large>
            <Text>Add</Text>
          </Button>
        </View>
      ) : (
        <Image style={styles.bgCard} source={bgImage} />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    borderBottomColor: '#fff'
  },
  bgCard: {
    alignSelf: 'center',
    height: '50%'
  }
});

export default Search;
