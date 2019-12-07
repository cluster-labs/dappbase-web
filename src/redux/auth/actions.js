import axios from '../../utils/axios'
import actionTypes from './types'

export const fetchUsers = payload => dispatch => {
    axios.get(`/api/beta-v0/users/${payload.projectId}`)
        .then(res => {
            if (res.data.status) {
                dispatch({
                    type: actionTypes.FETCH_USERS,
                    payload: res.data.response.data,
                })
            }
            else {
                console.error('Failed to fetch Users')
            }
        })
}