import CoverPage from "../components/CoverPage"
import { useState, useEffect } from "react"
import ItemFood, { dataFoods } from "../components/shop/ItemFood"
import { useParams } from "react-router-dom"
import { Button, Divider, InputNumber, Rate, Segmented } from "antd"
import { ArrowLeftOutlined, ArrowRightOutlined, FacebookFilled, 
        HeartOutlined, InstagramFilled, InteractionOutlined, 
        ShoppingCartOutlined, TwitterOutlined, YoutubeFilled } from "@ant-design/icons"
import { valueType } from "antd/es/statistic/utils"

const DetailProduct = () => {
    const { id } = useParams()
    const [product, setProduct] = useState(dataFoods[String(id)])
    const [qty, setQty] = useState<valueType | null>(1)

    
    useEffect(() => {
    }, [])

    return (
        <article>
            <CoverPage title="Shop Detail" currentPage={product.name} listPath={[
                {title: 'Home',path: '/'},{title: 'Shop',path: '/shop'}]}
            />

            <section className="flex flex-row justify-between">
                <div className="grid grid-cols-4 grid-rows-4 gap-6 basis-[45%] ">
                    <img src={product.images[1]} alt="" className="width: h-full bg-cover w-full"/>
                    <img src={product.images[0]} alt="" className="row-span-4 col-span-3 h-full bg-cover w-full w-auto"/>
                    <img src={product.images[2]} alt="" className="width: h-full bg-cover w-full"/>
                    <img src={product.images[3]} alt="" className="width: h-full bg-cover w-full"/>
                    <img src={product.images[4]} alt="" className="width: h-full bg-cover w-full"/>
                </div>


                <div className="basis-[50%] grow-0">
                    <div className="flex items-center justify-between">
                        {
                            product.qtyRemain > 0 ? 
                            <div className="bg-primary text-white px-6 mb-2 rounded-md py-2 inline-block">In stock</div> : 
                            <div className="bg-disabledGreen text-white px-6 mb-2 rounded-md py-2 inline-block">Out of stock</div>
                        }
                        <div className="flex gap-5">
                            <p className="text-[#828282]"><ArrowLeftOutlined /> Prev</p>
                            <p className="text-[#828282]">Next <ArrowRightOutlined /></p>                        
                        </div>    
                    </div>

                    <p className="font-bold text-5xl text-[#333] pb-6">{product.name}</p>

                    <p className="text-lg text-[#4f4f4f]">{product.quickIntro}</p>

                    <Divider />
                
                    <p className="font-bold text-[32px] text-[#333]">{product.salePrice}.00$</p>

                    <div className="flex items-center gap-3">
                        <Rate defaultValue={product.rate} className="text-primary"/>
                        <Divider type="vertical"  className="h-5"/>
                        <p>{product.rate} Rating</p>
                        <Divider type="vertical" className="h-5"/>
                        <p>{product.qtyReview} Reviews </p>
                    </div>

                    <p className="mt-5 text-[#333] text-lg">Dictum/cursus/Risus</p>

                    <div className="mt-6">
                        <InputNumber 
                            addonBefore={
                                <div className=" w-[50px] h-[50px] flex items-center justify-center" 
                                    onClick={() => Number(qty) > 1 && setQty((prv) => Number(prv) - 1)}>
                                -
                                </div>
                            } 
                            addonAfter={
                                <div className=" w-[50px] h-[50px] flex items-center justify-center" 
                                    onClick={() => setQty((prv) => Number(prv) + 1)}>
                                +
                                </div>
                            } 
                            min={1}
                            onChange={(value) => setQty(value)}
                            value={qty}
                            controls={false}
                            className="overide-input--qty-detail mr-4" 
                        />
                        <Button icon={<ShoppingCartOutlined/>} type="primary" className="bg-primary rounded-none h-[50px]">Add to cart</Button>
                    </div>

                    <Divider />

                    <div className="flex gap-5 mb-2 text-[#4f4f4f] text-lg">
                        <p className="flex items-center gap-x-2"><HeartOutlined /> Add to wishlist</p>
                        <p className="flex items-center gap-x-2"><InteractionOutlined /> Compare</p>
                    </div>
                    <p className="mb-2 text-lg">Catagory: <span className="text-[#4f4f4f]">Pizza</span></p>
                    <p className="mb-6 text-lg">Tag: <span className="text-[#4f4f4f]">Our Shop</span></p>
                    <p className="text-lg text-[#333] flex items-center">Share: 
                        <span className="text-white gap-3 flex ml-3">
                            <YoutubeFilled className="bg-black p-[6px] rounded-full"/> 
                            <FacebookFilled className="bg-black p-[6px] rounded-full"/> 
                            <TwitterOutlined className="bg-black p-[6px] rounded-full"/> 
                            <InstagramFilled className="bg-black p-[6px] rounded-full"/> 
                        </span>
                    </p>
                    <Divider />
                </div>
            </section>

            <section className="pt-14">
                <Segmented options={['Description', `Review (${product.qtyReview})`]} 
                    className="overide-segmented--detail bg-white mb-8 h-[50px]"/>
                {
                    product.desc.map((item, index : number) => { return (
                        <p className="mb-3">{item}</p>
                    )})
                }
            </section>
            
            <section className="mt-24">
                <p className="font-bold text-3xl mb-8">Similar Product</p>

                <div className="flex justify-between mb-32">
                    <ItemFood id={'1'} />
                    <ItemFood id={'1'} />
                    <ItemFood id={'1'} />
                    <ItemFood id={'1'} />
                </div>
            </section>
        </article>
    )
}

export default DetailProduct