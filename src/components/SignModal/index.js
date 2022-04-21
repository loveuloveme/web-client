import { Modal, ModalContent, ModalOverlay, } from '@chakra-ui/react';
import { useEffect, useState } from "react";
import { useSelector } from 'react-redux';

import SignIn from './SignIn';
import SignUp from './SignUp';

function VerticallyCenter({ isOpen, onOpen, onClose }) {
    const [forceClose, setForceClose] = useState(false);
    const [signUp, setSignUp] = useState(false);

    const { user } = useSelector((state) => state.auth);

    useEffect(() => {
        if(user){
            forceClose(true);
        }
    }, [user]);

    return (
        <Modal onClose={onClose} isOpen={isOpen && !forceClose} isCentered blockScrollOnMount={false}>
            <ModalOverlay />
            <ModalContent>
                {signUp ?
                    <SignUp changeState={() => setSignUp(false)} />
                    :
                    <SignIn changeState={() => setSignUp(true)}/>
                }
            </ModalContent>
        </Modal>
    )
}

export default VerticallyCenter;