import {Box, Typography} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

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
        color:"primary.main"
    }
}
export const MyService = ({ icon, title, description }) => (
    <Grid item xs={12} md={4}>
        <Box sx={textBox}>
                {icon}
            <Typography variant="h5" sx={{ marginY: "10px" }}>{title}</Typography>
            <Typography variant="body2" sx={textStyle}>{description}</Typography>
        </Box>
    </Grid>
);