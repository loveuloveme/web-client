import { Box, Image, Flex, Text, Button } from "@chakra-ui/react";
import ReactRain from 'react-rain-animation';
import { motion } from "framer-motion";
import "react-rain-animation/lib/style.css";
import heroImg from '../../assets/img/league.png';
import bgImg from '../../assets/img/arkham.jpg';
import { useEffect, useState } from "react";
import CacheImage from "../../utils/CacheImage";

function Intro() {
    const [bgLoaded, setBgLoaded] = useState(false);
    const [heroesLoaded, setHeroesLoaded] = useState(false);

    useEffect(() => {
        CacheImage(heroImg).then(() => setHeroesLoaded(true));
        CacheImage(bgImg).then(() => setBgLoaded(true));
    }, [])

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
                        lineHeight='normal'
                    >
                        ORDER NOW
                    </Button>
                </Flex>
                {heroesLoaded && bgLoaded &&
                    <Image
                        as={motion.img}
                        flex='1'
                        maxW='100%'
                        maxH='min(80vh, 1000px)'
                        objectPosition='bottom'
                        src={heroImg}
                        zIndex={10}

                        initial={{
                            opacity: 0,
                            transform: 'translateY(20px)',
                        }}

                        animate={{
                            opacity: 1,
                            transform: 'translateY(0px)',
                            transition: { delay: 0.2, duration: 0.5, ease: 'easeInOut' }
                        }}

                        height={['55vh', null, '80vh']}
                        objectFit={{ base: 'cover', lg: 'contain' }}
                    />
                }

                <Box
                    pos='absolute'
                    w='100%'
                    h='100%'
                    left='0'
                    top='0'
                    zIndex='10'
                    bgImage='linear-gradient(0deg, rgba(15,16,20,1) 0%, rgba(0,0,0,0.9) 15%, rgba(0,0,0,0) 51%)'
                ></Box>
                {bgLoaded &&
                    <Image
                        as={motion.img}
                        src={bgImg}
                        w='100%'
                        h='100%'
                        top='0'
                        left='0'
                        position='absolute'
                        objectFit='cover'
                        objectPosition='top'

                        initial={{
                            opacity: 0,
                        }}

                        animate={{
                            opacity: 0.15,
                            transition: { delay: 0.2, duration: 0.4, ease: 'easeInOut' }
                        }}
                    />}
            </Flex>
        </Flex>
    );
}

export default Intro;