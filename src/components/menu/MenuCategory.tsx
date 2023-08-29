import { CoffeeOutlined } from "@ant-design/icons"
import ItemMenu from "../home/ItemMenu"

const MenuCategory = ({title, image, listFood, isImageLeft} : {
    title: string,
    image: string,
    listFood: Array<{
        title: string,
        price: number,
        image: string,
        description: string
    }>,
    isImageLeft: boolean
}) => {
  return (
    <section className={`flex mb-40 justify-between ${!isImageLeft ? ' flex-row-reverse' : ''}`}>
        <img src={image} alt={title} className={`h-[662px] ${isImageLeft ? "mr-20" : "ml-20"}`}/>
        <div className="min-w-[720px] flex-grow">
            <CoffeeOutlined className="text-primary text-2xl mb-2" />
            <p className="text-5xl font-bold mb-6">{title}</p>
            {
                listFood.map((item, index: number) => (
                    <ItemMenu {...item} key={index} />
                ))
            }
        </div>
    </section>
  )
}

export default MenuCategory