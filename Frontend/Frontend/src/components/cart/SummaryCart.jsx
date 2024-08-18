import { useRef, useState ,useEffect } from "react";
import {useSelector} from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const SummaryCart = () => {
  const subprice = useSelector((state) => state.cart.price);
  // console.log(subprice);
  const id = useSelector((state) => state.user.userid);
  // console.log(id);
  const totalsubprice = subprice.filter(item => item.userId === id).reduce((acc, item) => acc + item.subprice, 0);
  // console.log(totalsubprice);
  const [initprice, setprice]=useState(totalsubprice);
  const [CouponNotUsed,CouponUsed]=useState(false);
  const Code= useRef();
  // console.log(Code.current.value);
  useEffect(() => {
    setprice(totalsubprice);
  }, [totalsubprice]);

  const applyCoupon=(val)=>{
    if(!CouponNotUsed && val==='SUMMER24'){
      setprice(totalsubprice-(0.25*totalsubprice));
      CouponUsed(true);
    }
    else{
      toast.error("Password or Email Incorrect", {
        position: "bottom-center",
      });
    }
  }
  return (
    <>
    <div className="w-[96%] lg:mr-5 shadow-2xl p-4 m-[2%] border-2 border-gray-100 mt-8">
        <p className="text-3xl font-semibold text-red-500 border-b-2 mb-5">CART TOTALS</p>
        <div className="flex text-xl justify-between mb-6">
        <p className="">Subtotal</p>
        <p>₹ {parseFloat(totalsubprice.toFixed(2))}</p>
        </div>
        <div className="h-8 w-full font-semibold flex justify-between ">
            <input className="h-full w-[50%] mr-9 outline-none border-b-2" type="text" placeholder="COUPON CODE" ref={Code}></input>
            <button className="p-1 w-20 text-red-500 border-red-500 border-2 hover:bg-red-500 rounded-3xl hover:text-white" onClick={()=>{applyCoupon(Code.current.value)}}>APPLY</button>
        </div>
        <div className="flex text-xl justify-between mb-6 mt-6">
        <p className="">Total</p>
        <p>₹ {parseFloat(initprice.toFixed(2))}</p>
        </div>
        <button className="w-full bg-green-500 hover:bg-green-600 h-8 rounded-2xl text-white font-semibold">CHECKOUT</button>
    </div>
    <ToastContainer/>
    </>
  )
}

export default SummaryCart