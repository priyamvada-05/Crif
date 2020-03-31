import { takeEvery, call, put, takeLatest} from 'redux-saga/effects';
import { successfullGettingDataFromDatabase, errorGettingDataFromDatabase, successfullLoadingDataToDatabase, errorLoadingDataToDatabase} from './sampleDataAction';

export function* startGettingDataForTable(){
	yield takeEvery('START_GETTING_DATA_FROM_DATABASE', startGettingDataFromDatabaseAsync)
}

function* startGettingDataFromDatabaseAsync({payload}){
	try{

		const response= yield fetch('/api/v1/application/data/view', {
			method: 'POST',
			headers :{
				'Content-Type': 'application/json'
				},
			body: JSON.stringify(payload)

		})

		const data= yield response.json();
		yield put(successfullGettingDataFromDatabase(data))
	}
	catch(error){
		yield put(errorGettingDataFromDatabase(error))
	}

}

export function* startUploadDataForTable(){
	yield takeEvery('START_LOADING_DATA_TO_DATABASE', startUploadDataToDatabaseAsync)
}

function* startUploadDataToDatabaseAsync({payload}){
	try{

		const response= yield fetch('/api/v1/application/data/upload', {
			method: 'POST',
			headers :{
				'Content-Type': 'application/json'
				},
			body: JSON.stringify(payload)

		})

		const data= yield response.json();
		yield put(successfullLoadingDataToDatabase(data))
	}
	catch(error){
		yield put(errorLoadingDataToDatabase(error))
	}

}