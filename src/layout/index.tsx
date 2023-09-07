import Header from './components/Header'
import Footer from './components/Footer'

const DefaultLayout = ({children} : {children : React.ReactNode}) => {
  return (
    <>
      <Header />
      <main className='px-[10vw] overflow-x-hidden'>
      {children}
      </main>
      <Footer />
    </>
  )
}

export default DefaultLayout