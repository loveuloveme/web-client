import { Button, HStack, useDisclosure } from "@chakra-ui/react";

import VerticallyCenter from "../SignModal";


function Profile(props){
    const modalDis = useDisclosure();

    return (
        <HStack alignItems='center' {...props}>
            <Button borderRadius='0' onClick={modalDis.onOpen}>SIGN IN</Button>
            <VerticallyCenter {...modalDis} />
            {/* <Button>SIGN UP</Button> */}
        </HStack>
    );
}

export default Profile;