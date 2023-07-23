import {TopNav} from "@/layouts/top-nav";
import React, { useState, useEffect } from "react";
import { useTheme } from '@mui/material/styles';
import {
    Stack,
    Box,
    Button,
} from "@mui/material";
import Image from '@/assets/home-page/image.png';
import ImgBoxs from '@/assets/home-page/img-boxs.png';

import { FirstSection } from "@/components/home-page/first-section";
import PlayPause from "@/assets/home-page/play-puase.png";
import {SecondSection} from "@/components/home-page/second-section";

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
            <Box sx={{ width: deviceWidth, height: deviceHeight, bgcolor: "#ffffff" }}>
                <TopNav />
                <FirstSection />
                <SecondSection />
            </Box>
        </>
    )
}

export default Page;