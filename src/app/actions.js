import createActionTypes from "../utils/createActionTypes";
import apiRequest from "../utils/api";

export const appActions = createActionTypes("appActions", [
  "FETCH_DATA_SUCCESS",
  "FETCH_DATA_ERROR",
  "FETCH_DATA_REQUEST",
]);

const getRequestConfig = (params) => {
  return {
    method: "GET",
    url: `/launches?${params}`,
  };
};

export const fetchDataSuccess = (data) => {
  return {
    type: appActions.FETCH_DATA_SUCCESS,
    payload: {
      data,
    },
  };
};

export const fetchDataFailure = (error) => {
  return {
    type: appActions.FETCH_DATA_ERROR,
    payload: {
      error,
    },
  };
};

export const fetchDataRequest = () => {
  return {
    type: appActions.FETCH_DATA_REQUEST,
  };
};

export const fetchData = (params, dispatch) => {
  dispatch(fetchDataRequest());
  return apiRequest
    .request(getRequestConfig(params))
    .then((res) => dispatch(fetchDataSuccess(res.data)))
    .catch((e) => dispatch(fetchDataFailure(e.response.data)));
};
