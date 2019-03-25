import produce from "immer";

import ADD_COURSE from "./actions";

const initialState = {
  courses: []
};

const reducer = produce((draft, action) => {
  console.log("reducer called with aciton: ", action);
  switch (action.type) {
    case ADD_COURSE:
      console.log("ADD_COURSE detected");
      draft.courses.push(action.payload.course);
      break;
    default:
      console.log("get state:", draft);
      break;
  }
}, initialState);

export default reducer;
