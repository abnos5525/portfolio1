import Grid from "@mui/material/Unstable_Grid2";
import image from "../assets/myImg.webp";
import {Typography, Box, Button} from "@mui/material";
import Slide from "@mui/material/Slide";
import {useContext, useEffect, useState} from "react";
import {AppContext} from "../context/AppContext.jsx";

const Home = ()=>{

    const {handleChange} = useContext(AppContext)

    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)

        return()=>{
            setLoading(false)
        }
    }, []);

    const imageSize = {
        xl:450,
        lg:450,
        md:400,
        sm:300,
        xs:300
    }

    const mainTextSize = {
        xl:60,
        lg:60,
        md:50,
        sm:30,
        xs:30
    }

    const textM = {
        xl:4,
        lg:4,
        md:4,
        sm:1,
        xs:-10
    }

    const handleClickAboutMe = () => {
        handleChange(null, 1)
    }

    return(
        <Grid container sx={{ minHeight: "100svh", bgcolor:"#cddcfc" }}>
                <Grid item xs={12} sm={6} md={7} lg={7} xl={7}
                      sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", m: 1,
                      mt:textM}}>
                    <Typography variant="h5" sx={{color:"text.secondary"}}>
                        این من هستم
                    </Typography>
                    <Slide direction="left" in={loading} style={{transitionDelay: loading ? "200ms": "0"}}>
                        <Typography variant="h3" sx={{color:"text.secondary",py:2,fontSize:mainTextSize}}>
                            علیرضا افشار
                        </Typography>
                    </Slide>
                    <Typography variant="body1" sx={{color:"text.secondary",textAlign:"center"}}>
                        در ادامه با من همراه باشید تا بهتر منو بشناسید!
                    </Typography>

                    <Button color="secondary" variant="contained" sx={{mt:5,":hover":{bgcolor:"secondary.light"},
                        width:120, zIndex:3
                    }}
                    onClick={handleClickAboutMe}>
                        درباره من
                    </Button>
                </Grid>
                <Grid item xs={12} sm={4} md={4} lg={4} xl={4}
                      sx={{ display: "flex", justifyContent: "center", alignItems: "center", m: 1, order: { xs: -1, sm: 1 },
                          mt:textM}}>
                    <Slide direction="right" in={loading} style={{transitionDelay: loading ? "100ms": "0"}}>
                        <Box component="img" sx={{width:imageSize}}
                             src={image}
                        />
                    </Slide>
                </Grid>
        </Grid>

    )
}

export default Home