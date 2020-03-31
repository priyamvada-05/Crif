const INITIAL_STATE={
	Valuation_Profile: null,
	Dataset_Group: null,
	Business_Line: null,
	Dataset_Name: null,
	Value_Date: null,
	status: false,
	tableData: null,
	loadingGettingTableData: false,
	errorTableData:null,
	uploadData: null,
	loadingUploadData: false,
	errorUploadData:null,
}

const sampleDataReducer = (state=INITIAL_STATE, action)=>{

	switch(action.type){

		case 'SET_VALUATION_PROFILE' : 
			return({
				...state,
				Valuation_Profile: action.payload
			})

		case 'SET_DATASET_GROUP' : 
			return({
				...state,
				Dataset_Group: action.payload
			})

		case 'SET_BUSINESS_LINE' : 
			return({
				...state,
				Business_Line: action.payload,
			})

		case 'SET_DATASET_NAME' : 
			return({
				...state,
				Dataset_Name: action.payload
			})

		case 'SET_VALUE_DATE' : 
			return({
				...state,
				Value_Date: action.payload
			})

		case 'START_GETTING_DATA_FROM_DATABASE' : 
			return({
				...state,
				loadingGettingTableData: true
			})

		case 'SUCCESSFULL_GETTING_DATA_FROM_DATABASE' : 
			return({
				...state,
				tableData: action.payload,
				loadingGettingTableData: false
			})

		case 'ERROR_GETTING_DATA_FROM_DATABASE' : 
			return({
				...state,
				errorTableData: action.payload,
				loadingGettingTableData: false
			})

		case 'RESET_VALUES' : 
			return({
				Valuation_Profile: null,
				Dataset_Group: null,
				Business_Line: null,
				Dataset_Name: null,
				Value_Date: null,
				status: false,
				tableData: null,
				loadingGettingTableData: false,
				errorTableData:null,
				uploadData: null,
				loadingUploadData: false,
				errorUploadData:null,
			})

		case 'START_LOADING_DATA_TO_DATABASE' : 
			return({
				...state,
				loadingUploadData: true
			})

		case 'SUCCESSFULL_LOADING_DATA_TO_DATABASE' : 
			return({
				...state,
				uploadData: action.payload,
				loadingUploadData: false
			})

		case 'ERROR_LOADING_DATA_TO_DATABASE' : 
			return({
				...state,
				errorUploadData: action.payload,
				loadingUploadData: false
			})

		default :
			return(state)
	}
}

export default sampleDataReducer