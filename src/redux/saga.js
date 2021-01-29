import axios from 'axios';
import {takeLatest, put, all} from 'redux-saga/effects'
import {imageData} from '../components/imageData'

function* getShoes(){
    try {
        console.log('saga start')
        const res = yield axios({
            method: 'GET',
            url: 'https://my-json-server.typicode.com/megasuartika/fe-assignment/db'
        })
        console.log('saga get data')

        if (res && res.data.shoes){
            console.log('adding data start')
            const data = res.data.shoes;
            if (data != null) {
                for (let i = 0; i < data.length; i++) {
                    data[i].image = data[i].name === imageData[i].name ? imageData[i].image : "bukan dia";
                }
                yield put({type: 'GET_SHOES_SUCCESS', payload: data})
            }
        }
    }
    catch {
        console.log('error bos')
    }
}

function* shoesSaga(){
    yield takeLatest('GET_SHOES', getShoes)
}

export default function* rootSaga(){
    yield all([shoesSaga()])
}