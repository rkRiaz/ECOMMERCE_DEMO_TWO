import React, {useState, useEffect} from 'react'
import './SubCategory.css'
import {Link, useParams} from 'react-router-dom'
import SubCategoryProductCard from '../components/SubCategoryProductCard'

import home from '../assets/icons/home.svg'
import rightArrow from '../assets/icons/right-arrow.svg'
import plus from '../assets/icons/plus.svg'
import axios from 'axios'


// import RangeSlider from '../components/RangeSlider'

function SubCategory() {
    const[minPrice, setMinPrice] =useState(0)
    const[maxPrice, setMaxPrice] =useState(100)
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
    

    const onSliderChange = (value) => {
        // setMinPrice(value[0])
        // setMaxPrice(value[1])
        // console.log(minPrice + maxPrice)
    };
    //   const onMinChange = (e) => {
    //     this.setState({
    //       min: +e.target.value || 0,
    //     });
    //   };
    //   const onMaxChange = (e) => {
    //     this.setState({
    //       max: +e.target.value || 100,
    //     });
    //   };

    return (
        <div className="subCategory">
            {console.log(`${minPrice}, ${maxPrice}`)}
            <div className="subCategory__content">
                {/* subCategory__header starts */}
                <div className="subCategory__header">
                    <img src={home} alt=""/>
                    <Link to="#">ACCESSORIES</Link>
                    <img className="subCategory__headerArrowIcon" src={rightArrow} alt=""/>
                    <Link to="#">FRUITS</Link>
                </div>
                {/* subCategory__header ends */}

                {/* subCategory__headline starts */}
                {/* <div className="subCategory__headline">KEYBOARD</div> */}
                {/* subCategory__headline ends */}
            
                <div className="subCategory__explore">
                    {/* subCategory__exploreLeft starts */}
                    <div className="subCategory__exploreLeft">
                        
                        {/* <div className="subCategory__exploreLeftRangeSlider">
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
                        <div className="subCategory__exploreRightCategory">
                            {
                                categories.map(category => (
                                    <Link to={`${category.categorySlug}`}>{category.category}</Link>

                                ))
                            }
                    
                        </div>
                        <div className="subCategory__exploreRightSort">
                            <div className="header__middleSearchSortDropDown">
                                <h5>SHOW</h5>
                                <select onChange={e => console.log(e.target.value)}>
                                    <option value="1">1</option> 
                                    <option value="2">2</option>    
                                    <option value="3">3</option>    
                                    <option value="4">4</option>    
                                </select>
                            </div>
                            <div className="header__middleSearchSortDropDown">
                                <h5>SHORT BY</h5>
                                <select onChange={e => console.log(e.target.value)}>
                                    <option value="default">default</option> 
                                    <option value="meat">Meat</option>    
                                    <option value="fish">Fish</option>    
                                    <option value="vegitable">Vegitable</option>    
                                </select>
                            </div>
                        </div>


                        <div className="subCategory__exploreRightProductssubCategory">
                            {
                                subCategories.map(subCategory => (
                                    <SubCategoryProductCard key={subCategory._id} subCategory={subCategory}/> 
                                ))
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
