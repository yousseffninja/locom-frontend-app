import {Box, Button, Typography} from "@mui/material";
import Logo from "@/assets/logo";
import React from "react";

export const TopNav = () => {
    return (
        <>
            <Box sx={{ bgcolor: "#FFFFFF", width: "100%", px: 10, py: 5 }}>
                <Box sx={{display: "flex", width: "100%", justifyContent: "space-between"}}>
                    <Box sx={{ width: "13vw" }}>
                        <Logo/>
                    </Box>
                    <Box sx={{display: "flex", justifyContent: "space-evenly", alignItems: "center", width: "60%"}}>
                        <Box sx={{ display: "flex", justifyContent: "space-between", width: "70%" }}>
                            <Button sx={{ color: "black" }}>
                                <Typography sx={{ fontSize: "1vw", }}>
                                    Pricing
                                </Typography>
                            </Button>
                            <Button sx={{ color: "black" }}>
                                <Typography sx={{ fontSize: "1vw", }}>
                                    Resource Center
                                </Typography>
                            </Button>
                            <Button sx={{ color: "black" }}>
                                <Typography sx={{ fontSize: "1vw", }}>
                                    About
                                </Typography>
                            </Button>
                            <Button sx={{ color: "black" }}>
                                <Typography sx={{ fontSize: "1vw", }}>
                                    Contact Us
                                </Typography>
                            </Button>
                        </Box>
                        <Button
                            sx={{
                                position: 'relative',
                                background: 'linear-gradient(326deg, #4563FF 0%, #58AFFF 100%)',
                                color: 'white',
                                width: '8vw',
                                padding: '8px 16px',
                                '&::before': {
                                    content: '""',
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '100%',
                                    background: 'inherit',
                                    zIndex: -1,
                                },
                            }}
                        >
                            {/*<Typography sx={{ fontSize: "1.1492838541666666vw", }}>*/}
                                Sign Up
                            {/*</Typography>*/}
                        </Button>
                    </Box>
                </Box>
            </Box>
        </>
    );
}