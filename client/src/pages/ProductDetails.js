import React, {useState, useEffect} from 'react'
import './ProductDetails.css'
import {Link} from 'react-router-dom'
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux'
import { addToBusket } from '../store/actions/busketActions'

import rightArrow from '../assets/icons/right-arrow.svg'
import home from '../assets/icons/home.svg'
// import products from '../dummy_db/products'

import starYellow from '../assets/icons/starYellow.svg'
import starDark from '../assets/icons/starDark.svg'
import shoppingCart from '../assets/icons/shoppingCart.svg'
import heartWhite from '../assets/icons/heartWhite.svg'

import facebook from '../assets/icons/facebook.svg'
import twitter from '../assets/icons/twitter.svg'
import instagram from '../assets/icons/instagram-t.svg'
import linkedin from '../assets/icons/linkedin.svg'
import youtube from '../assets/icons/YouTube-Emblem.svg'
import blogVideo from '../assets/images/Blog-Banner-03.svg'

import jelly from '../assets/images/jelly.svg'
import axios from 'axios';



function ProductDetails(props) {
    const [product, setProduct] = useState('')
    const[quantity, setQuantity] = useState(1)
    const[largeImage, setLargeImage] = useState('')

    const { productId } = useParams();


    const changeImage = e => {
        let target = e.target.parentElement
        let imgSrc = target.dataset.image
        setLargeImage(imgSrc)
    }
    const addHandler = e => {
        e.preventDefault()
        setQuantity(quantity+1)
    }
    const subtractHandler = e => {
        e.preventDefault()
        if(quantity !== 1){
            setQuantity(quantity-1)
        }
    }
    const navigate = type => e => {
        e.preventDefault()
        var x = document.getElementsByClassName("navClass");
        var y = document.getElementsByClassName("nav__btn");
        for (let i = 0; i < x.length; i++) {
          x[i].style.display = "none";
          y[i].style.backgroundColor = "#D6D6D6"
        }
        e.target.style.backgroundColor = "#DA0707"
        document.getElementById(type).style.display = "block";
    }

    useEffect(() => {
      const fetchData = async() => {
        let {data} =  await axios.get(`http://localhost:8080/api/product/get-single-product-by-id/${productId}`)
        setLargeImage(data.product.productImages[0])
        setProduct(data.product)
        // console.log(fetchProduct)
      }
      fetchData()
    }, [])

    return (
        <div className="details">

        {/* details__header starts */}
            <div className="details__header">
                <div className="details__headerContainer">
                    <img src={home} alt=""/>
                    <Link to="#">ACCESSORIES</Link>
                    <img className="details__headerArrowIcon" src={rightArrow} alt=""/>
                    <Link to="#">FRUITS</Link>
                    <img className="details__headerArrowIcon" src={rightArrow} alt=""/>
                    <Link to="#">{product.name}</Link>
                </div>
            </div>
        {/* details__header ends */}

       
            <div className="details__container">
                 {/* details__top starts */}
                <div className="details_top">
                    <div className="details__topLeft">
                        <div className="details__topLeftLargeImg">
                            <img src={`/tempProductImages/${largeImage}`} alt=""/>
                        </div>
                        <div className="details__topLeftSmallImgs">
                           {
                            product? product.productImages.map(image => (
                            <div onClick={changeImage} data-image={image} className="details__topLeftSmallImg mr-4">
                                <img src={`/tempProductImages/${image}`} alt=""/>
                            </div>
                            )) : '' 
                           }
                        </div>
                    </div>

                    <div className="details__topRight">
                        <div className="product__name">{product.productName}</div>
                        <div className="product__info">
                            <ul>
                                <li><span>Price</span>&nbsp;&nbsp;&nbsp;&nbsp;{product?.salePrice}&#2547;</li>
                                <li><span>Status </span>{product.available ? "In Stock" : "Out of Stock"}</li>
                                <li><span>Product Code </span>{product?.productCode}</li>
                                <li><span>Brand </span>{product?.brand}</li>
                            </ul>
                        </div>
                        <div className="product__details">{product?.shortDescription}</div>
                        <div className="product__moreInfo">
                            <Link to="#" >View More Info</Link>
                        </div>
                        <div className="product__review">
                            {product.reviews?.length} Customer Review &nbsp;&nbsp;
                            {
                                Array(product.rating ? product.rating : 3).fill().map((_, i) => (
                                    <img className="product__reviewIcon" key={i} src={starYellow} alt=""/>
                                )) 
                            }
                            {
                                Array(product.rating ? 5-product.rating : 2).fill().map((_, i) => (
                                    <img className="product__reviewIcon" key={i} src={starDark} alt=""/>
                                )) 
                            }
                        </div>
                        <div className="product__price">
                            {/* product-sans font not imported */}
                            {quantity * product?.salePrice}&#2547;
                        </div>
                        <div className="product__action">
                            <div className="product__actionQuantity">
                                <div onClick={subtractHandler} className="" style={{cursor: 'pointer', borderRight: '1px solid #707070'}}>-</div>
                                <div className="" style={{borderRight: ' 1px solid #707070', width: "100%"}}>{quantity}</div>
                                <div onClick={addHandler} className="" style={{cursor: 'pointer'}}>+</div>
                            </div>
                            <Link onClick={() => {props.addToBusket(product._id, quantity, props.history)}}to="#" className="product__actionBuy"><img src={shoppingCart} alt=""/> BUY NOW</Link>
                            <Link to="#" className="product__actionWish"><img src={heartWhite} alt=""/></Link>
                            <Link to="#" className="product__actionCart"><img src={shoppingCart} alt=""/></Link>
                        </div>
                        <div className="productSocial">
                            <h4>Share In</h4>
                            <div className="productSocial__icons">
                                <Link to=""><img src={facebook} alt=""/></Link>
                                <Link to=""><img src={twitter} alt=""/></Link>
                                <Link to=""><img src={instagram} alt=""/></Link>
                                <Link to=""><img src={linkedin} alt=""/></Link>
                            </div>
                        </div>
                    </div>
                </div>
                 {/* details__top ends */}


                {/* details__bottom starts */}
                <div className="details__bottom">
          
                    <div className="details__bottomLeft ">
                        <div className="details__bottomLeftHeader">
                            <span className="nav__btn" onClick={navigate('description')}>Description</span>
                            <span className="nav__btn" onClick={navigate('reviews')}>Reviews (15)</span>
                        </div>

                        <div id="description" className="navClass details__bottomLeftContent">
                            <h3>Description :</h3>
                            <p> Halaldokan.com is an online shop in Dhaka, Bangladesh. We believe time is valuable to our fellow Dhaka residents, and that they should not 
                                have to waste hours in traffic, brave bad weather and wait in line just to buy basic necessities like eggs! This is why Halaldokan delivers 
                                everything you need right at your door-step and at no additional cost.
                            </p>
                            <div className="details__bottomLeftContentVideo">
                                {/* <video width="320" height="240" autoplay>
                                    <source src={blogVideo} type="video/mp4" />
                                </video> */}
                                <img src={blogVideo} alt=""/>
                                <div className="details__bottomLeftContentIcon">
                                    <img src={youtube} alt=""/>
                                </div>
                            </div>
                        </div>

                        <div id="reviews" className="navClass details__bottomLeftContentRivews p-4" style={{display: 'none'}}>
                                <h3>Reviews (15) :</h3>
                                <div className="details__bottomLeftContentRivewsItem">
                                    <h3>Saiful Islam</h3>
                                    <div className="product__review my-3">
                                        {
                                            Array(4).fill().map((_, i) => (
                                                <img className="product__reviewIcon" key={i} src={starYellow} alt=""/>
                                            )) 
                                        }
                                        {
                                            Array(1).fill().map((_, i) => (
                                                <img className="product__reviewIcon" key={i} src={starDark} alt=""/>
                                            )) 
                                        }
                                    </div>
                                    <p> Halaldokan.com is an online shop in Dhaka, Bangladesh. We believe time is valuable to our fellow Dhaka residents, and that they should not 
                                        have to waste hours in traffic, brave bad weather and wait in line just to buy basic necessities like eggs! This is why Halaldokan delivers 
                                        everything you need right at your door-step and at no additional cost.
                                    </p>
                                </div>
                                <div className="details__bottomLeftContentRivewsItem">
                                    <h3>Saiful Islam</h3>
                                    <div className="product__review my-3">
                                        {
                                            Array(4).fill().map((_, i) => (
                                                <img className="product__reviewIcon" key={i} src={starYellow} alt=""/>
                                            )) 
                                        }
                                        {
                                            Array(1).fill().map((_, i) => (
                                                <img className="product__reviewIcon" key={i} src={starDark} alt=""/>
                                            )) 
                                        }
                                    </div>
                                    <p> Halaldokan.com is an online shop in Dhaka, Bangladesh. We believe time is valuable to our fellow Dhaka residents, and that they should not 
                                        have to waste hours in traffic, brave bad weather and wait in line just to buy basic necessities like eggs! This is why Halaldokan delivers 
                                        everything you need right at your door-step and at no additional cost.
                                    </p>
                                </div>
                                <div className="details__bottomLeftContentRivewsItem">
                                    <h3>Saiful Islam</h3>
                                    <div className="product__review my-3">
                                        {
                                            Array(4).fill().map((_, i) => (
                                                <img className="product__reviewIcon" key={i} src={starYellow} alt=""/>
                                            )) 
                                        }
                                        {
                                            Array(1).fill().map((_, i) => (
                                                <img className="product__reviewIcon" key={i} src={starDark} alt=""/>
                                            )) 
                                        }
                                    </div>
                                    <p> Halaldokan.com is an online shop in Dhaka, Bangladesh. We believe time is valuable to our fellow Dhaka residents, and that they should not 
                                        have to waste hours in traffic, brave bad weather and wait in line just to buy basic necessities like eggs! This is why Halaldokan delivers 
                                        everything you need right at your door-step and at no additional cost.
                                    </p>
                                </div>
                                <div className="details__bottomLeftContentRivewsItem">
                                    <h3>Saiful Islam</h3>
                                    <div className="product__review my-3">
                                        {
                                            Array(4).fill().map((_, i) => (
                                                <img className="product__reviewIcon" key={i} src={starYellow} alt=""/>
                                            )) 
                                        }
                                        {
                                            Array(1).fill().map((_, i) => (
                                                <img className="product__reviewIcon" key={i} src={starDark} alt=""/>
                                            )) 
                                        }
                                    </div>
                                    <p> Halaldokan.com is an online shop in Dhaka, Bangladesh. We believe time is valuable to our fellow Dhaka residents, and that they should not 
                                        have to waste hours in traffic, brave bad weather and wait in line just to buy basic necessities like eggs! This is why Halaldokan delivers 
                                        everything you need right at your door-step and at no additional cost.
                                    </p>
                                </div>
                                <div className="details__bottomLeftContentRivewsItem">
                                    <h3>Saiful Islam</h3>
                                    <div className="product__review my-3">
                                        {
                                            Array(4).fill().map((_, i) => (
                                                <img className="product__reviewIcon" key={i} src={starYellow} alt=""/>
                                            )) 
                                        }
                                        {
                                            Array(1).fill().map((_, i) => (
                                                <img className="product__reviewIcon" key={i} src={starDark} alt=""/>
                                            )) 
                                        }
                                    </div>
                                    <p> Halaldokan.com is an online shop in Dhaka, Bangladesh. We believe time is valuable to our fellow Dhaka residents, and that they should not 
                                        have to waste hours in traffic, brave bad weather and wait in line just to buy basic necessities like eggs! This is why Halaldokan delivers 
                                        everything you need right at your door-step and at no additional cost.
                                    </p>
                                </div>
                                <div className="details__bottomLeftContentRivewsItem">
                                    <h3>Saiful Islam</h3>
                                    <div className="product__review my-3">
                                        {
                                            Array(4).fill().map((_, i) => (
                                                <img className="product__reviewIcon" key={i} src={starYellow} alt=""/>
                                            )) 
                                        }
                                        {
                                            Array(1).fill().map((_, i) => (
                                                <img className="product__reviewIcon" key={i} src={starDark} alt=""/>
                                            )) 
                                        }
                                    </div>
                                    <p> Halaldokan.com is an online shop in Dhaka, Bangladesh. We believe time is valuable to our fellow Dhaka residents, and that they should not 
                                        have to waste hours in traffic, brave bad weather and wait in line just to buy basic necessities like eggs! This is why Halaldokan delivers 
                                        everything you need right at your door-step and at no additional cost.
                                    </p>
                                </div>
                            </div>
                    </div>

         



                    <div className="details__bottomRight">
                        <div className="details__bottomRightList">
                            <div className="details__bottomRightListItemHeader">
                                Related Product
                            </div>
                            <Link to="" className="details__bottomRightListItem">
                                <img src={jelly} alt=""/>
                                <div className="details__bottomRightListItemInfo">
                                    <div className="details__bottomRightListItemName">Frosty Fruits</div>
                                    <div className="details__bottomRightListItemPrice">500&#2547;</div>
                                </div>
                            </Link>
                            <Link to="" className="details__bottomRightListItem">
                                <img src={jelly} alt=""/>
                                <div className="details__bottomRightListItemInfo">
                                    <div className="details__bottomRightListItemName">Frosty Fruits</div>
                                    <div className="details__bottomRightListItemPrice">500&#2547;</div>
                                </div>
                            </Link>
                            <Link to="" className="details__bottomRightListItem">
                                <img src={jelly} alt=""/>
                                <div className="details__bottomRightListItemInfo">
                                    <div className="details__bottomRightListItemName">Frosty Fruits</div>
                                    <div className="details__bottomRightListItemPrice">500&#2547;</div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
                {/* details__bottom starts */}

            </div>
       





        </div>
    )
}

const mapStateToProps = state => ({
    customer: state.customer,
    busket: state.busket
})
export default connect(mapStateToProps, { addToBusket })(ProductDetails)
