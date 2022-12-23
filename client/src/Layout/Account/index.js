import SideBar from "./SideBar/sidebar";
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

function Account({ children }) {
  const { isLoggedIn } = useSelector(state => state.auth)
  
  if (!isLoggedIn) return <Navigate to={'/login'} replace={true} />
  return ( 
    <div className="bg-gray-50 flex">
      <SideBar/>
      <div className="p-6 w-full">{children}</div>
    </div>
  );
}

export default Account;