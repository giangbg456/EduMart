import { BsCheck2 } from 'react-icons/bs'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { FaPhoneAlt } from 'react-icons/fa'
import { IoMdMail } from 'react-icons/io'
import { BsFacebook } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
import { BsYoutube } from 'react-icons/bs'
import { FaRegCopyright } from 'react-icons/fa'
import Gallery from '../../../assets/images/gallery.jpg'
import Gallery1 from '../../../assets/images/gallery1.jpg'
import Gallery2 from '../../../assets/images/gallery2.jpg'

function Footer () {
  return (
    <>
      <div className='pt-12 bg-dark text-white'>
        <div className='container'>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10'>
            <div>
              <h4 className='text-xl font-semibold mb-4'>About Us</h4>
              <a href='/#' className='text-white flex items-center justify-start gap-2 mb-2'>
                <BsCheck2 />
                Our Team
              </a>
              <a href='/#' className='text-white flex items-center justify-start gap-2 mb-2'>
                <BsCheck2 />
                Helping
              </a>
              <a href='/#' className='text-white flex items-center justify-start gap-2 mb-2'>
                <BsCheck2 />
                Become a teacher
              </a>
              <a href='/#' className='text-white flex items-center justify-start gap-2 mb-2'>
                <BsCheck2 />
                FAQs
              </a>
            </div>
            <div>
              <h4 className='text-xl font-semibold mb-4'>Contact</h4>
              <p className='flex items-center gap-2 mb-2'>
                <FaMapMarkerAlt />
                123 Street, Ha Noi, Viet Nam
              </p>
              <p className='flex items-center gap-2 mb-2'>
                <FaPhoneAlt />
                0393036245
              </p>
              <p className='flex items-center gap-2 mb-2'>
                <IoMdMail />
                giang.hoang@solislab.com
              </p>
              <div className='flex gap-4 mt-4 mb-2'>
                <a href='/#' >
                  <BsFacebook />
                </a>
                <a href='/#' >
                  <IoMdMail />
                </a>
                <a href='/#' >
                  <BsInstagram />
                </a>
                <a href='/#' >
                  <BsYoutube />
                </a>
              </div>
            </div>
            <div>
              <h4 className='text-xl font-semibold mb-4'>Gallery</h4>
              <div className='grid grid-cols-3 gap-2'>
                <img src={Gallery} alt=''/>
                <img src={Gallery1} alt=''/>
                <img src={Gallery2} alt=''/>
                <img src={Gallery2} alt=''/>
                <img src={Gallery1} alt=''/>
                <img src={Gallery} alt=''/>
              </div>
            </div>
          </div>
          <div className='flex items-center gap-2 border-t py-4 mt-10'>
            <FaRegCopyright /> EduMart, All Rights Reserved, Deisgned By Hoang Minh Giang
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;