import { Text } from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";
import React from "react";

export default function HeaderLink({path, children, light}){
    const lightStyle = light && {
        color: '#ffffff'
    };
    const hoverStyle = {
        color: light ? '#f2f2f2' : '#141414',
        bgColor: 'rgba(0, 0, 0, 0.07)'
    };

    const activeStyle = path === useLocation().pathname && hoverStyle;

    return (
        <Link to={path}>
            <Text
                textTransform='uppercase'
                fontWeight='600'
                color='#000000'
                fontSize='14px'
                p='6px 15px'
                borderRadius='8px'
                transition='all 0.18s ease-in'
                _hover={hoverStyle}

                {...lightStyle}
                {...activeStyle}
            >
                {children}
            </Text>
        </Link>
    );
}