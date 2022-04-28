import {
    TOGGLE_MODAL
} from "../types";

const initialState = {
    isModalOpen: false,
}
export default function ModalReducer (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case TOGGLE_MODAL:
            return {
                ...state,
                isModalOpen: payload
            }
        default:
            return state;
    }
}