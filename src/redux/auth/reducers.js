import actionTypes from './types'

const initialState = {
    users: [],
    fetchComplete: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_USERS:
            return {
                ...state,
                users: action.payload,
                fetchComplete: true
            };
        default:
            return {
                ...state,
                fetchComplete: true
            };
    }
} 