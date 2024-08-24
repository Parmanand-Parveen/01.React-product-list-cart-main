import "./App.css";
import Product_page from "./components/Product_page";
import Cart from "./components/Cart";
import { useSelector } from "react-redux";
import Emptycart from "./components/Emptycart";

function App() {
  const listCart = useSelector(state=>state.items)
  console.log(listCart.length)
  return (
    <>
      <div className="flex flex-col lg:flex-row bg-rose-100">
        <div className="lg:flex relative flex-wrap flex-col lg:flex-row max-w-5xl  h-full  lg:ml-14 mt-2 p-14 justify-around ">
          <h1 className="absolute top-0 left-[7%] font-bold text-2xl">
            DESSERTS
          </h1>
          {<Product_page/>}
        </div>
        <div className="h-full rounded-lg w-[300px] mx-auto mb-3 lg:mt-5 p-3 flex flex-col gap-2 bg-white">
         <p className="text-lg text-orange-500 font-bold ">Your Cart <span>({listCart.length})</span></p> 
         <div className="w-full">
         {listCart.length > 0 ? <Cart/> :  <Emptycart/>}
         
         </div>
        </div>
      </div>
      
     
    </>
  );
}

export default App;
