import React from 'react';
import "./contact.sass"
import Cimg from "../../assets/images/air-jordan-1-poster-basketball-shoes-print-michael-jordan-wall-art-great-gift-sheryl-neal.jpg"
import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
} from "@material-tailwind/react";
import { Textarea } from 'flowbite-react';
export const Contact = () => {
    return (
        <div className='bg-cyan-200  '>
            <div className="contact-bg relative w-full h-[30vh]   flex items-center justify-center" style={{ backgroundImage: `url(${Cimg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="absolute w-full h-full bg-slate-600 opacity-50  z-10">
                </div>
                    <h1 className='w-[100%] h-[100%] flex justify-center items-center  opacity-100 text-white text-5xl font-bold z-20'>CONTACT</h1>
            </div>

            <div className='flex flex-col  lg:w-[80%] lg:flex-row-reverse mb-10 justify-around my-14' >


                <Card color="transparent" className='px-4' shadow={false}>
                    <Typography variant="h4" color="blue-gray">
                        SEND US YOUR MESSAGE
                    </Typography>

                    <form className="mt-8 mb-2 h-fit w-80  max-w-screen-lg sm:w-96">
                        <div className="mb-1 flex h-[100%] flex-col gap-6">

                            <Input
                                size="lg"
                                placeholder="Your Name"
                                className=" !border-t-blue-gray-200  bg-slate-50 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                            />

                            <Input
                                size="lg"
                                placeholder="Your Emai ; Exemple :xyz@mail.com"
                                className=" !border-t-blue-gray-200 bg-slate-50 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                            />

                            <Input
                                type="text"
                                size="lg"
                                placeholder="Your message ..."
                                className=" !border-t-blue-gray-200 bg-slate-50 focus:!border-t-gray-900 h-[300%] overflow-scroll"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                            />
                        </div>

                        <Button className="mt-6 flex w-[50%] rounded-full justify-center" fullWidth>
                            Send Message
                        </Button>
                        <Typography color="gray" className="mt-4 text-center font-normal">
                            Already have an account?{" "}
                            <a href="#" className="font-medium text-gray-900">
                                Sign In
                            </a>
                        </Typography>
                    </form>
                </Card>

                <div className='lg:w-[50%] w-[100%]' ><iframe className='w-[100%]' height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps trackers</a></iframe></div>
            </div>

        </div>
    );
};
