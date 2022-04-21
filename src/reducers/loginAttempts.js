import {
    LOGIN_ATTEMPT_INIT,
    LOGIN_ATTEMPT_UPDATE,
    SET_LOGIN_ATTEMPT_BLOCKED
} from "../types";

const initialState = {
    loginAttemptsCount: 0,
    isRetryLoginBlocked: false
}

export default function(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case LOGIN_ATTEMPT_INIT:
            return state;
        case LOGIN_ATTEMPT_UPDATE:
            return {
                ...state,
                loginAttemptsCount: payload
            };
        case SET_LOGIN_ATTEMPT_BLOCKED:
            return {
                ...state,
                isRetryLoginBlocked: payload
            };
        default:
            return state;
    }
}