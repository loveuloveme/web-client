import { Flex, Box, FormControl, FormLabel, Input, InputGroup, HStack, InputRightElement, Stack, Heading, Text, Link, Image, Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Alert, AlertIcon, AlertTitle, AlertDescription, CloseButton, Spinner } from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { useEffect, useState } from "react";
import { signUp, login } from '../../store/slices/auth/authThunk'
import { useDispatch, useSelector } from 'react-redux';
import { clearErrors } from '../../store/slices/auth/auth';

import signupImage from '../../assets/img/signup.gif'
import loginImage from '../../assets/img/login.png';

export default function Form(){
    const [isSignUp, setSignUp] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const dispatch = useDispatch();

    const { loading, signUpError, signInError } = useSelector((state) => state.auth);
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const valid = (username || !isSignUp) && password && email;

    useEffect(() => {
        dispatch(clearErrors());
    }, [username, email, password]);

    const handleLogin = (e) => {
        e.preventDefault();

        if(isSignUp){
            dispatch(signUp({ email, password, username }));
        }else{
            dispatch(login({ email, password }));
        }
    }

    return (
        <>
            <ModalHeader mb='-5px'>
                {isSignUp
                    ?
                    <>
                        <Heading fontSize='5xl'>Join</Heading>
                        <Text fontWeight='500' fontSize='md'>
                            Already a user? <Link color={'blue.400'} onClick={() => setSignUp(false)}>Login</Link>
                        </Text>
                    </>
                    :
                    <>
                        <Heading fontSize='5xl'>Login</Heading>
                        <Text fontWeight='500' fontSize='md'>
                            Still not a user? <Link color={'blue.400'} onClick={() => setSignUp(true)}>Sign Up</Link>
                        </Text>
                    </>
                }

            </ModalHeader>
            <ModalCloseButton />
            <ModalBody pb='20px'>
                <Stack spacing={4}>
                    {isSignUp ?
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
                        :
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
                                src={loginImage}
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
                    }
                    {
                        signUpError || signInError &&
                        <Alert status='error'>
                            <AlertIcon />
                            <AlertTitle mr={2}>Something goes wrong ;)</AlertTitle>
                        </Alert>
                    }

                    {isSignUp &&
                        <FormControl id="username" isRequired>
                            <FormLabel>Username</FormLabel>
                            <Input disabled={loading} onChange={(e) => setUsername(e.target.value)} type="text" />
                        </FormControl>
                    }

                    <FormControl id="email" isRequired>
                        <FormLabel>Email address</FormLabel>
                        <Input disabled={loading} onChange={(e) => setEmail(e.target.value)} type="email" />
                    </FormControl>
                    <FormControl id="password" isRequired>
                        <FormLabel>Password</FormLabel>
                        <InputGroup>
                            <Input disabled={loading} onChange={(e) => setPassword(e.target.value)} type={showPassword ? 'text' : 'password'} />
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
                            disabled={loading || !valid}
                            onClick={handleLogin}
                            loadingText="Submitting"
                            size="lg"
                            bg='#000000'
                            color={'white'}
                            _hover={{
                                bg: 'gray.800',
                            }}>
                            {loading ? <Spinner size='sm' /> : (isSignUp ? 'Sign up' : 'Login')}
                        </Button>
                    </Stack>
                </Stack>
            </ModalBody>
        </>
    );
}