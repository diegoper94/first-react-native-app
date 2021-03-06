import React from 'react';
import { Text } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetails = props => (
  <Card>
    <CardSection>
      <Text>{props.album.title}</Text>
    </CardSection>
  </Card>
);

export default AlbumDetails;
