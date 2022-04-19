import { useParams } from "react-router-dom";
import { Viewer } from "../components/Viewer";

export default function ViewerPage({setHeaderTheme}){
    const {id} = useParams();

    return (
        <Viewer figureId={id} />
    );
}