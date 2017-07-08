import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import store from './configs/store';
import history from './configs/history';
import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';
import App from './containers/App';
import { MuiThemeProvider } from 'material-ui/styles';
import theme from './configs/theme';

ReactDOM.render(
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<MuiThemeProvider theme={theme}>
				<App />
			</MuiThemeProvider>
		</ConnectedRouter>
	</Provider>,
	document.getElementById('root')
);
registerServiceWorker();
