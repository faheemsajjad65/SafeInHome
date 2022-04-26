
import carePlanServices from '../services/carePlan.service';

export const getCarePlans = authToken => dispatch => {

    dispatch({
        type: "GET_CARE_PLANS_INIT"
    });

    return carePlanServices
        .getCarePlans(authToken)
        .then(response => {
            dispatch({
                type: "GET_CARE_PLANS_SUCCESS",
                payload: response.data,
            });
        })
        .catch(err => dispatch({type: "GET_CARE_PLANS_ERROR"}));
    
}
