import { dataCart } from "../../../data"
import { dataFoods } from "../../../components/ItemFood"
import { InputNumber, Rate } from "antd"
import { CloseOutlined, MinusOutlined, PlusOutlined } from "@ant-design/icons"
import { ICartState, IProduct, addProduct, removeProduct } from "../../../state/cart/cartSlice"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../../state/store"

const labelColTable = [
    { title: 'Product', size: '!w-[100%]' , center: false},
    { title: 'Price', size: 'w-[15%]' , center: true},
    { title: 'Quantity', size: 'w-[20%]' , center: true},
    { title: 'Total', size: 'w-[15%]', center: true},
    { title: 'Remove', size: 'w-[20%]', center: true}
]

const TableCart = ({dataCart} : {dataCart : ICartState}) => {
    return (
    <table className='w-full border-separate border-spacing-y-8'>
        <thead className="">
            <tr>
                {
                    labelColTable.map((label, index) => (
                        <th key={index} className={`w-[${label.size}%] text-left font-bold text-lg text-[#333] ${label.center && 'text-center'}`}>{label.title}</th>
                    ))
                }
            </tr>
        </thead>
        <tbody>
            {
                dataCart.listProducts.map((item, index) => (
                    <CellTableCart key={index} dataProduct={item}/>
                ))
            }
        </tbody>
    </table>
  )
}

const CellTableCart = ({dataProduct} : {dataProduct : IProduct} ) => {
    const dataItemFood = dataFoods[dataCart[0].id]
    const {cart} = useSelector((state: RootState) => state)
    const dispatch = useDispatch()


    return (    
        <tr className="border border-slate-600">
            <td className={`${labelColTable[0].size} flex gap-3 h-[120px] border-b border-[#E0E0E0]`}>
                <img src={dataItemFood.images[0]} alt="food" className="w-[100px] h-[100px] object-cover "/>
                <div className="w-full">
                    <p className="font-bold text-base">{dataItemFood.name}</p>
                    <Rate disabled defaultValue={dataItemFood.rate} className="text-primary text-base"/>
                </div>
            </td>

            <td className={`${labelColTable[1].size} text-base text-[#333] border-b border-[#E0E0E0] text-center`}>
                {dataItemFood.price}.00$
            </td>

            <td className={`${labelColTable[2].size} text-left font-bold text-lg text-[#333] border-b border-[#E0E0E0]`}>
                <div className="flex justify-center">
                    <InputNumber 
                        addonBefore={
                            <div className={"w-[20px] h-[20px] flex items-center justify-center"} 
                                onClick={() => dispatch(removeProduct({id: dataItemFood.id, price:dataItemFood.price, qty: 1}))}
                            >
                                <MinusOutlined className={"w-full h-full p-0 text-xs" + (dataProduct.qty === 1 ? ' !text-[#ccc]' : '')} />
                            </div>
                        } 
                        addonAfter={
                            <div className=" w-[20px] h-[20px] flex items-center justify-center" 
                                onClick={() =>  dispatch(addProduct({id: dataItemFood.id, price:dataItemFood.price, qty: 1}))}
                            >
                                <PlusOutlined className="text-xs" />
                            </div>
                        } 
                        min={1}
                        // onChange={(value) => cart.qty = Number(value)}
                        value={dataProduct.qty}
                        controls={false}
                        className="overide-input--qty-cart mr-4 !max-w-[110px]" 
                    />
                </div>
            </td>

            
            <td className={`${labelColTable[3].size} font-bold text-base text-[#333] border-b border-[#E0E0E0] text-center`}>
                {dataItemFood.price * dataProduct.qty}.00$
            </td>

            <td className={`${labelColTable[4].size} font-bold text-lg text-[#333] border-b border-[#E0E0E0]`}>
                <div className="flex justify-center">
                    <CloseOutlined />
                </div>
            </td>
        </tr>
    )
}

export default TableCart