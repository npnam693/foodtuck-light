import TableCart from './components/TableCart'
import CoverPage from '../../components/CoverPage'
import { Button, Divider, Input } from 'antd'
import { SelectOutlined } from '@ant-design/icons'

const ShoppingCart = () => {
  return (
    <div>
        <CoverPage title='Shopping Cart' currentPage='Shopping Cart' listPath={[{path:'/', title: 'Home'}]}/>
        <TableCart />

        <div className='flex gap-x-10 mt-24'>
          <div className='basis-1/2'>
            <p className='font-bold text-[#333] text-3xl mb-6'>Coupon Code</p>
            <div className='p-6 border border-[#e0e0e0] rounded-md'>
              <p className='mb-6 text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non</p>
              <Input
                addonAfter={<p>Apply</p>}
                placeholder="Enter Code Here"
                className="overide_input w-full rounded-none"
                size="large"
              />
            </div>
          </div>
          <div className='basis-1/2'>
            <p className='font-bold text-[#333] text-3xl mb-6'>Total Bill</p>
            <div className='border border-[#E0E0E0] p-6 rounded-md'>
              <p className='flex justify-between mb-4 font-bold text-xl text-[#333]'>Cart Subtotal <span>$120.00</span></p>
              <p className='flex justify-between text-[#4F4F4F] text-lg'>Shipping Charge <span>$0.00</span></p>
              <Divider />
              <p className='flex justify-between font-bold text-xl text-[#333]'>Total Amount <span>$250.00</span></p>
            </div>
            <Button className='flex mt-6 items-center justify-center rounded-none h-14 text-base w-full
            text-white bg-primary '>
              Proceed to Checkout 
              <SelectOutlined /> 
            </Button>
          </div>
        </div>
    </div>
  )
}

export default ShoppingCart