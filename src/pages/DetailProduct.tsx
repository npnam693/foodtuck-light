import CoverPage from "../components/CoverPage"
import { useState, useEffect } from "react"
import ItemFood, { dataFoods } from "../components/shop/ItemFood"
import { useParams } from "react-router-dom"
import { Button, Divider, InputNumber, Rate, Segmented } from "antd"
import { ArrowLeftOutlined, ArrowRightOutlined, FacebookFilled, 
        HeartOutlined, InstagramFilled, InteractionOutlined, 
        ShoppingCartOutlined, TwitterOutlined, YoutubeFilled } from "@ant-design/icons"

const DetailProduct = () => {
    const { id } = useParams()
    const [product, setProduct] = useState(dataFoods[String(id)])
    
    useEffect(() => {
    }, [])

    return (
        <article>
            <CoverPage title="Shop Detail" currentPage={product.name} listPath={[
                {title: 'Home',path: '/'},{title: 'Shop',path: '/shop'}]}
            />

            <section className="flex flex-row justify-between">
                <div className="grid grid-cols-5 grid-rows-4 gap-6 basis-[900px] grow-0">
                    <img src={product.images[1]} alt="" />
                    <img src={product.images[0]} alt="" className="row-span-4 col-span-4 h-full w-auto"/>
                    <img src={product.images[2]} alt="" />
                    <img src={product.images[3]} alt="" />
                    <img src={product.images[4]} alt="" />
                </div>


                <div className="basis-[700px] grow-0">
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
                
                    <p>{product.salePrice}.00$</p>

                    <div className="flex items-center gap-4">
                        <Rate defaultValue={product.rate}/>
                        <Divider type="vertical"  className="h-5"/>
                        <p>{product.rate} Rating</p>
                        <Divider type="vertical" className="h-5"/>
                        <p>{product.qtyReview} Reviews</p>
                    </div>

                    <p>Dictum/cursus/Risus</p>

                    <div>
                        <InputNumber addonBefore={'+'} addonAfter={'-'} defaultValue={100} />
                        <Button icon={<ShoppingCartOutlined/>} type="primary" className="bg-primary rounded-none">Add to cart</Button>
                    </div>

                    <Divider />

                    <div className="flex gap-5">
                        <p><HeartOutlined /> Add to wishlist</p>
                        <p><InteractionOutlined /> Compare</p>
                    </div>
                    <p>Catagory: <span>Pizza</span></p>
                    <p>Tag: <span>Our Shop</span></p>
                    <p>Share: <YoutubeFilled /> <FacebookFilled /> <TwitterOutlined /> <InstagramFilled /></p>
                    <Divider />
                </div>
            </section>

            <section>
                <Segmented options={['Description', 'Review']} />
                {
                    product.desc.map((item, index) => { return (
                        <p className="index">{item}</p>
                    )})
                }
            </section>
            
            <section>
                <p>Similar Product</p>

                <div className="flex justify-between">
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