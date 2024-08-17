import { NavLink } from "react-router-dom"
import cart from "../../assets/cart.png"
const Navbar = () => {
  return (
    <div className="h-16 w-full flex justify-between items-center fixed z-10 pl-12 pr-12 border-b-2 bg-white ">
        <div>
            <p className="font-bold text-2xl text-red-500">SHOPIFY</p>
        </div>
        <NavLink to='/cart'>
        <div className="h-16 w-12 relative flex items-center">
            <img className='h-6 w-6' src={cart}/>
            <div className="absolute bg-red-500 rounded-full text-[60%] p-2 h-4 w-4 text-white font-bold top-3 right-4 flex items-center justify-center">1</div>
        </div>
        </NavLink>
    </div>
  )
}

export default Navbar