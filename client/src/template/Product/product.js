import { BsPerson } from 'react-icons/bs'
import { BsClock } from 'react-icons/bs'
import { BsPlayCircle } from 'react-icons/bs'
import { TbCertificate } from 'react-icons/tb'
import { FaHandHoldingUsd } from 'react-icons/fa'
import { BsCalendar2Check } from 'react-icons/bs'
import { AiOutlineTags } from 'react-icons/ai'
import { useParams } from 'react-router-dom'

import PremiumCourses from '../../component/premium-courses/premiun-courses'

import {Accordion, AccordionBody, AccordionHeader, AccordionItem} from "react-headless-accordion";
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { getCourseLimit } from '../../store/actions'
import Moment from 'moment';

function Product() {
  const [isActive, setActive] = useState(true)
  const toggleClass = () => {
    setActive(!isActive)
  }

  const {courseId} = useParams()
  const dispatch = useDispatch()
  const {courses} = useSelector(state => state.course)

  const formatDate = Moment(courses[0]?.createdAt).format('DD-MM-YYYY')
  useEffect(() => {
    courseId && dispatch(getCourseLimit({ id: courseId }))
  },[courseId])

  const priceAmount = parseInt(courses[0]?.priceSale)
  const priceSlashed = parseInt(courses[0]?.price)
  const sale = Math.round((priceSlashed-priceAmount)/priceSlashed*100);
  return (
    <>
      <div className='banner-top'>
        <div className='container'>
          <div className='w-2/3 py-10'>
            <h2 className='text-xl md:text-2xl font-semibold mb-3'>
              {courses[0]?.name}
            </h2>
            <ul className='my-4'>
              <li className='mb-2.5 flex items-center gap-2'>
                <BsPerson />
                {courses[0]?.teacherID}
              </li>
              <li className='mb-2.5 flex items-center gap-2'>
                <BsCalendar2Check />
                Published on {formatDate}
              </li>
              <li className='mb-2.5 flex items-center gap-2'>
                <AiOutlineTags />
                {courses[0]?.category}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='container flex flex-col md:flex-row'>
        <div className='w-2/3'>
          <div className='pdp-description border-grey-2 border rounded-xl overflow-hidden shadow'>
            <div className='px-5 py-3 bg-custom-8'>
              Description
            </div>
            <div className='p-5'>
              <div className='relative'>
                <div className={`text-base ${isActive ? 'h-[180px] overflow-hidden': ''}`}>
                  <p>When it comes to the world of technology, staying ahead of the curve is always a challenge. In the last year one aspect of this – the world wide web – has kicked up a gear with the introduction of HTML5, the newest version of the code that makes the web tick. If you learn HTML5 along with CSS3 (the next level of web design used on all modern websites), you'll have a recipe for success; and this course will show you how.</p>
                  <p><strong>Create a website from scratch with HMTL5 and CSS3</strong></p>
                  <ul><li>Build a complete functioning website section by section</li><li>Gain a solid knowledge base of HMTL5and CSS3 for future, more complex projects</li><li>Control your website's appearance, functionality and navigability</li><li>Discover how HTML5 and CSS3 can be used in other areas of the web</li><li>Learn best practice techniques for building websites and web pages</li></ul>
                  <p><strong>Build Like a Pro with HMTL5 and CSS3 Design</strong></p>
                  <p>The only way to effectively learn HTML5 and CSS3 is by diving right in and building websites from the ground up. That's exactly what this course does. Designed for complete beginners, you'll create a complete website section by section during 35 lectures and 5 hours of content.</p>
                  <p>You'll start by becoming familiar with HTML tags and how they're used, followed by the use of attributes and common settings. Once you've got a handle on basic HTML, you'll move on to the fun stuff: CSS. You'll use CSS for fonts, colours, lists, navigation menus, and more, adding a new element to your website with each section. Links, layouts, tables, forms and videos are all covered too.</p>
                  <p>If you know how to use a web browser and a text editor, you're all set up for this course already. No extra software or tools are needed, and you can choose your preferred option of each to get going. By the time you finish, you'll know everything you need to know to create beautiful, functional, easy to use websites of any kind.</p>
                </div>
                <button className='button-outlined !text-base mt-2 !normal-case' onClick={toggleClass}>{isActive ? "Show More" : "Show Less"}</button>
              </div>
            </div>
          </div>
          <div className='border-grey-2 border rounded-xl overflow-hidden shadow mt-4'>
            <div className='px-5 py-3 bg-custom-8'>
              Curriculum
            </div>
            <Accordion className='p-5'>
              {courses[0]?.Sections.map(section => {
                return (
                  <AccordionItem className='border border-grey-2 p-2 rounded-xl overflow-hidden'>
                    <AccordionHeader>
                        <h3 className={`accordion-title`}>{section?.name}</h3>
                    </AccordionHeader>
                    <AccordionBody>
                      {section?.SectionItems.map(section => {
                        return (
                          <AccordionItem>
                            <AccordionHeader>
                              {section?.title}
                            </AccordionHeader>
                            <AccordionBody>
                              {section?.description}
                            </AccordionBody>
                          </AccordionItem>
                        )
                      })}
                    </AccordionBody>
                </AccordionItem>
                )
              })}
            </Accordion>
          </div>
        </div>
        <div className='w-1/3 px-4'>
          <div className='sticky top-0 -mt-[200px]'>
            <div className='p-6 border border-grey-2 shadow rounded-xl'>
              <div className='videoThumbnail'>
                <img src={courses[0]?.images?.image} alt='img'/>
              </div>
              <h3 className='mt-5 text-lg font-medium'>This Course Includes </h3>
              <ul className='mt-1'>
                <li className='flex items-center gap-2 mb-2'>
                  <BsClock /> 4.5 Hours
                </li>
                <li className='flex items-center gap-2 mb-2'>
                  <BsPlayCircle />  35 Lectures 
                </li>
                <li className='flex items-center gap-2 mb-2'>
                  <TbCertificate /> 4.5 Hours
                </li>
                <li className='flex items-center gap-2 mb-2'>
                  <FaHandHoldingUsd /> 4.5 Hours
                </li>
              </ul>
              <div className='border-grey-2 border-t flex items-center py-3 mt-4'>
                <p className="text-red font-semibold">${courses[0]?.priceSale}.00</p>
                <p className='text-grey-4 text-base line-through ml-1'>${courses[0]?.price}.00</p>
                <span className='text-xs text-white bg-custom-7 p-1 rounded ml-2'>{sale} % off</span>
              </div>
              <button className='button-primary mt-4 !text-white w-full'>Buy Now</button>
            </div>
          </div>
        </div>
      </div>
      <PremiumCourses/>
    </>
  );
}

export default Product;