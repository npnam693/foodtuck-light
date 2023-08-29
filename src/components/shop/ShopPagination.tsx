import { DoubleLeftOutlined, DoubleRightOutlined } from '@ant-design/icons'
import { Button } from 'antd'

const ShopPagination = ({qtyPage, currentPage}:{
    qtyPage: number,
    currentPage: number
}) => {
  return (
    <div className='flex gap-x-3 mt-14 mb-28'>
        <div className='h-10 w-10 border-2 border-[#f2f2f2] w-10 h-10] flex items-center justify-center'><DoubleLeftOutlined className='text-primary' /></div>
        {
            Array(qtyPage).fill(0).map((_, index) => (
                <div className={`border-2 border-[#f2f2f2] w-10 h-10] flex items-center justify-center 
                    ${currentPage === index + 1 ? 'bg-primary' : ''}`}>{index + 1}</div>
            ))
        }

        <div className='h-10 w-10 border-2 border-[#f2f2f2] w-10 h-10] flex items-center justify-center'><DoubleRightOutlined className='text-primary' /></div>

    </div>
  )
}

export default ShopPagination