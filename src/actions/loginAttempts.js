
export const updateLoginAttempts = () => (dispatch) => {
    const loginAttempts = sessionStorage.getItem("login_attempts") ? parseInt(sessionStorage.getItem("login_attempts")) + 1 : 1;
    sessionStorage.setItem("login_attempts",loginAttempts)
    dispatch({type:"LOGIN_ATTEMPT_UPDATE",payload:loginAttempts})
}

export const setLoginAttemptsTimer = () => (dispatch) => {
    dispatch({type:"SET_LOGIN_ATTEMPT_BLOCKED",payload:true})
    setTimeout(()=>{
        sessionStorage.setItem("login_attempts",0);
        dispatch({type:"SET_LOGIN_ATTEMPT_BLOCKED",payload:false})
    },1000*60*15)
}