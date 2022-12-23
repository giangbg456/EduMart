import express from "express";
import * as teacherController from '../controllers/teacher';

const router = express.Router();

router.get('/all', teacherController.getTeachers)

export default router