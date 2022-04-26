import axios from "axios";

const API_URL = process.env.REACT_APP_API_BASE_URL + "api/clients/";

const getClients = async (filters) => {
    console.log(filters);
    const response = await axios
        .get(API_URL + "searchclients" , {
            params: filters
        });
    return response.data;
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getClients
}