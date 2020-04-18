export const setAddress = url => dispatch => {
  localStorage.setItem("network_address", url);
  dispatch({
    type: SET_ADDRESS,
    payload: url
  });
};

export const tryAutoConnect = () => dispatch => {
  const url = localStorage.getItem("network_address");
  dispatch({
    type: SET_ADDRESS,
    payload: url
  });
};
