import { PlayCircleOutlined } from "@ant-design/icons"
import { Button } from "antd"

const HomeAboutUs = () => {
  return (
    <section  className="flex justify-between items-center mt-24">
      <div className="flex gap-5  min-w-[670px]">
        <img src="/images/home/aboutus_1.png" alt="aboutus_1" loading="lazy" 
          className="w-[336px] pb-[200px]"/>
        <div className="w-[336px] pt-[54px]">
          <img src="/images/home/aboutus_2.png" alt="aboutus_2" loading="lazy" className="mb-5" />
          <img src="/images/home/aboutus_3.png" alt="aboutus_3" loading="lazy" />
        </div>
      </div>

      <div className="w-[534px]">
        <span className="relative font-attractive text-lg text-primary
          after:block after:w-9 after:h-[1px] after:bg-primary 
          after:-right-14 after:bottom-2 after:absolute">
          About us
        </span>
        <p className="font-bold text-5xl text-text font-san mb-8">Food is an important part Of a balanced Diet</p>
        
        <p className="text-text mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Quisque diam pellentesque bibendum non dui volutpat 
        fringilla bibendum. Urna, elit augue urna, vitae feugiat 
        pretium donec id elementum. Ultrices mattis vitae mus risus. 
        Lacus nisi, et ac dapibus sit eu velit in consequat.</p>

        <div className="flex">
          <Button type="primary" className="bg-primary font-bold mr-4 h-14 w-52 text-lg">Show more</Button>
          <div className="flex items-center ">
            <Button type="primary" shape="circle" className="bg-primary !h-14 !w-14 mr-3" icon={<PlayCircleOutlined className="!text-3xl"/>}/>
            <p className="text-text font-bold">Watch video</p>
          </div>
        </div>

      </div>
    </section>
  )
}

export default HomeAboutUs