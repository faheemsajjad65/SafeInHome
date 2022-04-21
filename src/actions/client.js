
import clientService from '../services/client.service';

export const getClients = (formData) => dispatch => {

    dispatch({
        type: "GET_CLIENTS_INIT"
    });

    return clientService
        .getClients(formData)
        .then(data => {
            dispatch({
                type: "GET_CLIENTS_SUCCESS",
                payload: data,
            });
        })
        .catch(err => dispatch({type: "GET_CLIENTS_ERROR"}));
    
}
