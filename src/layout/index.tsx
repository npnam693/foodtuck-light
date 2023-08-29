import Header from './Header'
import Footer from './Footer'

const DefaultLayout = ({children} : {children : React.ReactNode}) => {
  return (
    <div className='px-[300px] pt-[50px] overflow-x-hidden'>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default DefaultLayout