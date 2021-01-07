import React, {useState, useEffect} from 'react';
import './Home.css'
import Banner from '../components/Banner';
import NavTab from '../components/NavTab';
import ProductCard from '../components/ProductCard'
// import products from '../dummy_db/products'
import axios from 'axios';





function Home() {

    const [products, setProducts] = useState('')

    useEffect(() => {
        axios(`http://localhost:8080/api/product/get-all-products-list`)
        .then(res => {
            setProducts(res.data.allProducts.reverse().splice(0, 8))
        })
        .catch(err => {
            console.log(err)
        })
    }, [products])

    return (
        <div className="home">
            <Banner/>
            <div className="home__tab">
                <NavTab />
            </div>
            <div className="home__collection ">
                {/* make this font product sans */}
                <h2>In Collections</h2> 
                <div className="home__collectionList">
                    {
                        products ? products.map(product => (
                            <ProductCard key={product._id} product={product}/> 
                        )) : 'loading' 
                        
                    }
                </div>
            </div>
        </div>
    )
}

export default Home;
