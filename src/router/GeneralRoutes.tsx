import { IRoutesProps } from "../types/props"
import Home from "../pages/Home"

const GeneralRoutes : Array<IRoutesProps> = [
    {
        path: '/',  
        element: Home,
        title: 'Home',
    },
    {
        path: '/home',  
        element: Home,
        title: 'Home',
    },
]

export default GeneralRoutes