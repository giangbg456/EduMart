import Hero from '../../component/hero/hero';
import Counter from '../../component/counter/counter';
import TopCategories from '../../component/top-categories/top-categories';
import PremiumCourses from '../../component/premium-courses/premiun-courses';
import FreeCourses from '../../component/free-courses/free-courses';

function Home() {
  return ( 
    <>
      <Hero />
      <Counter />
      <TopCategories />
      <PremiumCourses />
      <FreeCourses/>
    </>
  );
}

export default Home;