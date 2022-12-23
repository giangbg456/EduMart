import actionTypes from "../actions/actionTypes";

const initState = {
    courses: [],
    msg: '',
    count: 0,
    newPosts: []
}

const courseReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.GET_COURSES:
        case actionTypes.GET_COURSES_LIMIT:
            return {
                ...state,
                courses: action.courses || [],
                msg: action.msg || '',
                count: action.count || 0
            }
        case actionTypes.GET_NEW_POST:
            return {
                ...state,
                msg: action.msg || '',
                newPosts: action.newPosts || []
            }
        default:
            return state;
    }

}

export default courseReducer