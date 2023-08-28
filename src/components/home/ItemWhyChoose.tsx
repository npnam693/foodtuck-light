import React from "react"

const ItemWhyChoose = ({title, icon, isActive} : {
    title: string,
    icon: React.ReactElement,
    isActive: boolean
}) => {
  return (
    <div className={`flex h-20 min-w-[260px] bg-white items-center justify-evenly text-[#4f4f4f] 
        rounded-md border ${isActive ? 'border-l-8 border-primary' : ''}`}>
        {icon}
        <p className="font-bold text-xl">{title}</p>
    </div>
  )
}

export default ItemWhyChoose