import React, { useEffect } from "react";
import Card from "../../component/card/card";
import { getCourses } from '../../store/actions/course'
import { useDispatch, useSelector } from 'react-redux'

function Collection() {
  const dispatch = useDispatch()
  const { courses } = useSelector(state => state.course)
  useEffect(() => {
    dispatch(getCourses())
  }, [])
  return (
    <section className="mb-8 md:mb-16">
      <h1 className="text-center text-2xl lg:text-3xl py-8 lg:py-16 bg-grey-1">Courses</h1>
      <div className="container">
        <div className="mt-8 grid md:grid-cols-2 gap-y-8 gap-x-4 lg:grid-cols-3 xl:grid-cols-4 md:gap-y-6 md:gap-x-6 lg:mt-10">
          {courses?.length > 0 && courses.map(item => {
            return (
              <Card 
                key={item?.id}
                id={item?.id}
                productImage = {JSON.parse(item?.images.image)}
                productName={item?.name}
                author={item?.teacherID}
                price_amount={item?.priceSale}
                price_slashed={item?.price}
              />
            )
          })}
        </div>
      </div>
    </section>
  );
}

export default Collection;