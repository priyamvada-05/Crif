import { addLimit, subLimit} from './inBuildDataUtil';

const INITIAL_STATE={
	header: null,
	loading:false,
	error:null,
	quantitativeColName:null,
	qualitativeColName:null,
	quantitativeData:null,
	qualitativeData:null,
	loadingQualitativeData:false,
	loadingQuantitativeData:false,
	receivedQualitativeData:false,
	receivedQuantitativeData:false,
	bivariateChose1 : null,
	bivariateChose2 : null,
	bivariateChose3 : null,
	bivariateChose4 : null,
	geographicalChose:null,
	loadingQuantitativeBivariateData: false,
	bivariateQuantitativeData: null,
	bivariateQuantitativeError: null,
	loadingQualitativeBivariateData: false,
	bivariateQualitativeData: null,
	bivariateQualitativeError: null,
	loadingManualData:false,
	uploadDataObj:{
		name:'data.csv',
		file:null
	},
	errorUploadDataObj:null,
	geograhicalData:null,
	geograhicalDataError:null,
	loadingGeographicalData:false,
	datasetName:null,
	startLimit:0,
	tableHeader:null,
	tableColumn:null,
	loadingTable:false,
	loadingTableHeader:false,
	loadingCompleteTable:false,
	loadingBivariateBoxPlot:false,
	bivariateBoxPlotData:null,
	bivariateBoxPlotError:null,
	bivariateChose5: null,
	bivariateChose6: null,
	loaded:false,
	loadingStateGeo:false,
	stateGeoData:null,
	errorStateGeoData: null,
	stateGeoChose: null
}

const inBuildDataReducer=(state= INITIAL_STATE, action)=>{

	switch(action.type){

		case 'START_GETTING_HEADER_FROM_MONGODB':
			return({
				...state,
				loading:true
			})

		case 'SUCCESSFUL_GETTING_HEADER_FROM_MONGODB':
			return({
				...state,
				loading:false,
				header: action.payload
			})

		case 'ERROR_GETTING_HEADER_FROM_MONGODB':
			return({
				...state,
				loading:false,
				error: action.payload
			})

		case 'START_GETTING_QUANTITATIVE_WILDCARD_COLUMN_DATA_FROM_MONGODB':
			return({
				...state,
				loadingQualitativeData:false,
				loadingQuantitativeData:true
			})

		case 'SUCCESSFUL_GETTING_QUANTITATIVE_WILDCARD_COLUMN_DATA_FROM_MONGODB':
			return({
				...state,
				loadingData:false,
				quantitativeData:action.payload,
				receivedQuantitativeData:true
			})

		case 'ERROR_GETTING_QUANTITATIVE_WILDCARD_COLUMN_DATA_FROM_MONGODB':
			return({
				...state,
				loadingData:false,
				quantitativeData:action.payload,
				receivedQuantitativeData:false
			})

		case 'START_GETTING_QUALITATIVE_WILDCARD_COLUMN_DATA_FROM_MONGODB':
			return({
				...state,
				loadingQualitativeData:true,
				loadingQuantitativeData:false
			})

		case 'SUCCESSFUL_GETTING_QUALITATIVE_WILDCARD_COLUMN_DATA_FROM_MONGODB':
			return({
				...state,
				qualitativeData:action.payload,
				receivedQualitativeData: true
			})

		case 'ERROR_GETTING_QUALITATIVE_WILDCARD_COLUMN_DATA_FROM_MONGODB':
			return({
				...state,
				qualitativeData:action.payload,
				receivedQualitativeData:false
			})

		case 'UPDATE_REQ_QUANTITATIVE_COLNAME':
			return({
				...state,
				quantitativeColName:action.payload
			})

		case 'UPDATE_QUALITATIVE_REQ_COLNAME':
			return({
				...state,
				qualitativeColName:action.payload
			})

		case 'UPDATE_BIVARIATE_CHOOSE_1':
			return({
				...state,
				bivariateChose1:action.payload
			})

		case 'UPDATE_BIVARIATE_CHOOSE_2':
			return({
				...state,
				bivariateChose2:action.payload
			})

		case 'UPDATE_BIVARIATE_CHOOSE_3':
			return({
				...state,
				bivariateChose3:action.payload
			})

		case 'UPDATE_BIVARIATE_CHOOSE_4':
			return({
				...state,
				bivariateChose4:action.payload
			})

		case 'START_GETTING_BIVARIATE_QUANTITATIVE_DATA_FROM_MONGODB':
			return({
				...state,
				loadingQuantitativeBivariateData: true
			})

		case 'SUCCESSFUL_GETTING_BIVARIATE_QUANTITATIVE_DATA_FROM_MONGODB':
			return({
				...state,
				loadingQuantitativeBivariateData:false,
				bivariateQuantitativeData:action.payload
			})

		case 'ERROR_GETTING_BIVARIATE_QUANTITATIVE_DATA_FROM_MONGODB':
			return({
				...state,
				loadingQuantitativeBivariateData:false,
				bivariateQuantitativeError:action.payload
			})

		case 'START_GETTING_BIVARIATE_QUALITATIVE_DATA_FROM_MONGODB':
			return({
				...state,
				loadingQualitativeBivariateData: true
			})

		case 'SUCCESSFUL_GETTING_BIVARIATE_QUALITATIVE_DATA_FROM_MONGODB':
			return({
				...state,
				loadingQualitativeBivariateData:false,
				bivariateQualitativeData:action.payload
			})

		case 'ERROR_GETTING_BIVARIATE_QUALITATIVE_DATA_FROM_MONGODB':
			return({
				...state,
				loadingQualitativeBivariateData:false,
				bivariateQualitativeError:action.payload
			})

		case 'START_UPLOADING_DATA_TO_MONGODB':
			return({
				...state,
				loadingManualData: true,
				loaded:false,
				uploadDataObj: action.payload
			})

		case 'SUCCESSFUL_LOADING_DATA_TO_MONGODB':
			return({
				...state,
				loaded:true,
				loadingManualData:false
			})

		case 'ERROR_LOADING_DATA_TO_MONGODB':
			return({
				...state,
				loadingManualData:false,
				errorUploadDataObj:action.payload
			})

		case 'START_CLEANING_REDUCER':
			return({
				...INITIAL_STATE
			})

		case 'START_GETTING_GEOGRAPHICAL_DATA_FROM_MONGODB':
			return({
				...state,
				loadingGeographicalData: true
			})

		case 'SUCCESSFUL_GETTING_GEOGRAPHICAL_DATA_FROM_MONGODB':
			return({
				...state,
				loadingGeographicalData:false,
				geograhicalData:action.payload
			})

		case 'ERROR_GETTING_GEOGRAPHICAL_DATA_FROM_MONGODB':
			return({
				...state,
				loadingGeographicalData:false,
				geograhicalDataError:action.payload
			})

		case 'UPDATE_GEOGRAPHICAL_CHOOSE':
			return({
				...state,
				geographicalChose:action.payload
			})

		case 'UPDATE_DATASET_NAME':
			return({
				...state,
				datasetName:action.payload
			})

		case 'INCREASE_LIMIT':
			return({
				...state,
				startLimit: addLimit(state.startLimit)
			})

		case 'DECREASE_LIMIT':
			return({
				...state,
				startLimit: subLimit(state.startLimit)
			})

		case 'START_GETTING_TABLE_HEADER_FROM_MONGODB':
			return({
				...state,
				loadingTableHeader: true,
				loadingCompleteTable: true
			})

		case 'SUCCESSFUL_GETTING_TABLE_HEADER_FROM_MONGODB':
			return({
				...state,
				loadingTableHeader:false,
				tableHeader:action.payload
			})

		case 'ERROR_GETTING_TABLE_HEADER_FROM_MONGODB':
			return({
				...state,
				loadingTableHeader:false,
				tableHeader:action.payload
			})

		case 'START_GETTING_TABLE_COLUMN_FROM_MONGODB':
			return({
				...state,
				loadingTable: true
			})

		case 'SUCCESSFUL_GETTING_TABLE_COLUMN_FROM_MONGODB':
			return({
				...state,
				loadingTable:false,
				tableColumn:action.payload,
				loadingCompleteTable:false
			})

		case 'ERROR_GETTING_TABLE_COLUMN_FROM_MONGODB':
			return({
				...state,
				loadingTable:false,
				tableColumn:action.payload
			})

		case 'START_GETTING_BIVARIATE_BOX_PLOT_DATA_FROM_MONGODB':
			return({
				...state,
				loadingBivariateBoxPlot: true
			})

		case 'SUCCESSFUL_GETTING_BIVARIATE_BOX_PLOT_DATA_FROM_MONGODB':
			return({
				...state,
				loadingCompleteTable:false,
				bivariateBoxPlotData:action.payload
			})

		case 'ERROR_GETTING_BIVARIATE_BOX_PLOT_DATA_FROM_MONGODB':
			return({
				...state,
				loadingCompleteTable:false,
				bivariateBoxPlotError:action.payload
			})

		case 'UPDATE_BIVARIATE_CHOOSE_5':
			return({
				...state,
				bivariateChose5:action.payload
			})

		case 'UPDATE_BIVARIATE_CHOOSE_6':
			return({
				...state,
				bivariateChose6:action.payload
			})

		case 'START_GETTING_STATE_GEO_DATA_FROM_MONGODB':
			return({
				...state,
				loadingStateGeo: true
			})

		case 'SUCCESSFUL_GETTING_STATE_GEO_DATA_FROM_MONGODB':
			return({
				...state,
				loadingStateGeo:false,
				stateGeoData:action.payload
			})

		case 'ERROR_GETTING_STATE_GEO_DATA_FROM_MONGODB':
			return({
				...state,
				loadingStateGeo:false,
				errorStateGeoData:action.payload
			})

		case 'UPDATE_STATE_GEO_CHOOSE':
			return({
				...state,
				stateGeoChose:action.payload
			})


		default: 
			return state
	}
	}

export default inBuildDataReducer