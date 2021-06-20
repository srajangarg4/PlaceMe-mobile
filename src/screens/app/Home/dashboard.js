import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Filters } from '../../../components';
import loadDatOnStartup from '../../../middleware/startup';
import JobCard from './jobCard';
import SearchBar from './searchBar';
import { useDatabase } from '../../../hooks';
import { fetchCompaniesAndJobs } from '../../../middleware/job';
import { addCompanies, addJobs } from '../../../actions';

const options = [
  { text: 'By Date' },
  { text: 'By Salary' },
  { text: 'By Last date' },
  { text: 'By Bond value' },
];

const Dashboard = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const job = useSelector((state) => state.job);
  const { jobs } = { ...job };
  const { loading, callDatabase } = useDatabase(fetchCompaniesAndJobs);

  useEffect(() => {
    const { email } = user;
    loadDatOnStartup(email);
  }, [callDatabase, dispatch, user]);

  useEffect(() => {
    callDatabase((result) => {
      const { jobs: fetchedJobs, companies } = result;
      dispatch(addJobs(fetchedJobs));
      console.log('Companies', jobs);
      dispatch(addCompanies(companies));
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container loading={loading} loadingLabel="Getting some jobs for you">
      <SearchBar style={styles.searchBar} />
      <Filters style={styles.filters} options={options} />
      {/* <JobCard /> */}
      {
        Object.keys(jobs).map((key, i) => <JobCard id={key} key={i.toString()} />)
      }
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
