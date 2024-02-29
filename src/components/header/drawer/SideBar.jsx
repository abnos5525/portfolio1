import {useContext} from "react";
import { Drawer} from "@mui/material";
import {AppContext} from "../../../context/AppContext.jsx";
import SideBarContent from "./SideBarContent";

const SideBar = () =>{

    const {drawerOpen,setDrawerOpen} = useContext(AppContext)
    return(
            <Drawer xs={1} sm={0} md={0} lg={0} xl={0} sx={{
                height:"100vh",
                overflowX:"hidden",overflowY:"auto", zIndex:"3",
                "& .MuiDrawer-paper": {
                    width: 230,
                    bgcolor:"primary.main"
                },
                display:{
                    xs:"block",
                    sm:"none",
                    md:"none",
                    lg:"none",
                    xl:"none"
                }}}
                    open={drawerOpen} variant="temporary" onClose={()=> setDrawerOpen(false)}>

                <SideBarContent/>

            </Drawer>
    )
}

export default SideBar