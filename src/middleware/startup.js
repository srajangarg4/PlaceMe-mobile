import { PersonalDetailService, AcademicDetailService } from 'placeme-services/lib';
import { addAcademicDetail, addPersonalDetail } from '../actions';
import { dispatch } from '../store';
import { resolveDate } from '../utils';

const personalDetailsService = new PersonalDetailService();
const academicDetailService = new AcademicDetailService();

const loadDatOnStartup = async (userEmail, resolve, reject) => {
  const { successful: isPersonalDetailFetched,
    result: personalDetails,
  } = await personalDetailsService.get(userEmail);

  const {
    successful: isAcademicDetailFetched,
    result: acdemicData,
  } = await academicDetailService.get(userEmail);

  if (isPersonalDetailFetched) {
    if (isAcademicDetailFetched) {
      dispatch(addAcademicDetail(acdemicData));
      const { data: { dob } } = { ...personalDetails };
      const newDOB = resolveDate(dob);
      personalDetails.data.dob = newDOB;
      dispatch(addPersonalDetail(personalDetails));
      resolve?.({
        acdemicData, personalDetails,
      });
    }
  }

  if (!isPersonalDetailFetched || !isAcademicDetailFetched) {
    reject?.('Error in getting data');
  }
};

export default loadDatOnStartup;
