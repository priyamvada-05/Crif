export const setValuationProfile= (valProfile)=>{
	return({
		type: 'SET_VALUATION_PROFILE',
		payload: valProfile
	})
}

export const setDatasetGroup= (datasetGroup)=>{
	return({
		type: 'SET_DATASET_GROUP',
		payload: datasetGroup
	})
}

export const setBusinessLine= (businessLine)=>{
	return({
		type: 'SET_BUSINESS_LINE',
		payload: businessLine
	})
}

export const setDatasetName= (datasetName)=>{
	return({
		type: 'SET_DATASET_NAME',
		payload: datasetName
	})
}

export const setValueDate= (valueDate)=>{
	return({
		type: 'SET_VALUE_DATE',
		payload: valueDate
	})
}

export const startGettingDataFromDatabase= (object)=>{
	return({
		type: 'START_GETTING_DATA_FROM_DATABASE',
		payload: object
	})
}

export const successfullGettingDataFromDatabase= (object)=>{
	return({
		type: 'SUCCESSFULL_GETTING_DATA_FROM_DATABASE',
		payload: object
	})
}

export const errorGettingDataFromDatabase= (object)=>{
	return({
		type: 'ERROR_GETTING_DATA_FROM_DATABASE',
		payload: object
	})
}

export const resetValues= ()=>{
	return({
		type: 'RESET_VALUES'
	})
}

export const startLoadingDataToDatabase= (object)=>{
	return({
		type: 'START_LOADING_DATA_TO_DATABASE',
		payload: object
	})
}

export const successfullLoadingDataToDatabase= (object)=>{
	return({
		type: 'SUCCESSFULL_LOADING_DATA_TO_DATABASE',
		payload: object
	})
}

export const errorLoadingDataToDatabase= (object)=>{
	return({
		type: 'ERROR_LOADING_DATA_TO_DATABASE',
		payload: object
	})
}