import { all } from 'redux-saga/effects';
import loginSaga from './loginSaga';
import registrationSaga from './registrationSaga';
import userSaga from './userSaga';
import talentProfileSaga from './talentProfileSaga';
import talentFormSaga from './talentFormSaga'; 
import farmFormSaga from './farmFormSaga';
import jobPostingSaga from './jobPostingSaga';
import farmProfileSaga from './farmProfileSaga';
import editSkillsTalentSaga from './editSkillsSaga'; 
import searchSaga from './searchSaga';
import editCertificationSaga from './editedCertificateTalentSaga';
import editEducationSaga from './editedEducationTalentSaga';
import editEmploymentSaga from './editedEmploymentSaga';
import updateSkillsProfileSaga from './updateSkillsProfileSaga'; 
import updateBrandsSaga from './updateBrandsProfileSaga';

import editFarmProfileSaga from './editFarmProfileSaga';
import deleteJobSaga from './deleteJobSaga'

// rootSaga is the primary saga
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user
export default function* rootSaga() {
  yield all([
    loginSaga(),
    registrationSaga(),
    userSaga(),
    talentProfileSaga(),
    talentFormSaga(), 
    farmFormSaga(),
    jobPostingSaga(),
    farmProfileSaga(),
    editSkillsTalentSaga(),
    searchSaga(),
    editCertificationSaga(),
    editEducationSaga(),
    editEmploymentSaga(),
    editFarmProfileSaga(),
    deleteJobSaga(),
    updateSkillsProfileSaga(),
    updateBrandsSaga(),
  ]);
}
