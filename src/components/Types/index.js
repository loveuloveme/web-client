import { Box, Container, Heading, Flex, Text, SimpleGrid } from "@chakra-ui/react";

import originalImage from '../../assets/img/types/original.jpg';
import customImage from '../../assets/img/types/custom.jpg';
import { motion } from "framer-motion";

function TypeBlock({img, title, style={}}){
    return (
        <Flex
            bgSize='cover'
            bgPos='center'
            bgImage={img}
            h="400px"
            
            cursor='pointer'
            style={style.container}
        >
            <Flex
                as={motion.div}
                w='100%'
                h='100%'

                alignItems='center'
                justifyContent='center'
                transition='all 0.1s linear'
                _hover={{
                    bg: 'rgba(0, 0, 0, 0.2)'
                }}
            >
                <Heading color='#fff' size='2xl' textAlign='center'>{title}</Heading>
            </Flex>
            
        </Flex>
    );
}

function Types(){
    return (
        <Box
            pt='100px'
        >
            <Container maxW='container.xl'>
                <Text textAlign='center' fontFamily='Smooch Sans' fontSize='5xl' fontWeight='bold'>THERE IS TWO TYPES OF FIGURES</Text>
                <SimpleGrid
                    columns={{ base: 1, sm: 2}}
                    gap={2}
                    my='10px'
                >
                    <TypeBlock img={originalImage} title='ORIGINAL SERIES' />
                    <TypeBlock img={customImage} title='CUSTOM SERIES' />
                </SimpleGrid>
            </Container>
        </Box>
    );
}

export default Types;