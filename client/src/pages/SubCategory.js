import React, {useState, useEffect} from 'react'
import './SubCategory.css'
import {Link, useParams} from 'react-router-dom'
import ProductCard from '../components/ProductCard'

import home from '../assets/icons/home.svg'
import rightArrow from '../assets/icons/right-arrow.svg'
import plus from '../assets/icons/plus.svg'
import axios from 'axios'


// import RangeSlider from '../components/RangeSlider'

function SubCategory() {
    const[products, setProducts] =useState('')


    const {subCategorySlug} = useParams()

    useEffect(() => {
        axios.get(`http://localhost:8080/api/product/get-product-list-by-sub-category/${subCategorySlug}`)
        .then(res => {
            setProducts(res.data.products)
        })
        .catch(err => {
            console.log(err.response)
        })
    }, [products])


    

    return (
        <div className="subCategory">
            <div className="subCategory__content">
                {/* subCategory__header starts */}
                <div className="subCategory__header">
                    <img src={home} alt=""/>
                    <Link to="/">Home</Link>
                    <img className="subCategory__headerArrowIcon" src={rightArrow} alt=""/>
                    <Link to={`/category/${products ? products.length === 0 ? "#": products[0].categorySlug : '#'}`}>{products ? products.length === 0 ? "" : products[0].categorySlug : "No product"} </Link>
                    <img className="subCategory__headerArrowIcon" src={rightArrow} alt=""/>
                    <Link to="#">{subCategorySlug}</Link>
                </div>
                {/* subCategory__header ends */}

                {/* subCategory__headline starts */}
                {/* <div className="subCategory__headline">KEYBOARD</div> */}
                {/* subCategory__headline ends */}
            
                <div className="subCategory__explore">
                    {/* subCategory__exploreLeft starts */}
                    <div className="subCategory__exploreLeft">
                        
                        {/* <div className="subCategory__exploreLeftRangeSlider">
                        </div> */}
                         {/* <RangeSlider/> */}
                        <div className="subCategory__exploreLeftDrawer">
                            <h5>Price Range</h5>
                            <div to="#" className="subCategory__exploreLeftItem">
                                <p>Brand</p>
                                <img src={plus} alt=""/>
                            </div>
                            <div to="#" className="subCategory__exploreLeftItem">
                                <p>Weight</p>
                                <img src={plus} alt=""/>
                            </div>
                            <div to="#" className="subCategory__exploreLeftItem">
                                <p>Quantity</p>
                                <img src={plus} alt=""/>
                            </div>
                            <div to="#" className="subCategory__exploreLeftItem">
                                <p>Type</p>
                                <img src={plus} alt=""/>
                            </div>
                            <div to="#" className="subCategory__exploreLeftItem">
                                <p>Variable</p>
                                <img src={plus} alt=""/>
                            </div>
                            <div to="#" className="subCategory__exploreLeftItem">
                                <p>features</p>
                                <img src={plus} alt=""/>
                            </div>
                            <div to="#" className="subCategory__exploreLeftItem">
                                <p>others</p>
                                <img src={plus} alt=""/>
                            </div>

                        </div>

                    </div>
                    {/* subCategory__exploreLeft ends */}


                    {/* subCategory__exploreRight starts */}
                    
                    <div className="subCategory__exploreRight">
                        <div className="subCategory__exploreRightSort">
                        <div className="subCategory__exploreRightSortDropDown">
                                <select onChange={e => console.log(e.target.value)}>
                                    <option value="default">sort by default</option> 
                                    <option value="meat">Meat</option>    
                                    <option value="fish">Fish</option>    
                                    <option value="vegitable">Vegitable</option>    
                                </select>
                            </div>
                            <div className="subCategory__exploreRightSortDropDown">
                                <select onChange={e => console.log(e.target.value)}>
                                    <option value="show">show</option> 
                                    <option value="2">2</option>    
                                    <option value="3">3</option>    
                                    <option value="4">4</option>    
                                </select>
                            </div>
                   
                        </div>


                        <div className="subCategory__exploreRightProductssubCategory">
                            {
                               products ? 
                                products.length === 0 
                                ?
                                <p>NO products found</p>
                                :
                                products.map(product => (
                                    <ProductCard key={product._id} product={product}/> 
                                ))
                                :
                                <p>Loading</p>
                            }
                        </div>


                    </div>
                    {/* subCategory__exploreRight ends */}
                </div>

            </div>
        </div>
    )
}

export default SubCategory
