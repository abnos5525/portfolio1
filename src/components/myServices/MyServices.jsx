import Grid from "@mui/material/Unstable_Grid2";
import {MyService} from "./Services.jsx";
import {MyServicesInfo} from "../../constant/MyServicesInfo.jsx";
import {useContext} from "react";
import {AppContext} from "../../context/AppContext.jsx";
import {Fab} from "@mui/material";
import {NavigationRounded} from "@mui/icons-material";

const MyServices = ()=>{

    const serviceData = MyServicesInfo()

    const {handleChange} = useContext(AppContext)

    const handleClickAboutMe = () => {
        handleChange(null, 0);
    };
    return(
        <Grid container sx={{ minHeight: "100vh", bgcolor: "#cddcfc", justifyContent: "center", alignItems: "center",
            color: "text.secondary", p: 2 }}>
            <Grid container  spacing={2} item xs={12} justifyContent="center">
                {serviceData.map((service, index) => (
                    <MyService key={index} {...service} />
                ))}

                <Fab color="secondary" variant="contained" sx={{mt:5,":hover":{bgcolor:"secondary.light"}}}
                     onClick={handleClickAboutMe}>
                    <NavigationRounded/>
                </Fab>
            </Grid>
        </Grid>
    )
}

export default MyServices