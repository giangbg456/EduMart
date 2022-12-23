import actionTypes from './actionTypes'
import { apiGetCourses } from '../../services/courses'
import { apiGetCoursesLimit } from '../../services/courses'

export const getCourses = () => async (dispatch) => {
    try {
        const response = await apiGetCourses()
        if (response?.data.err === 0) {
            dispatch({
                type: actionTypes.GET_COURSES,
                courses: response.data.response
            })
        } else {
            dispatch({
                type: actionTypes.GET_COURSES,
                msg: response.data.msg
            })
        }

    } catch (error) {
        dispatch({
            type: actionTypes.GET_COURSES,
            courses: null
        })
    }
}
export const getCourseLimit = (query) => async (dispatch) => {
    try {
        const response = await apiGetCoursesLimit(query)
        if (response?.data.err === 0) {
            dispatch({
                type: actionTypes.GET_COURSES_LIMIT,
                courses: response.data.response?.rows,
                count: response.data.response?.count
            })
        } else {
            dispatch({
                type: actionTypes.GET_COURSES_LIMIT,
                msg: response.data.msg
            })
        }

    } catch (error) {
        dispatch({
            type: actionTypes.GET_COURSES_LIMIT,
            courses: null
        })
    }
}
// export const getNewPosts = () => async (dispatch) => {
//     try {
//         const response = await apiGetNewPosts()
//         if (response?.data.err === 0) {
//             dispatch({
//                 type: actionTypes.GET_NEW_POST,
//                 newPosts: response.data.response,
//             })
//         } else {
//             dispatch({
//                 type: actionTypes.GET_NEW_POST,
//                 msg: response.data.msg,
//                 newPosts: null
//             })
//         }

//     } catch (error) {
//         dispatch({
//             type: actionTypes.GET_NEW_POST,
//             newPosts: null
//         })
//     }
// }