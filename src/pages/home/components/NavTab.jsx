import React, { useContext, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MyContext } from '../../../utiles/ContextProvider';
import { Nav } from 'react-bootstrap';
import { Footer } from 'flowbite-react';

export const NavTab = () => {

    const [products, setProducts] = useContext(MyContext)
    const [filtrproduct, setFiltrproduct] = useState(products);


    let filter1 = products.filter(element => element.category == "old")
    const filterProductsOld = () => {
        console.log(filter1);
        if (filter1) {
            setFiltrproduct(filter1)
        }
    }


    let filter2 = products.filter(element => element.category == "new")
    const filterProductsNew = () => {
        console.log(filter2);
        if (filter2) {
            setFiltrproduct(filter2)
        }
    }

    







    return (



        <section className='h-fit' >
            <Nav fill variant="tabs" className='p-4 w-screen items-center flex  '>
                <Nav.Item>
                    <h5 className='border-t border-x cursor-pointer p-4 w-24 rounded-lg hover:bg-blue-300 transition-all' onClick={filterProductsOld}>Old</h5>
                </Nav.Item>
                <Nav.Item>
                    <h5 className='border-t border-x cursor-pointer p-4 w-24 rounded-lg hover:bg-blue-300 transition-all' onClick={filterProductsNew}>New</h5>

                </Nav.Item>
                
            </Nav>
            <div className='flex flex-wrap w-full justify-center items-center gap-4'>
                {
                    filtrproduct.map((element, index) =>

                        <div className='flex w-[30%] h-[60%] flex-col items-center justify-center '>
                            <div className='flex '>
                                <img src={element.img} className='relative h-[80%] overflow-hidden' alt="" />
                                <div className='absolute bg-red-500 rounded-full p-1 px-2 m-2 '>{element.category}</div>
                            </div>
                            <h2 className='w-[80%] '>{element.pName}</h2>
                        </div>


                    )
                }
            </div>
        </section>
        
    );
};
