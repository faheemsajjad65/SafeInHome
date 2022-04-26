import axios from "axios";

const API_URL = process.env.REACT_APP_API_BASE_URL + "/api/carePlans/";

const getCarePlans = async (filters) => {
    const response = await axios
        .get(API_URL , {
            params: filters
        });
    return response.data;
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getCarePlans
}