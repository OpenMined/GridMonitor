import axios from "axios";
import { FETCH_DATASETS, FETCH_MODELS, FETCH_NODES, FETCH_NODE } from "./types";

/*** Private Functions ***/
const Service = axios.create({
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/x-www-form-urlencoded"
  }
});

const fetchData = async (url, route) => {
  const response = await Service.get(`${url}/${route}`);
  return response.data;
};

/*** Public Actions ***/

export const fetchNodes = url => async dispatch => {
  let data = await fetchData(url, "nodes");
  dispatch({ type: FETCH_NODES, payload: data });
};

export const fetchModels = url => async dispatch => {
  let data = await fetchData(url, "models");
  dispatch({ type: FETCH_MODELS, payload: data });
};

export const fetchDatasets = url => async dispatch => {
  let data = await fetchData(url, "datasets");
  dispatch({ type: FETCH_DATASETS, payload: data });
};

export const fetchNode = ({ url, id }) => async dispatch => {
  let data = await fetchData(url, `node/${id}`);
  dispatch({ type: FETCH_NODE, payload: data });
};
