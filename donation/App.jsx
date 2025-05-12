import { LandinngPageTwo } from "./LandingPageTwo";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Donate } from "./donate";

export default function App() {
  return (
    <BrowserRouter>


      <Routes>
       
        <Route exact path='/' element={<LandinngPageTwo />} />
        <Route exact path='/Donate' element={<Donate />} />


      </Routes>
  </BrowserRouter>
  )
}