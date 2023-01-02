import db from "../models";
import { v4 as generateID } from 'uuid'

export const getCoursesService = () => new Promise(async (resolve, reject) => {
  try {
    const response = await db.Courses.findAll({
      include: [
        {model: db.Image, as: 'images', attributes: ['image']},
        {model: db.Attributes, as: 'attribute', attributes: ['level', 'slogan','require','description','except','tag','price']},
        {model: db.Section, attributes: ['name'], include: [{ model: db.SectionItem, attributes: ['name'] ,include: [{ model: db.Videos, attributes: ['fileVideo', 'link'] }] }]}
      ],
      attributes: ['id', 'name', 'createdAt', 'updatedAt']
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
          {model: db.Attributes, as: 'attribute', attributes: ['level', 'slogan','require','description','except','tag','price']},
          {model: db.Section, attributes: ['name'], include: [{ model: db.SectionItem, attributes: ['id', 'name'] ,include: [{ model: db.Videos, attributes: ['fileVideo', 'link'] }] }]}
        ],
        attributes: ['id', 'name', 'createdAt', 'updatedAt']
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

export const createCourse = (body) => new Promise(async (resolve, reject) => {
  try {
      const imageID = generateID()
      const attributeID = generateID()
      const courseID = generateID()
      const sectionID = generateID()
      const sectionItemID = generateID()
      const videoID = generateID()
      const response = await db.Image.create({
        id: imageID,
        image: JSON.stringify(body.image)
      })
      await db.Attributes.create({
        id: attributeID,
        level: body.level,
        slogan: body.slogan,
        require: body.required,
        description: body.description,
        except: body.excerpt,
        tag: body.tag,
        price: body.price
      })
      await db.Courses.create({
        id: generateID(),
        name: body.name,
        imageID: imageID,
        attributeID: attributeID
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
