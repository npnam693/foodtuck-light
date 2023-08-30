import { ContentReview, UserInfoReview } from '../../../components/home/ItemReview'
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons'
import { Button } from 'antd'

const HomeReview = () => {
  return (
    <section className='mt-24 flex flex-row justify-between'>
        <div className='w-[536px]'>
            <span className="relative font-attractive mb-2 text-lg text-primary
            after:block after:w-7 after:h-[1px] after:bg-primary 
            after:-right-14 after:bottom-2 after:absolute">
            Testimonials
            </span>
            
            <p className="font-bold text-6xl text-text font-sans mb-2">
                Customer Review
            </p>

            <img src='./decoration/quotes.png' alt='quotes' className='mb-8' />

            <p className="text-base text-content mb-12">Lorem ipsum dolor sit amet, 
            consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui 
            volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium
            donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et 
            ac dapibus sit eu velit in consequat.</p>

            <div className='flex justify-between items-center'>
                <UserInfoReview avatar='./images/home/avatar-review_1.png' name='Abdur Rahman' role='Customer'/>
                <div>
                    <Button icon={<ArrowLeftOutlined />} className="bg-white"/>
                    <Button icon={<ArrowRightOutlined />} className="bg-white ml-4"/>
                </div>
            </div>
        </div>

        <ContentReview image='./images/home/review-dish_1.png' title="Order now" desc="Lorem ipsum dolor sit amet, consectetur elit. Quisque diam pellentesque bibendum fringilla bibendum. Urna, elit augue urna," price={10} point={5} />
        

    </section>
  )
}

export default HomeReview