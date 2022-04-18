import { Box, Heading, Text } from "@chakra-ui/react";

function BlockHeading({name, text}){
    return (
        <Box>
            <Heading fontSize={['4xl', null, null, null, '6xl']}>{name}</Heading>
            <Text color='gray.400' mt='-2px'>{text}</Text>
        </Box>
    );
}

export default BlockHeading;