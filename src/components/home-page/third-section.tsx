import {
    Stack,
    Box,
    Button, Typography,
} from "@mui/material";
import Arrow from '@/assets/home-page/arrow.png'

export const ThirdSection = () => {
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
                        fontWeight: '500',
                        lineHeight: 'normal',
                        display: 'inline'
                    }}>Promblem</Typography>
                </Box>
                <Typography
                    component="span"
                    sx={{
                        width: "54.5vw",
                        color: 'black',
                        fontSize: '3.4477864583333333vw',
                        fontFamily: 'DM Sans',
                        fontWeight: 550,
                        textAlign: 'center',
                        mt: 2
                    }}
                >
                    Struggling to unlock the full potential of{' '}
                    <Typography
                        component="span"
                        sx={{
                            background: 'linear-gradient(326deg, #4563FF 0%, #58AFFF 100%)',
                            backgroundClip: 'text',
                            textAlign: 'center',
                            color: 'transparent',
                            fontSize: '3.4477864583333333vw',
                            fontFamily: 'DM Sans',
                            fontWeight: 550,
                        }}
                    >
                        word-of-mouth
                    </Typography>{' '}
                    recommendations and online reputation?
                </Typography>
                <Typography sx={{
                    mt: 2,
                    width: "52vw",
                    color: '#7E7E7E',
                    textAlign: 'center',
                    fontFamily: 'Microsoft Sans Serif',
                    fontSize: '18px',
                    fontStyle: 'normal',
                    fontWeight: '400',
                    lineHeight: '175%',
                    alignSelf: "center"
                }}>
                    Don't let overlooked referrals and a lackluster online reputation hinder your business growth. Discover the solution that drives your sales to unprecedented levels.
                </Typography>
                <Box
                    sx={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'flex-end',
                        pr: 35,
                        backgroundPositionY: '100px',
                    }}
                >
                    <Box
                        sx={{
                            background: `url(${Arrow.src})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: '100% 100%',
                            width: '193px',
                            height: '517px',
                            mt: "-1vw"
                            // backgroundPositionY: '100px',
                        }}
                    />
                </Box>
                <Box sx={{
                    mt: "-12vw",
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
                        fontStyle: 'normal',
                        textAlign: 'center',
                        fontWeight: '500',
                        lineHeight: 'normal',
                        display: 'inline'
                    }}>Solution</Typography>
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
                        mt: 2
                    }}
                >
                    Unleash the power of{' '}
                    <Typography
                        component="span"
                        sx={{
                            background: 'linear-gradient(326deg, #4563FF 0%, #58AFFF 100%)',
                            backgroundClip: 'text',
                            color: 'transparent',
                            fontSize: '3.4477864583333333vw',
                            textAlign: 'center',
                            fontFamily: 'DM Sans',
                            fontWeight:550,
                        }}
                    >
                        Locom
                    </Typography>{' '}
                    to grow your business
                </Typography>
                <Typography sx={{
                    mt: 5,
                    width: "52vw",
                    color: '#7E7E7E',
                    textAlign: 'center',
                    fontFamily: 'Microsoft Sans Serif',
                    fontSize: '18px',
                    fontStyle: 'normal',
                    fontWeight: '400',
                    lineHeight: '175%',
                    alignSelf: "center"
                }}>
                    Effortlessly tap into the potential of word-of-mouth referrals, strengthen your online reputation, and witness your sales reach new heights.
                </Typography>
                <Typography sx={{
                    mt: 5,
                    width: "52vw",
                    color: '#7E7E7E',
                    textAlign: 'center',
                    fontFamily: 'Microsoft Sans Serif',
                    fontSize: '18px',
                    fontStyle: 'normal',
                    fontWeight: '400',
                    lineHeight: '175%',
                    alignSelf: "center"
                }}>
                    Experience the transformative power in your business first hand.
                </Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-evenly", pt: "2.5vw", bgcolor: "#ffffff", px: "35vw" }}>
                <Box sx={{
                    width: "11,5vw" ,
                    height: "13,5vw",
                    px: "2.2vw",
                    bgcolor: "#F4F4F4",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}>
                    <Typography sx={{
                        background: 'linear-gradient(326deg, #4563FF 0%, #58AFFF 100%)',
                        backgroundClip: 'text',
                        textAlign: 'center',
                        color: 'transparent',
                        fontSize: '4.477864583333333vw',
                        fontFamily: 'DM Sans',
                        fontWeight: 700,
                    }}>
                        35
                    </Typography>
                    <Typography sx={{
                        textAlign: 'center',
                        color: 'black',
                        fontSize: '1.3vw',
                        fontFamily: 'DM Sans',
                        fontWeight: 700,
                        width: "7vw"
                    }}>
                        Years Of Experiance
                    </Typography>
                </Box>
                <Box sx={{
                    width: "20vw" ,
                    height: "13,5vw",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    ml: 4,
                }}>
                    <Typography sx={{

                        color: 'black',
                        fontSize: '1.3vw',
                        fontFamily: 'DM Sans',
                        fontWeight: 700,
                        width: "20vw",
                        pt: 3,
                        content: "''",
                    }}>
                        Unleash Locom
                    </Typography>
                    <Typography sx={{

                        color: 'black',
                        fontSize: '1.3vw',
                        fontFamily: 'DM Sans',
                        fontWeight: 700,
                        width: "20vw",
                        pt: 2,
                    }}>
                        Automate referral generation
                    </Typography>
                    <Typography sx={{
                        color: 'black',
                        fontSize: '1.3vw',
                        fontFamily: 'DM Sans',
                        fontWeight: 700,
                        width: "20vw",
                        pt: 2,
                    }}>
                        amplify your online reputation
                    </Typography>
                    <Typography sx={{

                        color: 'black',
                        fontSize: '1.3vw',
                        fontFamily: 'DM Sans',
                        fontWeight: 700,
                        width: "20vw",
                        pt: 2,
                    }}>
                        skyrocket your sales
                    </Typography>
                </Box>
            </Box>
        </>
    );
}