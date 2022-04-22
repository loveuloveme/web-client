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
import Preload from "./components/Preload";
const Viewer = React.lazy(() => import('./pages/Viewer'));

store.dispatch(fetchUserData());

export default function App() {

    return (
        <ChakraProvider theme={theme}>
            <Preload />
            <Router>
                <ScrollToTop>
                    <Provider store={store}>
                        <Header />
                        <Flex direction='column' minH='100%'>
                            <React.Suspense fallback={<>hehehe</>}>

                                <Routes>
                                    <Route exact path="/" element={<Home />} />
                                    <Route exact path="/figures" element={<Minifigures />} />
                                    <Route exact path="/about" element={<About />} />
                                    <Route exact path="/figure/:id" element={<Viewer />} />
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
