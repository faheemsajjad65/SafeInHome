
import * as clientService from '../services/client.service';

export const getClients = (formData) => dispatch => {
    dispatch({
        type: "GET_CLIENTS_INIT"
    });
    return clientService
        .getClients(formData)
        .then(response => {
            dispatch({
                type: "GET_CLIENTS_SUCCESS",
                payload: response.data,
            });
            return response.data
        })
        .catch(err => dispatch({type: "GET_CLIENTS_ERROR",payload: err.message}));
}
