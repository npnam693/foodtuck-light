import { Button } from "antd"
const HomeIntroduce = () => {
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

          <div className="relative -right-10"> 
            <div className="border-2 border-text w-[620px] h-[620px] absolute rounded-full -z-10 -left-12">
              <img src='./images/dish_2.png' alt='dish_2' className="w-40 absolute -top-10 left-20" />
              <img src='./images/dish_3.png' alt='dish_3' className="w-32 absolute top-[230px] -left-16" />
              <img src="./images/dish_4.png" alt="dish_4" className="w-24 absolute bottom-5 left-14" />           
            </div>
            <img src='./images/dish_1.png' alt='dish_1' />  
            <img src='./images/bg-dish.png' alt="bg-dish" className="absolute -z-10 top-0 -right-40 w-[900px]"/>
          </div>
        </div>
        <div className="self-center flex flex-col items-center absolute bottom-10 animate-bounce">
            <p>Scrolldown</p>
            <div className="w-[1px] h-20 bg-black"></div>
        </div>

    </section>
  )
}

export default HomeIntroduce