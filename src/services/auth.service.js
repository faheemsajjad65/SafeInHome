import axios from "axios";

const API_URL = `${process.env.REACT_APP_API_BASE_URL}/api/Authorization/csruser`;

const login = async (username, password,isLastAttempt) => {
    const response = await axios.get(API_URL, {
        headers:{
            username,
            password,
            isLastAttempt
        }
    })

    return response;
};

const logout = () => {
    localStorage.removeItem("user");
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    login,
    logout,
};