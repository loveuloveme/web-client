import React from "react";
import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
} from '@chakra-ui/react';
import { useDisclosure, Flex, Box, Button, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { HamburgerIcon } from '@chakra-ui/icons'

import Profile from "./Profile";

function MobileLink({ children, path }) {
    return (
        <Link to={path}>
            <Box
                p='5px 15px'
                borderRadius='10px'
                _hover={{ bgColor: '#f2f2f2' }}
            >
                <Text
                    textTransform='uppercase'
                    fontFamily='Roboto'
                    fontWeight={500}
                    color='#5c5c5c'
                >
                    {children}
                </Text>
            </Box>
        </Link>
    );
}

function MobileDrawer({ links }) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef();

    return (
        <Flex
            display={{ base: "flex", md: "none" }}
        >
            <Button ref={btnRef} onClick={onOpen}>
                <HamburgerIcon />
            </Button>

            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent px='10px'>
                    <DrawerCloseButton />
                    <DrawerHeader>
                        <Profile />
                    </DrawerHeader>
                    <DrawerBody>
                        <MobileLink path='/'>HOME</MobileLink>
                        <MobileLink path='/figures'>MINIFIGURES</MobileLink>
                        <MobileLink path='/figure/1'>VIEWER</MobileLink>
                        <MobileLink path='/about'>ABOUT</MobileLink>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </Flex>
    );
};

export default MobileDrawer;