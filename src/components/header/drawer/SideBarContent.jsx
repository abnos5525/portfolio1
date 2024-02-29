import {Box, Divider, Tab, Tabs, Typography} from "@mui/material";
import {TabsInfo} from "../../../constant/TabsInfo.jsx";
import {useContext} from "react";
import {AppContext} from "../../../context/AppContext.jsx";

const SideBarContent = () =>{

    const {setDrawerOpen, activeSection,handleChange} = useContext(AppContext)

    const tabs = TabsInfo()

    return(
        <Box sx={{mt:2,textAlign:"center"}}>
            <Typography
                sx={{
                    textAlign: "center",
                    fontSize: 30,
                    mx: 1,
                    lineHeight: 2,
                }}
            >
                Abnos
            </Typography>
            <Divider variant="middle"/>
            <Tabs
                  textColor="secondary" orientation="vertical"
                  indicatorColor="secondary"
                  aria-label="secondary tabs example"
                  value={activeSection}
                  onChange={handleChange}>
                {
                    tabs.map((t,index)=>(
                        <Tab key={index} onClick={()=>setDrawerOpen(false)} label={
                            <Typography sx={{
                                fontSize:{
                                    xl:"1.2rem",
                                    lg:"1.2rem",
                                    md:"1.2rem",
                                    sm:"1rem",
                                    xs:"1rem"
                                },
                                mt:{
                                    xl:"1.2rem",
                                    lg:"1.2rem",
                                    md:"1.2rem",
                                    sm:"1rem",
                                    xs:"1rem"
                                }, color:"text.primary"
                            }}>
                                {t.icon}
                                {t.label}
                            </Typography>
                        } />
                    ))
                }

            </Tabs>

        </Box>
    )
}

export default SideBarContent