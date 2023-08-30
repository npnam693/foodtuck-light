import { Link, useLocation } from "react-router-dom";
import { HEADER_SITEMAP, HEADER_ACTION} from "../../constant/sitemap"

const Header = () => {
  const currentUrl = useLocation().pathname;

  return (
    <header className="flex items-center">
      <Link to="/" className={`font-sans text-2xl font-bold mr-16 ${currentUrl !== '/' && 'text-white'}` }>F
        <span className="text-primary">oo</span>
        dtuck
      </Link>
      
      <nav>
        {
          HEADER_SITEMAP.map((item, index) => (
            <Link to={item.path} key={index} className={`text-text ml-8 ${currentUrl !== '/' && 'text-white'} relative ${currentUrl !== item.path ? '' : 
            'font-bold after:block after:w-6 after:h-0.5 after:bg-primary after:absolute after:left-0'}`}
            >
              {item.title}
            </Link>
          ))
        }
      </nav>

      <div className="flex items-center ml-auto">
      {
        HEADER_ACTION.map((item, index) => (
          <div className="ml-8 text-white" key={index}>
            {item.icon}
          </div>
        ))
      }
      </div>
    </header>
  )
}

export default Header