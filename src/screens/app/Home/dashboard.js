import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { Container, Filters } from '../../../components';
import { getAllJobs } from '../../../middleware';
import JobCard from './jobCard';
import SearchBar from './searchBar';

const options = [
  { text: 'By Date' },
  { text: 'By Salary' },
  { text: 'By Last date' },
  { text: 'By Bond value' },
];

const Dashboard = () => {
  const jobs = useSelector((state) => state.jobs);
  useEffect(() => {
    getAllJobs();
  }, []);

  useEffect(() => {
    console.log('Jobs', jobs);
  }, [jobs]);
  return (
    <Container>
      <SearchBar style={styles.searchBar} />
      <Filters style={styles.filters} options={options} />
      <JobCard />
    </Container>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  searchBar: {
    marginTop: 20,
  },
  filters: {
    marginTop: 20,
  },
});
