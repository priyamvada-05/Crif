import React from 'react';
import './dashboard.scss';
import { Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import RbcIcon from '../../assets/royalB1.png';
import Chart from "react-google-charts";
import GaugeChart from '../graph/gaugeChartComponent';
import GaugeChartCPU from '../graph/gaugeChartCPUComponent';
import GaugeChartNetwork from '../graph/gaugeChartNetworkComponent'

const useStyles = makeStyles({
  root: {
    minWidth: 150,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

class DashboardComponent extends React.Component{

	constructor(){
		super();
		this.classes = makeStyles({
				  root: {
				    minWidth: 275,
				    backgroundColor: 'blue'
				  },
				  bullet: {
				    display: 'inline-block',
				    margin: '0 2px',
				    transform: 'scale(0.8)',
				  },
				  title: {
				    fontSize: 14,
				  },
				  pos: {
				    marginBottom: 12,
				  },
				});
	}

	render(){
		return(
			<div className='dashboard'>
				<div className='page'>
					<Card className='card shadow-5' style={{
						width: '50vw',
						height: '40vh',
						position: 'absolute',
						top: '35%',
						left: '36%'

					}}>
						<CardContent>
							<Typography noWrap='true' variant="h1" component="h2" align='center' style={{
								paddingTop: '35px',
								color: 'black'
									}}>
							  Dashboard
							</Typography>
						</CardContent>
					</Card>
					<div className='box'>
					<img className='icon' src={RbcIcon} height='400px' width='' style={{marginTop: '10rem'}}/>
					</div>
				</div>
				<Typography noWrap='true' variant="h2" component="h2" align='center' style={{
								marginTop: '21rem',
								color: 'black'
									}}>
							  Health Check
				</Typography>
				<div className='container' style={{marginTop: '15px'}}>
				<div className='row'>
					<div className='col-md-4 graph'>
					<GaugeChart />
					</div>

					<div className='col-md-4 graph'>
					<GaugeChartCPU />
					</div>

					<div className='col-md-4 graph'>
					<GaugeChartNetwork />
					</div>

				</div>
				
				
				
				</div>
			</div>
			)
	}
}

export default DashboardComponent