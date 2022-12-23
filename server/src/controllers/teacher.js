import * as teacherService from '../services/teacher'

export const getTeachers = async (req, res) => {
  try {
    const response = await teacherService.getTeachersService()
    return res.status(200).json(response)

  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: 'Failed at course controller: ' + error
    })
  }
}
