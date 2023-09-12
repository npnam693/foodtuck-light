import CoverPage from "../../components/CoverPage"
import HomeAboutUs from "../home/components/HomeAboutUs.tsx"
import HomeMenu from "../home/components/HomeMenu.tsx"
import HomeTeam from "../home/components/HomeTeam.tsx"
import AboutClientSay from "./components/AboutClientSay"
import AboutWhyChoose from "./components/AboutWhyChoose"


const AboutUs = () => {
  return (
    <div className="flex flex-col gap-y-32">
        <CoverPage title="About Us" currentPage="About" listPath={[{title:'Home', path: '/'}]}/>
        
        <HomeAboutUs />

        <AboutWhyChoose />

        <HomeTeam />

        <AboutClientSay />

        <HomeMenu />
    </div>
  )
}

export default AboutUs