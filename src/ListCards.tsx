import React from 'react';
import {StyleSheet, View, Image, Text, ScrollView} from 'react-native';
import {Card, CardFace} from 'scryfall-sdk';
import {CheckBox, CardItem, Card as Cardnb, Body} from 'native-base';

interface Props {
  data: Array<Card>;
  searchText: string;
}
interface CardInfo {
  name: string;
  imageUri: string | undefined;
}

interface ViewStatus {
  status: 'loading' | string;
}

const ListCards: React.FC<Props> = ({data, searchText}) => {
  const renderCard = (card: CardInfo) => {
    return (
      <Cardnb key={card.name}>
        <CardItem>
          <Body
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
            <Image
              style={{width: 73, height: 102}}
              source={{uri: card.imageUri}}></Image>
            <Text>{card.name}</Text>
            <CheckBox style={{marginRight: 10}} checked={false} />
          </Body>
        </CardItem>
      </Cardnb>
    );
  };
  const renderCardsList = (data: Array<Card>) => {
    return data.map(function (card: Card) {
      if (card.card_faces?.length) {
        card.card_faces.forEach((face: CardFace) => {
          if (face.printed_name?.toLowerCase().includes(searchText)) {
            return renderCard({
              name: face.printed_name,
              imageUri: face.image_uris?.small
            });
          }
        });
      } else {
        return renderCard({
          name: card.printed_name ? card.printed_name : card.name,
          imageUri: card.image_uris?.small
        });
      }
    });
  };
  return <ScrollView style={{flex: 1}}>{renderCardsList(data)}</ScrollView>;
};

export default ListCards;
