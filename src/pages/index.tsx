import {DashboardLayout} from "@/layouts/layout";
import {TopNav} from "@/layouts/top-nav";
import React, {useState} from "react";
import {
    Container,
    Box, Button,
} from "@mui/material";
import Logo from "@/assets/logo";

export const Page = () => {
    const [openNav, setOpenNav] = useState(true);
    return (
        <>
            <Box sx={{ bgcolor: "#FFFFFF", width: "100%", px: 10, py: 5 }}>
                <Box sx={{display: "flex", justifyContent: "space-between"}}>
                    <Box>
                        <Logo/>
                    </Box>
                    <Box sx={{display: "flex", justifyContent: "space-evenly", alignItems: "center", width: "50%"}}>
                        <Box>
                            <Button>
                                Pricing
                            </Button>
                            <Button>
                                Resource Center
                            </Button>
                            <Button>
                                About
                            </Button>
                            <Button>
                                Contact Us
                            </Button>
                        </Box>
                        <Button sx={{ bgcolor: "var(--1, linear-gradient(326deg, #4563FF 0%, #58AFFF 100%));\n" }}>
                            Sign Up
                        </Button>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default Page;