import { useParams } from "react-router-dom";
import { Viewer } from "../components/Viewer";

import { useEffect } from "react";

export default function ViewerPage({setHeaderTheme}){
    const {id} = useParams();

    useEffect(() => {
        setHeaderTheme({ light: false });
    }, [setHeaderTheme]);


    return (
        <Viewer figureId={id} />
    );
}