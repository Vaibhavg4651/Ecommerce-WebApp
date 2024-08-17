const SummaryCart = () => {
  return (
    <>
    <div className="w-[96%] lg:mr-5 shadow-2xl p-4 m-[2%] border-2 border-gray-100 mt-8">
        <p className="text-3xl font-semibold text-red-500 border-b-2 mb-5">CART TOTALS</p>
        <div className="flex text-xl justify-between mb-6">
        <p className="">Subtotal</p>
        <p>₹ 600</p>
        </div>
        <div className="h-8 w-full font-semibold flex justify-between ">
            <input className="h-full w-[50%] mr-9 outline-none border-b-2" type="text" placeholder="COUPON CODE"></input>
            <button className="p-1 w-20 text-red-500 border-red-500 border-2 hover:bg-red-500 rounded-3xl hover:text-white">APPLY</button>
        </div>
        <div className="flex text-xl justify-between mb-6 mt-6">
        <p className="">Total</p>
        <p>₹ 600</p>
        </div>
        <button className="w-full bg-green-500 hover:bg-green-600 h-8 rounded-2xl text-white font-semibold">CHECKOUT</button>
    </div>
    </>
  )
}

export default SummaryCart