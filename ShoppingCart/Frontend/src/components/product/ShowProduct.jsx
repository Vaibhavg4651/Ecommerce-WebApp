import ProductsDetails from "../../api/ProductsDetails"
import Productcart from "./Productcart"

const ShowProduct = () => {
  return (
    <>
        <div className="grid gap-4 pt-10 p-4 w-full place-items-center " style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
            {ProductsDetails.map((items,key)=>{
                return <Productcart key={key} {...items}/>
            })}
        </div>
    </>
  )
}

export default ShowProduct