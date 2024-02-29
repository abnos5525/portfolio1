import {HomeRounded, InfoRounded, IntegrationInstructions} from "@mui/icons-material";

export const TabsInfo = () =>{

    const data = [
        {label: "صفحه اصلی" ,icon: <HomeRounded sx={{verticalAlign:"middle",mx:1}} />},
        {label:"درباره من",icon: <InfoRounded sx={{verticalAlign:"middle",mx:1}} />},
        {label:"سرویس های من",icon: <IntegrationInstructions sx={{verticalAlign:"middle",mx:1}} />},
    ]
    return data
}