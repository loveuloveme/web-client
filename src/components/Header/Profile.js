import { Button, HStack, useDisclosure, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import VerticallyCenter from "../SignModal";

function Profile(props){
    const modalDis = useDisclosure();

    const { user } = useSelector((state) => state.auth);

    if(user){
        return <Text>{user.username}</Text>
    }

    return (
        <HStack alignItems='center' display={{ sm: 'none', base: 'none', md: 'flex' }}>
            <Button borderRadius='0' onClick={modalDis.onOpen}>SIGN IN</Button>
            <VerticallyCenter {...modalDis} />
        </HStack>
    );
}

export default Profile;