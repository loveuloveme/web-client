import { Box, Image, Flex } from "@chakra-ui/react";
import { motion, isValidMotionProp  } from "framer-motion";
import { chakra } from '@chakra-ui/react';

const MotionBox = chakra(motion.div, {
    shouldForwardProp: isValidMotionProp,
});

const Block = ({ img, index, onClick, hide }) => {
    return (
        <Box
            as={motion.div}
            w='80px'
            h='80px'
            bgColor='whitesmoke'
            mr='2'
            pos='relative'
            cursor='pointer'

            whileHover={!hide && { scale: 1.04 }}
            whileTap={!hide && { scale: 1 }}

            onClick={() => !hide && onClick(index)}
        >
            <MotionBox
                pos='absolute'
                top='0'
                left='0'
                w='80px'
                h='80px'
                bg='#323232'

                animate={{
                    height: hide ? 80 : 0,
                }}
                transition={{ delay: 0.1*index, }}
            />
            <Image src={img} />
        </Box>
    )
}

export default function ViewerPhotos({ imgs = [], isLoading = true, select}) {
    return (
        <Flex
            flex='1'
        >
            {imgs.map((item, i) => <Block index={i} key={i} img={item} onClick={select} hide={isLoading} />)}
        </Flex>
    );

};