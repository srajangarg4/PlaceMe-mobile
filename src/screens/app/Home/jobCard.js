import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux';
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
import { color, PropTypes, resolveDate, resolveSalary, screens } from '../../../utils';

const JobCard = ({ id }) => {
  const job = useSelector((state) => state.job);
  const company = useSelector((state) => state.company);
  const { navigate } = useNavigation();

  const jobDetail = job.jobs[id];
  const { company: companyId, title } = { ...jobDetail };
  const companyDetail = company.companies[companyId];

  const { logo: { uri } = {}, name: companyName } = { ...companyDetail };
  const { lastDateToApply, salary } = { ...jobDetail };

  return (
    <Card
      style={styles.card}
      onPress={() => navigate(screens.jobDetail.path, { id })}
    >
      <Container style={styles.container}>
        <View style={[styles.row]}>
          <Avatar size={80} imgSrc={{ uri }} />
          <View style={styles.textContainer}>
            <Text color={color.primary} type="h4" fontType="semiBold">
              {title}
            </Text>
            <Text type="hs">{companyName}</Text>
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
        <Property keyName="Package" value={resolveSalary(salary)} />
        <Property keyName="Apply till" value={resolveDate(lastDateToApply).toDateString()} />
      </Container>
    </Card>
  );
};

JobCard.defaultProps = {};
JobCard.propTypes = { id: PropTypes.string.isRequired };

export default JobCard;

const styles = StyleSheet.create({
  container: {
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
