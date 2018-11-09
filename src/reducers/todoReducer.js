import { TODO } from "../actions/type";
import { createTodo } from "../actions/todoActions";

const initialeState = {
  todoList: null,
  isLoaded: false
};

export default (state = initialeState, action) => {
  switch (action.type) {
    case TODO:
      return {
        ...state,
        todoList: action.payload
      };

    default:
      return state;
  }
};
