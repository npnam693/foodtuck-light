
const ItemCategory = ({name, amountRemain} : {name: string, amountRemain: number}) => {
  return (
    <div>
        <img src="./images/home/item-category_1.png" alt="ItemCategory" loading="lazy"/>
        <p className="text-center font-bold text-xl text-[#4f4f4f] mt-4">{name}</p>
        <p className="text-center text-[#828282] my-2">{amountRemain} items</p>
    </div>
  )
}

export default ItemCategory