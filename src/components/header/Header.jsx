import { AppBar, Tab, Tabs, Toolbar, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { TabsInfo } from "../../constant/TabsInfo.jsx";
import {useContext, useEffect, useState} from "react";
import {AppContext} from "../../context/AppContext.jsx";

const Header = () => {
    const tabs = TabsInfo();

    const {activeSection,handleChange} = useContext(AppContext)

    const [showAppBarShadow, setShowAppBarShadow] = useState(false);
    const [isScrolledToTop, setIsScrolledToTop] = useState(true);

    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        setShowAppBarShadow(scrollPosition > 0);
        setIsScrolledToTop(scrollPosition <= 0);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <AppBar
            position="fixed"
            sx={{
                width: "100%",
                height: 60,
                zIndex: 2,
                display: {
                    xl: "block",
                    lg: "block",
                    md: "block",
                    sm: "block",
                    xs: "none",
                },
                bgcolor: "primary.main",
                boxShadow: isScrolledToTop ? "none" : "1px 10px 6px rgba(0,0,222,.2)",
            }}
        >
            <Toolbar>
                <Grid container sx={{ flexDirection: "row-reverse", width: "100%" }}>
                    <Grid xs={2}>
                        <Typography
                            sx={{
                                textAlign: "center",
                                fontSize: {
                                    sm: 25,
                                    md: 30,
                                },
                                mx: 1,
                                lineHeight: 2,
                            }}
                        >
                            Abnos
                        </Typography>
                    </Grid>
                    <Grid xs={10}>
                        <Tabs
                            textColor="secondary"
                            indicatorColor="secondary"
                            aria-label="secondary tabs example"
                            value={activeSection}
                            onChange={handleChange}
                        >
                            {tabs.map((t, index) => (
                                <Tab
                                    key={index}
                                    sx={{ ml: 1 }}
                                    label={
                                        <Typography
                                            sx={{
                                                fontSize: {
                                                    xl: "1.2rem",
                                                    lg: "1.2rem",
                                                    md: "1.2rem",
                                                    sm: ".8rem",
                                                },
                                                color: index === activeSection ? "secondary.main" : "text.primary",
                                            }}
                                        >
                                            {t.icon}
                                            {t.label}
                                        </Typography>
                                    }
                                />
                            ))}
                        </Tabs>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
