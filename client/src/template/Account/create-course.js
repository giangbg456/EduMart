import React, { useState } from 'react';
import {InputFormV2} from '../../component'

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import {IoAddOutline} from 'react-icons/io5'
import 'react-tabs/style/react-tabs.css';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { apiUploadImage } from '../../services/courses'
import { apiCreateCourse } from '../../services/courses'
import Swal from 'sweetalert2'

function CreateCourse() {


  const [isNewTopic, setIsNewTopic] = useState(false);

  const newTopic = event => {
    setIsNewTopic(current => !current)
  }

  const [payload, setPayload] = useState({
    name: '',
    image: '',
    description: '',
    level: '',
    slogan: '',
    tag: '',
    required: '',
    excerpt: '',
    price: 0,
    section: '',
    sectionItem: ''
  })

  console.log(payload);
  const [imagesPreview, setImagesPreview] = useState([])

  const handleFiles = async (e) => {
    e.stopPropagation()
    let images = []
    let files = e.target.files
    let formData = new FormData()

    for (let i of files) {
      formData.append('file', i)
      formData.append('upload_preset', 'odg8atfu')

      const response = await apiUploadImage(formData)
      if (response.status === 200) images = [...images, response.data?.secure_url]
    }

    setImagesPreview(images)
    setPayload(prev => ({ ...prev, image:images}))
  }

  const [Sections, setSections] = useState([])

  const handleNewTopic = () => {
    let sections = []

  }

  const handleAddNewCourse = async () => {
    let finalPayload = {
      ...payload
    }

    const response = await apiCreateCourse(finalPayload)

    if (response?.data.err === 0) {
      Swal.fire('Sucsessfully', 'Add course sucsess', 'success').then(() => {
        setPayload({
          name: '',
          image: '',
          description: '',
          level: '',
          slogan: '',
          tag: '',
          required: '',
          excerpt: '',
          price: 0
        })
      })
    } else {
      Swal.fire('Oops!', 'Something wrong', 'error')
    }
  }
  return ( 
    <>
      <h2 className="text-2xl md:text-3xl mb-5">Create Course</h2>
      <Tabs className='bg-white rounded-sm'>
        <TabList>
          <Tab>Information Course</Tab>
          <Tab>Course Builder</Tab>
          <Tab></Tab>
        </TabList>
        <TabPanel>
          <div className='p-4 flex flex-col gap-5 overflow-y-auto h-[80vh]'>
            <InputFormV2 value={payload.name} setValue={setPayload} name="name" label='Name course'/>
            <div className="flex gap-6">
              <div className='w-1/2'>
                <label className='w-full border-2 h-[150px] flex border-dashed rounded-xl items-center justify-center gap-3' htmlFor="file">
                  <CameraAltIcon/>
                  Add thumbnail course
                </label>
                <input onChange={handleFiles} hidden type="file" value='' id='file' multiple />
              </div>
              <div className="flex-auto">
                {
                  imagesPreview?.map(item => {
                    return (
                      <img key={item} src={item} alt='preview' className='w-full h-[150px] rounded-xl object-cover' />
                    )
                  })
                }
              </div>
            </div>
            <div className='w-full flex flex-col'>
              <label for="description">Description</label>
              <textarea id="description" name="description" rows="4" cols="50"
                value={payload.description}
                onChange={(e) => setPayload(prev => ({...prev, description: e.target.value}))}
              >
              </textarea>
            </div>
            <InputFormV2 value={payload.level} setValue={setPayload} name="level" label='Level'/>
            <InputFormV2 value={payload.slogan} setValue={setPayload} name="slogan" label='Slogan'/>
            <InputFormV2 value={payload.tag} setValue={setPayload} name="tag" label='Tag'/>
            <div className='w-full flex flex-col'>
              <label for="request">Necessary request</label>
              <textarea id="request" name="request" rows="4" cols="50"
                value={payload.required}
                onChange={(e) => setPayload(prev => ({...prev, required: e.target.value}))}
              >
              </textarea>
            </div>
            <div className='w-full flex flex-col'>
              <label>Excerpt</label>
              <textarea id="excerpt" name="excerpt" rows="4" cols="50"
                value={payload.excerpt}
                onChange={(e) => setPayload(prev => ({...prev, excerpt: e.target.value}))}
              >
              </textarea>
            </div> 
            <button onClick={handleAddNewCourse} className='flex items-center justify-center bg-blue text-white px-2 py-5 rounded-xl overflow-hidden mt-3 w-[150px]'>Add Course</button>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="flex gap-8 p-8">
            <div  className="flex-auto">
              <div className={isNewTopic ? 'block' : 'hidden'}>
                <h4 className='mb-4 text-xl lg:h4 font-semibold'>
                  Add new topic
                </h4>
                <InputFormV2 value={payload.section} setValue={setPayload} name="section" label='Name Topic'/>
                <button onclick={handleNewTopic} className='flex items-center justify-center bg-blue text-white px-2 py-2 rounded-xl overflow-hidden mt-6 min-w-[100px]'>Add</button>
              </div>
            </div>
            <div >
              <button className="flex items-center bg-blue text-white px-2 py-2 rounded-xl overflow-hidden js-new-topic" onClick={ newTopic}>
                New Topic
                <IoAddOutline />
              </button>
            </div>
            
          </div>
          
        </TabPanel>
      </Tabs>
    </> 
  );
}

export default CreateCourse;