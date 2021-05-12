import React from 'react';
import { useDispatch } from 'react-redux';
import { removeAuth } from '../../actions';
import {
  Button, Container, Heading,
} from '../../components';

const Dashboard = () => {
  const dispatch = useDispatch();
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
    </Container>
  );
};

export default Dashboard;
