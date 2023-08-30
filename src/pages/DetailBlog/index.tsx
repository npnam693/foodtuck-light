import React from 'react'
import CoverPage from '../../components/CoverPage'
import BlogSidebar from '../Blog/components/BlogSidebar'
import { useParams } from 'react-router-dom'
import { dataBlogs } from '../../data'
import ItemBlog from '../../components/blog/ItemBlog'
import { FacebookFilled, InstagramFilled, TwitterOutlined, YoutubeFilled } from '@ant-design/icons'

const DetailBlog = () => {
    const {id} = useParams()
    const dataBlog = dataBlogs[0]
    return (
    <article>
        <CoverPage currentPage='Blog' title='Blog List' listPath={[{title: 'Home', path:'/'}]}/>

        <div className='flex justify-between gap-10'>
            <section className='w-8/12 flex flex-col gap-y-14 grow-0 text-[#4f4f4f] text-base'>
                <ItemBlog image={dataBlog.image} title={dataBlog.title} desc={dataBlog.desc} 
                    date={dataBlog.date} qtyComments={dataBlog.qtyComments}  creator={dataBlog.creator}
                />
                
                <div className='bg-primary text-white pl-20 pr-5 py-6 relative'>
                    <p className='font-bold text-2xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                    quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>

                    <img src='/textures/quotes-white.svg' alt='quotes' className='absolute top-5 left-4'/>
                </div>

                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt 
                ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores 
                et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem 
                ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et 
                dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>

                <div className='flex'>
                    <div>
                        <p>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut 
                        labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
                        et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem 
                        ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et 
                        dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                        </p>
                        <p className='mt-4'>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore 
                        et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. 
                        Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit 
                        amet, consetetur sadipscing
                        </p>
                    </div>
                    
                    <img src={'/images/home/dish_1.png'} className='w-[600px]'/>
                </div>

                <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut 
                labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
                et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem 
                ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et 
                dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                </p>
                <p className='mt-4'>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore 
                et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. 
                Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit 
                amet, consetetur sadipscing
                </p>

                <div className='flex border border-1 p-4 justify-between'>
                    <p className='text-[#828282] '>
                        <span className='font-bold text-base text-[#333333]'>Tags: </span>
                        Restaurant, Dinner, Pizza, Yummy,
                    </p>
                    <div className='flex items-center gap-x-4 text-[#333] font-bold'>
                        Share: 
                        <p className='flex gap-x-3 text-[#4f4f4f]'>
                            <FacebookFilled/> 
                            <YoutubeFilled/> 
                            <TwitterOutlined/> 
                            <InstagramFilled/> 
                        </p>
                    </div>
                </div>

                <div>
                    <p className='font-bold text-3xl text-[#333]'>Comments - 03</p>

                </div>
            </section>

            <aside className='w-4/12 grow-0'>
                <BlogSidebar />
            </aside>
        </div>

    </article>
  )
}

export default DetailBlog