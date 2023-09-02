import { IRoutesProps } from "../types/props"

import Home from "../pages/Home"
import Menu from "../pages/Menu"
import Shop from "../pages/Shop"
import DetailProduct from "../pages/DetailProduct"
import ShoppingCart from "../pages/Cart"
import Blog from "../pages/Blog"
import DetailBlog from "../pages/DetailBlog"
import AboutUs from "../pages/AboutUs"
import OurChef from "../pages/ourChef"
import Checkout from "../pages/checkout"
import FAQ from "../pages/faq"
import LogIn from "../pages/logIn"
import SignUp from "../pages/signUp"
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
        element: <AboutUs /> ,
        title: 'About',
    },
    {
        path: '/shop',
        element: <Shop/> ,
        title: "Shop"
    },
    {
        path: '/team',
        element: <OurChef />,
        title: 'Team'
    },
    {
        path: '/login',
        element: <LogIn />,
        title: 'Login'
    },
    {
        path: '/signup',
        element: <SignUp />,
        title: 'SignUp'
    },
    {
        path: '/faq',
        element: <FAQ />,
        title: 'FAQ'
    },
    {
        path: 'cart',
        element: <ShoppingCart />,
        title: "Shopping Cart"
    },
    {
        path: '/cart/checkout',
        element: <Checkout />,
        title: 'Chef'
    },

    {
        path: '/detail-product/:id',
        element: <DetailProduct />,
        title: 'Detail Product'
    },
    {
        path: 'blog/:id',
        element: <DetailBlog />,
        title: "Detail Blog"
    },
]

export default GeneralRoutes