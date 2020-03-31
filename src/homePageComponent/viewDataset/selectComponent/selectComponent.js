import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { connect} from 'react-redux';
import { setValuationProfile, setDatasetGroup, setBusinessLine, setDatasetName} from '../../redux/data/sampleDataAction';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    width:'12rem'
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const SelectComponent= (props) => {
  //console.log(props)
  const classes = useStyles();
  const [state, setState] = React.useState({
    value:''
  });

  const handleChange = event => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,

      }); 
    if(props.lable === 'Business Line'){
      props.setBusinessLine(event.target.value)
    }

    else if(props.lable === 'Dataset Name'){
      props.setDatasetName(event.target.value)
    }

    else if(props.lable === 'Dataset Group'){
      props.setDatasetGroup(event.target.value)
    }

    else{
      props.setValuationProfile(event.target.value)
    }  
  };

  const getSelectedValue=(value)=>{
    console.log(value)
     
  }

  return(
      <div>
      {props.disabled?
(      <FormControl disabled variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-age-native-simple">{props.lable}</InputLabel>
        <Select
          native
          //value={}
          onChange={handleChange}
          label= {props.lable}
          inputProps={{
            name: props.lable,
            id: 'outlined-age-native-simple',
          }}
        >
          <option aria-label="None" value="" />
        </Select>
      </FormControl>)
      :
(      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-age-native-simple">{props.lable}</InputLabel>
        <Select
          native={false}
          value={state.name}
          onChange={handleChange}
          label= {props.lable}
          inputProps={{
            name: props.lable,
            id: 'outlined-age-native-simple',
          }}
          //renderValue={getSelectedValue}
        >
          <option aria-label="None" value="" />
          {props.value.map((item, index)=>
            
                        <option /**/ value={item}>{item}</option>
                      )
        }
        </Select>
      </FormControl>)
    }
      </div>
  	)

}


const mapStateToProps= (rootReducer)=>{
  return({
    businessLine: rootReducer.sampleData.businessLine
  })
}

const mapDispatchToProps= (dispatch)=>{
  return({
    setValuationProfile: (value) => dispatch(setValuationProfile(value)),
    setDatasetName: (value) => dispatch(setDatasetName(value)),
    setDatasetGroup: (value) => dispatch(setDatasetGroup(value)),
    setBusinessLine: (value) => dispatch(setBusinessLine(value))
  })
}



export default connect(mapStateToProps, mapDispatchToProps)(SelectComponent)