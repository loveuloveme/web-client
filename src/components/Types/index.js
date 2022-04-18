import { Box, Container, Heading, Flex, Text, SimpleGrid } from "@chakra-ui/react";

function TypeBlock({img, title, style={}}){
    return (
        <Flex
            pos='relative'
            bgSize='cover'
            bgPos='center'
            bgImage={img}
            h="400px"
            p='30px'
            alignItems='center'
            justifyContent='center'
            cursor='pointer'
            style={style.container}
        >
            <Heading color='#fff' size='2xl' textAlign='center'>{title}</Heading>
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
                    gap={0}
                    my='10px'
                >
                    <TypeBlock img={require('../../assets/img/types/original.jpg')} title='ORIGINAL SERIES' />
                    <TypeBlock img={require('../../assets/img/types/custom.jpg')} title={'CUSTOM SERIES'} />
                </SimpleGrid>
            </Container>
        </Box>
    );
}

export default Types;