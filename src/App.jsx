import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/home/Home';
import { About } from './pages/about/About';
import { Header } from './layouts/Header';
import { Footer } from './layouts/Footer';
import { Contact } from './pages/contact/Contact';

const App = () => {
    return (
        <>
            <Header />
            <Routes >
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact/>}/>
            </Routes >
<Footer/>
        </>
    );
};

export default App;