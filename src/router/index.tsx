import { Route, Routes } from "react-router-dom";
import GeneralRoutes from "./GeneralRoutes";
import DefaultLayout from "../layout";

const RouterList = () => {
  return (
    <Routes>
      {
        GeneralRoutes.map((route, index) => (
          <Route key={index} path={route.path} element={
            <DefaultLayout>
              {
                route.element
              }
            </DefaultLayout>
          } />
        ))
      }
      <Route path="*" element={<div />} />
    </Routes>
  )
}

export default RouterList