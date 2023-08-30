import CoverPage from '../../components/CoverPage'
import BlogList from './components/BlogList'
import BlogSidebar from './components/BlogSidebar'
const Blog = () => {  
  return (
    <div>
      <CoverPage currentPage='Blog' title='Blog List' listPath={[{title: 'Home', path:'/'}]}/>

      <div className='flex justify-between gap-10'>
        
        <section className='w-8/12 flex flex-col gap-y-14 grow-0'>
          <BlogList />
        </section>

        <aside className='w-4/12 grow-0'>
          <BlogSidebar />
        </aside>
      </div>
    </div>
  )
}

export default Blog