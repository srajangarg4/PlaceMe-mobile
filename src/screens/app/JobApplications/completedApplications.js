import React from 'react';
import { Container, Text } from '../../../components';
import ApplicationStatusCard from './applicationStatusCard';

const CompletedJobApplications = () => (
  <Container>
    <ApplicationStatusCard />
    <ApplicationStatusCard />
    <ApplicationStatusCard />
    <ApplicationStatusCard />

  </Container>
);

export default CompletedJobApplications;
