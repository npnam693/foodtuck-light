import { IRoutesProps } from "../types/props"
import Home from "../pages/Home"
import Menu from "../pages/Menu"
import Shop from "../pages/Shop"
import DetailProduct from "../pages/DetailProduct"
import DefaultLayout from "../layout"

const GeneralRoutes : Array<IRoutesProps> = [
    {
        path: '/',  
        element: <DefaultLayout><Home /></DefaultLayout>,
        title: 'Home',
    },
    {
        path: '/menu',
        element: <DefaultLayout><Menu /></DefaultLayout> ,
        title: 'Menu',
    },
    {
        path: '/blog',
        element: <DefaultLayout><div>Blog</div></DefaultLayout> ,
        title: 'Blog',
    },
    {
        path: '/about',
        element: <DefaultLayout><div>About</div></DefaultLayout> ,
        title: 'About',
    },
    {
        path: '/shop',
        element: <DefaultLayout><Shop/></DefaultLayout> ,
        title: "Shop"
    },

    {
        path: '/detail-product/:id',
        element: <DefaultLayout><DetailProduct /></DefaultLayout>,
        title: 'Detail Product'
    }
]

export default GeneralRoutes