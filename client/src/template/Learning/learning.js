import { useParams, Link } from 'react-router-dom'
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { getCourseLimit } from '../../store/actions'
import { getVideoLimit } from '../../store/actions'
import ReactPlayer from 'react-player';

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import { formatVietnameseToString } from '../../ultils/Common/formatVietnameseToString'

function Learning() {
  const param = useParams()
  const dispatch = useDispatch()
  const {courses} = useSelector(state => state.course)
  const {video} = useSelector(state => state.video)
  useEffect(() => {
    param && dispatch(getCourseLimit({ id: param.courseId }))
  },[param.courseId])

  useEffect(() => {
    param && dispatch(getVideoLimit({ id: param.sectionId }))
  },[param.sectionId])

  return ( 
    <section>
      <div className='relative z-1 w-full bg-custom-9 text-white flex items-center'>
        <Link to={`/course/${formatVietnameseToString(courses[0]?.name)}/${courses[0]?.id}`} className='w-16 h-16 flex items-center justify-center'>
          <ChevronLeftIcon />
        </Link>
        <h2 className='text-sn font-bold'>{courses[0]?.name}</h2>
      </div>
      <div className='fixed w-4/5 top-0 left-0 overflow-y-auto mt-16 overflow-x-hidden'>
        <div className='bg-black px-[8.5%]'>
          <div className='relative aspect-[900/600]'>
            <div className='absolute top-0 left-0 w-full h-full'>
              <ReactPlayer
                url={video[0]?.Video.link}
                playing={false}
                controls={true}
                width='100%'
                height='100%'
              />
            </div>
          </div>
        </div>
        <h1 className='px-[8.5%] mt-5 text-3xl font-bold'>{video[0]?.name}</h1>
      </div>
      <div className='fixed z-2 top-0 right-0 bottom-0 mt-16 w-1/5 border-l border-default'>
        <div className='flex flex-col w-full h-full'>
          <div className='px-4 py-3 text-xl font-semibold'>Curriculum</div>
          <div className='overflow-y-scrol'>
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
                      <Link to={`/learing/${formatVietnameseToString(courses[0]?.name)}/${courses[0]?.id}/${item.id}`} className='py-2 last:pb-0 border-b border-default last:border-b-0 flex items-center'>
                        <PlayCircleIcon className='text-blue mr-2'/>{item?.name}
                      </Link>
                    )
                  })}
                </AccordionDetails>
              </Accordion>
            )})}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Learning;