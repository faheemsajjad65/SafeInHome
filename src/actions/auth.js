import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    SET_ERROR_MESSAGE,
    LOGOUT,
    LOGIN_ATTEMPT_INIT,
    LOGIN_ATTEMPT_UPDATE,
    SET_LOGIN_ATTEMPT_BLOCKED
} from "../types";
import AuthService from "../services/auth.service";

export const login = (username, password, isLastAttempt) => (dispatch) => {

    dispatch({type: LOGIN_ATTEMPT_INIT});
    return AuthService.login(username, password, isLastAttempt).then(
        (data) => {
            if(data.data.token){
                dispatch(setIsLoginAttemptBlocked(false));
                dispatch(resetLoginAttempts());
                localStorage.setItem("user", JSON.stringify(data.data));
                localStorage.setItem("token", JSON.stringify(data.data.token));

                dispatch({
                    type: LOGIN_SUCCESS,
                    payload: { user: data },
                });
                return Promise.resolve();
            }else if((data?.data.isLocked && data.data.isLocked)){
                dispatch(setIsLoginAttemptBlocked(true));
                return Promise.reject();
            }else {
                return Promise.reject();
            }
        },
        (error) => {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();

            dispatch({
                type: LOGIN_FAIL,
            });
            dispatch({
                type: SET_ERROR_MESSAGE,
                payload: message,
            });
            dispatch(updateLoginAttempts());
            return Promise.reject(error);
        }
    );
};

export const logout = () => (dispatch) => {
    AuthService.logout();

    dispatch({
        type: LOGOUT,
    });
};

export const updateLoginAttempts = () => (dispatch) => {
    const loginAttempts = sessionStorage.getItem("login_attempts") ? parseInt(sessionStorage.getItem("login_attempts")) + 1 : 1;
    sessionStorage.setItem("login_attempts",loginAttempts);
    dispatch({type:LOGIN_ATTEMPT_UPDATE,payload:loginAttempts})
}

export const resetLoginAttempts = () => (dispatch) => {
    sessionStorage.setItem("login_attempts",0);
    dispatch({type:LOGIN_ATTEMPT_UPDATE,payload:1});
}

export const setIsLoginAttemptBlocked = (flag) => (dispatch) => {
    dispatch({type:SET_LOGIN_ATTEMPT_BLOCKED,payload:flag});
}