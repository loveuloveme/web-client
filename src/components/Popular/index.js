import { Box, Container, SimpleGrid  } from "@chakra-ui/react";
import BlockHeading from "../BlockHeading";
import FigureCard from "../FigureCard";

function Popular(props){
    return (
        <Container
            maxW="container.xl"
            {...props}
        >
            <Box>
                <BlockHeading name='POPULAR RIGHT NOW' text='based on views' />
                <SimpleGrid
                    columns={[2, null, 3, 4, 5]}
                    gap={2}
                    paddingTop='30px'
                >
                    <FigureCard />
                    <FigureCard />
                    <FigureCard />
                    <FigureCard />
                    <FigureCard />
                </SimpleGrid>
            </Box>
        </Container>
    );
}

export default Popular;