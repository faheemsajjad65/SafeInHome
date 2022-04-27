import axios from "axios";

const API_URL = process.env.REACT_APP_API_BASE_URL + "/api";

const getClients = async (filters) => {
    const response = await axios
        .post(API_URL + "/CarePlanWizard/searchclients" , filters);
    return response;
}

const updateClientNote = async (data) => {
    const response = await axios
        .post(`${API_URL}/CarePlanWizard/SaveCarePlanClientComment`,data );
    return response.data;
}


export {
    getClients,
    updateClientNote
}