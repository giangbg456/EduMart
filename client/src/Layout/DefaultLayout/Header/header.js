import TopBar from "../../../component/topbar/topbar"
import { BsPerson } from 'react-icons/bs'
import { BsCart3 } from 'react-icons/bs'
import { BiSearch } from 'react-icons/bi'
import Logo from '../../../component/logo/logo'
import Menu from '../../../component/menu/menu'
import { Link } from "react-router-dom"

function Header () {
  return (
    <>
      <TopBar />
      <site-header className="sticky top-0 z-20">
        <div className="text-white bg-navi">
          <div className="px-4 mx-auto lg:px-6 max-w-[1248px]">
            <div className="flex items-center justify-between py-[13px] lg:py-0">
              <div className="text-left">
                <div className="flex items-center gap-4 lg:hidden">
                  <button
                    className="focus:outline-none flex flex-col w-6 h-6 px-[3px] py-[3px] justify-between js-menu.trigger" type="button"
                  >
                    <span className="inline-block h-[1px] w-full bg-white transition ease duration-300 [.is-active>&]:rotate-45 [.is-active>&]:translate-y-[7px]"></span>
                    <span className="inline-block h-[1px] w-full bg-white transition ease duration-300 [.is-active>&]:opacity-0"></span>
                    <span className="inline-block h-[1px] w-full bg-white transition ease duration-300 [.is-active>&]:-rotate-45 [.is-active>&]:-translate-y-1"></span>
                  </button>
                  <a className="relative" href="/login">
                    <BsPerson 
                      className="w-6 h-6"
                    />
                  </a>
                </div>
                <Logo className="hidden lg:block"/>
              </div>
              <div className="text-center">
                <Logo className="lg:hidden" />
                <Menu />
              </div>
              <div className="text-right">
                <div className="flex items-center gap-4 lg:gap6">
                  <Link className="relative hidden lg:block" to={'/login'}>
                      <BsPerson 
                        className="w-6 h-6"
                      />
                    </Link>
                  <label
                    for="SearchSuggestion"
                    className="cursor-pointer js-search-trigger"
                  >
                    <BiSearch
                      className="w-6 h-6" 
                    />
                  </label>
                  <Link to={'/cart'}>
                    <BsCart3  className="w-6 h-6"  />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </site-header>
      
    </>
  )
}

export default Header;