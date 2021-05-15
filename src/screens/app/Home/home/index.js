import React, { useState, useEffect } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { Container, Text } from '../../../../components';

import {
  color,
  locationType,
  messages,
  navigationType,
} from '../../../../utils';
import SearchBar from './searchBar';

const Home = ({ location, navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    // for dynamically changing location on header when location changes
    navigation.setOptions({});
  }, [location, navigation]);

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
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.item}
        >
          {/* {selectedSports?.map((item) => (
            <SportsItem
              key={item}
              title={item}
              icon={item}
              size="small"
              isSelected={selectedSport.includes(item)}
              onPress={() => {
                if (selectedSport.includes(item)) {
                  setselectedSport(selectedSport.filter((e) => e !== item));
                } else {
                  setselectedSport([...selectedSport, item]);
                }
              }}
            />
          ))} */}
          {/* <SportsItem
            name="updatePreference"
            icon="updatePreference"
            title="Update Preferences"
            onPress={() => {
              NavigationService.navigate(screens.updateSports.path);
            }}
            isSelected={false}
            size="small"
          /> */}
        </ScrollView>
      </View>
    </Container>
  );
};

Home.defaultProps = {
  location: undefined,
  navigation: undefined,
};
Home.propTypes = {
  location: locationType,
  navigation: navigationType,
};

const mapStateToProps = (state) => ({
  location: state?.user?.location,
  selectedSports: state?.user?.selectedSports,
});
export default connect(mapStateToProps, {
})(Home);

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
