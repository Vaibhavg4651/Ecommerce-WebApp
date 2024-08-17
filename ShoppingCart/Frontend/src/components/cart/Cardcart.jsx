import { useState } from "react"
import PropTypes from "prop-types";

const Cardcart = (props) => {
    const [initquantity, setquantity] = useState(1);
    const price=props.price;
    const [initprice, setprice] = useState(price);
    const update = (val) => {
        if (val === '+' && initquantity < 10) {
            const newQuantity = initquantity + 1;
            setquantity(newQuantity);
            setprice(price * newQuantity);
        } else if (val === '+' && initquantity === 10) {
            alert("Quantity exceeded");
        } else if (val === '-' && initquantity > 1) {
            const newQuantity = initquantity - 1;
            setquantity(newQuantity);
            setprice(price * newQuantity);
        }
    }
    return (
        <>
            <div className="w-full md:w-auto md:h-44 md:flex items-center border-b-2 cursor-context-menu place-content-center pb-4 md:ml-3 md:mr-3" key={props.pid}>
                <div className="md:h-full md:w-[169px] w-full h-[180px] pt-[20px] md:pl-[15px] mr-4 flex justify-center">
                    <img className="md:h-[129px] h-[145px] w-[129px] rounded-md" src={props.image} />
                </div>
                <div className="font-semibold text-2xl  md:w-[26%] text-center text-red-500">
                    <p>{props.name}</p>
                    <p className="text-gray-500 text-lg lg:text-lg">Indian Ethnic</p> 
                </div>
                <span className="font-bold text-xl md:w-[15%] flex mt-3 md:mt-0 ml-9 md:ml-0">
                    <p className="md:hidden mb-3">Price:&nbsp;</p>
                    <p className="text-slate-600 font-semibold md:font-bold md:text-black">₹ {props.price}</p>
                </span>
                <div className="font-semibold text-2xl md:w-[22%] flex bg-white rounded-md ml-9 md:ml-0 h-9">
                    <p className="md:hidden font-bold text-xl mb-10">Quantity:&nbsp;&nbsp;</p>
                    <p className="w-9  text-center border-2 border-gray-300 rounded-l-md " onClick={() => update('-')}>-</p>
                    <p className="w-9  text-center text-lg pt-1 border-t-2 border-b-2 border-gray-300">{initquantity}</p>
                    <p className="w-9 text-center border-2 border-gray-300 rounded-r-md" onClick={() => update('+')}>+</p>
                </div>
                <div className="font-bold text-xl md:w-[15%] flex mt-3 md:mt-0 ml-9 md:ml-0">
                    <p className="md:hidden ">SubPrice:&nbsp;</p>
                    <p className="text-slate-600 font-semibold md:font-bold md:text-black">₹ {initprice}</p>
                </div>
            </div>
        </>
    )
}
Cardcart.propTypes={
    pid: PropTypes.string,
    image:PropTypes.string,
    name:PropTypes.string,
    price:PropTypes.string
}

export default Cardcart