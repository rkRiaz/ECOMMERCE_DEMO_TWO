import React, {useState, useEffect} from 'react';
import './Home.css'
import Banner from '../components/Banner';
import NavTab from '../components/NavTab';
import ProductCard from '../components/ProductCard'
import CategoryProductCard from '../components/CategoryProductCard'

// import products from '../dummy_db/products'
import axios from 'axios';

//multi carousel 
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';




function Home() {

    const [products, setProducts] = useState('')
    const [categories, setCategories] = useState('')

    useEffect(() => {
        axios(`http://localhost:8080/api/product/get-all-products-list`)
        .then(res => {
            setProducts(res.data.allProducts.reverse().splice(0, 8))
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

    useEffect(() => {
        axios.get(`http://localhost:8080/api/category/get-all-category`)
        .then(res => {
            setCategories(res.data.allCategory)
        })
        .catch(err => {
            console.log(err.response)
        })
    }, [])

    const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 7
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 4
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2
  }
};

    return (
        <div className="home">
            <div className="home__banner">
                <Banner/>
            </div>
            <div className="home__tab">
                <NavTab />
            </div>
            <div className="home__category">
                {/* make this font product sans */}
                <h2>Categories</h2> 
                
                    <Carousel 
                    style={{backgroundColor: 'red'}}
        
                      responsive={responsive}

                      >
                      
                            {
                                categories ? categories.map(category => (
                                    <CategoryProductCard key={categories._id} category={category}/> 
                                )) : 'loading' 
                                
                            }
                      
                    </Carousel>
                
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
