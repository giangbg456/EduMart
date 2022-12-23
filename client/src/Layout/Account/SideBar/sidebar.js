import {IoBookOutline} from 'react-icons/io5'
import {TbLayoutDashboard} from 'react-icons/tb'
import {AiOutlineDashboard} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {FaChalkboardTeacher} from 'react-icons/fa'
import {MdOutlineArticle} from 'react-icons/md'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {BiLogOut} from 'react-icons/bi'
import { Link, NavLink } from 'react-router-dom';
import * as actions from '../../../store/actions'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const activeStyle = 'flex items-center p-2 text-base font-normal text-blue rounded-lg hover:bg-grey-1 bg-grey-1'
const notActiveStyle  = 'flex items-center p-2 text-base font-normal text-blue rounded-lg hover:bg-grey-1'

function SideBar() {
  const dispatch = useDispatch()
  const navigate  = useNavigate()
  const { isLoggedIn } = useSelector(state => state.auth)

  useEffect(() => {
    !isLoggedIn && navigate('/login')
  }, [isLoggedIn])
  return (
    <aside class="p-2 pr-0 w-64 h-screen" aria-label="Sidebar">
      <div class="h-full overflow-hidden py-4 px-3 rounded-2xl bg-white">
        <Link to={'/'}>
          <h1 className="text-center text-lg font-semibold pb-6 border-b border-default">EduMart</h1>
        </Link>
        <ul class="space-y-2 h-full mt-5">
            <li>
              <NavLink to="/account/course" className={({isActive}) => isActive ? activeStyle : notActiveStyle }>
                  <IoBookOutline className="w-6 h-6" />
                  <span class="flex-1 ml-3 whitespace-nowrap">Courses</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/account/categories" className={({isActive}) => isActive ? activeStyle : notActiveStyle }>
                  <TbLayoutDashboard className="w-6 h-6" />
                  <span class="flex-1 ml-3 whitespace-nowrap">Categories</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/account/users" className={({isActive}) => isActive ? activeStyle : notActiveStyle }>
                  <AiOutlineUser className="w-6 h-6" />
                  <span class="flex-1 ml-3 whitespace-nowrap">Users</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/account/teachers" className={({isActive}) => isActive ? activeStyle : notActiveStyle }>
                  <FaChalkboardTeacher className="w-6 h-6" />
                  <span class="flex-1 ml-3 whitespace-nowrap">Teachers</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/account/blog" className={({isActive}) => isActive ? activeStyle : notActiveStyle }>
                <MdOutlineArticle className="w-6 h-6"/>
                <span class="flex-1 ml-3 whitespace-nowrap">Blogs</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/account/order" className={({isActive}) => isActive ? activeStyle : notActiveStyle }>
                <AiOutlineShoppingCart className="w-6 h-6" />
                <span class="flex-1 ml-3 whitespace-nowrap">Orders</span>
              </NavLink>
            </li>
            <li className="absolute bottom-2">
              <button href="#" class="flex items-center p-2 text-base font-normal text-blue rounded-lg hover:bg-grey-1" onClick={() => { dispatch(actions.logout()) }}>
                <BiLogOut className="w-6 h-6"/>
                <span class="flex-1 ml-3 whitespace-nowrap">Logout</span>
              </button>
            </li>
        </ul>
      </div>
    </aside>
  );
}

export default SideBar;