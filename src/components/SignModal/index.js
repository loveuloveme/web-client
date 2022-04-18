import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Heading,
    Text,
    Link,
    Image,
    Button,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalOverlay,
} from '@chakra-ui/react';

import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { useState } from "react";

function SignUp({ changeState }) {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <>
            <ModalHeader mb='-5px'>
                <Heading fontSize='5xl'>Join</Heading>
                <Text fontWeight='500' fontSize='md'>
                    Already a user? <Link color={'blue.400'} onClick={changeState}>Login</Link>
                </Text>
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody pb='20px'>
                <Stack spacing={4}>
                    <Flex
                        h='160px'
                        w='100%'
                        backgroundSize='cover'
                        backgroundImage={require('../../assets/img/YSow.gif')}
                        borderRadius='7px'

                        justifyContent='flex-start'
                        alignItems='flex-end'

                        px='15px'
                        mb='20px'
                    >
                        <Heading color='#ffffff' fontSize='7xl' letterSpacing='2px'>Hello</Heading>
                    </Flex>
                    <HStack>
                        <Box>
                            <FormControl id="firstName" isRequired>
                                <FormLabel>First Name</FormLabel>
                                <Input type="text" />
                            </FormControl>
                        </Box>
                        <Box>
                            <FormControl id="lastName">
                                <FormLabel>Last Name</FormLabel>
                                <Input type="text" />
                            </FormControl>
                        </Box>
                    </HStack>
                    <FormControl id="email" isRequired>
                        <FormLabel>Email address</FormLabel>
                        <Input type="email" />
                    </FormControl>
                    <FormControl id="password" isRequired>
                        <FormLabel>Password</FormLabel>
                        <InputGroup>
                            <Input type={showPassword ? 'text' : 'password'} />
                            <InputRightElement h={'full'}>
                                <Button
                                    variant={'ghost'}
                                    onClick={() =>
                                        setShowPassword((showPassword) => !showPassword)
                                    }>
                                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                                </Button>
                            </InputRightElement>
                        </InputGroup>
                    </FormControl>
                    <Stack spacing={10} pt={2}>
                        <Button
                            loadingText="Submitting"
                            size="lg"
                            bg='#000000'
                            color={'white'}
                            _hover={{
                                bg: 'gray.800',
                            }}>
                            Sign up
                        </Button>
                    </Stack>
                </Stack>
            </ModalBody>
        </>
    );
}

function SignIn({ changeState }) {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <>
            <ModalHeader mb='-5px'>
                <Heading fontSize='5xl'>Login</Heading>
                <Text fontWeight='500' fontSize='md'>
                    Still not a user? <Link color={'blue.400'} onClick={changeState}>Sign Up</Link>
                </Text>
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody pb='20px'>
                <Stack spacing={4}>
                    <Flex
                        h='160px'
                        w='100%'
                        backgroundSize='contain'
                        backgroundPosition='center'
                        backgroundRepeat='no-repeat'
                        bgGradient='linear(to-r, #a8c0ff, #3f2b96);'
                        borderRadius='7px'

                        justifyContent='flex-start'
                        alignItems='flex-end'

                        pos='relative'

                        px='15px'
                        mb='20px'
                    >
                        <Image
                            src={require('../../assets/img/login.png')}
                            pos='absolute'
                            zIndex='0'
                            h='100%'
                            w='100%'

                            objectFit='contain'
                            objectPosition='center'
                        />
                        <Heading color='#ffffff' fontSize='7xl' letterSpacing='2px' zIndex='2'>
                            Welcome back
                        </Heading>
                    </Flex>
                    <FormControl id="email" isRequired>
                        <FormLabel>Email address</FormLabel>
                        <Input type="email" />
                    </FormControl>
                    <FormControl id="password" isRequired>
                        <FormLabel>Password</FormLabel>
                        <InputGroup>
                            <Input type={showPassword ? 'text' : 'password'} />
                            <InputRightElement h={'full'}>
                                <Button
                                    variant={'ghost'}
                                    onClick={() =>
                                        setShowPassword((showPassword) => !showPassword)
                                    }>
                                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                                </Button>
                            </InputRightElement>
                        </InputGroup>
                    </FormControl>
                    <Stack spacing={10} pt={2}>
                        <Button
                            loadingText="Submitting"
                            size="lg"
                            bg='#000000'
                            color={'white'}
                            _hover={{
                                bg: 'gray.800',
                            }}>
                            Login
                        </Button>
                    </Stack>
                </Stack>
            </ModalBody>
        </>
    );
}



function VerticallyCenter({ isOpen, onOpen, onClose }) {
    const [signUp, setSignUp] = useState(false);

    return (
        <Modal onClose={onClose} isOpen={isOpen} isCentered blockScrollOnMount={false}>
            <ModalOverlay />
            <ModalContent>
                {signUp ? <SignUp changeState={() => setSignUp(false)} /> : <SignIn changeState={() => setSignUp(true)} />}
            </ModalContent>
        </Modal>
    )
}

export default VerticallyCenter;