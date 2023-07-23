import {Box} from "@mui/material";
import React, {useEffect, useState} from "react";

import ImgBoxs from "@/assets/home-page/img-boxs.png";
import Image from "@/assets/home-page/image.png";
import PlayPause from "@/assets/home-page/play-puase.png";
import Logo1 from "@/assets/home-page/logos/logo-1.png";
import Logo2 from "@/assets/home-page/logos/logo-2.png";
import Logo3 from "@/assets/home-page/logos/logo-3.png";
import Logo4 from "@/assets/home-page/logos/logo-4.png";
import Logo5 from "@/assets/home-page/logos/logo-5.png";

export const SecondSection = () => {
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
            <Box sx={{ bgcolor: "#ffffff", color: "#000000", display: "flex", justifyContent: "center", px: 5, width: "100%", height: "43vw", }}>

                <Box
                    sx={{
                        position: "relative", // Make the container relative to handle z-index
                        background: `url(${ImgBoxs.src})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "95vw 42vw",
                        backgroundPosition: "center",
                        width: "95vw",
                        height: "43vw",
                        display: "flex",
                        alignSelf: "center",
                        zIndex: 1, // Set a higher z-index to make it appear above the boxes
                    }}
                >
                    <Box
                        sx={{
                            background: `url(${Image.src})`,
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "90vw 38vw",
                            backgroundPosition: "center",
                            width: "95vw",
                            height: "40vw",
                            display: "flex",
                            alignSelf: "center",
                            mt: 5,
                            mb: 3,
                            justifyContent: "center",
                            alignItems: "center"
                        }}
                    >
                        <Box sx={{
                            background: `url(${PlayPause.src})`,
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "100% 100%",
                            width: "120px",
                            height: "120px",
                            cursor: "point"
                        }}>

                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between" , px: 5, bgcolor: "#ffffff", pt: 7 }}>
                <Box sx={{
                    background: `url(${Logo1.src})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "100% 100%",
                    width: "211px",
                    height: "48px",
                    cursor: "point"
                }} />
                <Box sx={{
                    background: `url(${Logo2.src})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "100% 100%",
                    width: "80px",
                    height: "50px",
                    cursor: "point"
                }} />
                <Box sx={{
                    background: `url(${Logo3.src})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "100% 100%",
                    width: "190px",
                    height: "48px",
                    cursor: "point"
                }} />
                <Box sx={{
                    background: `url(${Logo4.src})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "100% 100%",
                    width: "230px",
                    height: "46px",
                    cursor: "point"
                }} />
                <Box sx={{
                    background: `url(${Logo5.src})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "100% 100%",
                    width: "143px",
                    height: "51px",
                    cursor: "point"
                }} />
            </Box>
        </>
    );
}