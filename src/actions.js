export const ADD_COURSE = "ADD_COURSE";

export const createCourse = course => {
  console.log("action - create Course");
  return {
    type: ADD_COURSE,
    payload: {
      course: {
        ...course,
        id: Math.random()
      }
    }
  };
};
