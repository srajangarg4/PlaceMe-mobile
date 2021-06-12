import { JobService } from 'placeme-services/lib';
import { showToast } from '../utils';
import { addJobs } from '../actions';
import { dispatch } from '../store';

const service = new JobService();

export async function getAllJobs() {
  const { successful, error, result } = await service.getAll();
  if (successful) {
    dispatch(addJobs(result));
  } else {
    showToast(error);
  }
}

export async function getNextJobs(size) {
  await service.getNext(size);
  dispatch(addJobs());
}
