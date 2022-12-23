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