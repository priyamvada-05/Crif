import React from 'react';
import './loadDatasetComponent.scss';
import ContainerComponent from './containerComponent/containerComponent';
import SelectComponent from '../viewDataset/selectComponent/selectComponent';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';
import DateComponent from '../viewDataset/datePickerComponent/datPickerComponent';
import { connect} from 'react-redux';
import BackupIcon from '@material-ui/icons/Backup';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import { startLoadingDataToDatabase, resetValues} from '../redux/data/sampleDataAction';
import CircularProgress from '@material-ui/core/CircularProgress';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

class LoadDatasetComponent extends React.Component{

	constructor(){
		super();
		this.state={
			  bgcolor: 'background.paper',
			  borderColor: 'primary.main',
			  m: 0.5,
			  border: 0.5,
			  style: { width: '70vw'},
			Valuation_Profile: {
				'B_LINE_1': ['PROFILE_1', 'PROFILE_2'],
				'B_LINE_2': ['PROFILE_1', 'PROFILE_2'],
				'B_LINE_3': ['PROFILE_3', 'PROFILE_4', "PROFILE_5"]
			},
			Dataset_Group: ['GROUP_1', 'GROUP_2'],
			Business_Line: ['B_LINE_1', 'B_LINE_2', 'B_LINE_3'],
			Dataset_Name: {
				B_LINE_1: ['DATASET_1', 'DATASET_1_LMM', 'DATASET_2'],
				B_LINE_2: ['DATASET_FLOW1', 'DATASET_FLOW2', 'DATASET_FLOW3'],
				B_LINE_3: ['DATASET_3', 'DATASET_4']
			},
			status: false
		}
	}

	handleClick=()=>{
		const obj={};
		const key= Object.keys(this.props.sampleData);
		key.forEach((item)=>{
			if(this.props.sampleData[item] !== null && this.props.sampleData[item] !== '' && item !== 'status' && 
				item !== 'tableData' && item !== 'loadingGettingTableData'
				&& item !== 'errorTableData' && 'uploadData' && item !== 'loadingUploadData'
				&& item !== 'errorUploadData'){

				obj[item]=this.props.sampleData[item]
			}
		})
		const objArray= Object.values(obj)
		
		if(this.props.Business_Line === 'CRT' && objArray.length === 4){
			this.setState({
				status: false
			})
		}
		else if(this.props.Business_Line !== 'CRT' && objArray.length === 5){
			this.setState({
				status: false
			})
		}
		else {
			this.setState({
				status: true
			})
		}

		if(!this.state.status && objArray.length >= 4){
			this.props.startLoadingDataToDatabase(obj)
	}

		
	}

	componentWillMount(){
		this.props.resetValues()
	}

	componentWillUnmount(){
		this.props.resetValues()
	}

	handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    this.setState({
    	status: false
    })
}

	render(){
		return(
			<div className='loadDataset'>
				<div  className='box'>
					<Grid className='grid' container spacing={0}>
				        <Grid className='item' item lg={6} sm={12} xs={12}>
					         <Typography className='text shadow-1'  noWrap='true' variant="h5" component="h5"  style={{
								color: 'white'
									}}>
							  Upload Dataset
							</Typography>
				        </Grid>

				        <Grid className='item' item lg={6} sm={12} xs={12}>
				          	
				        </Grid>
				    </Grid>

				</div>

			<div className='load'>

				<Box  borderRadius={16} {...this.state}>
					<Grid className='grid' container spacing={0}>
				        <Grid className='item' item lg={6} sm={12} xs={12}>
				          	<DateComponent />
				        </Grid>

				        <Grid className='item' item lg={6} sm={12} xs={12}>
				          	
				        </Grid>
				    </Grid>

				    <Grid className='grid' container spacing={0}>
				        <Grid className='item' item lg={6} sm={12} xs={12}>
				        <SelectComponent lable='Business Line' value={this.state.Business_Line}/>
				        </Grid>

				        <Grid className='item' item lg={6} sm={12} xs={12}>
			        	{(this.props.Business_Line == null || this.props.Business_Line == "")?
						(<SelectComponent disabled={true} lable='Dataset Name' value={this.state.Dataset_Name}/>)
						:<SelectComponent disabled={false} lable='Dataset Name' value={this.state.Dataset_Name[this.props.Business_Line]}/>
			        	}
				        </Grid>
				    </Grid>

				    <Grid className='grid' container spacing={0}>
				        <Grid className='item' item lg={6} sm={12} xs={12}>
			          	{(this.props.Business_Line == "CRT")?
						(<SelectComponent disabled={true} lable='Dataset Group' value={this.state.Dataset_Group}/>)
						:<SelectComponent disabled={false} lable='Dataset Group' value={this.state.Dataset_Group}/>
			        	}
				        </Grid>

				        <Grid className='item' item lg={6} sm={12} xs={12}>
				        {(this.props.Business_Line == null || this.props.Business_Line == "")?
						(<SelectComponent disabled={true} lable='Valuation Profile' value={this.state.Valuation_Profile}/>)
						:<SelectComponent disabled={false} lable='Valuation Profile' value={this.state.Valuation_Profile[this.props.Business_Line]}/>
			        	}
				        </Grid>
				    </Grid>

				    <Grid className='grid' container spacing={0}>
				        <Grid className='item' item lg={4} sm={12} xs={12}>
				        </Grid>

				        <Grid className='item' item lg={4} sm={12} xs={12}>
				          <Button
					        variant="contained"
					        color="primary"
					        size="large"
					        startIcon={<BackupIcon />}
					        onClick={this.handleClick}
					    >
					        
					         {this.props.uploadingStatus?
					          (<CircularProgress size={24} className='buttonProgress' />)
					          : <span>Upload</span>
					      }
					    </Button>
					   
				        </Grid>

				        <Grid className='item' item lg={4} sm={12} xs={12}>
				        </Grid>
				    </Grid>
				</Box>
			</div>

			<Snackbar open={this.state.status} autoHideDuration={3500} onClose={this.handleClose} >
			        <Alert onClose={this.handleClose} severity="error">
			          Please select all the enable options
			        </Alert>
			</Snackbar>
			{(this.props.dataLoad !== null)?
			(<Snackbar open={true} autoHideDuration={3500} onClose={this.handleClose} >
			        <Alert onClose={this.handleClose} severity="success">
			          Dataset uploaded
			        </Alert>
			</Snackbar>)
			: null
			}

			{(this.props.errorLoading !== null)?
			(<Snackbar open={true} autoHideDuration={3500} onClose={this.handleClose} >
			        <Alert onClose={this.handleClose} severity="error">
			          Please refresh the page and load again
			        </Alert>
			</Snackbar>)
			: null
			}
							</div>
			)
	}
}

const mapStateToProps= (rootReducer)=>{
	return({
		Business_Line: rootReducer.sampleData.Business_Line,
		sampleData: rootReducer.sampleData,
		uploadingStatus: rootReducer.sampleData.loadingUploadData,
		errorLoading: rootReducer.sampleData.errorUploadData,
		dataLoad: rootReducer.sampleData.uploadData
	})
}

const mapDispatchToProps= (dispatch)=>{
	return({
		startLoadingDataToDatabase: (obj)=> dispatch(startLoadingDataToDatabase(obj)),
		resetValues: ()=> dispatch(resetValues())
	})
}

export default connect(mapStateToProps, mapDispatchToProps)(LoadDatasetComponent)