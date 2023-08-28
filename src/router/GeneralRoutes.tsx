import { IRoutesProps } from "../types/props"
import Home from "../pages/Home"

const GeneralRoutes : Array<IRoutesProps> = [
    {
        path: '/',  
        element: Home,
        title: 'Home',
    },
    {
        path: '/menu',
        element: Home,
        title: 'Menu',
    }
]

export default GeneralRoutes