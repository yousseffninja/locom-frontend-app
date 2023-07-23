import {TopNav} from "@/layouts/top-nav";
import React, {useState, useEffect} from "react";
import {useTheme} from '@mui/material/styles';
import {
    Stack,
    Box,
    Button, Typography,
} from "@mui/material";
import CheckIcon from '@mui/icons-material/Check';

import Step1 from "@/assets/home-page/steps/step-1.png";
import Step2 from "@/assets/home-page/steps/step-2.png";
import Step3 from "@/assets/home-page/steps/step-3.png";
import Step4 from "@/assets/home-page/steps/step-4.png";
import Step5 from "@/assets/home-page/steps/step-5.png";
import Step6 from "@/assets/home-page/steps/step-6.png";

import {FirstSection} from "@/components/home-page/first-section";
import {SecondSection} from "@/components/home-page/second-section";
import {ThirdSection} from "@/components/home-page/third-section";
import Logo2 from "@/assets/home-page/logos/logo-2.png";
import Verfy from "@/assets/home-page/verfy";
import {FourthStep} from "@/components/home-page/fourth-step";

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
                <FourthStep />
            </Box>
        </>
    )
}

export default Page;