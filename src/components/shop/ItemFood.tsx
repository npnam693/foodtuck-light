import { HeartOutlined, LinkOutlined, ShoppingOutlined } from "@ant-design/icons"
import { Food } from "../../types/listType"
import { Button } from "antd"

const dataFoods : {[key: string] : Food} = {
    '1' : {
        id: '1',
        name: "Fresh Lime",
        price: 45,
        salePrice: 38,
        reviews: [],
        rate: 4,
        qtyReview: 10,
        images: ['./images/shop/food_1.png'],
        qtyRemain: 20,
        quickIntro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.',
        desc: [
            'Nam tristique porta ligula, vel viverra sem eleifend nec. Nulla sed purus augue, eu euismod tellus. Nam mattis eros nec mi sagittis sagittis. Vestibulum suscipit cursus bibendum. Integer at justo eget sem auctor auctor eget vitae arcu. Nam tempor malesuada porttitor. Nulla quis dignissim ipsum. Aliquam pulvinar iaculis justo, sit amet interdum sem hendrerit vitae. Vivamus vel erat tortor. Nulla facilisi. In nulla quam, lacinia eu aliquam ac, aliquam in nisl.',
            'Suspendisse cursus sodales placerat. Morbi eu lacinia ex. Curabitur blandit justo urna, id porttitor est dignissim nec. Pellentesque scelerisque hendrerit posuere. Sed at dolor quis nisi rutrum accumsan et sagittis massa. Aliquam aliquam accumsan lectus quis auctor. Curabitur rutrum massa at volutpat placerat. Duis sagittis vehicula fermentum. Integer eu vulputate justo. Aenean pretium odio vel tempor sodales. Suspendisse eu fringilla leo, non aliquet sem.',
        ]
    },
}
// relative w-full h-[267px] bg-[url('./images/shop/food_1.png')] bg-cover
// relative w-full h-[267px] bg-[url('./images/shop/food_1.png')]

const ItemFood = ({id} : {id: string}) => {
  return (
    <div className="group w-[312px] hover:shadow-md">
        <div className={`relative w-full h-[267px] bg-[url('${dataFoods[id].images[0]}')]`}>
            <div className="w-full h-full absolute bg-[rgba(0,0,0,0.5)] hidden group-hover:block" />
            <div className="w-full h-full  items-center justify-center gap-x-6 hidden group-hover:flex group-hover:brightness-150 z-10">
                <Button className='bg-white text-primary hover:!bg-primary hover:text-white' type="primary" size="large" icon={<LinkOutlined />}></Button>
                <Button className='bg-white text-primary hover:!bg-primary hover:text-white' type="primary" size="large" icon={<ShoppingOutlined />}></Button>
                <Button className='bg-white text-primary hover:!bg-primary hover:text-white' type="primary" size="large" icon={<HeartOutlined />}></Button>
            </div>
        </div>

        
        <p className="text-[#333] font-bold text-lg">{dataFoods[id].name}</p>
        <div>
            <span className="text-primary mr-2">${dataFoods[id].salePrice}</span>
            <span className="text-[#828282] line-through">${dataFoods[id].price}</span>
        </div>
    </div>
  )
}

export default ItemFood