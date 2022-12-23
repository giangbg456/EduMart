function Cart() {
  return ( 
    <>
      <div className="container">
        <div className='pt-8'>
          <h2 className='text-2xl md:text-3xl font-semibold'>
            Your Cart
          </h2>
          <p>You have a product in cart</p>
        </div>
        <div className='flex flex-col md:flex-row my-4'>
          <div className='w-2/3'>
            <div className='cart__item py-4 flex'>
              <div className="videoThumbnail">
                <img className='w-24 h-24' src='https://d3mxt5v3yxgcsr.cloudfront.net/courses/6584/course_6584_image.jpg' alt='img'/>
              </div>
              <div className='ml-6 flex flex-col'>
                <h2 className='text-xl md:text-2xl font-semibold'>HTML5 and CSS3 Fundamentals</h2>
                <p>Hoang Minh Giang</p>
                <div className='flex items-center mt-2'>
                  <p className="text-red font-semibold">$7.99</p>
                  <p className='text-grey-4 text-base line-through ml-1'>$100.00</p>
                  <span className='text-xs text-white bg-custom-7 p-1 rounded ml-2'>92 % off</span>
                </div>
              </div>
            </div>
          </div>
          <div className='w-1/3 px-4'>
            <div className='sticky top-0'>
              <div className='p-6 border border-grey-2 shadow rounded-xl'>
                <h3 className='text-lg font-medium'>Order Summary </h3>
                <div className='flex justify-between items-center mb-2.5 border-t border-grey-2 py-3 mt-2 '>
                  <h3 className='h6 font-semibold md:mr-[20px] text-base'>Subtotal</h3>
                  <p>$7.99</p>
                </div>
                <button className='button-primary mt-4 !text-white w-full'>Checkout</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;