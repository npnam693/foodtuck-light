import Header from './Header'
import Footer from './Footer'

const DefaultLayout = ({children} : {children : React.ReactElement}) => {
  return (
    <div className='px-[300px] pt-[50px]'>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default DefaultLayout