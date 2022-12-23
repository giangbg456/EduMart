import { Link } from "react-router-dom";

function Menu () {
  return (
    <ul className="hidden lg:flex">
      <li className="relative menu-item after:w-0 hover:menu-item-line">
        <Link to={'#'} className="inline-flex items-center font-semibold text-white text-2lg" href="/">
          Prime Packs
        </Link>
      </li>
      <li className="relative menu-item after:w-0 hover:menu-item-line">
        <Link to={'/courses/all'} className="inline-flex items-center font-semibold text-white text-2lg" href="/">
          Courses
        </Link>
      </li>
      <li className="relative menu-item after:w-0 hover:menu-item-line">
        <Link to={'#'} className="inline-flex items-center font-semibold text-white text-2lg" href="/">
          Categogy
        </Link>
      </li>
    </ul>
  )
}

export default Menu;