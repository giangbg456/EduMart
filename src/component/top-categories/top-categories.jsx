import { BsTable } from 'react-icons/bs'
import Image1 from '../../assets/images/development.svg'
import Image2 from '../../assets/images/it-and-networking.svg'
import Image3 from '../../assets/images/data-science-and-ai-ml.svg'
import Image4 from '../../assets/images/cyber-security.svg'
import Image5 from '../../assets/images/marketing.svg'
import Image6 from '../../assets/images/office-productivity.svg'
import Image7 from '../../assets/images/business.svg'
import Image8 from '../../assets/images/lifestyle.svg'

export default function TopCategories () {
  return (
    <>
      <section className="top-categories my-8 md:my-16">
        <div className="container">
          <h2 className="text-xl md:text-2xl font-semibold capitalize mb-4 md:mb-6 text-grey-9 flex items-center justify-center">
            <BsTable className="inline-block mr-4" />
            Top
            <span className="text-blue ml-2">
            Categories
            </span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <div>
              <a href='/#' className="">
                <div className='px-4 py-4 bg-custom-5 text-center shadow rounded-2xl overflow-hidden hover:shadow-md group'>
                  <div className='rounded-full bg-white w-20 h-20 mx-auto px-5 py-5'>
                    <img src={Image1} alt="Development" />
                  </div>
                  <h5 className='text-lg font-medium text-grey-9 mt-4 group-hover:text-blue'>Development</h5>
                  <div className='text-sm font-normal text-grey-7 mt-1'>1000+ Courses</div>
                </div>
              </a>
            </div>
            <div>
              <a href='/#' className="">
                <div className='px-4 py-4 bg-custom-5 text-center shadow rounded-2xl overflow-hidden hover:shadow-md group'>
                  <div className='rounded-full bg-white w-20 h-20 mx-auto px-5 py-5'>
                    <img src={Image2} alt="Development" />
                  </div>
                  <h5 className='text-lg font-medium text-grey-9 mt-4 group-hover:text-blue'>IT and Networking</h5>
                  <div className='text-sm font-normal text-grey-7 mt-1'>800+ Courses</div>
                </div>
              </a>
            </div>
            <div>
              <a href='/#' className="">
                <div className='px-4 py-4 bg-custom-5 text-center shadow rounded-2xl overflow-hidden hover:shadow-md group'>
                  <div className='rounded-full bg-white w-20 h-20 mx-auto px-5 py-5'>
                    <img src={Image3} alt="Development" />
                  </div>
                  <h5 className='text-lg font-medium text-grey-9 mt-4 group-hover:text-blue'>Data Science and AI ML</h5>
                  <div className='text-sm font-normal text-grey-7 mt-1'>600+ Courses</div>
                </div>
              </a>
            </div>
            <div>
              <a href='/#' className="">
                <div className='px-4 py-4 bg-custom-5 text-center shadow rounded-2xl overflow-hidden hover:shadow-md group'>
                  <div className='rounded-full bg-white w-20 h-20 mx-auto px-5 py-5'>
                    <img src={Image4} alt="Development" />
                  </div>
                  <h5 className='text-lg font-medium text-grey-9 mt-4 group-hover:text-blue'>Cyber Security</h5>
                  <div className='text-sm font-normal text-grey-7 mt-1'>500+ Courses</div>
                </div>
              </a>
            </div>
            <div>
              <a href='/#' className="">
                <div className='px-4 py-4 bg-custom-5 text-center shadow rounded-2xl overflow-hidden hover:shadow-md group'>
                  <div className='rounded-full bg-white w-20 h-20 mx-auto px-5 py-5'>
                    <img src={Image5} alt="Development" />
                  </div>
                  <h5 className='text-lg font-medium text-grey-9 mt-4 group-hover:text-blue'>Marketing</h5>
                  <div className='text-sm font-normal text-grey-7 mt-1'>600+ Courses</div>
                </div>
              </a>
            </div>
            <div>
              <a href='/#' className="">
                <div className='px-4 py-4 bg-custom-5 text-center shadow rounded-2xl overflow-hidden hover:shadow-md group'>
                  <div className='rounded-full bg-white w-20 h-20 mx-auto px-5 py-5'>
                    <img src={Image6} alt="Development" />
                  </div>
                  <h5 className='text-lg font-medium text-grey-9 mt-4 group-hover:text-blue'>Office Productivity</h5>
                  <div className='text-sm font-normal text-grey-7 mt-1'>450+ Courses</div>
                </div>
              </a>
            </div>
            <div>
              <a href='/#' className="">
                <div className='px-4 py-4 bg-custom-5 text-center shadow rounded-2xl overflow-hidden hover:shadow-md group'>
                  <div className='rounded-full bg-white w-20 h-20 mx-auto px-5 py-5'>
                    <img src={Image7} alt="Development" />
                  </div>
                  <h5 className='text-lg font-medium text-grey-9 mt-4 group-hover:text-blue'>Business</h5>
                  <div className='text-sm font-normal text-grey-7 mt-1'>350+ Courses</div>
                </div>
              </a>
            </div>
            <div>
              <a href='/#' className="">
                <div className='px-4 py-4 bg-custom-5 text-center shadow rounded-2xl overflow-hidden hover:shadow-md group'>
                  <div className='rounded-full bg-white w-20 h-20 mx-auto px-5 py-5'>
                    <img src={Image8} alt="Development" />
                  </div>
                  <h5 className='text-lg font-medium text-grey-9 mt-4 group-hover:text-blue'>Lifestyle</h5>
                  <div className='text-sm font-normal text-grey-7 mt-1'>500+ Courses</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}