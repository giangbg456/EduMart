function Menu () {
  return (
    <ul className="hidden lg:flex">
      <li className="relative menu-item after:w-0 hover:menu-item-line">
        <a className="inline-flex items-center font-semibold text-white text-2lg" href="/">
          Prime Packs
        </a>
      </li>
      <li className="relative menu-item after:w-0 hover:menu-item-line">
        <a className="inline-flex items-center font-semibold text-white text-2lg" href="/">
          Courses
        </a>
      </li>
      <li className="relative menu-item after:w-0 hover:menu-item-line">
        <a className="inline-flex items-center font-semibold text-white text-2lg" href="/">
          Categogy
        </a>
      </li>
    </ul>
  )
}

export default Menu;