import Grid from "@mui/material/Unstable_Grid2";
import {MyService} from "./Services.jsx";
import {MyServicesInfo} from "../../constant/MyServicesInfo.jsx";

const serviceData = MyServicesInfo()

const MyServices = ()=>{
    return(
        <Grid container sx={{ minHeight: "100vh", bgcolor: "#cddcfc", justifyContent: "center", alignItems: "center", color: "text.secondary", padding: "20px", py:15 }}>
            <Grid container  spacing={2} item xs={12} justifyContent="center">
                {serviceData.map((service, index) => (
                    <MyService key={index} {...service} />
                ))}
            </Grid>
        </Grid>
    )
}

export default MyServices