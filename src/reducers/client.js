
export default function clientReducer(state = [], action) {

    const { type, payload } = action;

    switch(type) {
        case 'GET_CLIENTS_INIT':
            return [];
        case 'GET_CLIENTS_SUCCESS':
            return payload;
        default:
            return state;
    }
}
