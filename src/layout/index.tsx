import Header from './components/Header'
import Footer from './components/Footer'

const DefaultLayout = ({children} : {children : React.ReactNode}) => {
  return (
    <div className='px-[300px] pt-[50px] overflow-x-hidden overflow-hidden'>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default DefaultLayout