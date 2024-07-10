/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-undef */

import { BrowserRouter, Route, RouterProvider } from "react-router-dom";




export default function App() {
  return (
    <div>
     <BrowserRouter>
     <Routes>
      <Route path="/home" element={Home}></Route>
     </Routes>
     </BrowserRouter>
    </div>
  )
}
