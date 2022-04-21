
import carePlanServices from '../services/carePlan.service';

export const getCarePlans = () => dispatch => {

    dispatch({
        type: "GET_CARE_PLANS_INIT"
    });

    return carePlanServices
        .getCarePlans()
        .then(data => {
            dispatch({
                type: "GET_CARE_PLANS_SUCCESS",
                payload: data,
            });
        })
        .catch(err => dispatch({type: "GET_CARE_PLANS_ERROR"}));
    
}
