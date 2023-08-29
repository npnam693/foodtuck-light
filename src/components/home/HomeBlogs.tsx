import React from 'react'
import ItemBlog from './ItemBlog'

const HomeBlogs = () => {
  return (
    <section className='mt-24 flex flex-col items-center'>
      <div className='relative'>
        <p className="inline-block font-bold text-5xl text-text font-sans mb-8
         after:block after:content-limb after:bottom-10 after:right-32 after:absolute
        ">
          Latest news & Blog
        </p>
        <p className="text-[#828282] text-center mb-14">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/>
          Varius sed pharetra dictum neque massa congue
        </p>
      </div>
      
      <div>
        <ItemBlog image='./images/home/blog_1.png' title='Chocolate Truffle Cake With Honey Flavor'
          desc='Lorem ipsum dolor sit amet, consectetur elit. Non mi sed etiam a id at ultricies neque.Tempus,poten diam ac integer id tellus est.'
          date='02 Jan 2022'
          qtyComment={10}
        />

        <ItemBlog image='./images/home/blog_1.png' title='Chocolate Truffle Cake With Honey Flavor'
          desc='Lorem ipsum dolor sit amet, consectetur elit. Non mi sed etiam a id at ultricies neque.Tempus,poten diam ac integer id tellus est.'
          date='02 Jan 2022'
          qtyComment={10}
        />

        <ItemBlog image='./images/home/blog_1.png' title='Chocolate Truffle Cake With Honey Flavor'
          desc='Lorem ipsum dolor sit amet, consectetur elit. Non mi sed etiam a id at ultricies neque.Tempus,poten diam ac integer id tellus est.'
          date='02 Jan 2022'
          qtyComment={10}
        />
      </div>
    </section>
    )
}

export default HomeBlogs