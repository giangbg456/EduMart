import db from "../models";

export const getTeachersService = () => new Promise(async (resolve, reject) => {
  try {
    const response = await db.Teacher.findAll({
        raw: true,
    })
    resolve({
      err: response ? 0 : 1,
      msg: response ? 'OK' : 'Getting teachers is failed!',
      response
    })
  } catch (error) {
    reject(error);
  }
})