import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';


function* sendCertifications(action) {
    try {
        console.log('in saga')
        const response = yield axios.put(`talent/certifications`, action.payload.certification);
        yield put({ type: 'DELETE_ALL_CERTIFICATIONS'});
        //action.history.push(`/talentProfile/${action.payload.id}`);
        action.history.push(`/ThankYouEditTalent`);
        // yield put({ type: 'FETCH_TALENT' });


    }  catch (error) {
        console.log('User get request failed', error);
    }
}

function* editCertificationSaga() {
    yield takeLatest('UPDATE_CERTIFICATIONS', sendCertifications);
}

export default editCertificationSaga;