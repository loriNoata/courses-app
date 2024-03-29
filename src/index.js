import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'; 
import { Provider} from 'react-redux'; 
import './index.scss';
 import Board from './Board'; 
import reducer from './store/reducer'; 
import { BrowserRouter } from 'react-router-dom'; 


import * as serviceWorker from './serviceWorker';

const store = createStore(reducer);

ReactDOM.render(
	<Provider store = {store}>
		<BrowserRouter>
			<Board />
		</BrowserRouter>
	</Provider>, 
	document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
