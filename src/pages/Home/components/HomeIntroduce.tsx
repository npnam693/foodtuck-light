import { Button } from "antd"
import React from "react"
import '../../animation.css'
const demoDish = ['/images/home/dish_1.png', '/images/home/dish_2.png', '/images/home/dish_3.png', '/images/home/dish_4.png']



const cssProps = [
  {
    angle: 0,
    top: -300,
    right: -80,
    width: 650,
    height: 650
  },
  {
    angle: 140,
    top: -32,
    right: -32,
    width: 16*4,
    height: 16*4
  },
  {
    angle: 180,
    top: -48,
    right: -48,
    width: 24*4,
    height: 24*4
  },
  {
    angle: 220,
    top: -64,
    right: -64,
    width: 32*4,
    height: 32*4
  },
]

const HomeIntroduce = () => {
  // index: image static, value: image position 
  const [itemsPosition, setItemsPosition] = React.useState<Array<number>>([0,1,2,3])

  // index: image static, value: image angle
  const [itemsAngle, setItemsAngle] = React.useState<Array<number>>([0,140,180,220])

  const handleClickDish = (index: number) => {
    if (itemsPosition[index] === 0) return;
    let next : Array<number> = [], angles : number[] = [];
    
    if (index === 3) next = [1,2,3,0]
    if (index === 2) next = [2,3,0,1]
    if (index === 1) next = [3,0,1,2]
    if (index === 0) next = [0,1,2,3]

    angles = next.map((item, index) => 
      itemsAngle[index] > itemsAngle[itemsPosition.indexOf(item)] ? 
        itemsAngle[itemsPosition.indexOf(item)] + 360 : itemsAngle[itemsPosition.indexOf(item)]
    )

    setItemsAngle(angles)
    setItemsPosition(next)
  }

  return (
    <section className="h-[calc(100vh-42px)] flex flex-col justify-center">
      <div className="flex items-center justify-between pb-24">
        <div className="w-[525px]">
            <span className="relative font-attractive mb-2 text-lg text-primary
              after:block after:w-7 after:h-[1px] after:bg-primary 
              after:-right-14 after:bottom-2 after:absolute">
              Healthy & Testy Food
            </span>
            
            <p className="font-bold text-6xl text-text font-sans mb-8
              after:inline-block after:content-star after:relative after:-bottom-8">
              Enjoy Healthy Life & Testy Food.
            </p>
            
            <p className="text-base text-content mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/>
            Varius sed pharetra dictum neque massa congue </p>
            
            <Button type="primary" className="bg-primary font-bold mr-4 h-14 w-52 text-lg">Show more</Button>
            <Button type="default" className="border-primary  text-primary font-bold h-14 w-56 text-lg">Place an order</Button>
        </div>
        <div className="relative w-[600px] h-[600px] border-2 border-text rounded-full z-0 mr-24">
          <img src='/images/background/bg-dish.png' alt="bg-dish" className="absolute -bottom-40 -right-64 w-[800px] rotate -z-10"/>
          <div>
            <div className={`absolute top-[calc(50%-2px)] left-0 w-full h-1 transition-all ease-in-out duration-[1s] ${itemsPosition[0] === 0 && 'z-[-5]'}`}
              style={{transform: `rotate(${itemsAngle[0]}deg)`}}
            > 
              <img src={demoDish[0]} alt="dish0" className={`absolute bg-cover cursor-pointer transition-all ease-in-out duration-[1s] ${itemsPosition[0] === 0 && 'cursor-default'} `}
                style={{top: cssProps[itemsPosition[0]].top, right: cssProps[itemsPosition[0]].right, width: cssProps[itemsPosition[0]].width, height: cssProps[itemsPosition[0]].height}}
                onClick={() => handleClickDish(0)}
              />
            </div>

            <div className={`absolute top-[calc(50%-2px)] left-0 w-full h-1 transition-all ease-in-out duration-[1s] ${itemsPosition[1] === 0 && 'z-[-5]'} `}
              style={{transform: `rotate(${itemsAngle[1]}deg)`}}
            > 
              <img src={demoDish[1]} alt="dish0" className={`absolute bg-cover cursor-pointer transition-all ease-in-out duration-[1s] ${itemsPosition[1] === 0 && 'cursor-default'} `}
                style={{top: cssProps[itemsPosition[1]].top, right: cssProps[itemsPosition[1]].right, width: cssProps[itemsPosition[1]].width, height: cssProps[itemsPosition[1]].height}}
                onClick={() => handleClickDish(1)}
              />
            </div>

            <div className={`absolute top-[calc(50%-2px)] left-0 w-full h-1 transition-all ease-in-out duration-[1s] ${itemsPosition[2] === 0 && 'z-[-5]'} `}
              style={{transform: `rotate(${itemsAngle[2]}deg)`}}
            > 
              <img src={demoDish[2]} alt="dish0" className={`absolute bg-cover cursor-pointer transition-all ease-in-out duration-[1s] ${itemsPosition[2] === 0 && 'cursor-default'} `}
                style={{top: cssProps[itemsPosition[2]].top, right: cssProps[itemsPosition[2]].right, width: cssProps[itemsPosition[2]].width, height: cssProps[itemsPosition[2]].height}}
                onClick={() => handleClickDish(2)}
              />
            </div>

            <div className={`absolute top-[calc(50%-2px)] left-0 w-full h-1 transition-all ease-in-out duration-[1s] ${itemsPosition[3] === 0 && 'z-[-5]'}`}
              style={{transform: `rotate(${itemsAngle[3]}deg)`}}
           
           > 
              <img src={demoDish[3]} alt="dish0" className={`absolute bg-cover cursor-pointer transition-all ease-in-out duration-[1s] ${itemsPosition[3] === 0 && 'cursor-default'} `}
                style={{top: cssProps[itemsPosition[3]].top, right: cssProps[itemsPosition[3]].right, width: cssProps[itemsPosition[3]].width, height: cssProps[itemsPosition[3]].height}}
                onClick={() => handleClickDish(3)}
             />
            </div>
          </div>
      </div>
    </div>



    <div className="self-center flex flex-col items-center absolute bottom-10 motion-safe:animate-bounce cursor-pointer"
      onClick={() => window.scrollTo({top: window.innerHeight, behavior: 'smooth'})}         
    >
        <p>Scrolldown</p>
        <div className="w-[1px] h-20 bg-black"></div>
    </div>

    </section>
  )
}

export default HomeIntroduce