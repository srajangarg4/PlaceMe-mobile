import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import {
  Avatar,
  Badge,
  Card,
  Container,
  HorizontalLine,
  Property,
  Text,
} from '../../../components';
import NavigationService from '../../../NavigationService';
import { color, screens } from '../../../utils';

const uri =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvBfYOFZeVd-vB6uCNlmjna1zcgd0_JYrij9NP1To1ZWpyBxhmpVjAnJ2mdYiJ7J13Gso&usqp=CAU';

const JobCard = () => (
  <Card
    style={styles.card}
    onPress={() => NavigationService.navigate(screens.jobDetail.path)}
  >
    <Container style={styles.container}>
      <View style={[styles.row]}>
        <Avatar imgSrc={{ uri }} size={80} />
        <View style={styles.textContainer}>
          <Text color={color.primary} type="h4" fontType="semiBold">
            Software developer intern
          </Text>
          <Text type="hs">Nagarro digital Pvt. Ltd</Text>
        </View>
      </View>
      <HorizontalLine style={styles.line} />
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <Badge text="Java" style={styles.badge} />
        <Badge text="C++" style={styles.badge} />
        <Badge text="DotNet" style={styles.badge} />
        <Badge text="JavaScript" style={styles.badge} />
      </ScrollView>
      <HorizontalLine style={styles.line} />
      <View />
      <Property keyName="Package" value="6 LPA" />
      <Property keyName="Apply till" value="12/02/2021" />
    </Container>
  </Card>
);

JobCard.defaultProps = {};
JobCard.propTypes = {};

export default JobCard;

const styles = StyleSheet.create({
  container: {
    borderWidth: 0.75,
    paddingVertical: 15,
    borderRadius: 8,
    borderColor: color.ultraLightGray,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  line: {
    marginVertical: 8,
    height: 1,
  },
  textContainer: {
    paddingHorizontal: 15,
  },
  badge: {
    marginRight: 2,
  },
  card: {
    marginVertical: 15,
  },
});
