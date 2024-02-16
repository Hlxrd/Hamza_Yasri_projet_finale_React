import React from 'react';
import Logo from "../assets/images/output-onlinepngtools2.png"
import { CgProfile } from "react-icons/cg";
import { CiShoppingCart } from "react-icons/ci";
import navbg from "../assets/images/navbg.jpg"
import {
    Navbar,
    MobileNav,
    Typography,
    Button,
    IconButton,
    Card,
} from "@material-tailwind/react";
import { useNavigate } from 'react-router-dom';





export const Header = () => {
    const [openNav, setOpenNav] = React.useState(false);

    let navigate = useNavigate()

    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false),
        );
    }, []);

    const navList = (
        <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 ">
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <a href="#" className="flex items-center text-xl hover:underline font-thin">
                    Home
                </a>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <a href="#" className="flex items-center text-xl hover:underline font-thin">
                    Shope
                </a>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <a href="#" className="flex items-center text-xl hover:underline font-thin">
                    About
                </a>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <a href="#" className="flex items-center text-xl hover:underline font-thin">
                    Contatact
                </a>
            </Typography>
        </ul>
    );
    return (
        <>



            <Navbar className="sticky top-0 z-50 h-max  max-w-full bg-gray-200 rounded-none lg:px-8 lg:py-2" style={{backgroundImage:`url(${navbg}) ` , backgroundRepeat:`no-repeat` , backgroundPosition:`center` , backgroundSize:`cover`}}>
                <div className="flex items-center justify-around  text-blue-gray-900">
                    <Typography
                        as="a"
                        href="#"
                        className="w-52 mr-4 cursor-pointer py-1.5 font-medium flex items-center"
                    >
                        <img className='w-[30%] ' src={Logo} alt="" />
                        <h1 className='text-3xl font-serif font-bold ' onClick={()=>{navigate("/")}}><span className='text-red-500'>S</span>ky <span className='text-yellow-700'>S</span>tride</h1>
                    </Typography>
                    <div className="flex items-center   gap-4">
                        <div className="mr-4 hidden lg:block">{navList}</div>

                        <IconButton
                            variant="text"
                            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                            ripple={false}
                            onClick={() => setOpenNav(!openNav)}
                        >
                            {openNav ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    className="h-6 w-6"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            )}
                        </IconButton>
                    </div>
                        <div className="flex items-center gap-x-1 ">
                            <Button
                                variant="text"
                                size="sm"
                                className=" lg:inline-block text-black"
                            >
                                <CgProfile className='text-black text-3xl'/>
                            </Button>
                            <Button
                                variant="gradient"
                                size="sm"
                                className=" lg:inline-block"
                            >
                                <CiShoppingCart className='text-3xl text-black'/>
                            </Button>
                        </div>
                </div>
                <MobileNav open={openNav}>
                    {navList}

                </MobileNav>
            </Navbar>
            <div className="mx-auto max-w-screen-md ">
                
            </div>






        </>
    );
};

