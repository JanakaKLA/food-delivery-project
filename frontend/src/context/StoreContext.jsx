import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);

export const StoreContextProvider = (props) =>{

    const [carttItems,setCarttItems] = useState({});

    const addToCartt =(itemId)=>{
            if(!carttItems[itemId]) {
                setCarttItems((prev)=>({...prev,[itemId]:1}))
            }
             else {
            setCarttItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
    }

    }

    const removeFromCartt = (itemId)=> {
        setCarttItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }

    const getTotalCarttAmount =() => {
        let totalAmount = 0;
        for(const item in carttItems)
        {
            if (carttItems[item] > 0) {
                let itemInfo = food_list.find((product)=>product._id===item);
                totalAmount += itemInfo.price* carttItems[item];   
            }
 
        }
        return totalAmount;
    }

    const contextValue ={
        food_list,
        carttItems,
        setCarttItems,
        addToCartt,
        removeFromCartt,
        getTotalCarttAmount
    }
    
    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContext;