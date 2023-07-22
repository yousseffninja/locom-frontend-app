import { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import { TopNav } from './top-nav';
import { usePathname } from 'next/navigation';
import React from 'react';

const SIDE_NAV_WIDTH = 280;

const LayoutRoot = styled('div')(({ theme }) => ({
    display: 'flex',
    flex: '1 1 auto',
    maxWidth: '100%',
    [theme.breakpoints.up('lg')]: {
        paddingLeft: SIDE_NAV_WIDTH
    },
    direction: 'ltr'
}));

const LayoutContainer = styled('div')({
    display: 'flex',
    flex: '1 1 auto',
    flexDirection: 'column',
    width: '100%',
    background: "#F9F9FB"
});

export const DashboardLayout = (props: { children: any; }) => {
    const { children } = props;
    const pathname = usePathname();
    const [openNav, setOpenNav] = useState(true);

    useEffect(
        () => {
            if (openNav) {
                setOpenNav(false);
            }
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [pathname]
    );

    return (
        <>
            <TopNav onNavOpen={() => setOpenNav(true)} />
            <LayoutRoot>
                <LayoutContainer>
                    {children}
                </LayoutContainer>
            </LayoutRoot>
        </>
    );
};