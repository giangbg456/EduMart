import Header from './component/header/header';
import Hero from './component/hero/hero';
import Counter from './component/counter/counter';
import TopCategories from './component/top-categories/top-categories';
import PremiumCourses from './component/premium-courses/premiun-courses';
import FreeCourses from './component/free-courses/free-courses';
import Footer from './component/footer/footer'

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Counter />
      <TopCategories />
      <PremiumCourses />
      <FreeCourses/>
      <Footer />
    </>
  );
}

export default App;
