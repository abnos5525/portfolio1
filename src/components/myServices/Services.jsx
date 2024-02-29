import {Box, Typography} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import {useEffect, useRef, useState} from "react";

export const MyService = ({ icon, title, description }) => {

    const textBoxRef = useRef(null);
    const [isCentered, setIsCentered] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (textBoxRef.current) {
                const boxPosition = textBoxRef.current.getBoundingClientRect();
                const boxCenter = boxPosition.top + boxPosition.height / 2;
                const windowHeight = window.innerHeight;
                setIsCentered(boxCenter >= windowHeight * 0.4 && boxCenter <= windowHeight * 0.6);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const isSmallScreen = window.innerWidth < 600

    const textStyle = {
        textAlign: "center",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
    }

    const textBox = {
        textAlign: "center",
        minHeight:200,
        border: "1px solid #ccc",
        borderRadius: "5px",
        padding: "20px",
        margin: "10px",
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
        ":hover":{
             color: isSmallScreen ? "inherit" : "primary.main"
        },
        color: isSmallScreen && isCentered ? "primary.main" : "inherit",
        transition: "color 0.3s ease-in-out"
    }
    return(
        <Grid item xs={12} md={4}>
            <Box sx={textBox} ref={textBoxRef}>
                {icon}
                <Typography variant="h5" sx={{marginY: "10px"}}>{title}</Typography>
                <Typography variant="body2" sx={textStyle}>{description}</Typography>
            </Box>
        </Grid>
    )
}