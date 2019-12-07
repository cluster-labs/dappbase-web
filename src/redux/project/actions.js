import actionTypes from './types'
import axios from '../../utils/axios'
import constants from '../constants'

export const createProject = payload => dispatch => {
    axios.post('/api/beta-v0/project', payload, {
        headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${constants.JWT}`,
        },
    })
        .then(res => {
            if (res.data.status) {
                dispatch({
                    type: actionTypes.CREATE_PROJECT,
                    payload: res.data.response.data
                })
            }
            else {
                console.error("Error while creating Project")
            }
        })
}


export const fetchProjects = payload => dispatch => {
    axios.get(`/api/beta-v0/projects/${payload.userId}`)
        .then(res => {
            if (res.data.status) {
                dispatch({
                    type: actionTypes.FETCH_PROJECTS,
                    payload: res.data.response.data,
                })
            }
            else {
                console.error('Failed to fetch Users')
            }
        })
}