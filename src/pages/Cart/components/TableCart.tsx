import { dataCart } from "../../../data"
import { dataFoods } from "../../../components/ItemFood"
import { Divider, InputNumber, Rate } from "antd"
import { CloseOutlined, MinusOutlined, PlusOutlined } from "@ant-design/icons"
import React from "react"

const labelColTable = [
    { title: 'Product', size: 30 }, 
    { title: 'Price', size: 15 },
    { title: 'Quantity', size: 20 },
    { title: 'Total', size: 15 }, 
    { title: 'Remove', size: 20} 
]
const TableCart = () => {
    return (
    <table className='w-full border-separate border-spacing-y-8'>
        <thead className="">
            <tr>
                {
                    labelColTable.map((label, index) => (
                        <th key={index} className={`w-[${label.size}%] text-left font-bold text-lg text-[#333]`}>{label.title}</th>
                    ))
                }
            </tr>
        </thead>
        <tbody>
            <CellTableCart />
            <CellTableCart />
            <CellTableCart />
        </tbody>
    </table>
  )
}

const CellTableCart = () => {
    const dataItemFood = dataFoods[dataCart[0].id]
    const [cart, setCart] = React.useState(dataCart[0])
    return (    
        <tr className="border border-slate-600">
            <td className={`w-[${labelColTable[0].size}%] flex gap-3 h-[120px] border-b border-[#E0E0E0]`}>
                <img src={dataItemFood.images[0]} alt="food" className="w-[100px] h-[100px] object-cover "/>
                <div>
                    <p className="font-bold text-base">{dataItemFood.name}</p>
                    <Rate disabled defaultValue={dataItemFood.rate} className="text-primary text-base"/>
                </div>
            </td>

            <td className={`w-[${labelColTable[1].size}%] text-left  text-base text-[#333] border-b border-[#E0E0E0]`}>
                {dataItemFood.price}.00$
            </td>

            <td className={`w-[${labelColTable[2].size}%] text-left font-bold text-lg text-[#333] border-b border-[#E0E0E0]`}>
                <InputNumber 
                    addonBefore={
                        <div className={"w-[20px] h-[20px] flex items-center justify-center"} 
                            onClick={() => Number(cart.qty) > 1 ? setCart({...cart, qty: cart.qty - 1}) : {}}
                        >
                            <MinusOutlined className={"w-full h-full p-0 text-xs" + (cart.qty === 1 ? ' !text-[#ccc]' : '')} />
                        </div>
                    } 
                    addonAfter={
                        <div className=" w-[20px] h-[20px] flex items-center justify-center" 
                            onClick={() =>  setCart({...cart, qty: cart.qty + 1})}
                        >
                            <PlusOutlined className="text-xs" />
                        </div>
                    } 
                    min={1}
                    onChange={(value) => cart.qty = Number(value)}
                    value={cart.qty}
                    controls={false}
                    className="overide-input--qty-cart mr-4 w-[110px]" 
                />
            </td>

            
            <td className={`w-[${labelColTable[1].size}%] text-left font-bold text-base text-[#333] border-b border-[#E0E0E0]`}>
                {dataItemFood.price * cart.qty}.00$
            </td>

            <td className={`w-[${labelColTable[1].size}%] pl-8 font-bold text-lg text-[#333] border-b border-[#E0E0E0]`}>
                <CloseOutlined />
            </td>
        </tr>
    )
}

export default TableCart