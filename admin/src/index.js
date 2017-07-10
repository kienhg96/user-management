import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import store from './configs/store';
import { Provider } from 'react-redux';
import App from './containers/App';

const r = document.getElementById('root');

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	r
);

registerServiceWorker();
