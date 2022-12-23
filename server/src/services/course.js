import db from "../models";
const { Op } = require("sequelize");

export const getCoursesService = () => new Promise(async (resolve, reject) => {
  try {
    const response = await db.Courses.findAll({
      include: [
        {model: db.Image, as: 'images', attributes: ['image']},
        {model: db.Attribute, as: 'attribute'},
        // {model: db.Section, attributes: ['name'], include: [{ model: db.SectionItem, include: [{ model: db.Video }] }]}
      ]
    })
    resolve({
      err: response ? 0 : 1,
      msg: response ? 'OK' : 'Getting courses is failed!',
      response
    })
  } catch (error) {
    reject(error);
  }
})

export const getCourseLimitService = ({ limitCousre, ...query}) => new Promise(async (resolve, reject) => {
  try {
    const queries = { ...query }
    const limit = +limitCousre || +process.env.LIMIT
    queries.limit = limit
    const response = await db.Courses.findAndCountAll({
        where: query,
        ...queries,
        include: [
          {model: db.Image, as: 'images', attributes: ['image']},
          {model: db.Section, attributes: ['name'], include: [{ model: db.SectionItem, attributes: ['title', 'description'] }]}
        ]
      })
      resolve({
          err: response ? 0 : 1,
          msg: response ? 'OK' : 'Getting courses is failed.',
          response
      })

  } catch (error) {
      reject(error)
  }
})
