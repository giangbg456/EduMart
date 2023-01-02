import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SpeedIcon from '@mui/icons-material/Speed';
import { useParams } from 'react-router-dom'

import PremiumCourses from '../../component/premium-courses/premiun-courses'

import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { getCourseLimit } from '../../store/actions'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import { Link } from 'react-router-dom';
import { formatVietnameseToString } from '../../ultils/Common/formatVietnameseToString'

function Product() {
  // const [isActive, setActive] = useState(true)
  // const toggleClass = () => {
  //   setActive(!isActive)
  // }

  const {courseId} = useParams()
  const dispatch = useDispatch()
  const {courses} = useSelector(state => state.course)
  useEffect(() => {
    courseId && dispatch(getCourseLimit({ id: courseId }))
  },[courseId, dispatch])

  return (
    <>
      <div className='container flex flex-col md:flex-row pt-6'>
        <div className='w-2/3'>
          <h2 className='text-xl md:text-2xl font-semibold mb-3'>
            {courses[0]?.name}
          </h2>
          <div className='text-sm'>{courses[0]?.attribute?.description}</div>
          <div className='text-sm mt-5 wysiwyg' dangerouslySetInnerHTML={{ __html: courses[0]?.attribute?.except }}/>
          <h3 className='text-xl font-medium mb-4'>Curriculum</h3>
        {courses[0]?.Sections.map(section => {
          return (
            <Accordion
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <div className=''>
                  {section?.name}</div>
              </AccordionSummary>
              <AccordionDetails>
                {section?.SectionItems.map(item => {
                  return (
                    <div className='py-2 last:pb-0 border-b border-default last:border-b-0 flex items-center'>
                      <PlayCircleIcon className='text-blue mr-2'/>{item?.name}
                    </div>
                  )
                })}
              </AccordionDetails>
            </Accordion>
          )
        })}
        </div>
        <div className='w-1/3 px-4'>
          <div className='sticky top-0'>
            <div className='p-6 border border-grey-2 shadow rounded-xl'>
              <div className='videoThumbnail'>
                <img src={JSON.parse(courses[0]?.images?.image)} alt='img'/>
              </div>
              <h5 className='mt-4 text-3xl text-blue text-center font-medium'>{courses[0]?.attribute.price === 0 ? 'Free course' : courses[0]?.attribute.price }</h5>
              <Link to={`/learing/${formatVietnameseToString(courses[0]?.name)}/${courses[0]?.id}`} className='button-primary mt-4 !text-white w-full !rounded-full'>Course Registration</Link>
              <ul className='pt-6'>
                <li className='flex items-center justify-left gap-2 mb-2 text-sm'>
                  <SpeedIcon className='!w-[14px] !h-[14px]' /> {courses[0]?.attribute.level}
                </li>
                <li className='flex items-center justify-left gap-2 mb-2 text-sm'>
                  <AccessTimeIcon className='!w-[14px] !h-[14px]' /> {courses[0]?.attribute.slogan}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <PremiumCourses/>
    </>
  );
}

export default Product;