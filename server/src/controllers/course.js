import * as courseService from '../services/course'

export const getCourses = async (req, res) => {
  try {
    const response = await courseService.getCoursesService()
    return res.status(200).json(response)

  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: 'Failed at course controller: ' + error
    })
  }
}
export const getCourseLimit = async (req, res) => {
  const {...query } = req.query
  try {
      const response = await courseService.getCourseLimitService(query)
      return res.status(200).json(response)

  } catch (error) {
      return res.status(500).json({
          err: -1,
          msg: 'Failed at course controller: ' + error
      })
  }
}

export const createCourse = async (req, res) => {
  try {
      const { name, description, image } = req.body
      if ( !name || !description || !image ) return res.status(400).json({
        err: 1,
        msg: 'Missing inputs'
      })
      const response = await courseService.createCourse(req.body)
      return res.status(200).json(response)
  } catch (error) {
      return res.status(500).json({
          err: -1,
          msg: 'Failed at course controller: ' + error
      })
  }
}