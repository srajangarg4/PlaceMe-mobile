import React from 'react';
import { useDispatch } from 'react-redux';
import { removeAuth } from '../../../actions';
import {
  Button, Container, Heading,
} from '../../../components';
import { } from '../Job';
import JobCard from './jobCard';

const Dashboard = () => {
  const dispatch = useDispatch();
  console.log('Dish');
  return (
    <Container>
      <Heading heading="Welcome back" style={{ alignItems: 'center' }} />
      <Button
        text="Logout"
        onPress={() => {
          console.log('Clicked');
          dispatch(removeAuth());
        }}
      />
      <JobCard />
    </Container>
  );
};

export default Dashboard;
