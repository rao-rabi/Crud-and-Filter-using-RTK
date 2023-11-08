import Form from './Components/Form/Form'
import Navbar from './Components/Navbar/Navbar'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Posts from './Components/Posts/Posts'
import UpdatePost from './Components/Update/UpdatePost'
import { ToastContainer } from 'react-toastify'
function App() {

  return (
   <div>
   <BrowserRouter>
   <Navbar />
   <Routes>
    <Route exact path='/' element={<Form />}/>
    <Route exact path='/read' element={<Posts />}/>
    <Route exact path='/update/:id' element={<UpdatePost />}/>
   </Routes>
   </BrowserRouter>
   <ToastContainer />
   </div>
  )
}

export default App
