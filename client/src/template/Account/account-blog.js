import {IoAddOutline} from 'react-icons/io5'
import {IoBookOutline} from 'react-icons/io5'
import { Link } from 'react-router-dom';

function AccountBlog() {
  return (
    <div className="w-full">
      <div className="px-4 my-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl md:text-3xl flex items-center gap-2">
            <IoBookOutline/>
            Blogs
          </h2>
          <Link to={'/account/new-course'} className="flex items-center bg-blue text-white px-2 py-2 rounded-xl overflow-hidden">
            New Blog
            <IoAddOutline />
          </Link>
        </div>
        <div>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Company</th>
                <th>City</th>
                <th>Progress</th>
                <th>Created</th>
                <th />
              </tr>
            </thead>
            <tbody>
              <td className="before:hidden lg:w-1 whitespace-nowrap">
                
              </td>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AccountBlog;