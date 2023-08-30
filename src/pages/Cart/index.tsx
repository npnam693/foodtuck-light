import TableCart from './components/TableCart'
import CoverPage from '../../components/CoverPage'

const ShoppingCart = () => {
  return (
    <div>
        <CoverPage title='Shopping Cart' currentPage='Shopping Cart' listPath={[{path:'/', title: 'Home'}]}/>
        <TableCart />

    </div>
  )
}

export default ShoppingCart