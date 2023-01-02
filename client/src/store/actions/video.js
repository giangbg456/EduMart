import actionTypes from './actionTypes'
import { apiGetVideoLimit } from '../../services/video'

export const getVideoLimit = (query) => async (dispatch) => {
    try {
        const response = await apiGetVideoLimit(query)
        if (response?.data.err === 0) {
            dispatch({
                type: actionTypes.GET_VIDEOS_LIMIT,
                videos: response.data.response?.rows,
                count: response.data.response?.count
            })
        } else {
            dispatch({
                type: actionTypes.GET_VIDEOS_LIMIT,
                msg: response.data.msg
            })
        }

    } catch (error) {
        dispatch({
            type: actionTypes.GET_VIDEOS_LIMIT,
            courses: null
        })
    }
}