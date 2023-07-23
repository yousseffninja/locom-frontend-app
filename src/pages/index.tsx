import {DashboardLayout} from "@/layouts/layout";
import {TopNav} from "@/layouts/top-nav";
import React, {useState} from "react";
import {
    Box,
    Typography,
    TextField, InputAdornment,Button,OutlinedInput
} from "@mui/material";

import { FirstSection } from "@/components/home-page/first-section";

export const Page = () => {
    const [openNav, setOpenNav] = useState(true);
    return (
        <>
            <TopNav />
            <FirstSection />
        </>
    )
}

export default Page;