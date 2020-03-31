import React from 'react';
import './viewDatasetComponent.scss';
import TableComponent from './tableComponent/tableComponent';
import DatePickerComponent from './datePickerComponent/datPickerComponent';
import SelectComponent from './selectComponent/selectComponent';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import { connect} from 'react-redux';
import { startGettingDataFromDatabase, resetValues} from '../redux/data/sampleDataAction';

class ViewDatasetComponent extends React.Component{

	constructor(props){
		super(props);
		this.state={
			Valuation_Profile: {
				'SRT': ['CSA', 'SCSA'],
				'FRT': ['CSA', 'SCSA'],
				'CRT': ['BASE', 'NEW_TRADE', 'THETA']
			},
			Dataset_Group: ['GRMLONMO', 'GRMESTMO', 'EODESTMO', 'EODLONFO1', 'EODLONMO'],
			Business_Line: ['SRT', 'FRT', 'CRT'],
			Dataset_Name: {
				SRT: ['LONDON_CORE', 'LONDON_CORE_LMM', 'LONDON_NOTES', 'INFLATION', 'INFLATIONEST',
						'LONDON_CORE_LADDER', 'LONDON_CORE_LMM_LADDER', 'LONDON_NOTES_LADDER',
						'XCCY_SWAPS', 'XCCY_SWAPS_MINOR', 'XCCY_SWAPS_EXPR', 'XCCY_SWAPS_EXPR_MINOR'],
				FRT: ['LONDONFLOW1', 'LONDONFLOW2', 'LONDONFLOW3', 'TOR1', 'TOR2', 'TOR3',
						'TOREST1', 'TOREST2', 'TOREST3', 'TOREST1_LADDER', 'TOREST2_LADDER', 'TOREST3_LADDER'],
				CRT: ['CVA', 'FVA', 'CVA_VMREG', 'FVA_VMREG', 'MC_CVA', 'MC_FVA', 'MC_CVA_VMREG', 'MC_FVA_VMREG']
			}
		}
	}

	componentDidMount(){
		this.props.startGettingDataFromDatabase({})
	}

	handleClick=()=>{
		const obj={};
		const key= Object.keys(this.props.sampleData);
		key.forEach((item)=>{
			if(this.props.sampleData[item] !== null && this.props.sampleData[item] !== '' && item !== 'status' && 
				item !== 'tableData' && item !== 'loadingGettingTableData'
				&& item !== 'errorTableData' && item !== 'errorTableData' && 'uploadData' && item !== 'loadingUploadData'
				&& item !== 'errorUploadData'){

				obj[item]=this.props.sampleData[item]
			}
		})
		this.props.startGettingDataFromDatabase(obj)
	}

	componentWillUnmount(){
		this.props.resetValues()
	}


	render(){
		return(
			<div className='view'>

				<Grid className='grid' container spacing={0}>
			        <Grid className='item' item lg={3} sm={6} xs={12}>
			          	<DatePickerComponent />
			        </Grid>

			        <Grid className='item' item lg={3} sm={6} xs={12}>
						<SelectComponent  lable='Business Line' value={this.state.Business_Line}/>
			        </Grid>

			        <Grid className='item' item lg={3} sm={6} xs={12}>
			        	{(this.props.Business_Line == null || this.props.Business_Line == "")?
						(<SelectComponent disabled={true} lable='Dataset Name' value={this.state.Dataset_Name}/>)
						:<SelectComponent disabled={false} lable='Dataset Name' value={this.state.Dataset_Name[this.props.Business_Line]}/>
			        	}
			        </Grid>

			        <Grid className='item' item lg={3} sm={6} xs={12}>
			          	{(this.props.Business_Line == "CRT")?
						(<SelectComponent disabled={true} lable='Dataset Group' value={this.state.Dataset_Group}/>)
						:<SelectComponent disabled={false} lable='Dataset Group' value={this.state.Dataset_Group}/>
			        	}
			        </Grid>
			    </Grid>

			    <Grid className='grid grid1' container spacing={0}>
			        <Grid className='item' item lg={3} sm={6} xs={12}>
			          	{(this.props.Business_Line == null || this.props.Business_Line == "")?
						(<SelectComponent disabled={true} lable='Valuation Profile' value={this.state.Valuation_Profile}/>)
						:<SelectComponent disabled={false} lable='Valuation Profile' value={this.state.Valuation_Profile[this.props.Business_Line]}/>
			        	}
			        </Grid>
			        <Grid className='item' item lg={3} sm={6} xs={12}>
						
			        </Grid>

			        <Grid className='item' item lg={3} sm={6} xs={12}>
						<TextField 	style={{
			          			width: '150px'
			          		}} className='text' id="outlined-basic" label="Search by ID" variant="outlined" />
			        </Grid>

			        <Grid className='item' item lg={3} sm={6} xs={12}>
			          	<Button
			          		style={{
			          			height: '50px'
			          		}}
					        variant="contained"
					        color="primary"
					        size="large"
					        onClick={this.handleClick}
					        startIcon={<SearchIcon />}
					    >
					        Search
					    </Button>
			        </Grid>
			    </Grid>

							
				<TableComponent />
				
			</div>
			)
	}
}

const mapStateToProps= (rootReducer)=>{
	return({
		Business_Line: rootReducer.sampleData.Business_Line,
		sampleData: rootReducer.sampleData
	})
}

const mapDispatchToProps= (dispatch)=>{
	return({
		startGettingDataFromDatabase: (object)=> dispatch(startGettingDataFromDatabase(object)),
		resetValues: ()=> dispatch(resetValues())
	})
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewDatasetComponent)