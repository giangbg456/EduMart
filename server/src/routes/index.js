import authRouter from './auth'
import courseRouter from './course'
import teacherRouter from './teacher'
import categoriesRouter from './category'
import videoRouter from './video'

const initRoutes = (app) => {
  app.use('/api/v1/auth', authRouter)
  app.use('/api/v1/course', courseRouter)
  app.use('/api/v1/teacher', teacherRouter)
  app.use('/api/v1/category', categoriesRouter)
  app.use('/api/v1/video', videoRouter)
  
  return app.use('/', (req, res) => {
    res.send('server on...')
  })
}

export default initRoutes