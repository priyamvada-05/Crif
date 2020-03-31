import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import ViewDatasetComponent from '../homePageComponent/viewDataset/viewDatasetComponent';
import LoadDatasetComponent from '../homePageComponent/loadDataset/loadDatasetComponent';
import HeaderComponent from '../homePageComponent/header/headerComponent';


class RouterPageComponent extends React.Component {



render(){
  return (
      <Switch>
        <Route 
        exact={true} 
        path='/' 
        component={HomepageComponent}>
        </Route>
        
  		  <Route 
  			exact={true} 
  			path='/inbuildDataset' 
  			component={InBuildDataset}>
  		  </Route>
	  </Switch>
  )
}
}

export default RouterPageComponent;
