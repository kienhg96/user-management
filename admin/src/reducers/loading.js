import { SET_LOADING } from '../constants/actionTypes';
const DEFAULT_STATE = {
	count: 0,
	status: false
}

export default (state = DEFAULT_STATE, action) => {
	switch (action.type) {
		case SET_LOADING:
			if (action.loading) {
				const count = state.count + 1;
				return {
					count,
					status: true
				}
			} else {
				const count = state.count - 1;
				return {
					count,
					status: count !== 0
				};
			}
		default:
			return state;
	}
}
