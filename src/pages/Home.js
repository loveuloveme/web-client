import Types from '../components/Types';
import Intro from '../components/Intro';
import Popular from '../components/Popular';
import Categories from '../components/Categories';
import { useDispatch } from "react-redux";
import { setHeaderTheme } from "../store/slices/header/header";
import { useEffect } from "react";

function Home(){
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setHeaderTheme('light'));
    }, [dispatch]);

    return (
        <>
 			<Intro />
			<Types />
 			<Popular my='50px' mt='150px' />
 			<Categories />
        </>
    );
}


export default Home;