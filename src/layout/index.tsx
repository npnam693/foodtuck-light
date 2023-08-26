import Header from './Header'
import Footer from './Footer'
import React from 'react'

const DefaultLayout = ({children} : {children : React.FC}) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default DefaultLayout