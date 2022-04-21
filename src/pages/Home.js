import Types from '../components/Types';
import Intro from '../components/Intro';
import Popular from '../components/Popular';
import Categories from '../components/Categories';
import { useSelector } from 'react-redux';

function Home(){
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