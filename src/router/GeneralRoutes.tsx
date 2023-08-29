import { IRoutesProps } from "../types/props"
import Home from "../pages/Home"
import Menu from "../pages/Menu"
import Shop from "../pages/Shop"
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
        path: '/shop',
        element: <DefaultLayout><Shop/></DefaultLayout> ,
        title: "Shop"
    }
]

export default GeneralRoutes