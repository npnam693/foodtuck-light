import DefaultLayout from '../layout'
import HomeIntroduce from '../components/home/HomeIntroduce'
import HomeAboutUs from '../components/home/HomeAboutUs'
import HomeCategory from '../components/home/HomeCategory'
import HomeWhyChoose from '../components/home/HomeWhyChoose'
import HomeMenu from '../components/home/HomeMenu'
import HomeTeam from '../components/home/HomeTeam'

const Home = () => {
  return (
    <div>
      <DefaultLayout>
        <div className='pb-24'>
          <img src={'./bg_home-1.svg'} alt='Foodtuck' 
            className='absolute -z-10 top-0 right-0 w-[900px]'
          />

          <HomeIntroduce />
          <HomeAboutUs />
          <HomeCategory />
          <HomeWhyChoose />
          <HomeMenu />
          <HomeTeam />
        </div>
      </DefaultLayout>
    </div>
  )
}

export default Home