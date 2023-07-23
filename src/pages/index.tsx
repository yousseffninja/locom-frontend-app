import {DashboardLayout} from "@/layouts/layout";
import {TopNav} from "@/layouts/top-nav";
import React, { useState, useEffect } from "react";
import { useTheme } from '@mui/material/styles';
import {
    Stack,
    Box,
    Typography,
    TextField, InputAdornment,Button,OutlinedInput
} from "@mui/material";

import { FirstSection } from "@/components/home-page/first-section";

export const Page = () => {
    const theme = useTheme();
    const [deviceWidth, setDeviceWidth] = useState(window.innerWidth);
    const [deviceHeight, setDeviceHeight] = useState(window.innerHeight);

    const handleResize = () => {
        setDeviceWidth(window.innerWidth);
        setDeviceHeight(window.innerHeight);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);

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