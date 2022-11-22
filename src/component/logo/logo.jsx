import srcLogo  from '../../assets/images/logo2.png';

function Logo ({className = ''}) {
  return (
    <div className={`flex justify-start overflow-hidden whitespace-nowrap h-[35px] w-[157px] ${className}`}>
      <a className='text-xl font-bold overflow-hidden whitespace-nowrap  h-[35px] w-[157px]' href='/'>
        <img className='w-full h-full lg:h-9 object-cover' src= { srcLogo } loading="lazy" alt='logo' />
      </a>
    </div>
  )
}

export default Logo;