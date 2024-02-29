import Grid from "@mui/material/Unstable_Grid2";
import {Typography, Box, Button} from "@mui/material";
import image from "../assets/myImg2.webp";
import {useContext, useEffect, useState} from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import {links} from "../assets/particles.jsx";
import {AppContext} from "../context/AppContext.jsx";

const AboutMe = ()=>{

    const [ init, setInit ] = useState(false);

    const {activeSection,handleChange} = useContext(AppContext)

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = (container) => {
        console.log(container);
    };

    const imageSize = {
        xl:600,
        lg:600,
        md:500,
        sm:400,
        xs:400
    }

    const mainTextSize = {
        xl:50,
        lg:50,
        md:40,
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
        handleChange(null, 2);
    };

    return(
        <>
        <Grid container sx={{ height: "100vh",zIndex:2 }}>
                <Grid item xs={12} sm={4} md={4} lg={4} xl={4}
                      sx={{ display: "flex", justifyContent: "center", alignItems: "center", order: { xs: 1, sm: -1 },
                          mt:textM, position:"relative"}}>
                    <Box component="img" sx={{width:imageSize}}
                         src={image}
                    />
                </Grid>

            <Grid item xs={12} sm={6} md={7} lg={7} xl={7}
                  sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", m: 1,
                      mt:textM,position:"relative", zIndex:1}}>

                <Typography variant="h3" sx={{color:"text.secondary",pt:7,mb:2,fontSize:mainTextSize}}>
                    جزییات شخصی
                </Typography>

                <Typography variant="body1" sx={{color:"text.secondary",textAlign:"center"}}>
                    علیرضا افشار، یک برنامه‌نویس با استعداد و پیشرفته که علاقه‌مند به دنیای فناوری و برنامه‌نویسی از سنین جوانی بوده است. او در سال 1372 متولد شده و از آن زمان، به دنبال یادگیری و بهبود مهارت‌های برنامه‌نویسی خود بوده است. علیرضا با شور و اشتیاق زیادی به حل مسائل و ایجاد نرم‌افزارهای مفید و کارآمد مشغول است.
                </Typography>

                <Button color="secondary" variant="contained"
                        sx={{":hover":{bgcolor:"secondary.light"},
                            mt:3
                }}
                        onClick={handleClickAboutMe}>
                    خدمات من
                </Button>

            </Grid>

        </Grid>
            {
                init && activeSection===1 ?
                <Particles id="tsparticles" particlesLoaded={particlesLoaded} options={links}/> : null
            }
        </>
    )
}

export default AboutMe