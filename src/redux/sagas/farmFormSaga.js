import axios from 'axios';
import { put, takeLatest, takeEvery } from 'redux-saga/effects';


function* sendFarmForm(action) {
    const city = action.payload.city;
    const state = action.payload.state;
    const streetAddress = action.payload.street_address;
   
    const coordinates = yield axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${streetAddress}+${city}+${state}.json?access_token=${process.env.REACT_APP_MAPBOX_API_KEY}`);
   
    const longitude = coordinates.data.features[0].center[0]
    const latitude = coordinates.data.features[0].center[1]
    
    const data = {payload: action.payload, latitude: latitude, longitude: longitude}
    try {
        
        const response = yield axios.post(`/farm`, data);
        yield put({
            type: 'DELETE_FARM'
        });
        yield put({
            type: 'FETCH_FARM'
        });

       action.history.push('/ThankYouPageFarm');
    } catch (error) {
        console.log('Farm post request failed', error);
    }
}

function* farmFormSaga() {
    yield takeLatest('SEND_FARM_FORM', sendFarmForm);
}

export default farmFormSaga;