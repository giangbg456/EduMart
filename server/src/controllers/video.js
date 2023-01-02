import * as videoService from '../services/video'

export const getVideoLimit = async (req, res) => {
    const {...query } = req.query
    try {
        const response = await videoService.getVideoLimitService(query)
        return res.status(200).json(response)

    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: 'Failed at video controller: ' + error
        })
    }
}