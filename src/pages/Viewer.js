import { useParams } from "react-router-dom";
import { Viewer } from "../components/Viewer";
import { useDispatch } from "react-redux";
import { setHeaderTheme } from "../store/slices/header/header";
import { useEffect } from "react";

export default function ViewerPage(){
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setHeaderTheme('dark'));
    }, [dispatch]);

    const {id} = useParams();

    return (
        <Viewer figureId={id} />
    );
}