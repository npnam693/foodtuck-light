import DefaultLayout from '../layout'
import HomeIntroduce from '../components/home/HomeIntroduce'
import HomeAboutUs from '../components/home/HomeAboutUs'
import HomeCategory from '../components/home/HomeCategory'
import HomeWhyChoose from '../components/home/HomeWhyChoose'

const Home = () => {
  return (
    <div>
      <DefaultLayout>
        <>
          <img src={'./bg_home-1.svg'} alt='Foodtuck' 
            className='absolute -z-10 top-0 right-0 w-[900px]'
          />

          <HomeIntroduce />
          <HomeAboutUs />
          <HomeCategory />
          <HomeWhyChoose />
        </>
      </DefaultLayout>
    </div>
  )
}

export default Home