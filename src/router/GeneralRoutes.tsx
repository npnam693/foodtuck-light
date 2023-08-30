import { IRoutesProps } from "../types/props"

import Home from "../pages/Home"
import Menu from "../pages/Menu"
import Shop from "../pages/Shop"
import DetailProduct from "../pages/DetailProduct"
import ShoppingCart from "../pages/Cart"
import Blog from "../pages/Blog"
import DetailBlog from "../pages/DetailBlog"

const GeneralRoutes : Array<IRoutesProps> = [
    {
        path: '/',  
        element: <Home />,
        title: 'Home',
    },
    {
        path: '/menu',
        element: <Menu /> ,
        title: 'Menu',
    },
    {
        path: '/blog',
        element: <Blog />,
        title: 'Blog',
    },
    {
        path: '/about',
        element: <div>About</div> ,
        title: 'About',
    },
    {
        path: '/shop',
        element: <Shop/> ,
        title: "Shop"
    },
    {
        path: '/detail-product/:id',
        element: <DetailProduct />,
        title: 'Detail Product'
    },
    {
        path: 'shopping-cart',
        element: <ShoppingCart />,
        title: "Shopping Cart"
    },
    {
        path: 'blog/:id',
        element: <DetailBlog />,
        title: "Detail Blog"
    }
]

export default GeneralRoutes