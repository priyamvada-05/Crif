import { takeEvery, call, put, takeLatest} from 'redux-saga/effects';
import {successfulGettingHeader, errorGettingHeader, successfulGettingQuantitativeDataWildcardColumn, errorGettingQuantitativeDataWildcardColumn, successfulGettingQualitativeDataWildcardColumn, errorGettingQualitativeDataWildcardColumn, successfulGettingBivariateQuantitativeData, errorGettingBivariateQuantitativeData, successfulGettingBivariateQualitativeData, errorGettingBivariateQualitativeData, successfulUploadingDataToMongoDB, errorUploadingDataToMongoDB, successfulGettingGeographicalData, errorGettingGeographicalData, successfulGettingTableHeader, errorGettingTableHeader, successfulGettingTableColumn, errorGettingTableColumn, successfulGettingBivariateBoxPlotData, errorGettingBivariateBoxPlotData, successfulGettingStateGeoData, errorGettingStateGeoData} from './inBuildDataAction';

export function* getHeaderFromMongoDB(){
	yield takeEvery('START_GETTING_HEADER_FROM_MONGODB', StartLoadinginBuildDataHeaderAsync)
}
//header with wildcard column (GET request)
function* StartLoadinginBuildDataHeaderAsync({payload}){

	try{
		const data= payload.data 
		console.log('payload')
		console.log(data)
		const response= yield fetch('/api/v1/application/columnName/' + data);
		const data1= yield response.json();
		var qualitative=[];
		var quantitative=[];
		var cannot_define=[];
		
		data1.forEach((item)=>{
			if(Object.keys(item)[0]==='qualitative'){
			 	qualitative.push(Object.values(item)[0])
			}
			else if(Object.keys(item)[0]==='quantitative'){
				quantitative.push(Object.values(item)[0])
			}

			else{
				cannot_define.push(Object.values(item)[0])
			}
			})

		
		yield put(successfulGettingHeader({qualitative: qualitative,
										   quantitative: quantitative,
										   cannot_define:cannot_define}))
	}

	catch(err){
		console.log('error from saga')
		console.log(err)
		yield put(errorGettingHeader(err))
	}
}

export function* getQuantitativeDataOfWildcardColumnFromMongoDB(){

	yield takeLatest('START_GETTING_QUANTITATIVE_WILDCARD_COLUMN_DATA_FROM_MONGODB', startGettingQuantitativeDataOfWildcardFromMongoDBAsync)
}


function* startGettingQuantitativeDataOfWildcardFromMongoDBAsync({payload}){
	try{
		const response= yield fetch("/api/v1/application/data/colName", {			
			method: 'POST',
			headers :{
				'Content-Type': 'application/json'
				},
			body: JSON.stringify(payload)
		});
		const data= yield response.json();
		yield put(successfulGettingQuantitativeDataWildcardColumn(data))
	}
	catch(err){
		yield put(errorGettingQuantitativeDataWildcardColumn(err))
	}
}

export function* getQualitativeDataOfWildcardColumnFromMongoDB(){

	yield takeLatest('START_GETTING_QUALITATIVE_WILDCARD_COLUMN_DATA_FROM_MONGODB', startGettingQualitativeDataOfWildcardFromMongoDBAsync)
}

function* startGettingQualitativeDataOfWildcardFromMongoDBAsync({payload}){
	try{
		const response= yield fetch("/api/v1/application/data/colName",{			
			method: 'POST',
			headers :{
				'Content-Type': 'application/json'
				},
			body: JSON.stringify(payload)
		});
		const data= yield response.json();
		yield put(successfulGettingQualitativeDataWildcardColumn(data))
	}
	catch(err){
		yield put(errorGettingQualitativeDataWildcardColumn(err))
	}
}

export function* getBivariateQuantitativeDataFromMongoDB(){

	yield takeLatest('START_GETTING_BIVARIATE_QUANTITATIVE_DATA_FROM_MONGODB', startGettingBivariateQuantitativeDataFromMongoDBAsync)
}

function* startGettingBivariateQuantitativeDataFromMongoDBAsync({payload}){
	try{

		const response= yield fetch('/api/v1/application/data/quantitative/bivariate', {
			method: 'POST',
			headers :{
				'Content-Type': 'application/json'
				},
			body: JSON.stringify(payload)
		});
		const data= yield response.json();

		yield put(successfulGettingBivariateQuantitativeData(data))
	}
	catch(err){
		yield put(errorGettingBivariateQuantitativeData(err))
	}
}

export function* getBivariateQualitativeDataFromMongoDB(){

	yield takeLatest('START_GETTING_BIVARIATE_QUALITATIVE_DATA_FROM_MONGODB', startGettingBivariateQualitativeDataFromMongoDBAsync)
}

function* startGettingBivariateQualitativeDataFromMongoDBAsync({payload}){
	try{

		const response= yield fetch('/api/v1/application/data/qualitative/bivariate', {
			method: 'POST',
			headers :{
				'Content-Type': 'application/json'
				},
			body: JSON.stringify(payload)
		});
		const data= yield response.json();

		yield put(successfulGettingBivariateQualitativeData(data))
	}
	catch(err){
		yield put(errorGettingBivariateQualitativeData(err))
	}
}

export function* uploadUserDataToMongoDB(){

	yield takeLatest('START_UPLOADING_DATA_TO_MONGODB', startUploadingUserDataToMongoDBAsync)
}

function* startUploadingUserDataToMongoDBAsync({payload}){
	try{

		const response= yield fetch('/api/v1/application/data/upLoad', {
			method: 'POST',
			headers :{
				'Content-Type': 'application/json'
				},
			body: JSON.stringify(payload)
		});
		const data= yield response.json();
		console.log(data)
		yield put(successfulUploadingDataToMongoDB())
	}
	catch(err){
		yield put(errorUploadingDataToMongoDB(err))
	}
}

export function* getGeographicalDataFromMongoDB(){

	yield takeLatest('START_GETTING_GEOGRAPHICAL_DATA_FROM_MONGODB', startGettingGeographicalDataFromMongoDBAsync)
}

function* startGettingGeographicalDataFromMongoDBAsync({payload}){
	try{

		const response= yield fetch('/api/v1/application/data/geographical', {
			method: 'POST',
			headers :{
				'Content-Type': 'application/json'
				},
			body: JSON.stringify(payload)
		});
		const data= yield response.json();

		yield put(successfulGettingGeographicalData(data))
	}
	catch(err){
		yield put(errorGettingGeographicalData(err))
	}
}

export function* getTableHeaderFromMongoDB(){

	yield takeLatest('START_GETTING_TABLE_HEADER_FROM_MONGODB', startGettingTableHeaderFromMongoDBAsync)
}

function* startGettingTableHeaderFromMongoDBAsync({payload}){
	try{

		const response= yield fetch('/api/v1/application/data/tableHeader', {
			method: 'POST',
			headers :{
				'Content-Type': 'application/json'
				},
			body: JSON.stringify(payload)
		});
		const data= yield response.json();

		yield put(successfulGettingTableHeader(data))
	}
	catch(err){
		yield put(errorGettingTableHeader(err))
	}
}

export function* getTableColumnFromMongoDB(){

	yield takeLatest('START_GETTING_TABLE_COLUMN_FROM_MONGODB', startGettingTableColumnFromMongoDBAsync)
}

function* startGettingTableColumnFromMongoDBAsync({payload}){
	try{

		const response= yield fetch('/api/v1/application/data/tableValue', {
			method: 'POST',
			headers :{
				'Content-Type': 'application/json'
				},
			body: JSON.stringify(payload)
		});
		const data= yield response.json();

		yield put(successfulGettingTableColumn(data))
	}
	catch(err){
		yield put(errorGettingTableColumn(err))
	}
}

export function* getBivariateBoxPlotDataFromMongoDB(){

	yield takeLatest('START_GETTING_BIVARIATE_BOX_PLOT_DATA_FROM_MONGODB', startGettingBivariateBoxPlotDataFromMongoDBAsync)
}

function* startGettingBivariateBoxPlotDataFromMongoDBAsync({payload}){
	try{

		const response= yield fetch('/api/v1/application/data/bivariareBoxPlot', {
			method: 'POST',
			headers :{
				'Content-Type': 'application/json'
				},
			body: JSON.stringify(payload)
		});
		const data= yield response.json();

		yield put(successfulGettingBivariateBoxPlotData(data))
	}
	catch(err){
		yield put(errorGettingBivariateBoxPlotData(err))
	}
}

export function* getStateGeoDataFromMongoDB(){

	yield takeLatest('START_GETTING_STATE_GEO_DATA_FROM_MONGODB', startGettingStateGeoDataFromMongoDBAsync)
}

function* startGettingStateGeoDataFromMongoDBAsync({payload}){
	try{

		const response= yield fetch('/api/v1/application/data/stateVisualization', {
			method: 'POST',
			headers :{
				'Content-Type': 'application/json'
				},
			body: JSON.stringify(payload)
		});
		const data= yield response.json();

		yield put(successfulGettingStateGeoData(data))
	}
	catch(err){
		yield put(errorGettingStateGeoData(err))
	}
}