import CoverPage from '../components/CoverPage'
import { Select } from 'antd';
import ItemFood from '../components/shop/ItemFood';
import ShopSideBar from '../components/shop/ShopSideBar';
import ShopPagination from '../components/shop/ShopPagination';
const Shop = () => {
  return (
    <article className='min-h-screen'>
        <CoverPage title='Shop' currentPage='Shop' listPath={[{title: "Home", path: '/'}]} />

        <section className='flex gap-x-8 items-center pt-10 mb-6'>
            <div className='flex items-center gap-x-2'>
                <p>Sort By</p>
                <Select
                defaultValue="lucy"
                style={{ width: 120 }}
                options={[
                    { value: 'jack', label: 'Jack' },
                    { value: 'lucy', label: 'Lucy' },
                    { value: 'Yiminghe', label: 'yiminghe' },
                    { value: 'disabled', label: 'Disabled', disabled: true },
                ]}
                />
            </div>

            <div className='flex items-center gap-x-2'>
                <p>Show</p>
                <Select
                defaultValue="lucy"
                style={{ width: 120 }}
                options={[
                    { value: 'jack', label: 'Jack' },
                    { value: 'lucy', label: 'Lucy' },
                    { value: 'Yiminghe', label: 'yiminghe' },
                    { value: 'disabled', label: 'Disabled', disabled: true },
                ]}
                />
            </div>
        </section>

        <section className='flex'>
            <div className='flex flex-col items-center'>
                <div className='flex flex-wrap gap-6'>
                    <ItemFood id="1"/>
                    <ItemFood id="1"/>
                    <ItemFood id="1"/>
                    <ItemFood id="1"/>
                    <ItemFood id="1"/>
                    <ItemFood id="1"/>
                    <ItemFood id="1"/>
                    <ItemFood id="1"/>
                    <ItemFood id="1"/>
                    <ItemFood id="1"/>
                    <ItemFood id="1"/>
                    <ItemFood id="1"/>
                    <ItemFood id="1"/>
                    <ItemFood id="1"/>
                    <ItemFood id="1"/>
                </div>
                <ShopPagination qtyPage={5} currentPage={1}/>
            </div>

            <div className='min-w-[312px] h-5 bg-65'>
                <ShopSideBar />
            </div>
        </section>
        

    </article>
  )
}

export default Shop