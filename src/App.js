import React from 'react';
import './App.css';
import HomePageComponent from './homePageComponent/homePageComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'tachyons';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate} from 'redux-persist/integration/react';
import { Provider} from 'react-redux';
import {store, persistor} from './homePageComponent/redux/store';

class App extends React.Component {

  render(){
    return (
      <div className="App">
        <Provider  store={store}>
	      	<BrowserRouter >
		      	<PersistGate persistor={persistor}>
		        	<HomePageComponent />
		        </PersistGate>
	        </BrowserRouter>
        </Provider>
      </div>
    )
}
}

export default App
