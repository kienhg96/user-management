import { createMuiTheme } from 'material-ui/styles';
import createPalette from 'material-ui/styles/palette';
import { blue } from 'material-ui/styles/colors';

const theme = createMuiTheme({
	palette: createPalette({
		primary: blue
	})
});

export default theme;
