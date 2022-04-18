import { Box, Container, Heading, Flex, Text, Image, SimpleGrid } from "@chakra-ui/react";
import BlockHeading from "../BlockHeading";
function Category({name, img}){
    return (
        <Flex
            w='100%'
            h='300px'
            pos='relative'

            cursor='pointer'

            justifyContent='center'
            alignItems='center'
            filter='grayscale(1)'
            _hover={{
                filter: 'grayscale(0.5)'
            }}
        >
            <Image zIndex='-1' left='0' bottom='0' pos='absolute' w='100%' h='100%' objectFit='cover' src={img} />
            <Heading textAlign='center' maxW='60%' color='#00000'>
                <Text display='inline' color='#ffffff' bgColor='#000000' p='0 10px'>{name}</Text>
            </Heading>
        </Flex>
    );
}

let data = [
    {name: 'Star Wars', img: 'https://www.fbtb.net/wp-content/uploads/2009/10/swlego46.gif'},
    {name: 'Marvel', img: 'https://www.lego.com/cdn/cs/set/assets/bltf3065331bcbe7e81/Spiderman-Sidekick-Tall-2.jpg?fit=crop&format=jpg&quality=80&width=800&height=600&dpr=1'},
    {name: 'TV celebrities', img: 'https://i.ytimg.com/vi/Yc2mMTo05HY/maxresdefault.jpg'},
    {name: 'Movies', img: 'https://cdn.dribbble.com/users/6383361/screenshots/15751108/john_wick_edited_1_4x.jpg'},
];

function Categories(){
    return (
        <Container
            maxW="container.xl"
            pb='100px'
            flex='1'
        >
            <Box>
                <BlockHeading name='COLLECTIONS' text='lorem ipsum' />

                <SimpleGrid
                    gap={1}
                    columns={[1, null, 2, 3, 4]}
                    paddingTop='30px'
                >
                    {data.map((item, i) => <Category {...item} />)}
                </SimpleGrid>
            </Box>
        </Container>
    );
}

export default Categories;