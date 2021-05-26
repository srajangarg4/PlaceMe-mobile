import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Container, Text } from '../../../../components';

import {
  color,
  messages,
} from '../../../../utils';
import SearchBar from './searchBar';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  return (
    <Container>
      <SearchBar
        style={styles.searchBar}
        value={searchQuery}
        onChange={(text) => setSearchQuery(text)}
      />
      <View>
        <Text
          style={styles.listTitle}
          color={color.primary}
          fontType="semiBold"
          type="h4"
        >
          {messages.home.listHeading}
        </Text>
        {/* <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.item}
        >
        </ScrollView> */}
      </View>
    </Container>
  );
};

export default Home;

const styles = StyleSheet.create({
  sportItem: {
    height: 85,
    width: 85,
    marginRight: 10,
  },
  sportsImage: { width: 30, height: 30 },
  sportsTitle: {
    fontSize: 11,
    textAlign: 'center',
  },
  listTitle: {
    marginVertical: 10,
  },
  item: {
    marginBottom: 15,
    borderRadius: 6,
  },
  searchBar: {
    marginTop: 10,
  },
});
