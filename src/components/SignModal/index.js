import { Modal, ModalContent, ModalOverlay, } from '@chakra-ui/react';
import { useEffect, useState } from "react";
import { useSelector } from 'react-redux';

import Form from './Form';

function VerticallyCenter({ isOpen, onOpen, onClose }) {
    const [forceClose, setForceClose] = useState(false);
    const { user } = useSelector((state) => state.auth);

    useEffect(() => {
        if(user){
            setForceClose(true);
        }
    }, [user]);

    return (
        <Modal onClose={onClose} isOpen={isOpen && !forceClose} isCentered blockScrollOnMount={false}>
            <ModalOverlay />
            <ModalContent>
                <Form />
            </ModalContent>
        </Modal>
    )
}

export default VerticallyCenter;