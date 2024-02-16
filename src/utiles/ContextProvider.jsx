import React, { createContext, useEffect, useState } from 'react';
import product1img from "../assets/images/Nike-Kobe-9-Elite-All-Star-Basketball-Shoe-large.jpg"
import product2img from "../assets/images/air-jordan-1-poster-basketball-shoes-print-michael-jordan-wall-art-great-gift-sheryl-neal.jpg"
import product3img from "../assets/images/Basketball-Shoes-PEAK-Flash3.jpg"
import product4img from "../assets/images/poster.jpg"
import product5img from "../assets/images/Nike-Kobe-9-Elite-All-Star-Basketball-Shoe-large.jpg"
import product6img from "../assets/images/Nike-Kobe-9-Elite-All-Star-Basketball-Shoe-large.jpg"
import product7img from "../assets/images/Nike-Kobe-9-Elite-All-Star-Basketball-Shoe-large.jpg"
import product8img from "../assets/images/Nike-Kobe-9-Elite-All-Star-Basketball-Shoe-large.jpg"
import product9img from "../assets/images/Nike-Kobe-9-Elite-All-Star-Basketball-Shoe-large.jpg"
import product10img from "../assets/images/Nike-Kobe-9-Elite-All-Star-Basketball-Shoe-large.jpg"
import product11img from "../assets/images/Nike-Kobe-9-Elite-All-Star-Basketball-Shoe-large.jpg"
import product12img from "../assets/images/Nike-Kobe-9-Elite-All-Star-Basketball-Shoe-large.jpg"












export const MyContext = createContext()

export const ContextProvider = ({ children }) => {
    const [products, setProducts] = useState([]);

    class Products {
        constructor(pName, price, category , img ) {
            this.pName = pName;
            this.price = price;
            this.category = category;
            this.img = img;
        }

    }


    let product1 = new Products("yeezy 2.0", 104.99, "new", product1img)
    let product2 = new Products("yeezy 2.0", 104.99, "new", product2img)
    let product3 = new Products("yeezy 2.0", 104.99, "new", product3img)
    let product4 = new Products("yeezy 2.0", 104.99, "new", product4img)
    let product5 = new Products("adidas Trae Young 2.0", 104.99, "old", product5img)
    let product6 = new Products("adidas Trae Young 2.0", 104.99, "old", product6img)
    let product7 = new Products("adidas Trae Young 2.0", 104.99, "old", product7img)
    let product8 = new Products("adidas Trae Young 2.0", 104.99, "old", product9img)
    let product9 = new Products("yeezy 2.0", 104.99, "new", product10img)
    let product10 = new Products("adidas Trae Young 2.0", 104.99, "old", product11img)
    let product11 = new Products("adidas Trae Young 2.0", 104.99, "old", product12img)
    let product12 = new Products("yeezy 2.0", 104.99, "new", product8img)
    products.push(product1,
        product2,
        product3,
        product4,
        product5,
        product6,
        product7,
        product8,
        product9,
        product10,
        product11,
        product12)




    class DataStructuring {
        constructor(productName, price, category, img) {
            this.productName = productName;
            this.price = price;
            this.category = category;
            this.img = img
        }







    }

    return (
        <>
            <MyContext.Provider value={[products, setProducts]}>
                {children}
            </MyContext.Provider>
        </>
    );
};
