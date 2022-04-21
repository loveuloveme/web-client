import { AspectRatio , Box, Container, Heading, Flex, Text, VStack } from "@chakra-ui/react";
import { loremIpsum } from 'react-lorem-ipsum';
import Sponsors from "../components/Sponsors";

import aboutVideo from '../assets/video/morning.mp4';

function About(){
    return (
        <Box>
            <Container
                pt='100px'
                maxW='container.xl'
            >
                <Text
                    textAlign='center'
                    fontSize='6xl'
                    fontWeight='bold'

                    textTransform='uppercase'
                    m='10px 0 13px 0'
                >
                    Who we are
                </Text>

                <AspectRatio
                    ratio={22/9}
                    overflow='hidden'
                    pos='relative'
                    bgColor='#000000'
                >
                    <>
                        <video
                            autoPlay='autoplay'
                            muted='muted'
                            loop

                            style={{
                                objectFit: 'cover',
                                width: '100%',
                                height: '100%',
                                transform: 'scale(1.1)'
                            }}
                        >
                            <source src={aboutVideo} type="video/mp4" />
                        </video>

                        <Flex
                            pos='absolute'
                            top='0'
                            left='0'
                            w='100%'
                            h='100%'

                            direction='column'
                        >
                            <Text
                                color='#ffffff'
                                fontSize='5xl'
                                fontWeight='bold'
                            >
                                We are ...
                            </Text>
                        </Flex>
                    </>
                </AspectRatio>
                <Flex
                    direction='column'
                    alignItems='center'
                    mt='50px'
                >
                    <Box maxW='80%'>
                        <Heading textTransform='uppercase' size='3xl' mb='12px'>About #NAME</Heading>
                        <VStack
                            fontSize='lg'
                            spacing='15px'
                        >
                            <Text>
                                {loremIpsum({ p: 1 })}
                            </Text>
                            <Text>
                                {loremIpsum({ p: 1 })}
                            </Text>
                        </VStack>
                    </Box>
                </Flex>
            </Container>
            <Sponsors />
        </Box>
    );
}


export default About;