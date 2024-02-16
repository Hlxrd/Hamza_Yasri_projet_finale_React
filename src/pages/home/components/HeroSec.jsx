import React from 'react';
import { Carousel } from 'flowbite-react';
import carousel1 from "../../../assets/images/basketball-on-fire-black-background-260nw-298756607.png"
import carousel2 from "../../../assets/images/posters-basketball-players-silhouette-collection-in-shoot-position.jpg"
import carousel3 from "../../../assets/images/téléchargement.jpg"
import { Collapse } from 'react-bootstrap';

export const HeroSec = () => {
    return (
        <>
            <section className='h-screen'>
                <div className="carousel lg:h-[100%] 2xl:h-96">
                    <Carousel slide={false}>
                        <div className='w-full flex items-center justify-center text-gray-50'>
                            <div className='bg-gray-600 w-full h-full absolute opacity-50'></div>
                            <div className='absolute text-gra text-3xl '>
                                <p>Welcome to Sky Stride</p>
                                <h1 className='text-5xl font-bold'>NEW COLLECTIONS</h1>
                            </div>
                            <img src={carousel2} className='w-full' alt="..." />
                        </div>
                        <div className='w-full flex items-center justify-center text-gray-50'>
                            <div className='bg-gray-600 w-full h-full absolute opacity-50'></div>
                            <div className='absolute text-gra text-3xl '>
                                <p>Welcome to Sky Stride</p>
                                <h1 className='text-5xl font-bold'>NEW COLLECTIONS</h1>
                            </div>
                            <img src={carousel2} className='w-full h-full' alt="..." />
                        </div>
                        <div className='w-full flex items-center justify-center text-gray-50'>
                            <div className='bg-gray-600 w-full h-full absolute opacity-50'></div>
                            <div className='absolute text-gra text-3xl '>
                                <p>Welcome to Sky Stride</p>
                                <h1 className='text-5xl font-bold'>NEW COLLECTIONS</h1>
                            </div>
                            <img src={carousel3} className='w-full h-[100%]' alt="..." />
                        </div>
                        
                    </Carousel>
                </div>
            </section>
            
        </>
    );
};
