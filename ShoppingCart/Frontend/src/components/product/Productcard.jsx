import PropTypes from "prop-types";
import Cookies from 'js-cookie';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {useSelector} from "react-redux";


const Productcard = (props) => {
    const id = useSelector((state) => state.user.userid);
    const navigate = useNavigate();
    const addtocart = async () => {
        const token = Cookies.get('token');
        if (token) {
            console.log('Token:', token);
        }
        else {
            console.log('No token found');
            navigate('/');
        }
        
        const CartInfo = {
            'productId': props._id,
            'quantity':1,
            'userId': id,
        }
        console.log(CartInfo);
        try {
            const response = await axios.post("http://localhost:8080/api/v1/cart", CartInfo, {
                withCredentials: true,
                headers: {
                    Cookie:`token=${token}`
                }
            });
            console.log(response.data);

        }
        catch (err) {
            // setMessage("Unable to add in the Cart");
            console.log('Error is ', err);
        }
    }

return (
    <>
        <div className="fixed-box rounded-lg transform hover:scale-105 transition duration-300 ease-in-out hover:shadow-lg" key={props._id}>
            <img className='h-[300px] w-full rounded-lg' src={props.image} />
            <div className="font-semibold text-lg p-2 w-full">
                <p>{props.name}</p>
                <p className="font-bold">Under ₹ {props.price}</p>
                <button onClick={addtocart} className="h-9 w-full font-normal mt-2 border-red-500 text-red-500 rounded-md border hover:bg-red-500 hover:text-white text-center" >
                    Add to Cart</button>
            </div>
        </div>
    </>
);
}
Productcard.propTypes = {
    _id: PropTypes.string,
    image: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.string
}
export default Productcard;





