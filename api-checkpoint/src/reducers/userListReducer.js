const initialState = {
  userList: [],
  searchFilter: "",
};
const userListReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FILTERBYTERM":
      return { ...state, searchFilter: action.payload.searchTerm };
    default:
      return state;
  }
};

export default userListReducer;
