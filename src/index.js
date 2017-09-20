import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import {Provider} from 'react-redux';
import store from './store';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();


ReactDOM.render(
	<Provider store={store}>
		<div>
			<App/>
		</div>
	</Provider>
	, document.getElementById('root'));

registerServiceWorker();
