import axiosConfig from '../axiosConfig'
import axios from 'axios'

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

export const apiGetNewCourse = () => new Promise(async (resolve, reject) => {
    try {
        const response = await axiosConfig({
            method: 'get',
            url: `/api/v1/course/new-post`,
        })
        resolve(response)

    } catch (error) {
        reject(error)
    }
})


export const apiUploadImage = (images) => new Promise(async (resolve, reject) => {
    try {
        const response = await axios({
            method: 'post',
            url: `https://api.cloudinary.com/v1_1/dllkps8sd/image/upload`,
            data: images
        })
        resolve(response)

    } catch (error) {
        reject(error)
    }
})

export const apiCreateCourse = (payload) => new Promise(async (resolve, reject) => {
    try {
        const response = await axiosConfig({
            method: 'post',
            url: `/api/v1/course/create-course`,
            data: payload
        })
        resolve(response)

    } catch (error) {
        reject(error)
    }
})