import { Route, Routes } from "react-router-dom";
import GeneralRoutes from "./GeneralRoutes";

const RouterList = () => {
  return (
    <Routes>
      {
        GeneralRoutes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))
      }
      <Route path="*" element={<div />} />
    </Routes>
  )
}

export default RouterList