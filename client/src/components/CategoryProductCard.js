import React, {useState, useEffect} from 'react'
import './CategoryProductCard.css'
import {Link} from 'react-router-dom'



function CategoryProductCard(props) {

    const [category, setCategory] = useState(props.category)

    // useEffect(() => {
    //     setProduct(props.product)
    // }, [])

    return (
        <div className="categoryProductCard">
            <Link to={`category/${category.categorySlug}`}>
                <img className="categoryProductCardLargeImage" src={`/tempProductImages/${category.categoryImage}`} alt=""/> 
                <div className="categoryProductCard__name px-3 mt-4">{category.category}</div>
            </Link>
        </div>
    )
}

export default CategoryProductCard
