import Types from '../components/Types';
import Intro from '../components/Intro';
import Popular from '../components/Popular';
import Categories from '../components/Categories';
import { useEffect } from "react";

function Home({setHeaderTheme}){
    useEffect(() => {
        setHeaderTheme({ light: true });
    }, [setHeaderTheme]);

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