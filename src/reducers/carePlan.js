
export default function carPlanReducer(state = [], action) {

    const { type, payload } = action;

    switch(type) {
        case 'GET_CARE_PLANS_INIT':
            return [];
        case 'GET_CARE_PLANS_SUCCESS':
            return payload;
        default:
            return state;
    }
}
