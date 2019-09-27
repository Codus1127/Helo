const initalState = {
    username: "",
    profile_pic: ""
  };
  
  const SET_USER = "SET_USER";
  export function setUser(user) {
    return {
      type: SET_USER,
      payload: user
    };
  }
  
  export default (state = initalState, action) => {
    const { type, payload } = action;
  
    switch (type) {
      case SET_USER:
        const { username, profile_pic } = payload;
        return { ...state, username, profile_pic};
      default:
        return state;
    }
  };