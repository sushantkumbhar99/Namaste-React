 
import { useDispatch } from "react-redux";
import { RESTRO_IMG_URL } from "../utils/constant";
import { additem } from "../utils/cartSlice";

const ItemsList =({items,dummy})=>{

     const dispatch = useDispatch()
   const handleAddItem = (item) => {
         dispatch(additem(item))
     
   }

    return(
        <div  >
           {items.map((item)=>(
            <div key={item.card.info.id} className="p-3   text-left border-b-2 cursor-pointer  border-gray-200 flex justify-between " >
                <div className="w-9/12">
                   <div className="text-md font-medium py-1 text-slate-900" >
                       <span>{item.card.info.name}</span>
                       <div >₹ {item.card.info.price ? item.card.info.price/100 : item.card.info.defaultPrice/100}</div>
                    </div>
                       <p className="text-gray-500 font-sans text-xs pt-3 pb-8">{item.card.info.description}</p>
                </div>
                <div className="w-3/12    p-6 relative" >
                   
                   {/* Render the image if it's present */}
                       {item.card.info.imageId && (
                          <img src={RESTRO_IMG_URL + item.card.info.imageId} className="w-full rounded-md h-28" />
                       )}

                    {/* Always render the "Add" button */}
                        <div className="absolute bottom-2 left-0 right-0 flex justify-center ">
                           <button onClick={() => handleAddItem(item)} className="px-4 py-2 rounded-lg cursor-pointer  text-green-800   bg-emerald-50  font-custom hover:shadow-lg">Add +</button>
                       </div>
                 </div>
            </div>
           ))}
        </div>
    )
}

export default ItemsList;