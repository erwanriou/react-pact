import { TODO } from "./type";

export const createTodo = () => dispatch => {
  const res = {
    data: "hello word"
  };

  dispatch({
    type: TODO,
    payload: res.data
  });
};
