import { ArrowRightOutlined, CalendarOutlined, CommentOutlined } from '@ant-design/icons'
const ItemBlogHome = ({image, title, desc, date, qtyComment} : {
    image: string,
    title: string,
    desc: string,
    date: string,
    qtyComment: number,
}) => {

    return (
    <div className='shadow-md rounded-md px-6 pb-6'>
        <img src={image} alt={title} loading="lazy" className='mb-6 w-full -mt-5'/>
        <div className='flex gap-x-4 mb-4'>
            <p className='text-[#333]'>
                <CalendarOutlined className='text-primary mr-2 text-xl'/> 
                {date}
            </p>
            <p className='text-[#333] cursor-pointer hover:underline'>
                <CommentOutlined className='text-primary mr-2 text-xl'/> 
                Comments ({qtyComment < 10 ? `0${qtyComment}` : qtyComment})
            </p>
        </div>      
        <p className='font-bold text-xl text-[#333] mb-2'>{title}</p>
        <p className='text-[#4f4f4f] mb-4'>{desc}</p>

        <p className='text-[#4F4F4F] cursor-pointer hover:text-primary'>Read more <ArrowRightOutlined className='ml-2' /></p>
    </div>
  )
}

export default ItemBlogHome