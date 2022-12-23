function Accordion({ props }) {
  return (  
    <div className='flex flex-col border-t border-solid border-t-grey-2 js-item'>
      <button className='group relative flex justify-between items-center text-left transition-all ease-in-out duration-300 js-btn'>
        {props.title}
        
      </button>
    </div>
  );
}

export default Accordion;