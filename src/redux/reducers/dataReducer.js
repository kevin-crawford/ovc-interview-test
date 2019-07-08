import {
  GET_DATA_SUCCESS,
  GET_DATA_LOADING,
  GET_DATA_FAIL,
  CLEAR_ERRORS
} from "../actions/dataActions";

const initialState = {
  loading: false,
  data: [],
  errors: null
};

export const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload
      };
    case GET_DATA_LOADING:
      return {
        ...state,
        loading: true
      };
    case GET_DATA_FAIL:
      return {
        ...state,
        loading: false,
        errors: action.payload
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        loading: false,
        errors: null
      };
    default:
      return state;
  }
};

export default dataReducer;
