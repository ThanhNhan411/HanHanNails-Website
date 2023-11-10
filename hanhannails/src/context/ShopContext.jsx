import React, {createContext} from "react";
import itemData from "../components/assets/itemData";

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {

    const contextValue = {itemData};

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
};

export default ShopContextProvider;