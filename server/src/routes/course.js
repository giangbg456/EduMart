import express from "express";
import * as courseController from '../controllers/course';
import verifyToken from '../middlewares/verifyToken';

const router = express.Router();

router.get('/all', courseController.getCourses)
router.get('/limit', courseController.getCourseLimit)

router.post('/create-course', courseController.createCourse)

export default router