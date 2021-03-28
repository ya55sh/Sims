export const add = (payload) => {
  return {
    type: "ADD",
    payload:payload
  };
};

export const modify = (payload) => {
  return {
    type: "DECREMENT",
    payload:payload
  };
};

export const del = () => {
  return {
    type: "DELETE"
  };
};
