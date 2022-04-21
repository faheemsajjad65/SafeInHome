import axios from "axios";

const API_URL = `${process.env.BASE_URL}/api/auth/`;

const login = async (username, password) => {
    const response = await axios.post(API_URL + "login", {
        username,
        password,
    })
    if(response.data.token){
        localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response;
};

const logout = () => {
    localStorage.removeItem("user");
};

export default {
    login,
    logout,
};