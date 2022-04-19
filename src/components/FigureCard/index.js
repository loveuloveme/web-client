import { Box, Flex, Text, Image } from "@chakra-ui/react";
import { Link } from 'react-router-dom';

import defaultFigure from './img.png';

function FigureCard({ ids }){
    let id = Math.floor(Math.random() * 1000)
    return (
        <Link to={`/figure/${id}`}>
            <Box
                cursor='pointer'
                _hover={{ outline: '1px solid #cfcece' }}
                bgColor='#fbfbfb'
            >
                <Box
                    p='12px'
                >
                    <Image
                        src={defaultFigure}
                    />
                </Box>
                <Flex
                    p='4'
                    direction={['column', null, null, 'row']}
                    alignItems={['flex-start', null, null, 'center']}
                    justify-content='space-evenly'
                >
                    <Box>
                        <Text
                            fontWeight={600}
                            mt='6px'
                            textTransform='uppercase'
                            lineHeight='18px'
                            fontSize={['md', 'xl']}
                            maxW={['100%', null, null, '70%']}
                        >
                            SERGEI PAPIKAN
                        </Text>

                        <Text
                            fontFamily='Roboto Mono'
                            fontSize={12}
                            fontWeight={500}
                            mt='7px'
                            textTransform='uppercase'
                            color='gray.900'
                        >
                            ORIGINAL SERIES
                        </Text>
                    </Box>
                    <Text fontWeight='600'>$150</Text>
                </Flex>
            </Box>
        </Link>
    );
}


export default FigureCard;