import React from 'react';
import Chart from "react-google-charts";

class GaugeChart extends React.Component{

	constructor(props){
		super(props);
		this.state={
			memory: null,
			cpu: null,
			network: null,
			intervalID: null
		}
	}

	componentDidMount(){
		setInterval(() => {
	      this.setState({
	        memory: Math.random() * 100,
	        cpu: Math.random() * 100,
	        network: Math.random() * 100
	      })
	    }, 1000)
	}

	render(){
		return(
		      <Chart
			        height={300}
			        chartType="Gauge"
			        loader={<div>Loading Chart</div>}
			        data={[
			          ['Label', 'Value'],
			          ['Memory', this.state.memory]
			        ]}
			        options={{
			          redFrom: 90,
			          redTo: 100,
			          yellowFrom: 75,
			          yellowTo: 90,
			          minorTicks: 5,
			        }}
			        rootProps={{ 'data-testid': '1' }}
		      />
			)
	}
}

export default GaugeChart