import { useState } from 'react'
import { Rate } from 'antd'




const AboutClientSay = () => {
    const [current, setCurrent] = useState(0)

    return (
    <section>
        <p className="relative font-attractive text-3xl text-primary mb-4">
          Testimonials
        </p>

        <p className="font-bold text-5xl text-text font-san mb-28">What our client are saying</p>
        
        <div className='w-8/12 relative shadow min-h-[460px] mr-auto ml-auto flex flex-col 
            items-center justify-center gap-y-8 py-10 px-32'>
            <img src='/images/about/avatar-client.png' alt='client' className='w-[132px] h-[132px] absolute -top-[66px]' />

            <img src='/textures/quotes.png' alt='quotes' className='w-[40px] h-[40px]' />
            <p className='text-center text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Quisque diam pellentesque bibendum non dui volutpat fringilla 
            bibendum. Urna, elit augue urna, vitae feugiat pretium donec id 
            elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, 
            et ac dapibus sit eu velit in consequat.
            </p>

            <div className='flex flex-col gap-y-2'>
                <Rate defaultValue={5} />
                <p className='text-center text-2xl font-bold'>Alamin Hasan</p>
                <p className='text-center text-[#828282]'>Food Specialist</p>
            </div>

            <img src={'./textures/flower_about.png'} alt='flower' className='absolute -bottom-28 -right-20' />
        </div>

        <div className='flex gap-x-2 mt-14 justify-center'>
            {
                [0, 1, 2, 3, 4].map((_, index) => (
                    <div key={index} onClick={() => setCurrent(index)}
                        className={`h-4 w-4 bg-disabledGreen rounded-full cursor-pointer ${current === index && 'bg-primary'}`} />
                ))
            }
        </div>

    </section>
  )
}

export default AboutClientSay