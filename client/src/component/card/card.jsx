import { BsPerson } from 'react-icons/bs'
import { Link } from 'react-router-dom';
import { formatVietnameseToString } from '../../ultils/Common/formatVietnameseToString'

const Card = (props) => {
  const priceAmount = parseInt(props.price_amount)
  const priceSlashed = parseInt(props.price_slashed)
  const sale = Math.round((priceSlashed-priceAmount)/priceSlashed*100);

  return (
    <>
      <div className='flex h-full w-full ' >
        <div className="relative flex flex-col w-full border-grey-2 border rounded-2xl overflow-hidden hover:shadow-2xl">
          <Link to={`/course/${formatVietnameseToString(props.productName)}/${props.id}`} >
            <img src={props.productImage} className='w-full h-[148px]' alt='' />
          </Link>
          <div className="flex flex-col flex-1 p-4">
            <Link to={`/course/${formatVietnameseToString(props.productName)}/${props.id}`} >
              <h3 className="text-lg font-medium md:text-grey-9 h-10 mb-2">
                {props.productName}
              </h3>
            </Link>
            <a href={props.linkAuthor} className='flex items-center mb-4'>
              <BsPerson className='mr-1' />
              {props.author}
            </a>
            <div className='border-grey-2 border-t flex items-center py-5'>
              <p className="text-red font-semibold">${props.price_amount}.00</p>
              <p className='text-grey-4 text-base line-through ml-1'>${props.price_slashed}.00</p>
              <span className='text-xs text-white bg-custom-7 p-1 rounded ml-2'>{sale} % off</span>
            </div>
            <Link  to={`/course/${formatVietnameseToString(props.productName)}/${props.id}`} className='button-outlined mt-4 min-w-[100px]'>
              Buy now
            </Link>
          </div> 
        </div>
      </div>
    </>
  );
}

export default Card;