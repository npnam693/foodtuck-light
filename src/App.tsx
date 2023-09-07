import { BrowserRouter } from "react-router-dom"
import './index.css'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import RouterList from "./router"
import { store } from "./state/store";
import { Provider } from 'react-redux'

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
          <RouterList />
      </BrowserRouter>
    </Provider>
  )
}