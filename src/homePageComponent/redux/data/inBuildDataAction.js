export const startGettingHeader=(fileObj)=>{
	return({
		type: 'START_GETTING_HEADER_FROM_MONGODB',
		payload: fileObj
	})
}

export const successfulGettingHeader=(header)=>{
	return({
		type: 'SUCCESSFUL_GETTING_HEADER_FROM_MONGODB',
		payload: header
	})
}

export const errorGettingHeader=()=>{
	return({
		type: 'ERROR_GETTING_HEADER_FROM_MONGODB'
	})
}

export const startGettingQuantitativeDataWildcardColumn=(colName)=>{
	return({
		type: 'START_GETTING_QUANTITATIVE_WILDCARD_COLUMN_DATA_FROM_MONGODB',
		payload: colName
	})
}

export const successfulGettingQuantitativeDataWildcardColumn=(data)=>{
	return({
		type: 'SUCCESSFUL_GETTING_QUANTITATIVE_WILDCARD_COLUMN_DATA_FROM_MONGODB',
		payload: data
	})
}

export const errorGettingQuantitativeDataWildcardColumn=(error)=>{
	return({
		type: 'ERROR_GETTING_QUANTITATIVE_WILDCARD_COLUMN_DATA_FROM_MONGODB',
		payload: error
	})
}

export const startGettingQualitativeDataWildcardColumn=(colName)=>{
	return({
		type: 'START_GETTING_QUALITATIVE_WILDCARD_COLUMN_DATA_FROM_MONGODB',
		payload: colName
	})
}

export const successfulGettingQualitativeDataWildcardColumn=(data)=>{
	return({
		type: 'SUCCESSFUL_GETTING_QUALITATIVE_WILDCARD_COLUMN_DATA_FROM_MONGODB',
		payload: data
	})
}

export const errorGettingQualitativeDataWildcardColumn=(error)=>{
	return({
		type: 'ERROR_GETTING_QUALITATIVE_WILDCARD_COLUMN_DATA_FROM_MONGODB',
		payload: error
	})
}

export const updateReqQuantitativeColname=(colName)=>{
	return({
		type:'UPDATE_REQ_QUANTITATIVE_COLNAME',
		payload: colName
	})
}

export const updateReqQualitativeColname=(colName)=>{
	return({
		type:'UPDATE_QUALITATIVE_REQ_COLNAME',
		payload: colName
	})
}

export const updateBivariateChoose1=(colName)=>{
	return({
		type:'UPDATE_BIVARIATE_CHOOSE_1',
		payload: colName
	})
}

export const updateBivariateChoose2=(colName)=>{
	return({
		type:'UPDATE_BIVARIATE_CHOOSE_2',
		payload: colName
	})
}

export const updateBivariateChoose3=(colName)=>{
	return({
		type:'UPDATE_BIVARIATE_CHOOSE_3',
		payload: colName
	})
}

export const updateBivariateChoose4=(colName)=>{
	return({
		type:'UPDATE_BIVARIATE_CHOOSE_4',
		payload: colName
	})
}

export const startGettingBivariateQuantitativeData=(colNameObj)=>{
	return({
		type: 'START_GETTING_BIVARIATE_QUANTITATIVE_DATA_FROM_MONGODB',
		payload: colNameObj
	})
}

export const successfulGettingBivariateQuantitativeData=(data)=>{
	return({
		type: 'SUCCESSFUL_GETTING_BIVARIATE_QUANTITATIVE_DATA_FROM_MONGODB',
		payload: data
	})
}

export const errorGettingBivariateQuantitativeData=(error)=>{
	return({
		type: 'ERROR_GETTING_BIVARIATE_QUANTITATIVE_DATA_FROM_MONGODB',
		payload: error
	})
}

export const startGettingBivariateQualitativeData=(colNameObj)=>{
	return({
		type: 'START_GETTING_BIVARIATE_QUALITATIVE_DATA_FROM_MONGODB',
		payload: colNameObj
	})
}

export const successfulGettingBivariateQualitativeData=(data)=>{
	return({
		type: 'SUCCESSFUL_GETTING_BIVARIATE_QUALITATIVE_DATA_FROM_MONGODB',
		payload: data
	})
}

export const errorGettingBivariateQualitativeData=(error)=>{
	return({
		type: 'ERROR_GETTING_BIVARIATE_QUALITATIVE_DATA_FROM_MONGODB',
		payload: error
	})
}

export const startUploadingData=(fileObj)=>{
	return({
		type: 'START_UPLOADING_DATA_TO_MONGODB',
		payload: fileObj
	})
}

export const successfulUploadingDataToMongoDB=(data)=>{
	return({
		type: 'SUCCESSFUL_LOADING_DATA_TO_MONGODB'
	})
}

export const errorUploadingDataToMongoDB=(error)=>{
	return({
		type: 'ERROR_LOADING_DATA_TO_MONGODB',
		payload: error
	})
}

export const startCleaningReducerData=()=>{
	return({
		type: 'START_CLEANING_REDUCER'
	})
}

export const startGettingGeographicalData=(colNameObj)=>{
	return({
		type: 'START_GETTING_GEOGRAPHICAL_DATA_FROM_MONGODB',
		payload: colNameObj
	})
}

export const successfulGettingGeographicalData=(data)=>{
	return({
		type: 'SUCCESSFUL_GETTING_GEOGRAPHICAL_DATA_FROM_MONGODB',
		payload: data
	})
}

export const errorGettingGeographicalData=(error)=>{
	return({
		type: 'ERROR_GETTING_GEOGRAPHICAL_DATA_FROM_MONGODB',
		payload: error
	})
}

export const updateGeographicalChoose=(colName)=>{
	return({
		type:'UPDATE_GEOGRAPHICAL_CHOOSE',
		payload: colName
	})
}

export const updateDatasetName=(name)=>{
	return({
		type:'UPDATE_DATASET_NAME',
		payload: name
	})
}

export const increaseLimit=()=>{
	return({
		type:'INCREASE_LIMIT'
	})
}

export const decreaseLimit=()=>{
	return({
		type:'DECREASE_LIMIT'
	})
}

export const startGettingTableHeader=(colNameObj)=>{
	return({
		type: 'START_GETTING_TABLE_HEADER_FROM_MONGODB',
		payload: colNameObj
	})
}

export const successfulGettingTableHeader=(data)=>{
	return({
		type: 'SUCCESSFUL_GETTING_TABLE_HEADER_FROM_MONGODB',
		payload: data
	})
}

export const errorGettingTableHeader=(error)=>{
	return({
		type: 'ERROR_GETTING_TABLE_HEADER_FROM_MONGODB',
		payload: error
	})
}

export const startGettingTableColumn=(colNameObj)=>{
	return({
		type: 'START_GETTING_TABLE_COLUMN_FROM_MONGODB',
		payload: colNameObj
	})
}

export const successfulGettingTableColumn=(data)=>{
	return({
		type: 'SUCCESSFUL_GETTING_TABLE_COLUMN_FROM_MONGODB',
		payload: data
	})
}

export const errorGettingTableColumn=(error)=>{
	return({
		type: 'ERROR_GETTING_TABLE_COLUMN_FROM_MONGODB',
		payload: error
	})
}

export const startGettingBivariateBoxPlotData=(colNameObj)=>{
	return({
		type: 'START_GETTING_BIVARIATE_BOX_PLOT_DATA_FROM_MONGODB',
		payload: colNameObj
	})
}

export const successfulGettingBivariateBoxPlotData=(data)=>{
	return({
		type: 'SUCCESSFUL_GETTING_BIVARIATE_BOX_PLOT_DATA_FROM_MONGODB',
		payload: data
	})
}

export const errorGettingBivariateBoxPlotData=(error)=>{
	return({
		type: 'ERROR_GETTING_BIVARIATE_BOX_PLOT_DATA_FROM_MONGODB',
		payload: error
	})
}

export const updateBivariateChoose5=(colName)=>{
	return({
		type:'UPDATE_BIVARIATE_CHOOSE_5',
		payload: colName
	})
}

export const updateBivariateChoose6=(colName)=>{
	return({
		type:'UPDATE_BIVARIATE_CHOOSE_6',
		payload: colName
	})
}

export const startGettingStateGeoData=(colNameObj)=>{
	return({
		type: 'START_GETTING_STATE_GEO_DATA_FROM_MONGODB',
		payload: colNameObj
	})
}

export const successfulGettingStateGeoData=(data)=>{
	return({
		type: 'SUCCESSFUL_GETTING_STATE_GEO_DATA_FROM_MONGODB',
		payload: data
	})
}

export const errorGettingStateGeoData=(error)=>{
	return({
		type: 'ERROR_GETTING_STATE_GEO_DATA_FROM_MONGODB',
		payload: error
	})
}

export const updateStateGeographicalChoose=(colName)=>{
	return({
		type:'UPDATE_STATE_GEO_CHOOSE',
		payload: colName
	})
}
