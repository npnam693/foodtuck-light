import React from 'react'
import ItemWhyChoose from '../../../components/home/ItemWhyChoose'
import { CarOutlined } from '@ant-design/icons'

const HomeWhyChoose = () => {
  return (
    <section className='flex mt-24 justify-between items-center'>
        <div className='min-w-[700px] flex relative'>
            <img src='./images/home/whychoose_1.png' alt='why-choose_1' loading="lazy"
              className='pb-40'/>
            <img src='./images/home/whychoose_2.png' alt='why-choose_2' loading="lazy"
                className='absolute -bottom-0 -right-4' />
        </div>


        <div className='w-[538px]'>
            <span className="relative font-attractive text-lg text-primary
            after:block after:w-9 after:h-[1px] after:bg-primary 
            after:-right-14 after:bottom-2 after:absolute">
            Why Choose us
            </span>
            <p className="font-bold text-5xl text-text font-san mb-8">Why We are the best?</p>
            <p className='text-[#828282] mb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque 
            bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat 
            pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac 
            dapibus sit eu velit in consequat.</p>
            <p className='text-[#828282] mb-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Varius sed pharetra dictum neque massa congue</p>

            <div className='flex flex-wrap justify-between gap-x-4 gap-y-4'>
                <ItemWhyChoose title='Fast Delivery' icon={<CarOutlined  className='!text-4xl'/>} isActive/>
                <ItemWhyChoose title='Fast Delivery' icon={<CarOutlined  className='!text-4xl'/>} isActive={false}/>
                <ItemWhyChoose title='Fast Delivery' icon={<CarOutlined  className='!text-4xl'/>} isActive={false}/>
                <ItemWhyChoose title='Fast Delivery' icon={<CarOutlined  className='!text-4xl'/>} isActive={false}/>
            </div>

        </div>

    </section>
  )
}

export default HomeWhyChoose