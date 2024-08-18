import { NavLink } from "react-router-dom"
import cart from "../../assets/cart.png"
import { useSelector } from "react-redux";
import { logout } from "../../Reducers/UserSlice";
import { clearCart } from "../../Reducers/CartSlice";
import { useDispatch } from "react-redux";
import Cookies from 'js-cookie';
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Navbar = () => {
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const token = Cookies.get('token');
  const subprice = useSelector((state) => state.cart.price);
  
  const id = useSelector((state) => state.user.userid);
  
  const matchingItems = subprice.filter(item =>{ 
    if(item.userId === id)  return true;     
    else return false;
  });

  const Logout = async () => {
   const log = await axios.get(`http://localhost:8080/api/v1/users/logout`, {
    withCredentials: true,
    headers: {
        Cookie:`token=${token}`
    }
})
   if(log.data.success === true){
     dispatch(logout());
     dispatch(clearCart());
     Cookies.remove('token');
     Navigate("/");
   }
  }
  
  return (
    <div className="h-16 w-full flex justify-between items-center fixed z-10 pl-12 pr-12 border-b-2 bg-white ">
        <div>
            <p className="font-bold text-2xl text-red-500">SHOPIFY</p>
        </div>
        <div className="flex justify-end items-center">
        <NavLink to='/cart'>
        <div className="h-16 w-12 relative flex items-center">
            <img className='h-6 w-6' src={cart}/>
            <div className="absolute bg-red-500 rounded-full text-[60%] p-2 h-4 w-4 text-white font-bold top-3 right-4 flex items-center justify-center">{matchingItems.length}</div>
        </div>
        </NavLink>
        <div>
          <div className="text-red-500 font-semibold hover:cursor-pointer" onClick={Logout}>Logout</div>
        </div>
        </div>
    </div>
  )
}

export default Navbar