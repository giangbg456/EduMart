import React, { useEffect } from "react";
import {IoAddOutline} from 'react-icons/io5'
import {IoBookOutline} from 'react-icons/io5'
import { Link } from 'react-router-dom';
import { getCourses } from '../../store/actions/course'
import { useDispatch, useSelector } from 'react-redux'
import { formatVietnameseToString } from '../../ultils/Common/formatVietnameseToString'

function AccountCourse() {
  const dispatch = useDispatch()
  const { courses } = useSelector(state => state.course)
  useEffect(() => {
    dispatch(getCourses())
  }, [])
  return (
    <div className="w-full">
      <div className="px-4 my-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl md:text-3xl flex items-center gap-2">
            <IoBookOutline/>
            Courses
          </h2>
          <Link to={'/account/new-course'} className="flex items-center bg-blue text-white px-2 py-2 rounded-xl overflow-hidden">
            New Course
            <IoAddOutline />
          </Link>
        </div>
        <div>
          <table className="bg-white rounded-xl">
            <thead>
              <tr className="border-default border-b">
                <th>ID</th>
                <th>Name</th>
                {/* <th>Teacher</th> */}
                <th>Time</th>
                <th className="text-center">Action</th>
              </tr>
            </thead>
            <tbody>
            {courses?.length > 0 && courses.map(item => {
            return (
              <tr className="border-default border-b last:border-0">
                <td className="text-center">{item?.id}</td>
                <td className="py-4">{item?.name}</td>
                {/* <td className="text-center">{item?.teacherID}</td> */}
                <td>{new Date(item?.createdAt).toLocaleDateString('en-US')}</td>
                <td className="flex gap-3 py-4">
                  <Link to={`/course/${formatVietnameseToString(item?.name)}/${item?.id}`} className="px-3 py-2 bg-green rounded-md text-white">View</Link>
                  <button className="px-3 py-2 bg-blue rounded-md text-white">Edit</button>
                  <button className="px-3 py-2 bg-red rounded-md text-white">Delete</button>
                </td>
              </tr>
            )
          })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AccountCourse;