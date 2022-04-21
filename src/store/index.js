import {createStore, applyMiddleware, combineReducers, compose} from "redux";
import thunk from "redux-thunk";
import AuthReducer from "../reducers/auth";
import SettingReducer from "../reducers/settings";
import LoginAttemptsReducer from "../reducers/loginAttempts";
import {createLogger} from 'redux-logger';

const logger = createLogger({
    collapsed:true
});

export default function configureStore() {
    let middlewares = [];
    if (process.env.NODE_ENV === 'development') {
        middlewares = [...middlewares, thunk, logger];
    } else {
        middlewares = [...middlewares, thunk];
    }

    const mainReducer = combineReducers({
        auth: AuthReducer,
        settings: SettingReducer,
        loginAttempts: LoginAttemptsReducer
    })

    const rootReducer = (state, action) => {

        if (action.type === 'AUTH_LOGOUT_SUCCESS') {
            Object.keys(state).forEach(sk => {
                if (state[sk].savable) {
                    return;
                }

                state[sk] = undefined;
            })
        }

        return mainReducer(state, action)
    }

    const store = createStore(
        rootReducer,
        compose(applyMiddleware(...middlewares))
    );

    return store;
}