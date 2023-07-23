import {Box, Button, Typography} from "@mui/material";
import Step1 from "@/assets/home-page/steps/step-1.png";
import CheckIcon from "@mui/icons-material/Check";
import Step2 from "@/assets/home-page/steps/step-2.png";
import Step3 from "@/assets/home-page/steps/step-3.png";
import Step4 from "@/assets/home-page/steps/step-4.png";
import Step5 from "@/assets/home-page/steps/step-5.png";
import Step6 from "@/assets/home-page/steps/step-6.png";
import React from "react";

export const FourthStep = () => {
    return (
        <>
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
                <Typography
                    component="span"
                    sx={{
                        width: "54.5vw",
                        color: 'black',
                        textAlign: 'center',
                        fontSize: '3.4477864583333333vw',
                        fontFamily: 'DM Sans',
                        fontWeight: 550,
                        mt: 4
                    }}
                >
                    How it Works?
                </Typography>
                <Typography sx={{
                    mt: 5,
                    width: "30vw",
                    color: '#7E7E7E',
                    textAlign: 'center',
                    fontFamily: 'Microsoft Sans Serif',
                    fontSize: '18px',
                    fontStyle: 'normal',
                    fontWeight: '400',
                    lineHeight: '175%',
                    alignSelf: "center"
                }}>
                    It is a long established fact that a reader will be distracted by the readable content.
                </Typography>
            </Box>
            <Box sx={{ bgcolor: "#ffffff", width: "100%", pt: '3.5vw', display: "flex", justifyContent: "space-between", px: "5vw" }}>
                <Box sx={{
                    background: `url(${Step1.src})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "100% 100%",
                    width: "880px",
                    height: "535px",
                    cursor: "point"
                }} />
                <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start", width: "40%" }} >
                    <Typography sx={{
                        width: "100%",
                        background: 'linear-gradient(326deg, #4563FF 0%, #58AFFF 100%)',
                        backgroundClip: 'text',
                        color: 'transparent',
                        fontSize: '1.1vw',
                        fontFamily: 'DM Sans',
                        fontWeight: 600,
                        display: 'inline',

                    }}>
                        Step 1
                    </Typography>
                    <Typography sx={{
                        width: "100%",
                        color: '#2F2F2F',
                        fontSize: '2.34vw',
                        fontFamily: 'DM Sans',
                        fontWeight: 700,
                        display: 'inline',
                        pt: 2
                    }}>
                        Referral program
                    </Typography>
                    <Typography sx={{
                        width: "100%",
                        color: '#808080',
                        fontSize: '1.04vw',
                        fontFamily: 'DM Sans',
                        fontWeight: 400,
                        display: 'inline',
                        pt: 2
                    }}>
                        automated referral program to increase word of mouth referrals.
                    </Typography>
                    <Box sx={{ pr: 10, pt: 2 }}>
                        <CheckIcon sx={{
                            background: 'linear-gradient(326deg, #4563FF 0%, #58AFFF 100%)',
                            backgroundClip: 'text',
                            color: '#4563FF',
                        }} />
                        <Typography sx={{
                            width: "100%",
                            color: '#374151',
                            fontSize: '1.14vw',
                            fontFamily: 'DM Sans',
                            fontWeight: 400,
                            display: 'inline',
                            pt: 2
                        }}>
                            It is a long established fact that a reader will be distracted by the readable content.
                        </Typography>
                    </Box>
                    <Box sx={{ pr: 10, pt: 2 }}>
                        <CheckIcon sx={{
                            background: 'linear-gradient(326deg, #4563FF 0%, #58AFFF 100%)',
                            backgroundClip: 'text',
                            color: '#4563FF',
                        }} />
                        <Typography sx={{
                            width: "100%",
                            color: '#374151',
                            fontSize: '1.14vw',
                            fontFamily: 'DM Sans',
                            fontWeight: 400,
                            display: 'inline',
                            pt: 2
                        }}>
                            It is a long established fact that a reader will be distracted.
                        </Typography>
                    </Box>
                    <Box sx={{ pr: 10, pt: 2 }}>
                        <CheckIcon sx={{
                            background: 'linear-gradient(326deg, #4563FF 0%, #58AFFF 100%)',
                            backgroundClip: 'text',
                            color: '#4563FF',
                        }} />
                        <Typography sx={{
                            width: "100%",
                            color: '#374151',
                            fontSize: '1.14vw',
                            fontFamily: 'DM Sans',
                            fontWeight: 400,
                            display: 'inline',
                            pt: 2
                        }}>
                            It is a long established fact that a reader.
                        </Typography>
                    </Box>
                    <Button
                        sx={{
                            position: 'relative',
                            background: 'linear-gradient(326deg, #4563FF 0%, #58AFFF 100%)',
                            color: 'white',
                            mt: 5,
                            width: '12vw',
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
                        Start Free Trial
                        {/*</Typography>*/}
                    </Button>
                </Box>
            </Box>

            <Box sx={{ bgcolor: "#ffffff", width: "100%", display: "flex", justifyContent: "space-between", px: "5vw", pt: '11vw' }}>
                <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start", width: "40%" }} >
                    <Typography sx={{
                        width: "100%",
                        background: 'linear-gradient(326deg, #4563FF 0%, #58AFFF 100%)',
                        backgroundClip: 'text',
                        color: 'transparent',
                        fontSize: '1.1vw',
                        fontFamily: 'DM Sans',
                        fontWeight: 600,
                        display: 'inline',

                    }}>
                        Step 2
                    </Typography>
                    <Typography sx={{
                        width: "100%",
                        color: '#2F2F2F',
                        fontSize: '2.34vw',
                        fontFamily: 'DM Sans',
                        fontWeight: 700,
                        display: 'inline',
                        pt: 2
                    }}>
                        Google review engine
                    </Typography>
                    <Typography sx={{
                        width: "100%",
                        color: '#808080',
                        fontSize: '1.04vw',
                        fontFamily: 'DM Sans',
                        fontWeight: 400,
                        display: 'inline',
                        pt: 2
                    }}>
                        equest reviews from customers with ease through QR code technology.
                    </Typography>
                    <Box sx={{ pr: 10, pt: 2 }}>
                        <CheckIcon sx={{
                            background: 'linear-gradient(326deg, #4563FF 0%, #58AFFF 100%)',
                            backgroundClip: 'text',
                            color: '#4563FF',
                        }} />
                        <Typography sx={{
                            width: "100%",
                            color: '#374151',
                            fontSize: '1.14vw',
                            fontFamily: 'DM Sans',
                            fontWeight: 400,
                            display: 'inline',
                            pt: 2
                        }}>
                            It is a long established fact that a reader will be distracted by the readable content.
                        </Typography>
                    </Box>
                    <Box sx={{ pr: 10, pt: 2 }}>
                        <CheckIcon sx={{
                            background: 'linear-gradient(326deg, #4563FF 0%, #58AFFF 100%)',
                            backgroundClip: 'text',
                            color: '#4563FF',
                        }} />
                        <Typography sx={{
                            width: "100%",
                            color: '#374151',
                            fontSize: '1.14vw',
                            fontFamily: 'DM Sans',
                            fontWeight: 400,
                            display: 'inline',
                            pt: 2
                        }}>
                            It is a long established fact that a reader will be distracted.
                        </Typography>
                    </Box>
                    <Box sx={{ pr: 10, pt: 2 }}>
                        <CheckIcon sx={{
                            background: 'linear-gradient(326deg, #4563FF 0%, #58AFFF 100%)',
                            backgroundClip: 'text',
                            color: '#4563FF',
                        }} />
                        <Typography sx={{
                            width: "100%",
                            color: '#374151',
                            fontSize: '1.14vw',
                            fontFamily: 'DM Sans',
                            fontWeight: 400,
                            display: 'inline',
                            pt: 2
                        }}>
                            It is a long established fact that a reader.
                        </Typography>
                    </Box>
                    <Button
                        sx={{
                            position: 'relative',
                            background: 'linear-gradient(326deg, #4563FF 0%, #58AFFF 100%)',
                            color: 'white',
                            mt: 5,
                            width: '12vw',
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
                        Start Free Trial
                        {/*</Typography>*/}
                    </Button>
                </Box>
                <Box sx={{
                    background: `url(${Step2.src})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "100% 100%",
                    width: "840px",
                    height: "535px",
                    cursor: "point"
                }} />
            </Box>
            <Box sx={{ bgcolor: "#ffffff", width: "100%", display: "flex", justifyContent: "space-between", px: "5vw", pt: '11vw' }}>
                <Box sx={{
                    background: `url(${Step3.src})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "100% 100%",
                    width: "550px",
                    height: "535px",
                    cursor: "point"
                }} />
                <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start", width: "40%" }} >
                    <Typography sx={{
                        width: "100%",
                        background: 'linear-gradient(326deg, #4563FF 0%, #58AFFF 100%)',
                        backgroundClip: 'text',
                        color: 'transparent',
                        fontSize: '1.1vw',
                        fontFamily: 'DM Sans',
                        fontWeight: 600,
                        display: 'inline',

                    }}>
                        Step 3
                    </Typography>
                    <Typography sx={{
                        width: "100%",
                        color: '#2F2F2F',
                        fontSize: '2.34vw',
                        fontFamily: 'DM Sans',
                        fontWeight: 700,
                        display: 'inline',
                        pt: 2
                    }}>
                        AI Google reviews
                    </Typography>
                    <Typography sx={{
                        width: "100%",
                        color: '#808080',
                        fontSize: '1.04vw',
                        fontFamily: 'DM Sans',
                        fontWeight: 400,
                        display: 'inline',
                        pt: 2
                    }}>
                        We do not respond automatically but we also allow the user check, review and then send the AI automated response.
                    </Typography>
                    <Box sx={{ pr: 10, pt: 2 }}>
                        <CheckIcon sx={{
                            background: 'linear-gradient(326deg, #4563FF 0%, #58AFFF 100%)',
                            backgroundClip: 'text',
                            color: '#4563FF',
                        }} />
                        <Typography sx={{
                            width: "100%",
                            color: '#374151',
                            fontSize: '1.14vw',
                            fontFamily: 'DM Sans',
                            fontWeight: 400,
                            display: 'inline',
                            pt: 2
                        }}>
                            It is a long established fact that a reader will be distracted by the readable content.
                        </Typography>
                    </Box>
                    <Box sx={{ pr: 10, pt: 2 }}>
                        <CheckIcon sx={{
                            background: 'linear-gradient(326deg, #4563FF 0%, #58AFFF 100%)',
                            backgroundClip: 'text',
                            color: '#4563FF',
                        }} />
                        <Typography sx={{
                            width: "100%",
                            color: '#374151',
                            fontSize: '1.14vw',
                            fontFamily: 'DM Sans',
                            fontWeight: 400,
                            display: 'inline',
                            pt: 2
                        }}>
                            It is a long established fact that a reader will be distracted.
                        </Typography>
                    </Box>
                    <Box sx={{ pr: 10, pt: 2 }}>
                        <CheckIcon sx={{
                            background: 'linear-gradient(326deg, #4563FF 0%, #58AFFF 100%)',
                            backgroundClip: 'text',
                            color: '#4563FF',
                        }} />
                        <Typography sx={{
                            width: "100%",
                            color: '#374151',
                            fontSize: '1.14vw',
                            fontFamily: 'DM Sans',
                            fontWeight: 400,
                            display: 'inline',
                            pt: 2
                        }}>
                            It is a long established fact that a reader.
                        </Typography>
                    </Box>
                    <Button
                        sx={{
                            position: 'relative',
                            background: 'linear-gradient(326deg, #4563FF 0%, #58AFFF 100%)',
                            color: 'white',
                            mt: 5,
                            width: '12vw',
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
                        Start Free Trial
                        {/*</Typography>*/}
                    </Button>
                </Box>
            </Box>
            <Box sx={{ bgcolor: "#ffffff", width: "100%", display: "flex", justifyContent: "space-between", px: "5vw", pt: '11vw' }}>
                <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start", width: "40%" }} >
                    <Typography sx={{
                        width: "100%",
                        background: 'linear-gradient(326deg, #4563FF 0%, #58AFFF 100%)',
                        backgroundClip: 'text',
                        color: 'transparent',
                        fontSize: '1.1vw',
                        fontFamily: 'DM Sans',
                        fontWeight: 600,
                        display: 'inline',

                    }}>
                        Step 4
                    </Typography>
                    <Typography sx={{
                        width: "100%",
                        color: '#2F2F2F',
                        fontSize: '2.34vw',
                        fontFamily: 'DM Sans',
                        fontWeight: 700,
                        display: 'inline',
                        pt: 2
                    }}>
                        Track employee performance
                    </Typography>
                    <Typography sx={{
                        width: "100%",
                        color: '#808080',
                        fontSize: '1.04vw',
                        fontFamily: 'DM Sans',
                        fontWeight: 400,
                        display: 'inline',
                        pt: 2
                    }}>
                        monitor your teams performance on the go, real honest feedback from your customers.
                    </Typography>
                    <Box sx={{ pr: 10, pt: 2 }}>
                        <CheckIcon sx={{
                            background: 'linear-gradient(326deg, #4563FF 0%, #58AFFF 100%)',
                            backgroundClip: 'text',
                            color: '#4563FF',
                        }} />
                        <Typography sx={{
                            width: "100%",
                            color: '#374151',
                            fontSize: '1.14vw',
                            fontFamily: 'DM Sans',
                            fontWeight: 400,
                            display: 'inline',
                            pt: 2
                        }}>
                            It is a long established fact that a reader will be distracted by the readable content.
                        </Typography>
                    </Box>
                    <Box sx={{ pr: 10, pt: 2 }}>
                        <CheckIcon sx={{
                            background: 'linear-gradient(326deg, #4563FF 0%, #58AFFF 100%)',
                            backgroundClip: 'text',
                            color: '#4563FF',
                        }} />
                        <Typography sx={{
                            width: "100%",
                            color: '#374151',
                            fontSize: '1.14vw',
                            fontFamily: 'DM Sans',
                            fontWeight: 400,
                            display: 'inline',
                            pt: 2
                        }}>
                            It is a long established fact that a reader will be distracted.
                        </Typography>
                    </Box>
                    <Box sx={{ pr: 10, pt: 2 }}>
                        <CheckIcon sx={{
                            background: 'linear-gradient(326deg, #4563FF 0%, #58AFFF 100%)',
                            backgroundClip: 'text',
                            color: '#4563FF',
                        }} />
                        <Typography sx={{
                            width: "100%",
                            color: '#374151',
                            fontSize: '1.14vw',
                            fontFamily: 'DM Sans',
                            fontWeight: 400,
                            display: 'inline',
                            pt: 2
                        }}>
                            It is a long established fact that a reader.
                        </Typography>
                    </Box>
                    <Button
                        sx={{
                            position: 'relative',
                            background: 'linear-gradient(326deg, #4563FF 0%, #58AFFF 100%)',
                            color: 'white',
                            mt: 5,
                            width: '12vw',
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
                        Start Free Trial
                        {/*</Typography>*/}
                    </Button>
                </Box>
                <Box sx={{
                    background: `url(${Step4.src})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "100% 100%",
                    width: "800px",
                    height: "535px",
                    cursor: "point"
                }} />
            </Box>
            <Box sx={{ bgcolor: "#ffffff", width: "100%", display: "flex", justifyContent: "space-between", px: "5vw", pt: '11vw' }}>
                <Box sx={{
                    background: `url(${Step5.src})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "100% 100%",
                    width: "650px",
                    height: "535px",
                    cursor: "point"
                }} />
                <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start", width: "40%" }} >
                    <Typography sx={{
                        width: "100%",
                        background: 'linear-gradient(326deg, #4563FF 0%, #58AFFF 100%)',
                        backgroundClip: 'text',
                        color: 'transparent',
                        fontSize: '1.1vw',
                        fontFamily: 'DM Sans',
                        fontWeight: 600,
                        display: 'inline',

                    }}>
                        Step 5
                    </Typography>
                    <Typography sx={{
                        width: "100%",
                        color: '#2F2F2F',
                        fontSize: '2.34vw',
                        fontFamily: 'DM Sans',
                        fontWeight: 700,
                        display: 'inline',
                        pt: 2
                    }}>
                        Advanced analytics
                    </Typography>
                    <Typography sx={{
                        width: "100%",
                        color: '#808080',
                        fontSize: '1.04vw',
                        fontFamily: 'DM Sans',
                        fontWeight: 400,
                        display: 'inline',
                        pt: 2
                    }}>
                        track business growth, referral program performance & your google business.
                    </Typography>
                    <Box sx={{ pr: 10, pt: 2 }}>
                        <CheckIcon sx={{
                            background: 'linear-gradient(326deg, #4563FF 0%, #58AFFF 100%)',
                            backgroundClip: 'text',
                            color: '#4563FF',
                        }} />
                        <Typography sx={{
                            width: "100%",
                            color: '#374151',
                            fontSize: '1.14vw',
                            fontFamily: 'DM Sans',
                            fontWeight: 400,
                            display: 'inline',
                            pt: 2
                        }}>
                            It is a long established fact that a reader will be distracted by the readable content.
                        </Typography>
                    </Box>
                    <Box sx={{ pr: 10, pt: 2 }}>
                        <CheckIcon sx={{
                            background: 'linear-gradient(326deg, #4563FF 0%, #58AFFF 100%)',
                            backgroundClip: 'text',
                            color: '#4563FF',
                        }} />
                        <Typography sx={{
                            width: "100%",
                            color: '#374151',
                            fontSize: '1.14vw',
                            fontFamily: 'DM Sans',
                            fontWeight: 400,
                            display: 'inline',
                            pt: 2
                        }}>
                            It is a long established fact that a reader will be distracted.
                        </Typography>
                    </Box>
                    <Box sx={{ pr: 10, pt: 2 }}>
                        <CheckIcon sx={{
                            background: 'linear-gradient(326deg, #4563FF 0%, #58AFFF 100%)',
                            backgroundClip: 'text',
                            color: '#4563FF',
                        }} />
                        <Typography sx={{
                            width: "100%",
                            color: '#374151',
                            fontSize: '1.14vw',
                            fontFamily: 'DM Sans',
                            fontWeight: 400,
                            display: 'inline',
                            pt: 2
                        }}>
                            It is a long established fact that a reader.
                        </Typography>
                    </Box>
                    <Button
                        sx={{
                            position: 'relative',
                            background: 'linear-gradient(326deg, #4563FF 0%, #58AFFF 100%)',
                            color: 'white',
                            mt: 5,
                            width: '12vw',
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
                        Start Free Trial
                        {/*</Typography>*/}
                    </Button>
                </Box>
            </Box>
            <Box sx={{ bgcolor: "#ffffff", width: "100%", display: "flex", justifyContent: "space-between", px: "5vw", pt: '11vw' }}>
                <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start", width: "40%" }} >
                    <Typography sx={{
                        width: "100%",
                        background: 'linear-gradient(326deg, #4563FF 0%, #58AFFF 100%)',
                        backgroundClip: 'text',
                        color: 'transparent',
                        fontSize: '1.1vw',
                        fontFamily: 'DM Sans',
                        fontWeight: 600,
                        display: 'inline',

                    }}>
                        Step 6
                    </Typography>
                    <Typography sx={{
                        width: "100%",
                        color: '#2F2F2F',
                        fontSize: '2.34vw',
                        fontFamily: 'DM Sans',
                        fontWeight: 700,
                        display: 'inline',
                        pt: 2
                    }}>
                        Mobile application & QR code
                    </Typography>
                    <Typography sx={{
                        width: "100%",
                        color: '#808080',
                        fontSize: '1.04vw',
                        fontFamily: 'DM Sans',
                        fontWeight: 400,
                        display: 'inline',
                        pt: 2
                    }}>
                        all from the convenience of your mobile device.
                    </Typography>
                    <Box sx={{ pr: 10, pt: 2 }}>
                        <CheckIcon sx={{
                            background: 'linear-gradient(326deg, #4563FF 0%, #58AFFF 100%)',
                            backgroundClip: 'text',
                            color: '#4563FF',
                        }} />
                        <Typography sx={{
                            width: "100%",
                            color: '#374151',
                            fontSize: '1.14vw',
                            fontFamily: 'DM Sans',
                            fontWeight: 400,
                            display: 'inline',
                            pt: 2
                        }}>
                            It is a long established fact that a reader will be distracted by the readable content.
                        </Typography>
                    </Box>
                    <Box sx={{ pr: 10, pt: 2 }}>
                        <CheckIcon sx={{
                            background: 'linear-gradient(326deg, #4563FF 0%, #58AFFF 100%)',
                            backgroundClip: 'text',
                            color: '#4563FF',
                        }} />
                        <Typography sx={{
                            width: "100%",
                            color: '#374151',
                            fontSize: '1.14vw',
                            fontFamily: 'DM Sans',
                            fontWeight: 400,
                            display: 'inline',
                            pt: 2
                        }}>
                            It is a long established fact that a reader will be distracted.
                        </Typography>
                    </Box>
                    <Box sx={{ pr: 10, pt: 2 }}>
                        <CheckIcon sx={{
                            background: 'linear-gradient(326deg, #4563FF 0%, #58AFFF 100%)',
                            backgroundClip: 'text',
                            color: '#4563FF',
                        }} />
                        <Typography sx={{
                            width: "100%",
                            color: '#374151',
                            fontSize: '1.14vw',
                            fontFamily: 'DM Sans',
                            fontWeight: 400,
                            display: 'inline',
                            pt: 2
                        }}>
                            It is a long established fact that a reader.
                        </Typography>
                    </Box>
                    <Button
                        sx={{
                            position: 'relative',
                            background: 'linear-gradient(326deg, #4563FF 0%, #58AFFF 100%)',
                            color: 'white',
                            mt: 5,
                            width: '12vw',
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
                        Start Free Trial
                        {/*</Typography>*/}
                    </Button>
                </Box>
                <Box sx={{
                    background: `url(${Step6.src})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "100% 100%",
                    width: "730px",
                    height: "535px",
                    cursor: "point"
                }} />
            </Box>
        </>
    );
}