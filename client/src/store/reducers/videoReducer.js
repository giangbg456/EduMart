import actionTypes from "../actions/actionTypes";

const initState = {
    video: [],
    msg: ''
}

const videoReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.GET_VIDEOS_LIMIT:
            return {
                ...state,
                video: action.videos || [],
                msg: action.msg || '',
                count: action.count || 0
            }
        default:
            return state;
    }

}

export default videoReducer