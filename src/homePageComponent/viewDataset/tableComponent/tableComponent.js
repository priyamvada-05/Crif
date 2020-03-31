import React from 'react';
import { withStyles, makeStyles, lighten } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import './tableComponent.scss';
import Checkbox from '@material-ui/core/Checkbox';
import TablePagination from '@material-ui/core/TablePagination';
import { connect} from 'react-redux';
import LoadingComponent from '../loadingComponent/loadingComponent';
import Button from '@material-ui/core/Button';
import { startLoadingDataToDatabase} from '../../redux/data/sampleDataAction';
import moment from 'moment';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import CircularProgress from '@material-ui/core/CircularProgress';

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: '#3f51b5',
    color: theme.palette.common.white,
  },

  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  highlight:
    theme.palette.type === 'light'
      ? {
          color: theme.palette.secondary.main,
          backgroundColor: lighten(theme.palette.secondary.light, 0.85),
        }
      : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.dark,
        },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
    width: '90vw',
    margin: '10px auto'
  },

});

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const CustomizedTables= (props)=> {
  const rows = props.tableData || []
  const classes = useStyles();

   const [selected, setSelected] = React.useState([]);
   const [page, setPage] = React.useState(0);
   const [rowsPerPage, setRowsPerPage] = React.useState(5);
   const [uploadStatus, setUploadStatus] = React.useState(true);
   const [snackbar, setSnackbar] = React.useState(true);

     const handleChangePage = (event, newPage) => {
       console.log('page')
       console.log(event.target)
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };


  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

   const handleClick = (event, row) => {
    const selectedIndex = selected.indexOf(row);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, row);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
    setUploadStatus(false);
    console.log(uploadStatus)

  };
  const isSelected = row => selected.indexOf(row) !== -1;

  const handleClickUpload= ()=>{
        console.log('selected')
    console.log(selected)

    
    if(selected.length> 0){
      selected.forEach((row)=>{
        props.uploadToDatabase(row)
      })
    }
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackbar(false)
}
  
  return (
    <div className='table'>
    <TableContainer >
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell></StyledTableCell>
            <StyledTableCell>Value Date</StyledTableCell>
            <StyledTableCell >Dataset Name</StyledTableCell>
            <StyledTableCell >Business Line</StyledTableCell>
            <StyledTableCell >Dataset Group</StyledTableCell>
            <StyledTableCell >Valuation Profile</StyledTableCell>
            <StyledTableCell >Created At</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody className='tableColumn'>
          {props.tableData == null?
            (<StyledTableRow>
             <StyledTableCell ></StyledTableCell>
             <StyledTableCell ></StyledTableCell>
             <StyledTableCell ></StyledTableCell>
             <StyledTableCell ><LoadingComponent /></StyledTableCell>
             <StyledTableCell ></StyledTableCell>
             <StyledTableCell ></StyledTableCell>
             <StyledTableCell ></StyledTableCell>
            </StyledTableRow>)

            :(rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                   .map(row =>{
                          const isItemSelected = isSelected(row);
                          //const labelId = `enhanced-table-checkbox-${index}`
                       
                        return(
                        <StyledTableRow 
                          key={row._id} 
                          onClick={event => handleClick(event, row)}
                          selected={isItemSelected}
                          hover
                          role="checkbox"
                          >
                          <StyledTableCell padding="checkbox">
                                    <Checkbox
                                     checked= {isItemSelected}
                                     onClick={event => handleClick(event, row)}
                                     // inputProps={{ 'aria-labelledby': labelId }}
                                    />
                          </StyledTableCell>
                          <StyledTableCell >
                            {row.Value_Date.slice(0,10)}
                          </StyledTableCell>
                          <StyledTableCell >{row.Dataset_Name}</StyledTableCell>
                          <StyledTableCell >{row.Business_Line}</StyledTableCell>
                          <StyledTableCell >{row.Dataset_Group}</StyledTableCell>
                          <StyledTableCell >{row.Valuation_Profile}</StyledTableCell>
                          <StyledTableCell >{row.created_At}</StyledTableCell>
                        </StyledTableRow>
                      )}))
          }

        </TableBody>

      </Table>
    </TableContainer>
    { props.tableData == null?
      (    <TablePagination
          style={{
            width: '90vw'
          }}
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          //count={rows.length}
          //rowsPerPage={rowsPerPage}
          //page={page}
          //onChangePage={handleChangePage}
          //onChangeRowsPerPage={handleChangeRowsPerPage}
        />)
      :(    <TablePagination
          style={{
            width: '90vw'
          }}
          rowsPerPageOptions={[5]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />)
     }
         <div className='button'>
              <Button
                    style={{
                      height: '50px'
                    }}
                  variant="contained"
                  color="primary"
                  size="large"
                  className='reload'
                  onClick={handleClickUpload}
                  disabled={uploadStatus}
                  //startIcon={<SearchIcon />}
              >
                   {props.uploadingStatus?
                    (<CircularProgress size={24} className='buttonProgress' />)
                    : <span>Reload</span>
                }
              </Button>
         </div>

      {(props.dataLoad !== null)?
        (<Snackbar open={snackbar} autoHideDuration={3500} onClose={handleClose} >
                          <Alert onClose={handleClose} severity="success">
                            Dataset Loaded Successfully
                          </Alert>
                  </Snackbar>)
        : null }

      {(props.errorLoading !== null)?
        (<Snackbar open={snackbar} autoHideDuration={3500} onClose={handleClose} >
                          <Alert onClose={handleClose} severity="error">
                            Please check the database
                          </Alert>
                  </Snackbar>)
        : null }
        </div>
  );
}

const mapStateToProps= (rootReducer)=>{
  return({
    tableData: rootReducer.sampleData.tableData,
    loading: rootReducer.sampleData.loadingGettingTableData,
    uploadingStatus: rootReducer.sampleData.loadingUploadData,
    errorLoading: rootReducer.sampleData.errorUploadData,
    dataLoad: rootReducer.sampleData.uploadData
  })
}

const mapDispatchToProps= (dispatch)=>{
  return({
    uploadToDatabase: (obj)=> dispatch(startLoadingDataToDatabase(obj))
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomizedTables)