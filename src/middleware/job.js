import { JobService } from 'placeme-services/lib';
import { showToast } from '../utils';
import { addJobs } from '../actions';
import { dispatch } from '../store';

const service = new JobService();

export const getAllJobs = async () => {
  const { successful, error, result } = await service.getAll();
  if (successful) {
    console.log('Sucessful data', result);
  } else {
    showToast(error);
  }
};

export async function getNextJobs(size) {
  await service.getNext(size);
  dispatch(addJobs());
}
