//layout

import Account from '../Layout/Account'

import Home from '../template/Home/home'
import Product from '../template/Product/product'
import Cart from '../template/Cart/cart'
import AccountStudent from '../template/Account/account-student'
import AccountTeacher from '../template/Account/account-teacher'
import AccountCourse from '../template/Account/account-course'
import AccountCategory from '../template/Account/account-category'
import AccountOrder from '../template/Account/account-order'
import AccountDashboard from '../template/Account/account-dashboard'
import AccountBlog from '../template/Account/account-blog'
import Login from '../template/Login/login'
import Collection from '../template/Collection/collection'
import CreateCourse from '../template/Account/create-course'
import CreateBlog from '../template/Account/create-blog'

const publicRoutes = [
  { path: '/', component: Home },
  { path: '/product', component: Product },
  { path: '/cart', component: Cart},
  { path: '/login', component: Login},
  { path: '/courses/all', component: Collection},
  { path: '/courses/*', component: Collection},
  { path: 'course/:name/:courseId', component: Product},
  { path: '/account/student', component: AccountStudent, layout: Account},
  { path: '/account/teacher', component: AccountTeacher, layout: Account},
  { path: '/account/course', component: AccountCourse, layout: Account},
  { path: '/account/categories', component: AccountCategory, layout: Account},
  { path: '/account/order', component: AccountOrder, layout: Account},
  { path: '/account/*', component: AccountDashboard, layout: Account},
  { path: '/account/new-course', component: CreateCourse, layout: Account},
  { path: '/account/new-blog', component: CreateBlog, layout: Account},
  { path: '/account/blog', component: AccountBlog, layout: Account},
]

const privateRoutes =[]

export { publicRoutes, privateRoutes }