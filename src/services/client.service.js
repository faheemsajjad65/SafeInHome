import axios from "axios";

const API_URL = process.env.REACT_APP_API_BASE_URL + "/api";

const getClients = async (filters) => {
    const response = await axios
        .get(API_URL + "/CarePlanWizard/searchclients" , {
            params: filters
        });
    return response;
}

const getClient = async (clientId) => {
    const response = await axios
        .get(`${API_URL}/CarePlanWizard/client/${clientId}` );
    return response.data;
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getClients,
    getClient
}