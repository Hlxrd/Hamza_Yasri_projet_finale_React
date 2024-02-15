import React from 'react';
import Aimg from "../../assets/images/bbp.jpg"
import Historyimg from "../../assets/images/AboutImg.jpg"
export const About = () => {
    return (
        <>
            <div className='lg:h-full flex flex-col items-center  bg-cyan-200'>
                <div className="contact-bg relative w-full h-[30vh] bg-yellow-200  mb-10 flex items-center justify-center" style={{ backgroundImage: `url(${Aimg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    <div className="absolute w-full h-full bg-slate-600 opacity-50  z-10">
                    </div>
                    <h1 className='w-[100%] h-[100%] flex justify-center items-center  opacity-100 text-white text-5xl font-bold z-20'>ABOUT</h1>
                </div>
                <div className='w-[90%] h-fit lg:h-screen  gap-5 flex lg:flex-row flex-col items-start justify-around ml-10 p-10 mb-5'>
                    <div className='lg:w-[30%] w-[100%] h-[70vh]  lg:h-[90%] overflow-hidden'>
                        <div className='bg-red-400 lg:w-full lg:h-full hover:scale-110 transition-all' style={{ backgroundImage: `url(${Historyimg})`, backgroundSize: `cover`, backgroundRepeat: `no-repeat`, backgroundPosition: `center` }}>
                        </div>
                    </div>
                    <div className=' lg:w-[60%] lg:h-[100%] text-center lg:text-start flex  flex-col justify-start gap-9'>
                        <h1 className='text-3xl font-bold'>OUR STORY</h1>

                        <p>Welcome to <span className='text-2xl font-bold text-yellow-400'>"Sky Stride," </span>an extraordinary basketball shoes emporium that transcends the bounds of imagination. Nestled in the heart of a bustling metropolis, this fantastical store is a haven for basketball enthusiasts and sneaker connoisseurs alike. Upon entering, customers are greeted by holographic displays showcasing an array of futuristic, gravity-defying basketball shoes that seem to levitate in mid-air. The store's design seamlessly merges sleek, otherworldly aesthetics with elements of classic basketball culture, creating an immersive experience that transports visitors to a realm where style meets performance. From self-lacing shoes with built-in AI technology to shoes that change color based on player movements, "Sky Stride" offers a kaleidoscope of innovation. Each pair is housed in floating glass cases, adding a touch of enchantment to the shopping experience. The store also boasts a virtual reality zone where customers can simulate playing on different courts, allowing them to test the shoes in a dynamic and interactive environment. The staff, clad in futuristic uniforms, are not just sales associates but basketball aficionados who can provide expert advice on the latest trends and technologies. With a fusion of cutting-edge design and a passion for the game, "Sky Stride" is not just a store—it's a portal to a basketball utopia where fantasy and functionality coalesce. Step into a world where every leap feels like a journey beyond the ordinary, and every slam dunk is an expression of style and innovation.</p>
                        <div className="w-[90%]  h-fit flex justify-start gap-8">
                            <div className="w-[0.7%] h-[100%] bg-gray-500"></div>
                            <div className="w-[90%]"><p>There is nothing enlightened about shrinking so that other people won't feel insecure around you. We are all meant to shine as children do. It's not just in some of us; it is in everyone. And as we let our own lights shine, we unconsciously give other people permission to do the same.</p>
                                <p className='px-5 text-gray-500 font-bold'>'Quote from the movie "Coach Carter (2005)"'</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

