import React, {useState, useEffect} from 'react'
import './CategoryProductCard.css'
import {Link} from 'react-router-dom'

import shoppingCartDark from '../assets/icons/shoppingCartDark.svg'
import heartOutlined from '../assets/icons/heartOutlined.svg'
import starYellow from '../assets/icons/starYellow.svg'
import starDark from '../assets/icons/starDark.svg'

import { connect } from 'react-redux'
import { addToBusket } from '../store/actions/busketActions'
import {cartSideBar} from "../store/actions/sideBarAction"





function CategoryProductCard(props) {

    const [product, setProduct] = useState(props.product)

    // useEffect(() => {
    //     setProduct(props.product)
    // }, [])


    return (
        <div className="categoryProductCard">
            
            <Link to={`product/${product.subCategorySlug}`}>
                <img className="categoryProductCardLargeImage" src={`/tempProductImages/${product.subCategoryImage}`} alt=""/> 

                <div className="categoryProductCard__name px-3 mt-4">{product.name}</div>

            </Link>

     

        </div>
    )
}

export default connect(null, {addToBusket, cartSideBar})(CategoryProductCard)
