import React, {useState, useEffect} from 'react'
import './Category.css'
import {Link, useParams} from 'react-router-dom'
import SubCategoryProductCard from '../components/SubCategoryProductCard'

import home from '../assets/icons/home.svg'
import rightArrow from '../assets/icons/right-arrow.svg'
import plus from '../assets/icons/plus.svg'
import axios from 'axios'


// import RangeSlider from '../components/RangeSlider'

function Category() {
    const [categories, setCategories] = useState([])
    const[subCategories, setSubCategories] =useState([])


    const {categorySlug} = useParams()

    useEffect(() => {
        axios.get(`http://localhost:8080/api/category/find-sub-categories-by-category-slug/${categorySlug}`)
        .then(res => {
            setSubCategories(res.data.subCategories)
        })
        .catch(err => {
            console.log(err.response)
        })
    }, [subCategories])

    useEffect(() => {
        axios.get(`http://localhost:8080/api/category/get-all-category`)
        .then(res => {
            setCategories(res.data.allCategory)
        })
        .catch(err => {
            console.log(err.response)
        })
    }, [categorySlug])
    


    return (
        <div className="category">
            {/* category__header starts */}
            <div className="category__header">
                <img src={home} alt=""/>
                <Link to="/">Home</Link>
                <img className="category__headerArrowIcon" src={rightArrow} alt=""/>
                <Link to="#">{categorySlug}</Link>
            </div>
            {/* category__header ends */}
            <div className="category__content">
            
                <div className="category__explore">
                    {/* category__exploreLeft starts */}
                    <div className="category__exploreLeft">
                        
                        {/* <div className="category__exploreLeftRangeSlider">
                            <label>Min: </label>
                            <input type="number" value={minPrice} onChange={e => {setMinPrice(e.target.value)}} />
                            <br />
                            <label>Max: </label>
                            <input type="number" value={maxPrice} onChange={e => {setMaxPrice(e.target.value)}} />
                            <br />
                            <br />
                            <Range
                                defaultValue={[0, 100]}
                                min={minPrice}
                                max={maxPrice}
                                onChange={onSliderChange}
                            />
                        </div> */}
                         {/* <RangeSlider/> */}
                        <div className="category__exploreLeftDrawer">
                            <h5>Price Range</h5>
                            <div to="#" className="category__exploreLeftItem">
                                <p>Brand</p>
                                <img src={plus} alt=""/>
                            </div>
                            <div to="#" className="category__exploreLeftItem">
                                <p>Weight</p>
                                <img src={plus} alt=""/>
                            </div>
                            <div to="#" className="category__exploreLeftItem">
                                <p>Quantity</p>
                                <img src={plus} alt=""/>
                            </div>
                            <div to="#" className="category__exploreLeftItem">
                                <p>Type</p>
                                <img src={plus} alt=""/>
                            </div>
                            <div to="#" className="category__exploreLeftItem">
                                <p>Variable</p>
                                <img src={plus} alt=""/>
                            </div>
                            <div to="#" className="category__exploreLeftItem">
                                <p>features</p>
                                <img src={plus} alt=""/>
                            </div>
                            <div to="#" className="category__exploreLeftItem">
                                <p>others</p>
                                <img src={plus} alt=""/>
                            </div>

                        </div>

                    </div>
                    {/* category__exploreLeft ends */}


                    {/* category__exploreRight starts */}
                    
                    <div className="category__exploreRight">
                        <div className="category__exploreRightCategory">
                            {
                                categories.map(category => (
                                    <Link to={`${category.categorySlug}`}>{category.category}</Link>

                                ))
                            }
                    
                        </div>
                        <div className="category__exploreRightSort">
                            <div className="category__exploreRightSortDropDown">
                                <select onChange={e => console.log(e.target.value)}>
                                    <option value="default">sort by default</option> 
                                    <option value="meat">Meat</option>    
                                    <option value="fish">Fish</option>    
                                    <option value="vegitable">Vegitable</option>    
                                </select>
                            </div>
                            <div className="category__exploreRightSortDropDown">
                                <select onChange={e => console.log(e.target.value)}>
                                    <option value="">show</option> 
                                    <option value="2">2</option>    
                                    <option value="3">3</option>    
                                    <option value="4">4</option>    
                                </select>
                            </div>
                        </div>


                        <div className="category__exploreRightProductsCategory">
                            {
                                subCategories.map(subCategory => (
                                    <SubCategoryProductCard key={subCategory._id} subCategory={subCategory}/> 
                                ))
                            }
                        </div>


                    </div>
                    {/* category__exploreRight ends */}
                </div>

            </div>
        </div>
    )
}

export default Category
