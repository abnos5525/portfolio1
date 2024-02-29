import {createTheme, ThemeProvider} from "@mui/material/styles";
import createCache from "@emotion/cache";
import {prefixer} from "stylis";
import rtlPlugin from "stylis-plugin-rtl";
import {CacheProvider} from "@emotion/react";

export const cacheRTL = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, rtlPlugin]
})

export const theme = createTheme({
    direction: "rtl",
    typography: {
        allVariants:{
            fontWeight:"bolder"
        },
    },
    palette:{
        mode:"dark",
        primary:{
            main:"#387ADF",
            dark:"#333A73",
        },
        secondary:{
          main:"#ffbd5c",
          light:"#e0b576",
        },
        text:{
            primary:"#dcdcdc",
            secondary:"#222"
        }
    }
})

const MainTemplate = ({children}) => {
    return(
        <CacheProvider value={cacheRTL}>
            <ThemeProvider theme={theme}>
                        {children}
            </ThemeProvider>
        </CacheProvider>
    )
}

export default MainTemplate