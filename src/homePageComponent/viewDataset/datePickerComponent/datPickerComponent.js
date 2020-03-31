import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import { connect} from 'react-redux';
import { setValueDate} from '../../redux/data/sampleDataAction';
import moment from 'moment';

const useStyles = makeStyles(theme => ({
  formControl: {
    paddingTop: '10px'
  },
}));

const DatePickerComponent= (props)=> {
  // The first commit of Material-UI
   const [selectedDate, setSelectedDate] = React.useState(null);
   const classes = useStyles();

  const handleDateChange = date => {
    const formatDate= moment(date).format('DD-MM-YYYY')
    setSelectedDate(date);
    props.setValueDate(formatDate)
		}
    return(
    		 <MuiPickersUtilsProvider utils={DateFnsUtils}>
		    		<KeyboardDatePicker className={classes.formControl}
		    		  variant="inline"
			          margin="normal"
			          id="date-picker-dialog"
			          label="Select Date"
			          format="MM/dd/yyyy"
			          value={selectedDate}
			          onChange={handleDateChange}
			          KeyboardButtonProps={{
			            'aria-label': 'change date',
			          }}
			        />
	        </MuiPickersUtilsProvider>
    	)
  }

const mapDispatchToProps= (dispatch)=>{
  return({
    setValueDate: (valueDate)=> dispatch(setValueDate(valueDate))
  })
}

export default connect(null, mapDispatchToProps)(DatePickerComponent)