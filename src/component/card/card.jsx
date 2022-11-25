import { BsPerson } from 'react-icons/bs'

const Card = (props) => {
  const priceAmount = parseInt(props.price_amount)
  const priceSlashed = parseInt(props.price_slashed)
  const sale = Math.round((priceSlashed-priceAmount)/priceSlashed*100);

  return (
    <>
      <div className='flex h-full w-full ' >
        <div className="relative flex flex-col w-full border-grey-2 border rounded-2xl overflow-hidden hover:shadow-2xl">
          <a href={props.linkProduct} >
            <img src={props.productImage} className='w-full h-[148px]' alt='' />
          </a>
          <div className="flex flex-col flex-1 p-4">
            <a href={props.linkProduct} >
              <h3 className="text-lg font-medium md:text-grey-9 h-10 mb-2">
                {props.productName}
              </h3>
            </a>
            <a href={props.linkAuthor} className='flex items-center mb-4'>
              <BsPerson className='mr-1' />
              {props.author}
            </a>
            <div className='border-grey-2 border-t flex items-center py-5'>
              <p className="text-red font-semibold">${props.price_amount}.00</p>
              <p className='text-grey-4 text-base line-through ml-1'>${props.price_slashed}.00</p>
              <span className='text-xs text-white bg-custom-7 p-1 rounded ml-2'>{sale} % off</span>
            </div>
            <a href={props.linkProduct} className='button-outlined mt-4 min-w-[100px]'>
              Buy now
            </a>
          </div> 
        </div>
      </div>
    </>
  );
}

export default Card;