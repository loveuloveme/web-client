import { Box, Image, Flex, Text, Container, SimpleGrid, Heading } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import ViewerPhotos from "./ViewerPhotos";
import ViewerStat from "./ViewerStat";
import { motion } from "framer-motion";
import FigureCard from "../FigureCard";
import {ReactComponent as SkeletonSVG} from '../../assets/svg/figure-skeleton.svg';
import './index.css';

function loadImage(url){
    const createPromise = () => {
        const img = new window.Image();
        img.src = url;

        return new Promise((resolve, reject) => {
            img.addEventListener('load', () => { resolve(img) })
            img.addEventListener('error', reject)
        });
    }

    if(Array.isArray(url)){
        return Promise.all(url.map(item => createPromise(item)));
    }else{
        return createPromise(url);
    }
}

export function Viewer({ photos_ = [], figureId }){

    const [isLoading, setLoading] = useState(true);
    const [selected, setSelected] = useState(0);

    
    const ref = useRef(['https://minifigures.e2ecdn.uk/Products/MF112.png?w=493&h=493&quality=85&scale=canvas', 'https://minifigures.e2ecdn.uk/Products/MF112---Main-01.jpg?w=500&h=500&quality=100&scale=canvas', 'https://minifigures.e2ecdn.uk/Products/MF112---Main-03.jpg?w=500&h=500&quality=85&scale=canvas']);
    
    let photos = ref.current;

    const selectImage = index => {
        setSelected(index);
    };

    useEffect(() => {
        setLoading(true);
        setSelected(0);

        setTimeout(() => {
            loadImage(photos).then(() => {
                setLoading(false);
            });
        }, 1000)
        
    }, [figureId, photos]);

    return (
        <Flex
            minH='100vh'
            direction='column'
            px='3%'
            bgColor='#EDEBED'
            pt={{ base: '150px', md: '0px' }}
        >
            <SimpleGrid
                flex='1'
                justifyContent='center'
                alignItems='center'
                columns={{ base: 1, md: 2, lg: 3 }}
            >
                <Flex
                    h='100%'
                    direction='column'
                >
                    <Box flex='1'></Box>
                    <Box
                        flex='1'
                    >
                        <Text
                            textTransform='uppercase'
                            fontFamily='Roboto Mono'
                            fontWeight='600'
                        >
                            Original series
                        </Text>
                        <Heading
                            textTransform='capitalize'
                            fontSize='5xl'
                            mt='15px'
                            mb='20px'
                        >
                            Sergei Papikan
                        </Heading>
                        <Text
                            fontSize='lg'
                            color='#656565'
                        >
                            Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat.
                        </Text>
                    </Box>
                    <ViewerPhotos imgs={photos} isLoading={isLoading} select={selectImage} />
                </Flex>
                <Flex justifyContent='center' alignItems='center' h='70vh'>
                    {isLoading ? <SkeletonSVG width='62%' height='90%' viewBox="0 0 729 967" className="skeleton-figure"/> :
                        <Image
                            as={motion.img}
                            w='100%'
                            h='100%'
                            objectFit='contain'
                            
                            my={{ base: 10, md: 0 }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}

                            key={photos[selected]}
                            src={photos[selected]}
                        />
                    }
                </Flex>
                <Flex
                    h='100%'
                    direction='column'
                    justifyContent='center'
                    py='80px'
                    display={{base: 'none', md: 'flex'}}

                    gridColumn={{base: 'auto', md: '1/3', lg: 'auto'}}
                >
                    <Box>
                        <Heading mb='10px'>See also
                            <Text display='inline' color='#a0a0a0'> in this collection</Text>
                        </Heading>
                        <SimpleGrid
                            columns={{base: 1, md: 3, lg: 2, '2xl': 3}}
                            gap='2'
                        >
                            <FigureCard />
                            <FigureCard />
                            <FigureCard />
                        </SimpleGrid>
                    </Box>
                </Flex>
            </SimpleGrid>
            <Box>
                <Container
                    maxW='container.xl'
                    bgColor='#ffffff'
                >
                    <Flex
                        alignItems={{ md: 'normal', lg: 'center' }}
                        py={{ base: '5', lg: '8' }}
                        px={{ base: '2', lg: '10' }}

                        direction={{ base: 'column', lg: 'row' }}
                    >
                        <ViewerStat />

                        <Flex
                            justifyContent='flex-end'
                            alignItems='flex-end'

                            mt={{ sm: '20px', lg: '0px' }}
                            direction={{ base: 'column', sm: 'row' }}
                        >
                            <Box
                                bgColor='#d7d7d7'
                                color='#000000'
                                textTransform='uppercase'
                                fontFamily='Roboto Mono'
                                lineHeight='50px'
                                px='22px'
                                fontSize='sm'
                                cursor='pointer'
                                mr={{ base: '0px', sm: '10px' }}
                                mt={{ base: '25px', sm: '0px' }}
                                w={{ base: '100%', sm: 'auto' }}
                                textAlign={{ base: 'center', sm: 'left' }}
                            >
                                add to wishlist
                            </Box>
                            <Box
                                bgColor='#000000'
                                color='#ffffff'
                                textTransform='uppercase'
                                fontFamily='Roboto Mono'
                                lineHeight='50px'
                                px='22px'
                                fontSize='sm'
                                cursor='pointer'

                                mt={{ base: '5px', sm: '0px' }}
                                w={{ base: '100%', sm: 'auto' }}
                                textAlign={{ base: 'center', sm: 'left' }}
                            >
                                add to cart
                            </Box>
                        </Flex>
                    </Flex>
                </Container>
            </Box>
        </Flex>
    );
}