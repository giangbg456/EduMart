import axiosConfig from '../axiosConfig'

export const apiGetVideoLimit = (query) => new Promise(async (resolve, reject) => {
    try {
        const response = await axiosConfig({
            method: 'get',
            url: `/api/v1/video/limit`,
            params: query
        })
        resolve(response)

    } catch (error) {
        reject(error)
    }
})