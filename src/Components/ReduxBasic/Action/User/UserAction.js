import axios from "axios";
import actionType from "./UserType";

export const getALLUserStart = () => {
    return async (dispatch, getState) => {
        try {
            dispatch({ type: actionType.GET_USER_START });
            let res = await axios.get("http://localhost:8000/users")
            console.log(res.data);
            dispatch(getALLUserSuccess(res));
        } catch (error) {
            console.log("error:", error);;
            dispatch(getALLUserFailed());

        }
    };
};
export const getALLUserSuccess = (res) => {
    return {
        type: actionType.GET_USER_SUCCESS,
        payload: res
    };
};
export const getALLUserFailed = () => {
    return {
        type: actionType.GET_USER_FAILED,
    };
};