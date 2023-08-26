import { BrowserRouter } from "react-router-dom"
import './index.css'
import RouterList from "./router"

export default function App() {
  return (
    <BrowserRouter>
      <RouterList />
    </BrowserRouter>
  )
}