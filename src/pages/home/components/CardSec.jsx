import React from 'react';
import item1 from "../../../assets/images/Basketball-Shoes-PEAK-Flash3.jpg"
import item2 from "../../../assets/images/Nike-Kobe-9-Elite-All-Star-Basketball-Shoe-large.jpg"

export const CardSec = () => {
    return (
        <>
            <section className="banner bg-white p-t-40 p-b-40 w-full flex justify-center" >
                <div className="allcards w-[100%] mt-24  flex xl:flex-row flex-col justify-evenly">
                    <div className="card1and2 xl:block flex flex-col items-center">

                        

                        <div className="card1 bg-gray-200 xl:w-[25vw] h-[60vh] w-[75%] flex flex-col justify-center items-center rounded-lg hover:bg-slate-500 transition">

                            <img src={item1} alt="" className='xl:w-[20vw] w-[75%] hover:scale-105 transition' />
                            <button
                                class="mt-4 overflow-hidden  w-32 p-2 h-12 bg-black text-white border-none rounded-md text-xl font-bold cursor-pointer relative z-10 group"
                            >
                                Buy Now!
                                <span
                                    class="absolute w-36 h-32 -top-8 -left-2 bg-white rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-left"
                                ></span>
                                <span
                                    class="absolute w-36 h-32 -top-8 -left-2 bg-secondary-color rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-left"
                                ></span>
                                <span
                                    class="absolute w-36 h-32 -top-8 -left-2 bg-secondary-color rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-left"
                                ></span>
                                <span
                                    class="hover:text-black group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10"
                                >10% OFF!</span>
                            </button></div>


                        

                        <div className="card2 mt-8 bg-gray-200 xl:w-[25vw] h-[40vh] w-[75%] flex flex-col justify-center items-center rounded-lg hover:bg-slate-500 transition">

                            <img src={item1} alt="" className='xl:w-[12vw] w-[50%] hover:scale-105 transition' />
                            <button
                                class="mt-4 overflow-hidden w-32 p-2 h-12 bg-black text-white border-none rounded-md text-xl font-bold cursor-pointer relative z-10 group"
                            >
                                Buy Now!
                                <span
                                    class="absolute w-36 h-32 -top-8 -left-2 bg-white rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-left"
                                ></span>
                                <span
                                    class="absolute w-36 h-32 -top-8 -left-2 bg-secondary-color rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-left"
                                ></span>
                                <span
                                    class="absolute w-36 h-32 -top-8 -left-2 bg-secondary-color rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-left"
                                ></span>
                                <span
                                    class="hover:text-black group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10"
                                >10% OFF!</span>
                            </button></div>

                    </div>

                    

                    <div className="card3_4 xl:block flex flex-col items-center" >


                        <div className="card2 mt-8 bg-gray-200 xl:w-[25vw] h-[40vh] w-[75%] flex flex-col justify-center items-center rounded-lg hover:bg-slate-500 transition">

                            <img src={item1} alt="" className='xl:w-[12vw] w-[50%] hover:scale-105 transition' />
                            <button
                                class="mt-4 overflow-hidden  w-32 p-2 h-12 bg-black text-white border-none rounded-md text-xl font-bold cursor-pointer relative z-10 group"
                            >
                                Buy Now!
                                <span
                                    class="absolute w-36 h-32 -top-8 -left-2 bg-white rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-left"
                                ></span>
                                <span
                                    class="absolute w-36 h-32 -top-8 -left-2 bg-secondary-color rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-left"
                                ></span>
                                <span
                                    class="absolute w-36 h-32 -top-8 -left-2 bg-secondary-color rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-left"
                                ></span>
                                <span
                                    class="hover:text-black group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10"
                                >10% OFF!</span>
                            </button></div>


                        <div className="card1 mt-8 bg-gray-200 xl:w-[25vw] h-[60vh] w-[75%] flex flex-col justify-center items-center rounded-lg hover:bg-slate-500 transition">

                            <img src={item2} alt="" className='xl:w-[20vw] lg:w-full  hover:scale-105 transition' />
                            <button
                                class="mt-4 overflow-hidden  w-32 p-2 h-12 bg-black text-white border-none rounded-md text-xl font-bold cursor-pointer relative z-10 group"
                            >
                                Buy Now!
                                <span
                                    class="absolute w-36 h-32 -top-8 -left-2 bg-white rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-left"
                                ></span>
                                <span
                                    class="absolute w-36 h-32 -top-8 -left-2 bg-secondary-color rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-left"
                                ></span>
                                <span
                                    class="absolute w-36 h-32 -top-8 -left-2 bg-secondary-color rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-left"
                                ></span>
                                <span
                                    class="hover:text-black group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10"
                                >10% OFF!</span>
                            </button></div>


                    </div>


                    

                    <div className="xl:mt-0 mt-8 cards5_6 xl:block flex flex-col items-center">

                        <div className="card1 bg-gray-200 xl:w-[25vw] h-[60vh] w-[75%] flex flex-col justify-center items-center rounded-lg hover:bg-slate-500 transition">

                            <img src={item1} alt="" className='xl:w-[20vw] w-[75%] hover:scale-105 transition' />
                            <button
                                class="mt-4 overflow-hidden relative w-32 p-2 h-12 bg-black text-white border-none rounded-md text-xl font-bold cursor-pointer  z-10 group"
                            >
                                Buy Now!
                                <span
                                    class="absolute w-36 h-32 -top-8 -left-2 bg-white rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-left"
                                ></span>
                                <span
                                    class="absolute w-36 h-32 -top-8 -left-2 bg-secondary-color rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-left"
                                ></span>
                                <span
                                    class="absolute w-36 h-32 -top-8 -left-2 bg-secondary-color rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-left"
                                ></span>
                                <span
                                    class="hover:text-black group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10"
                                >10% OFF!</span>
                            </button></div>


                        

                        <div className="card2 mt-8 bg-gray-200 xl:w-[25vw] h-[40vh] w-[75%] flex flex-col justify-center items-center rounded-lg hover:bg-slate-500 transition">

                            <img src={item1} alt="" className='xl:w-[12vw] w-[50%] hover:scale-105 transition' />
                            <button
                                class="mt-4 overflow-hidden relative w-32 p-2 h-12 bg-black text-white border-none rounded-md text-xl font-bold cursor-pointer  z-10 group"
                            >
                                Buy Now!
                                <span
                                    class="absolute w-36 h-32 -top-8 -left-2 bg-white rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-left"
                                ></span>
                                <span
                                    class="absolute w-36 h-32 -top-8 -left-2 bg-secondary-color rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-left"
                                ></span>
                                <span
                                    class="absolute w-36 h-32 -top-8 -left-2 bg-secondary-color rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-left"
                                ></span>
                                <span
                                    class="hover:text-black group-hover:opacity-100 group-hover:duration-1000  duration-100 opacity-0 absolute top-2.5 left-6 z-10"
                                >10% OFF!</span>
                            </button></div>
                    </div>
                </div>
            </section>
        </>
    );
};
