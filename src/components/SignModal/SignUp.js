import { Flex, Box, FormControl, FormLabel, Input, InputGroup, HStack, InputRightElement, Stack, Heading, Text, Link, Image, Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Alert, AlertIcon, AlertTitle, AlertDescription, CloseButton, Spinner } from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { useEffect, useState } from "react";
import signupImage from '../../assets/img/signup.gif'

import { signUp } from '../../store/slices/auth/authThunk'
import { useDispatch, useSelector } from 'react-redux';

export default function SignUp({ changeState }) {
    const [showPassword, setShowPassword] = useState(false);

    const dispatch = useDispatch();

    const { token, loading, signUpError } = useSelector((state) => state.auth);

    useEffect(() => {
        console.log('error: ', signUpError);
    }, [signUpError])

    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(signUp({ email, password, username }));
    }

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
                        backgroundImage={signupImage}
                        borderRadius='7px'

                        justifyContent='flex-start'
                        alignItems='flex-end'

                        px='15px'
                        mb='20px'
                    >
                        <Heading color='#ffffff' fontSize='7xl' letterSpacing='2px'>Hello</Heading>
                    </Flex>
                    {
                        signUpError &&
                        <Alert status='error'>
                            <AlertIcon />
                            <AlertTitle mr={2}>Something goes wrong ;)</AlertTitle>
                        </Alert>
                    }

                    <FormControl id="username" isRequired>
                        <FormLabel>Username</FormLabel>
                        <Input onChange={(e) => setUsername(e.target.value)} type="text" />
                    </FormControl>
                    <FormControl id="email" isRequired>
                        <FormLabel>Email address</FormLabel>
                        <Input onChange={(e) => setEmail(e.target.value)} type="email" />
                    </FormControl>
                    <FormControl id="password" isRequired>
                        <FormLabel>Password</FormLabel>
                        <InputGroup>
                            <Input onChange={(e) => setPassword(e.target.value)} type={showPassword ? 'text' : 'password'} />
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
                            disabled={loading}
                            onClick={handleLogin}
                            loadingText="Submitting"
                            size="lg"
                            bg='#000000'
                            color={'white'}
                            _hover={{
                                bg: 'gray.800',
                            }}>
                                {loading ? <Spinner size='sm' /> : 'Sign up'}
                        </Button>
                    </Stack>
                </Stack>
            </ModalBody>
        </>
    );
}