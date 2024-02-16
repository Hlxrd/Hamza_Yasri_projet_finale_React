import React from 'react';
import "./home.sass"
import { HeroSec } from './components/HeroSec';
import { CardSec } from './components/CardSec';
import { NavTab } from './components/NavTab';
import { Footer } from 'flowbite-react';
export const Home = () => {



    return (
        <>
            <HeroSec/>
            <CardSec/>
            <NavTab/>
        </>
    );
};


