import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import About from './Pages/About'
import Projs from './Pages/Projs'
import Proj from './Pages/Proj'
import Tutela from './Pages/Tutela'
import Home from './Pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>

      <BrowserRouter>



        <Navbar></Navbar>


        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path='/projs' element={<Projs></Projs>}></Route>
          <Route path='/tutela' element={<Tutela></Tutela>}></Route>
          <Route path='/proj/:id' element={<Proj></Proj>}></Route>
        </Routes>


        <Footer></Footer>
      </BrowserRouter>


    </>
  );
}

export default App;
