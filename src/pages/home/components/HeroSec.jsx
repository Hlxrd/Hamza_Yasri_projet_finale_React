import React from 'react';
import { Carousel } from 'flowbite-react';
import carousel1 from "../../../assets/images/SHIPPINGSHOES.jpg"
import carousel2 from "../../../assets/images/posters-basketball-players-silhouette-collection-in-shoot-position.jpg"
import carousel3 from "../../../assets/images/téléchargement.jpg"

export const HeroSec = () => {
    return (
        <>
            <section className='h-[90vh]'>
                <div className="carousel lg:h-[100%] 2xl:h-96">
                    <Carousel slide={false}>
                        <div className='w-full'>
                            <p>Welcome to Sky Stride</p>
                            <img src={carousel1} className='w-full' alt="..." />
                        </div>
                        <img src={carousel2} alt="..." />
                        <img src={carousel1} alt="..." />
                        <div className='w-full flex items-center justify-center text-gray-50'>
                            <div className='bg-gray-600 w-full h-full absolute opacity-50'></div>
                            <div className='absolute text-gra text-3xl '>
                                <p>Welcome to Sky Stride</p>
                                <h1 className='text-5xl font-bold'>NEW COLLECTIONS</h1>
                            </div>
                            <img src={carousel3} className='w-full' alt="..." />
                        </div>
                    </Carousel>
                </div>
            </section>
        </>
    );
};
