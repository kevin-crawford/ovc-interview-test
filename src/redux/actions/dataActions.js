import axios from "axios";

export const GET_DATA_LOADING = "GET_DATA_LOADING";
const getDataLoading = () => ({
  type: GET_DATA_LOADING
});

export const GET_DATA_SUCCESS = "GET_DATA_SUCCESS";
const getDataSuccess = data => ({
  type: GET_DATA_SUCCESS,
  payload: data
});

export const GET_DATA_FAIL = "GET_DATA_FAIL";
const getDataFail = error => ({
  type: GET_DATA_FAIL,
  payload: error
});

export const CLEAR_ERRORS = "CLEAR_ERRORS";
const clearErrors = () => ({
  type: CLEAR_ERRORS
});

export const getData = () => dispatch => {
  dispatch(getDataLoading());

  return axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then(res => {
      dispatch(getDataSuccess(res.data));
      return res;
    })
    .catch(error => {
      dispatch(getDataFail(error));
      return error;
    });
};

export default getData;
