import { Box, Container, Heading, Flex, Text, Link, Image, SimpleGrid  } from "@chakra-ui/react";

function ColumnLink({children, path}){
    return (
        <Link fontSize='md' mb='5px'>{children}</Link>
    );
}

function Column({name, children}){
    return (
        <Box px='30px'>
            <Heading fontFamily='Roboto' textTransform='uppercase' fontSize='xl'>Help</Heading>
            <Flex
                alignItems='flex-start'
                flexDirection='column'
                mt='22px'
            >
                {children}
            </Flex>
        </Box>
    );
}

function Footer(){
    return (
        <Box>
            <Box
                bgColor='#060606'
            >
                <Container
                    maxW='container.xl'
                    color='#ffffff'
                    py='36px'
                >
                    <Flex justifyContent='space-evenly' direction={['column', null, 'row']} alignItems='center'>
                        <Box pos='relative'>
                            <Image src='https://brickingaround.com/wp-content/uploads/2017/10/sophia-cu-with-chat.png' />
                            <Text fontWeight='600' fontSize='5xl' lineHeight='50px' mt='-40px' mb={['50px', null, '0']}>Hello there!</Text>
                        </Box>
                        <SimpleGrid
                            columns={[2, 3]}
                            spacingY='20px'
                        >
                            <Column name='help'>
                                <ColumnLink>Terms</ColumnLink>
                                <ColumnLink>Delivery</ColumnLink>
                                <ColumnLink>Lorem ipsum</ColumnLink>
                            </Column>
                            <Column name='help'>
                                <ColumnLink>Terms</ColumnLink>
                                <ColumnLink>Delivery</ColumnLink>
                                <ColumnLink>Lorem ipsum</ColumnLink>
                            </Column>
                            <Column name='help'>
                                <ColumnLink>Terms</ColumnLink>
                                <ColumnLink>Delivery</ColumnLink>
                                <ColumnLink>Lorem ipsum</ColumnLink>
                            </Column>
                        </SimpleGrid>
                    </Flex>
                </Container>
            </Box>
            <Box
                bgColor='#060606'
            >
                <Container
                    maxW='container.xl'
                    color='#ffffff'
                    py='16px'
                    pb='50px'
                >
                    <Flex
                        direction={['column-reverse', 'row']}
                        fontSize='sm'
                        justifyContent='space-around'
                        alignItems={['flex-start', 'center']}
                    >
                        <Text textAlign={['left', 'center']} textTransform='uppercase' mt={['15px', null]}>© Minifigure Seller 2022</Text>
                        <Text maxW={[null, '50%']} fontSize='12px' color='gray.500'>A disclaimer should be used when the LEGO trademark appears on a Web page. An appropriate disclaimer would be “LEGO® is a trademark of the LEGO Group of companies which does not sponsor, authorize or endorse this site”.</Text>
                    </Flex>
                </Container>
            </Box>
        </Box>
    );
}

export default Footer;