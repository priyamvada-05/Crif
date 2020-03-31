import React from 'react';
import './homePageComponent.scss';
import HeaderComponent from './header/headerComponent';
import DashboardComponent from './dashboard/dashboard';
import { Route, Switch, Redirect } from 'react-router-dom';
import ViewDatasetComponent from './viewDataset/viewDatasetComponent';
import LoadDatasetComponent from './loadDataset/loadDatasetComponent';

class HomePageComponent extends React.Component{

	render(){
		return(
			<div>
			<HeaderComponent />
		    <Switch>
		        <Route 
		        exact={true} 
		        path='/' 
		        component={DashboardComponent}>
		        </Route>
		        
		  		<Route 
	  			exact={true} 
	  			path='/viewDataset' 
	  			component={ViewDatasetComponent}>
		  		</Route>

		  		<Route 
	  			exact={true} 
	  			path='/loadDataset' 
	  			component={LoadDatasetComponent}>
		  		</Route>
			  </Switch>
			  </div>
			)
	}
}

export default HomePageComponent