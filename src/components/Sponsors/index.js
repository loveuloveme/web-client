import { Flex, Text } from "@chakra-ui/react";

function Sponsors(){
    return (
        <Flex
            bgColor='#fafafa'
            flexDirection='column'
            alignItems='center'
            py='10px'
            border='1px solid #eaeaea'
            borderLeft='none'
            borderRight='none'
            my='100px'
        >
            <Text
                fontSize='18px'
                color='#919191'
                my='10px'
            >
                in partnership <strong>with</strong>
            </Text>
            <Flex
                justifyContent='center'
                alignItems='center'
                flex='1'
                py='50px'
            >
                <Flex
                    display='inline-flex'
                    direction='column'
                    alignItems='center'
                    transform='scale(1.5)'
                    color='rgb(152, 152, 152)'
                    cursor='pointer'
                    _hover={{
                        color: '#000000'
                    }}

                    onClick={() => window.open('https://nard.herokuapp.com/', 'blank')}
                >
                    <Text fontWeight='bold' fontSize='30px'>НАРДЫ</Text>
                    <Text fontSize='18px' pl='8px' letterSpacing='8px' mt='-12px'>онлайн</Text>
                </Flex>
            </Flex>
        </Flex>
    );
}

export default Sponsors;