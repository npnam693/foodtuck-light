import { RightOutlined } from '@ant-design/icons'
import { Breadcrumb } from 'antd'
import bgImage from '../../public/images/bg-test.png'
import { Link } from 'react-router-dom'

const CoverPage = ({title, currentPage, listPath} : {
    title: string,
    currentPage: string,
    listPath: Array<{title: string, path: string}>
}) => {
  return (
    <div >
        <img src={bgImage} alt='bg-team' loading="lazy" 
            className="w-screen absolute left-0 top-0 -z-10"/>
        <p className="font-bold text-5xl text-white font-san mb-8 text-center pt-28">
          {title}
        </p>
        <Breadcrumb
            items={
                [
                    ...listPath.map((item) => ({title: <Link to={item.path} className='!text-white text-xl'>{item.title}</Link>})),
                    {title: <p className='!text-primary font-medium text-xl'>{currentPage}</p>}
                ]
            }
            separator={<p className='text-white'><RightOutlined className='relative -bottom-1' /></p>}
            className='!justify-center flex !text-white mb-52'
        />
        
    </div>
  )
}

export default CoverPage