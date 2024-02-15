import React from 'react';
import { Carousel } from 'flowbite-react';
import carousel1 from "../../assets/images/SHIPPINGSHOES.jpg"
import carousel2 from "../../assets/images/posters-basketball-players-silhouette-collection-in-shoot-position.jpg"
import carousel3 from "../../assets/images/posters-playing-basketball.jpg"
import item1 from "../../assets/images/Basketball-Shoes-PEAK-Flash3.jpg"
import item2 from "../../assets/images/Nike-Kobe-9-Elite-All-Star-Basketball-Shoe-large.jpg"

import "./home.sass"
export const Home = () => {

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
                        <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..." />
                        <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />
                        <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." />
                    </Carousel>
                </div>
            </section>
            {/* <section className='w-full  h-full flex items-center justify-center '>
                <div className='bg-slate-400 w-[90%] h-[100vh]' >
                    <div className='w-[25%] h-[100%] grid'>
                        <div className='h-[80%] w-[100%]'><img src={item1} className='w-[100%] h-[100%] ' alt="" /><button></button></div>
                        <div className='h-[50%] w-[100%] flex '><img src={item2} className='w-[100%] h-[100%]' alt="" /><button></button></div>
                    </div>
                    <div>
                        <div><img src="" alt="" /><button></button></div>
                        <div><img src="" alt="" /><button></button></div>
                    </div>
                    <div>
                        <div><img src="" alt="" /><button></button></div>
                        <div><img src="" alt="" /><button></button></div>
                    </div>
                </div>
            </section> */}
            <section className="banner bg-white p-t-40 p-b-40 w-full flex justify-center" >
                <div className="container w-[80%]">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
                        {/* Block 1 */}
                        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 gap-8">
                            <div className="block1 hov-img-zoom pos-relative m-b-30">
                                <a href="/collections/all">
                                    <img src={item1} className="w-full h-full" alt="" />
                                </a>
                                <div className="block1-wrapbtn w-size2">
                                    <a href="/collections/all" className="flex-c-m size2 m-text2 bg3 hov1 trans-0-4">
                                        Dresses
                                    </a>
                                </div>
                            </div>
                            {/* Block 2 */}
                            <div className="c">
                                <div className="block1 hov-img-zoom pos-relative m-b-30">
                                    <a href="/collections/all">
                                        <img src="//fashe-theme.myshopify.com/cdn/shop/files/banner-05.jpg?v=1613705300" className="" alt="" />
                                    </a>
                                    <div className="block1-wrapbtn w-size2">
                                        <a href="/collections/all" className="flex-c-m size2 m-text2 bg3 hov1 trans-0-4">
                                            Sunglasses
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Block 3 */}
                        <div className="block1 hov-img-zoom pos-relative m-b-30">
                            <a href="/collections/all">
                                <img src="//fashe-theme.myshopify.com/cdn/shop/files/banner-03.jpg?v=1613705300" className="" alt="" />
                            </a>
                            <div className="block1-wrapbtn w-size2">
                                <a href="/collections/all" className="flex-c-m size2 m-text2 bg3 hov1 trans-0-4">
                                    Watches
                                </a>
                            </div>
                            {/* Block 4 */}
                            <div className="block1 hov-img-zoom pos-relative m-b-30">
                                <a href="/collections/all">
                                    <img src="//fashe-theme.myshopify.com/cdn/shop/files/banner-07.jpg?v=1613705300" className="" alt="" />
                                </a>
                                <div className="block1-wrapbtn w-size2">
                                    <a href="/collections/all" className="flex-c-m size2 m-text2 bg3 hov1 trans-0-4">
                                        Footwear
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* Block 5 */}
                        <div className="block1 hov-img-zoom pos-relative m-b-30">
                            <a href="/collections/all">
                                <img src="//fashe-theme.myshopify.com/cdn/shop/files/banner-04.jpg?v=1613705300" className="" alt="" />
                            </a>
                            <div className="block1-wrapbtn w-size2">
                                <a href="/collections/all" className="flex-c-m size2 m-text2 bg3 hov1 trans-0-4">
                                    Bags
                                </a>
                            </div>
                            {/* Block 6 */}
                            <div className="block1 hov-img-zoom pos-relative m-b-30">
                                <a href="/collections/all">
                                    <img src="//fashe-theme.myshopify.com/cdn/shop/files/banner-09.jpg?v=1613705301" className="" alt="" />
                                </a>
                                <div className="block1-wrapbtn w-size2">
                                    <a href="/collections/all" className="flex-c-m size2 m-text2 bg3 hov1 trans-0-4">
                                        Accessories
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>








        </>
    );
};


