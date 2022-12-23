import axiosConfig from '../axiosConfig'

export const apiGetCourses = (payload) => new Promise(async (resolve, reject) => {
    try {
        const response = await axiosConfig({
            method: 'get',
            url: '/api/v1/course/all',
            data: payload
        })
        resolve(response)

    } catch (error) {
        reject(error)
    }
})
export const apiGetCoursesLimit = (query) => new Promise(async (resolve, reject) => {
    try {
        const response = await axiosConfig({
            method: 'get',
            url: `/api/v1/course/limit`,
            params: query
        })
        resolve(response)

    } catch (error) {
        reject(error)
    }
})