import { FacebookFilled, TwitterOutlined, YoutubeFilled } from "@ant-design/icons"
import { Button } from "antd"

const ItemMember = ({image, name, role} : {
    image: string,
    name: string,
    role: string
}) => {
  return (
    <div className="relative group">
        <img src={image} alt={name} loading="lazy" className="group-hover:brightness-50 w-full"/>
        <p className="text-center  font-bold text-xl text-[#4f4f4f] mt-4">{name}</p>
        <p className="text-center  text-[#828282] mb-4">{role}</p>

        <div className="absolute top-12 flex-col w-full items-center gap-y-[12px] hidden  group-hover:flex">
            <Button type="primary" className="hover:!bg-primary hover:text-white bg-white text-[#4f4f4f]" size="large" icon={<FacebookFilled />}/>
            <Button type="primary" className="hover:!bg-primary hover:text-white bg-white text-[#4f4f4f]" size="large" icon={<TwitterOutlined />}/>
            <Button type="primary" className="hover:!bg-primary hover:text-white bg-white text-[#4f4f4f]" size="large" icon={<YoutubeFilled />}/>
            <Button type="primary" className="hover:!bg-primary hover:text-white bg-white text-[#4f4f4f]" size="large" icon={<YoutubeFilled />}/>
        </div>
    </div>
  )
}

export default ItemMember