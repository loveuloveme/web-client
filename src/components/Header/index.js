import { Container, Stack, chakra } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logotype from "../Logotype";
import MobileDrawer from "./MobileDrawer";
import Profile from "./Profile";
import React from "react";
import HeaderLink from "./HeaderLink";


const links = [
    {name: 'HOME', path: '/'},
    {name: 'MINIFIGURES', path: '/figures'},
    {name: 'VIEWER', path: '/figure/123123'},
    {name: 'ABOUT', path: '/about'}
]

export default function Header({ theme }){
    const [transparent, setTransparent] = useState(true);

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
                <Link to='/'>
                    <Logotype width='50px' height='50px' />
                </Link>

                <Stack
                    as="nav"
                    direction={{md: 'row'}}
                    spacing='10px'
                    display={{ sm: 'none', base: 'none', md: 'flex' }}
                >
                    {links.map(item => <HeaderLink key={item.path} path={item.path} light={theme.light && transparent}>{item.name}</HeaderLink>)}
                </Stack>

                <Profile display={{ sm: 'none', base: 'none', md: 'flex' }} />
                <MobileDrawer links={links} />
            </Container>
        </chakra.header>
    );
}