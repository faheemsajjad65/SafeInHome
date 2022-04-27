import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT, LOGIN_ATTEMPT_UPDATE, SET_LOGIN_ATTEMPT_BLOCKED, LOGIN_ATTEMPT_INIT,
} from "../types";

const user = JSON.parse(localStorage.getItem("user"));
const loginAttemptsCount = sessionStorage.getItem("login_attempts");

const initialState = {
    isLoggedIn: !!user,
    loginAttemptsCount: loginAttemptsCount ?? 1,
    isLoginBlocked: false,
    errorMessage: null,
    hasLoginPending: false,
    user: user ?? null
}
export default function AuthReducer (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case LOGIN_ATTEMPT_INIT:
            return {
                ...state,
                hasLoginPending: true
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoggedIn: true,
                user: payload.user,
                hasLoginPending: false
            };
        case LOGIN_FAIL:
            return {
                ...state,
                isLoggedIn: false,
                user: null,
                errorMessage: payload,
                hasLoginPending: false
            };
        case LOGOUT:
            return {
                ...state,
                isLoggedIn: false,
                loginAttemptsCount: 1,
                isLoginBlocked: false,
                user: null,
                errorMessage: null,
                hasLoginPending: false
            };
        case LOGIN_ATTEMPT_UPDATE:
            return {
                ...state,
                loginAttemptsCount: payload
            };
        case SET_LOGIN_ATTEMPT_BLOCKED:
            return {
                ...state,
                isLoginBlocked: payload
            };
        default:
            return state;
    }
}