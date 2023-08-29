import React from 'react'

const ItemMenu = () => {
  return (
    <div className='flex flex-row w-[calc(50%-20px)] justify-between mb-6
        border-b-[1px] border-[#E0E0E0] border-dashed
    '>
        <div>
            <p className='text-[#333] text-2xl font-bold pb-2'>Alder Grilled Chinook Salmon</p>
            <p className='text-[#4f4f4f] pb-2'>Toasted French bread topped with romano, cheddar</p>
            <p className='text-[#828282] pb-4'>560 CAL</p>
        </div>

        <p className='font-bold text-2xl text-primary'>32 $</p>
    </div>
  )
}

export default ItemMenu