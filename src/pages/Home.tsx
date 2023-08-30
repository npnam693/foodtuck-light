import HomeIntroduce from '../components/home/HomeIntroduce'
import HomeAboutUs from '../components/home/HomeAboutUs'
import HomeCategory from '../components/home/HomeCategory'
import HomeWhyChoose from '../components/home/HomeWhyChoose'
import HomeMenu from '../components/home/HomeMenu'
import HomeTeam from '../components/home/HomeTeam'
import HomeReview from '../components/home/HomeReview'
import HomeBlogs from '../components/home/HomeBlogs'
import HomePartner from '../components/home/HomePartner'

const Home = () => {
  return (
    <div className='pb-24'>
      <img src={'/images/background/bg_home-1.png'} alt='Foodtuck' 
        className='absolute -z-10 top-0 right-0 w-[900px]'
      />

      <HomeIntroduce />
      <HomeAboutUs />
      <HomeCategory />
      <HomeWhyChoose />
      <HomeMenu />
      <HomeTeam />
      <HomeReview />
      <HomeBlogs />
      <HomePartner />
    </div>
  )
}

export default Home