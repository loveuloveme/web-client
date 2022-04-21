import { Container, Stack, Box, Flex, chakra, Text } from "@chakra-ui/react";
import { useState, useEffect, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import Logotype from "../Logotype";
import MobileDrawer from "./MobileDrawer";
import Profile from "./Profile";
import React from "react";
import { useSelector } from "react-redux";

export const ThemeContext = React.createContext({ light: true });

function HeaderLink({ path, children }) {
    const { light } = useContext(ThemeContext);

    const lightStyle = light && {
        color: '#ffffff'
    };
    const hoverStyle = {
        color: light ? '#f2f2f2' : '#141414',
        bgColor: 'rgba(0, 0, 0, 0.07)'
    };

    const activeStyle = path === useLocation().pathname && hoverStyle;

    return (
        <Link to={path}>
            <Text
                textTransform='uppercase'
                fontWeight='600'
                color='#000000'
                fontSize='14px'
                p='6px 15px'
                borderRadius='8px'
                transition='all 0.18s ease-in'
                _hover={hoverStyle}

                {...lightStyle}
                {...activeStyle}
            >
                {children}
            </Text>
        </Link>
    );
}
export default function Header() {
    const { theme } = useSelector((state) => state.header);
    const light = theme == 'light';

    const [transparent, setTransparent] = useState(true);

    useEffect(() => {
        if (typeof window !== "undefined") {
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
                <ThemeContext.Provider value={{ light: light && transparent }}>

                    <Box flexBasis='33.33%'>
                        <Link to='/'>
                            <Logotype width='50px' height='50px' />
                        </Link>
                    </Box>

                    <Stack
                        as="nav"
                        direction={{ md: 'row' }}
                        spacing='10px'
                        display={{ sm: 'none', base: 'none', md: 'flex' }}
                        flexBasis='33.33%'
                        justifyContent='center'
                    >
                        <HeaderLink path='/'>HOME</HeaderLink>
                        <HeaderLink path='/figures'>MINIFIGURES</HeaderLink>
                        <HeaderLink path='/figure/1'>VIEWER</HeaderLink>
                        <HeaderLink path='/about'>ABOUT</HeaderLink>
                    </Stack>

                    <Flex flexBasis='33.33%' justifyContent='flex-end'>
                        <Profile />
                    </Flex>

                    <MobileDrawer />
                </ThemeContext.Provider>
            </Container>
        </chakra.header>
    );
}