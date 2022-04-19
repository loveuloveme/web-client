import { Box, Container, Heading, Flex, SimpleGrid } from "@chakra-ui/react";
import FigureCard from "../components/FigureCard";

import {Filter, FilterBlock, FilterCheckbox} from '../components/Filter';
import Popular from "../components/Popular";

function Minifigures(){
    return (
        <>
            <Box
                bgColor='whitesmoke'
                h='450px'
                mb='30px'

                bgImage='https://image.api.playstation.com/cdn/EP1018/CUSA00563_00/Dx0GfbLm6f7TBSMKzaWYPwmvELblGjWN.jpg'
                bgSize='cover'
                bgPos='center'
            >
                <Container maxW='container.xl' h='100%'>
                    <Flex
                        h='100%'
                        alignItems='flex-end'
                    >
                        <Heading
                            lineHeight={['80px', null, '200px']}
                            fontSize={['100px', '100px', '200px']}
                            color='#ffffff'
                            textTransform='uppercase'
                            mb='10px'
                        >
                            All FIGURES
                        </Heading>
                    </Flex>
                </Container>
            </Box>
            <Container maxW='container.xl'>
                
                <Flex direction='column' pb='100px'>
                    
                    <Flex direction={['column', null, 'row']}>
                        <Box w={['100%', null, '300px']} mb='30px'>
                            <Filter>
                                <FilterBlock name='SERIES'>
                                    <FilterCheckbox count='100'>Original</FilterCheckbox>
                                    <FilterCheckbox count='100'>Custom</FilterCheckbox>
                                </FilterBlock>
                                <FilterBlock name='CATEGORY'>
                                    <FilterCheckbox count='100'>MARVEL</FilterCheckbox>
                                    <FilterCheckbox count='100'>DC</FilterCheckbox>
                                    <FilterCheckbox count='100'>TV celebrities</FilterCheckbox>
                                </FilterBlock>
                                <FilterBlock name='CHARACTER'>
                                    <FilterCheckbox count='100'>Iron man</FilterCheckbox>
                                    <FilterCheckbox count='100'>Spider Man</FilterCheckbox>
                                    <FilterCheckbox count='100'>Yakidan</FilterCheckbox>
                                </FilterBlock>
                                <FilterBlock name='availability'>
                                    <FilterCheckbox count='100'>Iron man</FilterCheckbox>
                                    <FilterCheckbox count='100'>Spider Man</FilterCheckbox>
                                    <FilterCheckbox count='100'>Yakidan</FilterCheckbox>
                                </FilterBlock>
                            </Filter>
                        </Box>
                        <Box flex='1'>
                            <Heading size='3xl' mb='20px'>FIGURES</Heading>
                            <SimpleGrid 
                                columns={[2, 3, null, null, 4]}
                                gap={1}
                            >
                                {new Array(20).fill(0).map((item, i) => <FigureCard key={i} />)}
                            </SimpleGrid>
                        </Box>
                    </Flex>
                </Flex>
            </Container>
            <Popular mb='50px' />
        </>
    );
}


export default Minifigures;