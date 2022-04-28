import axios from "axios";

const API_URL = process.env.REACT_APP_API_BASE_URL + "/api";
const token = JSON.parse(localStorage.getItem("token"))

const getClients = async (filters) => {
    const response = await axios
        .post(API_URL + "/CarePlanWizard/searchclients" , filters,{headers:{token}});
    return response;
}

const updateClientNote = async (data) => {
    const response = await axios
        .post(`${API_URL}/CarePlanWizard/SaveCarePlanClientComment`,data ,{headers:{token}});
    return response.data;
}


export {
    getClients,
    updateClientNote
}