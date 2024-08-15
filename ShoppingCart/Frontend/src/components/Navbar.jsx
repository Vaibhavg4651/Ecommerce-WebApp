import cart from "../assets/cart.png"
const Navbar = () => {
  return (
    <div className="h-12 flex justify-between items-center sticky pl-12 pr-12 border-b-2 ">
        <div>
            <p className="font-bold text-2xl text-red-500">SHOPIFY</p>
        </div>
        <div className="h-full w-12 relative flex items-center">
            <img className='h-6 w-6' src={cart}/>
            <div className="absolute bg-red-500 rounded-full text-[60%] p-2 h-4 w-4 text-white font-bold top-1 right-4 flex items-center justify-center">1</div>
        </div>
    </div>
  )
}

export default Navbar