import axios from "axios";

const API_URL = process.env.REACT_APP_API_BASE_URL + "/api/CarePlanWizard/";

const getCarePlans = async (token) => {
    const response = await axios
        .get(API_URL + "getassignedClients" , {
            headers:{
                token
            }
        });
    return response;
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getCarePlans
}