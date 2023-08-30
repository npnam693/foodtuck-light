import { CalendarOutlined, RollbackOutlined } from '@ant-design/icons'
import React from 'react'

const ItemComment = () => {
  return (
    <div>
        <img src='/images/avatar-creator.png' alt='Avatar'/>

        <div>
            <div>
                <p>MD Sojib Khan</p>
                <p>
                    <RollbackOutlined />
                    Reply
                </p>
            </div>
            <p className='text-[#828282]'>
                <CalendarOutlined className='text-primary mr-2 text-xl'/> 
                
                June 22, 2020
            </p>

            <p className='text-[#4f4f4f]'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Nunc orci tellus, fermentum nec imperdiet sed, pulvinar 
            et sem, Fusce hendrerit faucibus sollicitudin.
            </p>
        </div>
    </div>
  )
}

export default ItemComment