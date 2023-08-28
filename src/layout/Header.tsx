import { Link, useLocation } from "react-router-dom";
import { HEADER_SITEMAP, HEADER_ACTION} from "../constant/sitemap"

const Header = () => {
  const currentUrl = useLocation().pathname;
  console.log(currentUrl)

  return (
    <div className="flex items-center">
      <p className="font-sans text-2xl font-bold mr-16">F
        <span className="text-primary">oo</span>
        dtuck
      </p>

      {
        HEADER_SITEMAP.map((item) => (
          <Link to={item.path} className={`text-text ml-8 ${currentUrl !== item.path ? '' : 
          'font-bold after:block after:w-6 after:h-0.5 after:bg-primary after:absolute'}`}
          >
            {item.title}
          </Link>
        ))
      }



      <div className="flex items-center ml-auto">
      {
        HEADER_ACTION.map((item) => (
          <div className="ml-8 text-white">
            {item.icon}
          </div>
        ))
      }
      </div>




    </div>
  )
}

export default Header