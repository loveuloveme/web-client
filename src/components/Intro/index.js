import { Box, Image, Flex, Text, Button, SimpleGrid } from "@chakra-ui/react";
import ReactRain from 'react-rain-animation';
import "react-rain-animation/lib/style.css";

import FigureCard from '../FigureCard';

function Intro(){
    return (
        <Flex
            h={['65vh', null, '85vh']}
            maxH='1000px'
            bgColor='#000000'
            position='relative'
            overflow='hidden'

            justifyContent='center'
            alignItems='flex-end'
        >
            <Flex
                maxW='container.lg'
            >
                <Box w='100%' h='100%' pos='absolute' top='0' left='50%' maxW='1600px' transform='translateX(-50%)' opacity='0.25'>
                    <ReactRain numDrops="300" />
                </Box>
                <Flex
                    color='#ffffff'
                    alignItems='center'
                    w='100%'
                    flexDirection='column'

                    position='absolute'
                    left='0'
                    bottom='0'
                    zIndex='11'
                    py='50px'
                >
                    <Text fontSize={['8xl', '9xl']} fontWeight={600} textAlign='center' lineHeight='130px' fontFamily='Smooch Sans'>JUSTICE LEAGUE</Text>
                    <Button
                        size='md'
                        color='#000000'
                        borderRadius='0'
                        fontSize='xl'
                        py='30px'
                        px='40px'
                    >
                        ORDER NOW
                    </Button>
                </Flex>
                <Image
                    flex='1'
                    maxW='100%'
                    maxH='min(80vh, 1000px)'
                    objectPosition='bottom'
                    src={require('../../assets/img/league.png')}
                    zIndex={10}

                    height={['55vh', null, '80vh']}
                    objectFit={{base: 'cover', lg: 'contain'}}
                /> 

                <Box pos='absolute' w='100%' h='100%' left='0' top='0' zIndex='10' bgImage='linear-gradient(0deg, rgba(15,16,20,1) 0%, rgba(15,16,20,1) 15%, rgba(0,212,255,0) 50%)'></Box>
                <Image
                    src='https://cdn.wallpapersafari.com/7/48/Xy6lm2.jpg'
                    w='100%'
                    h='100%'
                    top='0'
                    left='0'
                    position='absolute'
                    opacity='0.25'
                    objectFit='cover'
                    objectPosition='top'
                />
            </Flex>
        </Flex>
    );
}

export default Intro;