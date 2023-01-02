import db from '../models'

export const getVideoLimitService = ({ limitVideo, ...query}) => new Promise(async (resolve, reject) => {
  try {
    const queries = { ...query }
    const limit = +limitVideo || +process.env.LIMIT
    queries.limit = limit
    const response = await db.SectionItem.findAndCountAll({
        where: query,
        ...queries,
        include: [
          { model: db.Videos, attributes: ['fileVideo', 'link'] }
        ],
      })
      resolve({
          err: response ? 0 : 1,
          msg: response ? 'OK' : 'Getting video is failed.',
          response
      })

  } catch (error) {
      reject(error)
  }
})