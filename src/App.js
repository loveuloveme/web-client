import { ChakraProvider, Flex } from "@chakra-ui/react"
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Minifigures from './pages/Minifigures';
import About from './pages/About';
import Header from './components/Header'
import Footer from './components/Footer';
import theme from './theme';
import ScrollToTop from "./util/ScrollToTop";

const Viewer = React.lazy(() => import('./pages/Viewer'));

export default function App() {

    const [headerTheme, setHeaderTheme] = useState({ light: false });

    return (
        <ChakraProvider theme={theme}>
            <Router>
                <ScrollToTop>
                    <Header theme={headerTheme}/>
                    <Flex direction='column' minH='100%'>
                        <React.Suspense fallback={<>hehehe</>}>
                            <Routes>
                                <Route exact path="/" element={<Home onLoad={() => setHeaderTheme({ light: true })} />}  />
                                <Route exact path="/figures" element={<Minifigures onLoad={() => setHeaderTheme({ light: true })} />}  />
                                <Route exact path="/about" element={<About onLoad={() => setHeaderTheme({ light: false })} />} />
                                <Route exact path="/figure/:id" element={<Viewer onLoad={() => setHeaderTheme({ light: false })} />} />
                            </Routes>
                        </React.Suspense>
                    </Flex>
                    <Footer />
                </ScrollToTop>
            </Router>
        </ChakraProvider>
    );
}
