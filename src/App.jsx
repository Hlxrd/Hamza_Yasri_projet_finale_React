import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/home/Home';
import { About } from './pages/about/About';
import { Header } from './layouts/Header';
import { Footer } from './layouts/Footer';
import { Contact } from './pages/contact/Contact';
import { ContextProvider } from './utiles/ContextProvider';
import { Erro } from './pages/error/Erro';

const App = () => {
    return (
        <>
            
            <ContextProvider>
                <Header />
                <Routes >
                    <Route path='/*' element={<Erro/>}/>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/contact' element={<Contact />} />
                </Routes >
            <Footer/>
            </ContextProvider>
        </>
    );
};

export default App;