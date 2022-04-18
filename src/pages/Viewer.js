import { useParams } from "react-router-dom";
import { Viewer } from "../components/Viewer";

import { useEffect } from "react";

export default function ViewerPage({onLoad}){
    const {id} = useParams();

    useEffect(() => {
        onLoad();
    }, []);

    return (
        <Viewer figureId={id} />
    );
}