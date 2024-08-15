import PropTypes from "prop-types";

const Productcart = (props) => {
    return (
        <>
            <div className="fixed-box rounded-lg transform hover:scale-105 transition duration-300 ease-in-out hover:shadow-lg" key={props.pid}>
                <img className='h-[300px] w-full rounded-lg' src={props.img} />
                <div className="font-semibold text-lg p-2 w-full">
                    <p>{props.name}</p>
                    <p className="font-bold">Under ₹ {props.Price}</p>
                    <button className="h-9 w-full font-normal mt-2 border-red-500 text-red-500 rounded-md border hover:bg-red-500 hover:text-white text-center" >
                        Add to Cart</button>
                </div>
            </div>
        </>
    );
}
Productcart.propTypes={
    pid: PropTypes.string,
    img:PropTypes.string,
    name:PropTypes.string,
    Price:PropTypes.string
}
export default Productcart;





