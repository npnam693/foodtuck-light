import { Button } from "antd"
import ItemCategory from "./ItemCategory"
import { LeftOutlined, RightOutlined } from "@ant-design/icons"

const HomeCategory = () => {
  return (
    <section className="mt-24 flex flex-col items-center">
      <div className="relative">
        <p className="font-bold text-5xl text-text font-san mb-8 text-center
         after:block after:content-limb after:bottom-10 after:right-32 after:absolute
        ">
          Food category
        </p>
        <p className="text-[#828282] text-center mb-14">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/>
        Varius sed pharetra dictum neque massa congue</p>
      </div>

      <div className="flex items-center">
        <Button icon={<LeftOutlined className="!text-xl"/>} 
          className="mr-9 bg-primary text-white !w-14 !h-14"/>
        <div className="flex gap-x-6">
          <ItemCategory name="Grand Italiano" amountRemain={24}/>
          <ItemCategory name="Grand Italiano" amountRemain={24}/>
          <ItemCategory name="Grand Italiano" amountRemain={24}/>
          <ItemCategory name="Grand Italiano" amountRemain={24}/>
        </div>
        <Button icon={<RightOutlined className="!text-xl"/>}  
          className="ml-9 bg-primary text-white !w-14 !h-14"/>
      </div>
    </section>
  )
}

export default HomeCategory