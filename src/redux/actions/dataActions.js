import { SET_DATA, LOADING_DATA, SET_ERRORS, CLEAR_ERRORS, LOADING_UI} from '../types';


export const getData = () => dispatch => {
	fetch('https://jsonplaceholder.typicode.com/users')
		.then(res => res.json())
		.then(data => {
			console.log(data)
			dispatch({ type: LOADING_DATA });
			dispatch({
				type: SET_DATA,
				payload: data
			});
		})
		.catch( err => {
			dispatch({
				type: SET_ERRORS,
				payload: err
			});
		});
};

export default getData;