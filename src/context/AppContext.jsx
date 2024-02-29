import {createContext} from "react";

export const AppContext = createContext({
    activeSection: 0,
    handleChange: () =>{},

    drawerOpen: false,
    setDrawerOpen: () =>{},
})