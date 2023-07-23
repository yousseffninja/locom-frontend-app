import {TopNav} from "@/layouts/top-nav";
import React, { useState, useEffect } from "react";
import { useTheme } from '@mui/material/styles';
import {
    Stack,
    Box,
} from "@mui/material";

import { FirstSection } from "@/components/home-page/first-section";

export const Page = () => {
    const theme = useTheme();
    const [deviceWidth, setDeviceWidth] = useState(1920);
    const [deviceHeight, setDeviceHeight] = useState(1080);

    const handleResize = () => {
        setDeviceWidth(window.innerWidth);
        setDeviceHeight(window.innerHeight);
    };

    useEffect(() => {
        // Add event listener to update dimensions on window resize
        window.addEventListener('resize', handleResize);

        // Set initial dimensions on component mount
        setDeviceWidth(window.innerWidth);
        setDeviceHeight(window.innerHeight);

        // Clean up the event listener when the component is unmounted
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            <Stack sx={{ width: deviceWidth, height: deviceHeight, bgcolor: "#ffffff" }}>
                <TopNav />
                <FirstSection />
                <Box>

                </Box>
            </Stack>
        </>
    )
}

export default Page;