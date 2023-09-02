import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";

import { HEADER_SITEMAP, HEADER_ACTION} from "../../constant/sitemap"
import React from "react";


const Header = () => {
  const currentUrl = useLocation().pathname;
  const headerRef = useRef(null)
  const navigate = useNavigate()

  const [headerSticked, setHeaderSticked] = React.useState(false)
  
  window.onscroll = () => {
    if (!headerSticked && window.scrollY >= 24) {
      setHeaderSticked(true)
    } else if (headerSticked && window.scrollY < 24) {
      setHeaderSticked(false)
    }
  }

  return (
    <header ref={headerRef} className={`flex items-center h-16 px-[10vw] mt-6 sticky top-0 
      ${headerSticked && currentUrl === '/' && "bg-white z-30 shadow-md"} ${headerSticked && currentUrl !== '/' && "bg-[#101721] z-30 shadow-md"} `}>

      <Link to="/" className={`font-sans text-2xl font-bold mr-16 ${currentUrl !== '/' && 'text-white'}` }>F
        <span className="text-primary">oo</span>
        dtuck
      </Link>
      
      <nav>
        {
          HEADER_SITEMAP.map((item, index) => (
            <Link to={item.path} key={index} className={`text-text ml-8 ${currentUrl !== '/' && 'text-white'} relative 
              ${currentUrl === item.path ? 'font-bold after:block after:w-6 after:h-0.5 after:bg-primary after:absolute after:left-0 animate-spin' 
              : 'before:hidden before:w-[6px] before:h-[6px] before:rounded-full before:bg-primary before:absolute before:left-1/2 before:-top-2 hover:before:block before:ease-in before:duration-200'}`
            }
            >
              {item.title}
            </Link>
          ))
        }
      </nav>

      <div className="flex items-center ml-auto">
        {
          HEADER_ACTION.map((item, index) => (
            <div key={index} onClick={() => item.path && navigate(item.path)}
              className={`text-white w-10 h-10 flex items-center justify-center rounded-full hover:bg-[#333] ${headerSticked && currentUrl === '/' && '!text-[#333] hover:bg-[#ccc] '}`} 
            >
              {item.icon}
            </div>
          ))
        }
      </div>

    </header>
  )
}

export default Header