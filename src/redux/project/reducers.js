import actionTypes from "./types"

const initialState = {
    projects: [],
    currentProject: {}
}

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CREATE_PROJECT:
            return {
                ...state,
                currentProject: action.payload.newProject,
                projects: [...state.projects, action.payload.newProject]
            }

        case actionTypes.FETCH_PROJECTS:
            return {
                ...state,
                projects: action.payload
            }

        default:
            return state
    }
}
