import { all, call} from 'redux-saga/effects';
import { startGettingDataForTable, startUploadDataForTable} from './data/sampleDataSaga';

export default function* rootSaga(){
	yield all([call(startGettingDataForTable), call(startUploadDataForTable)])
}