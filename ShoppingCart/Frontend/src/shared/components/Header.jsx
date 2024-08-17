import { Route, Routes, Navigate} from 'react-router-dom'
import Login from '../../pages/Login'
import Register from '../../pages/Register'
import Products from '../../pages/Products'
import Cart from '../../pages/Cart'

const Header = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='*' element={<Navigate replace to='/'/>}/>
    </Routes>
    
    </>
  )
}

export default Header