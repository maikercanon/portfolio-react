import { Navigate, Route, Routes } from "react-router-dom"
import About from "./pages/About"
import Education from "./pages/Education"
import Experience from "./pages/Experience"
import Home from "./pages/Home"
export const App = () => {
  
  return(
    <Routes>
      <Route path="/home" element={<Home/>}/>
      <Route path="/education" element={<Education/>}/>
      <Route path="/experience" element={<Experience/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/" element={<Home/>} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )

  
     
}