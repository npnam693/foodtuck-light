import { ArrowRightOutlined, CalendarOutlined, CommentOutlined } from '@ant-design/icons'

const ItemBlog = ({image, title, desc, date, qtyComment} : {
    image: string,
    title: string,
    desc: string,
    date: string,
    qtyComment: number,
}) => {
  return (
    <div>
        <img src={image} alt={title} className='mb-4'/>
        <div className='flex'>
            <p><CalendarOutlined /> {date}</p>
            <p><CommentOutlined /> {qtyComment}</p>
        </div>      
        <p className='font-bold text-xl text-[#333]'>{title}</p>
        <p className='text-[#4f4f4f]'>{desc}</p>

        <p>Read more <ArrowRightOutlined /></p>
    </div>
  )
}

export default ItemBlog