import { dataCart } from "../../../data"
import { dataFoods } from "../../../components/ItemFood"
import { Divider, Rate } from "antd"

const labelColTable = [
    { title: 'Product', size: 30 }, 
    { title: 'Price', size: 15 },
    { title: 'Quantity', size: 20 },
    { title: 'Total', size: 15 }, 
    { title: 'Remove', size: 20} 
]
const TableCart = () => {
    return (
    <table className='w-full'>
        <thead className="pb-8 h-32">
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
    const dataItemCart = dataCart[0]
    const dataItemFood = dataFoods[dataItemCart.id]
    return (
        <tr className="mb-10">
            <td className={`w-[${labelColTable[0].size}%] flex gap-3 border border-slate-600`}>
                <img src={dataItemFood.images[0]} alt="food" className="w-[100px] h-[100px] object-cover"/>
                <div>
                    <p className="font-bold text-base">{dataItemFood.name}</p>
                    <Rate disabled defaultValue={dataItemFood.rate} className="text-primary text-base"/>
                </div>
            </td>

            <td className={`w-[${labelColTable[1].size}%] text-left font-bold text-lg text-[#333]`}>
                {dataItemFood.price}
            </td>

            
            <td className={`w-[${labelColTable[2].size}%] text-left font-bold text-lg text-[#333]`}>
                {dataItemCart.qty}
            </td>

            
            <td className={`w-[${labelColTable[1].size}%] text-left font-bold text-lg text-[#333]`}>
                {dataItemFood.price * dataItemCart.qty}
            </td>

            
            <td className={`w-[${labelColTable[1].size}%] text-left font-bold text-lg text-[#333]`}>
                x
            </td>
        </tr>
    )
}

export default TableCart