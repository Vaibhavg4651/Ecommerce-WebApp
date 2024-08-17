// import ProductsDetails from "../../api/ProductsDetails"
// import Cardcart from "./Cardcart"

const ShowCart = () => {
  return (
    <>
    <div className="w-auto h-20 md:flex items-center  border-b-2 cursor-context-menu place-content-center ml-3 mr-3 pb-2 font-bold text-xl hidden">
                <div className=" w-[169px] pl-[30px] ">
                  PRODUCT</div>
                <div className=" md:w-[26%] text-center "> NAME</div>
                <div className="md:w-[15%] ">
                    PRICE</div>
                <div className="md:w-[22%] ">
                    QUANTITY</div>
                <div className="w-[15%] ">
                    SUBPRICE</div>
    </div>
    <div className="lg:h-[100vh] lg:pb-20 lg:overflow-y-scroll " style={{scrollbarWidth:"none"}} >
    {/* {ProductsDetails.map((items,key)=>{
            return<Cardcart key={key} {...items}/>
    })} */}
    </div>
    </>
  )
}

export default ShowCart