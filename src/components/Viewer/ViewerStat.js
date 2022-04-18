import { SimpleGrid, Stat, StatLabel, StatNumber } from "@chakra-ui/react";

export default function ViewerStat() {
    return (
        <SimpleGrid
            columns={{ base: '2', sm: '4' }}
            flexGrow='1'
        >
            <Stat>
                <StatLabel>Name</StatLabel>
                <StatNumber>John Doe</StatNumber>
            </Stat>

            <Stat>
                <StatLabel>Price</StatLabel>
                <StatNumber>£100</StatNumber>
            </Stat>

            <Stat>
                <StatLabel>In wishlists</StatLabel>
                <StatNumber>1000</StatNumber>
            </Stat>

            <Stat>
                <StatLabel>Category</StatLabel>
                <StatNumber>MARVEL</StatNumber>
            </Stat>
        </SimpleGrid>
    );
}