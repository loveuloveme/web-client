import { Container, Stack, Box, Flex, chakra } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Logotype from "../Logotype";
import MobileDrawer from "./MobileDrawer";
import Profile from "./Profile";
import React from "react";
import HeaderLink from "./HeaderLink";


const links = [
    {name: 'HOME', path: '/', theme: { light: true }},
    {name: 'MINIFIGURES', path: '/figures', theme: { light: true }},
    {name: 'VIEWER', path: '/figure/1', theme: { light: false }},
    {name: 'ABOUT', path: '/about', theme: { light: false }}
]

export default function Header(){
    const [transparent, setTransparent] = useState(true);
    const location = useLocation();
    const [theme, setTheme] = useState({});

    const _parse = url => url.split('/')[1];
    
    useEffect(() => {
        setTheme(links.find(item => _parse(item.path) === _parse(location.pathname) || { theme: { light: false } }).theme);
    }, [location]);


    useEffect(() => {
        if(typeof window !== "undefined"){
            const onScroll = () => setTransparent(window.scrollY < 300);
            window.addEventListener('scroll', onScroll);
            return () => window.removeEventListener('scroll', onScroll);
        }
    }, []);
    
    return (
        <chakra.header
            position="fixed"
            w="100%"
            zIndex={100}
            transition='all 0.2s linear'
            px='7'
            bg={transparent ? '' : 'rgba(255, 255, 255)'}
            boxShadow={transparent ? 'none' : 'xs'}
        >
            <Container
                display='flex'
                maxW="container.xl"
                justifyContent='space-between'
                alignItems='center'
                padding='10px 0'
                h='82px'
            >
                <Box flexBasis='33.33%'>
                    <Link to='/'>
                        <Logotype width='50px' height='50px' />
                    </Link>
                </Box>

                <Stack
                    as="nav"
                    direction={{md: 'row'}}
                    spacing='10px'
                    display={{ sm: 'none', base: 'none', md: 'flex' }}
                    flexBasis='33.33%'
                    justifyContent='center'
                >
                    {links.map(item => <HeaderLink key={item.path} path={item.path} light={theme.light && transparent}>{item.name}</HeaderLink>)}
                </Stack>

                <Flex flexBasis='33.33%' justifyContent='flex-end'>
                    <Profile theme={theme} />
                </Flex>

                <MobileDrawer links={links} />
            </Container>
        </chakra.header>
    );
}