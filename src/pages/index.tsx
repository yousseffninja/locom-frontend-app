import {TopNav} from "@/layouts/top-nav";
import React, {useState, useEffect} from "react";
import {useTheme} from '@mui/material/styles';
import {
    Stack,
    Box,
    Button, Typography,
} from "@mui/material";


import {FirstSection} from "@/components/home-page/first-section";
import {SecondSection} from "@/components/home-page/second-section";
import {ThirdSection} from "@/components/home-page/third-section";

export const Page = () => {
    const theme = useTheme();
    const [deviceWidth, setDeviceWidth] = useState(1920);
    const [deviceHeight, setDeviceHeight] = useState(1080);

    const handleResize = () => {
        setDeviceWidth(window.innerWidth);
        setDeviceHeight(window.innerHeight);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);

        setDeviceWidth(window.innerWidth);
        setDeviceHeight(window.innerHeight);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            <Box sx={{width: deviceWidth, height: deviceHeight, bgcolor: "#ffffff"}}>
                <TopNav/>
                <FirstSection/>
                <SecondSection/>
                <ThirdSection />
                <Box sx={{
                    width: "100%",
                    bgcolor: "#ffffff",
                    pt: "9.7vw",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center"
                }}>
                    <Box sx={{
                        width: '6.6vw',
                        height: "3vw",
                        bgcolor: "#F4F4F4",
                        borderRadius: 2,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                        <Typography component="span" sx={{
                            background: 'linear-gradient(326deg, #4563FF 0%, #58AFFF 100%)',
                            backgroundClip: 'text',
                            color: "transparent",
                            fontFamily: 'DM Sans',
                            fontSize: '18px',
                            textAlign: 'center',
                            fontStyle: 'normal',
                            fontWeight: '600',
                            lineHeight: 'normal',
                            display: 'inline'
                        }}>Features</Typography>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default Page;