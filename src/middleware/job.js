import { JobService } from 'placeme-services/lib';
import { addJobs } from '../actions';
import { dispatch } from '../store';
import { fetchAllCompany } from './company';

const service = new JobService();

export const fetchAllJobs = () => service.getAll();

export async function fetchNextJobs(size) {
  await service.getNext(size);
  dispatch(addJobs());
}

export const fetchCompaniesAndJobs = async () => {
  const jobResult = await service.getAll();
  const companyResult = await fetchAllCompany();
  return {
    successful: jobResult.successful && companyResult.successful,
    result: { jobs: jobResult.result, companies: companyResult.result },
    error: jobResult.error ?? companyResult.error,
  };
};
