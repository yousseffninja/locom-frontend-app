import {Box, Button, InputAdornment, OutlinedInput, Typography} from "@mui/material";
import Stats from "@/assets/home-page/stats.png";
import React from "react";

export const FirstSection = () => {
    return (
        <Box sx={{ bgcolor: "#ffffff", width: "100%" }}>
            <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", width: "100%", px: 10, pt: 5 }}>
                <Box sx={{ width: "520px"  }}>
                    <Box>
                        <Typography
                            component="div" // Set the outer Typography component as a div to allow inline display
                            sx={{
                                color: 'black',
                                fontSize: '3.4477864583333333vw',
                                fontFamily: 'DM Sans',
                                fontWeight: 400,
                                display: 'inline', // or use 'inline-block' for more control over spacing
                            }}
                        >
                            Refer Your Friends & Earn Up To{' '}
                            <Typography
                                component="span" // Set the inner Typography component as a span for inline display
                                sx={{
                                    width: "100%",
                                    background: 'linear-gradient(326deg, #4563FF 0%, #58AFFF 100%)',
                                    backgroundClip: 'text',
                                    color: 'transparent',
                                    fontSize: '3.4477864583333333vw',
                                    fontFamily: 'DM Sans',
                                    fontWeight: 400,
                                    display: 'inline', // or use 'inline-block' for more control over spacing
                                }}
                            >
                                100$ Year
                            </Typography>
                        </Typography>
                    </Box>
                    <Box sx={{ mt: 3 }}>
                        <Typography sx={{
                            width: "100%",
                            color: 'black',
                            fontSize: '17.653px',
                            fontFamily: 'DM Sans',
                            fontWeight: 400,
                            display: 'inline',
                        }}>
                            The fastest and simple way to generate growing business solutions with our products
                        </Typography>
                    </Box>
                    <Box sx={{ mt: 3 }}>
                        <OutlinedInput
                            sx={{ width: "100%" }}
                            id="outlined-basic"
                            placeholder="Your bussiness email"
                            endAdornment={
                                <InputAdornment position="end">
                                    <Button
                                        sx={{
                                            background: 'linear-gradient(326deg, #4563FF 0%, #58AFFF 100%)',
                                            color: 'white',
                                            width: "8vw",
                                            px: 3,
                                            py: 1
                                        }}
                                    >
                                        <Typography sx={{ fontSize: "10.751999999999999px", }}>
                                            Get Started
                                        </Typography>
                                    </Button>
                                </InputAdornment>
                            }
                        />
                    </Box>
                    <Box sx={{ mt: 3 }}>
                        <Typography sx={{
                            fontFamily: "Chivo",
                            fontSize: "1vw",
                            fontStyle: "italic",
                            fontWeight: "400",
                            color: "black",
                            lineHeight: "150%",
                        }}>
                            *we will not disseminate your email and so you avoid spam
                        </Typography>
                    </Box>
                    <Box sx={{ display: "flex", mt: 3, }}>
                        <Box sx={{ width: 150, mr: 7 }}>
                            <Typography sx={{
                                color: "black" ,
                                fontFamily: "DM Sans",
                                fontSize: '2.8vw',
                                fontStyle: 'normal',
                                fontWeight: '500',
                                lineHeight: '3.4vw',
                            }}
                            >350+</Typography>
                            <Typography sx={{
                                color: "black" ,
                                fontFamily: 'Microsoft Sans Serif',
                                fontSize: '1.14vw',
                                fontStyle: 'normal',
                                fontWeight: '400',
                                lineHeight: '1.78vw',
                            }}>Over 500 business powered with us</Typography>
                        </Box>
                        <Box sx={{ width: 150 }}>
                            <Typography sx={{
                                color: "black" ,
                                fontFamily: "DM Sans",
                                fontSize: '2.8vw',
                                fontStyle: 'normal',
                                fontWeight: '500',
                                lineHeight: '3.4vw',
                            }}>4.8</Typography>
                            <Typography sx={{
                                color: "black" ,
                                fontFamily: 'Microsoft Sans Serif',
                                fontSize: '1.14vw',
                                fontStyle: 'normal',
                                fontWeight: '400',
                                lineHeight: '1.78vw',
                            }}>Rating on google play and app store</Typography>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{ width: "800px", mt: 3 }}>
                    <img src={Stats.src} className="App-logo" alt="logo" width={"100%"} />
                </Box>
            </Box>
        </Box>
    );
}