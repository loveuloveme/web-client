import { ChakraProvider, Flex } from "@chakra-ui/react"
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Minifigures from './pages/Minifigures';
import About from './pages/About';
import Header from './components/Header'
import Footer from './components/Footer';
import theme from './theme';
import ScrollToTop from "./utils/ScrollToTop";
import store from './store';
import { Provider } from 'react-redux'
import { fetchUserData } from "./store/slices/auth/authThunk";
const Viewer = React.lazy(() => import('./pages/Viewer'));

store.dispatch(fetchUserData());

export default function App() {
    const [headerTheme, setHeaderTheme] = useState({ light: false });

    return (
        <ChakraProvider theme={theme}>
            <Router>
                <ScrollToTop>
                    <Provider store={store}>
                        <Header theme={headerTheme} />
                        <Flex direction='column' minH='100%'>
                            <React.Suspense fallback={<>hehehe</>}>

                                <Routes>
                                    <Route exact path="/" element={<Home setHeaderTheme={setHeaderTheme} />} />
                                    <Route exact path="/figures" element={<Minifigures setHeaderTheme={setHeaderTheme} />} />
                                    <Route exact path="/about" element={<About setHeaderTheme={setHeaderTheme} />} />
                                    <Route exact path="/figure/:id" element={<Viewer setHeaderTheme={setHeaderTheme} />} />
                                </Routes>

                            </React.Suspense>
                        </Flex>
                    </Provider>
                    <Footer />
                </ScrollToTop>
            </Router>
        </ChakraProvider>
    );
}
