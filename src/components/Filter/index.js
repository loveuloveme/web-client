import { Box, Heading, Text, VStack, Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel, Checkbox  } from "@chakra-ui/react";

export function FilterCheckbox({children, count}){
    return (
        <Checkbox fontWeight='bold' size='md' colorScheme='blackAlpha' defaultChecked>
            {children} <Text fontWeight='normal' display='inline' color='#c7c7c7' ml='2px'>[{count}]</Text>
        </Checkbox>
    );
}

export function FilterBlock({children, name}){
    return (
        <AccordionItem>
            <h2>
                <AccordionButton>
                    <Box flex='1' textAlign='left' fontWeight='bold' textTransform='uppercase'>{name}</Box>
                    <AccordionIcon />
                </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
                <VStack alignItems='flex-start'>
                    {children}
                </VStack>
            </AccordionPanel>
        </AccordionItem>
    );
}

export function Filter({children}){
    return (
        <Box w='100%' pr='10px'>
            <Heading size='3xl' mb='10px'>FILTERS</Heading>
            <Accordion allowMultiple defaultIndex={[0]}>
                {children}
            </Accordion>
        </Box>
    );
}