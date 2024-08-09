import actionType from "../Action/User/UserType";


const INITIAL_STATE = {
  isLoading: false,
  users: [],
  isError: false
};

const reducer = (state = INITIAL_STATE, action) => {

  switch (action.type) {

    case actionType.GET_USER_START:

      return {

        ...state,
        isLoading: true

      };

    case actionType.GET_USER_SUCCESS:

      return {

        ...state,
        users: action.payload,
        isLoading: false

      };

    case actionType.GET_USER_FAILED:

      return {

        ...state,
        isError: true,

      };

    default: return state;

  }

};

export default reducer;