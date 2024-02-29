import {Box, useMediaQuery} from "@mui/material";
import MainTemplate from "./templates/MainTemplate.jsx";
import {AboutMe, Header, Home, MyServices} from "./components/index.js";
import {useEffect, useRef, useState} from "react";
import {AppContext} from "./context/AppContext.jsx";
const App=()=> {

    const [activeSection, setActiveSection] = useState(0);

    const [drawerOpen, setDrawerOpen] = useState(false)

    const sectionRefs = Array.from({ length: 3 }, () => useRef());

    const handleChange = (event, newValue) => {
        setActiveSection(newValue);
        sectionRefs[newValue].current.scrollIntoView({ behavior: 'smooth' }); // Scroll to the selected section
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + window.innerHeight / 2;
            let active = 0;
            sectionRefs.forEach((ref, index) => {
                if (ref.current.offsetTop <= scrollPosition) {
                    active = index;
                }
            });
            setActiveSection(active);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [sectionRefs]);

    const isXsOrSm = useMediaQuery('(max-width:959.95px)');

    return (
        <AppContext.Provider value={{
            activeSection,
            handleChange,
            setDrawerOpen,
            drawerOpen,
            sectionRefs
        }}>
            <MainTemplate>
                <Header/>

                <Box ref={sectionRefs[0]} className="section">
                    <Home/>
                </Box>

                <Box ref={sectionRefs[1]} className="section">
                    <AboutMe/>
                </Box>
                <Box ref={sectionRefs[2]} className={`section ${isXsOrSm ? "scrollable" : ""}`}>
                    <MyServices/>
                </Box>
            </MainTemplate>
        </AppContext.Provider>

  )
}

export default App
