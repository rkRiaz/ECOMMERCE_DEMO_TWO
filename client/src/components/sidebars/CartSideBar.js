
import React, {useState, useEffect} from 'react';
import './CartSideBar.css'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { productQuantity, orderedProducts } from '../../store/actions/busketActions'
import { MdClose } from 'react-icons/md'
import axios from 'axios'

// import GrClose from '@material-ui/icons/GrClose';
import {cartSideBar} from "../../store/actions/sideBarAction"



const CartSideBar = (props) => {

    // const [isOpen, setIsOpen] = useState(true)
    // const [cart_products, setCart_products] = useState([])


    console.log(props.busket.cart_products)
    let { cart_products } = props.busket

    let fetchData = () => {
        props.busket.cart_products.map(busket_product => {  
            axios.get(`http://localhost:8080/api/product/get-single-product-by-id/${busket_product._id}`)
            .then(res => {
                busket_product.productName = res.data.product.productName
                busket_product.salePrice = res.data.product.salePrice
                busket_product.productImage = res.data.product.productImages[0]
            })
            .catch(err => {
                console.log(err)
            })
       })
      
    }
    useEffect(() => {
        fetchData()
    }, [props.busket.busketNumbers])
    // useEffect(() => {
    //     let fetchData = async() => {
    //         let busketProducts = props.busket.cart_products
    //         busketProducts.map(async busket_product => {
    //           let fetchProduct =  await axios.get(`http://localhost:8080/api/product/get-single-product-by-id/${busket_product._id}`)
    //           busket_product.ProductName = fetchProduct.data.product.productName
    //           busket_product.salePrice = fetchProduct.data.product.salePrice
    //           busket_product.productImages = fetchProduct.data.product.productImages 
    //        })
    //        setCart_products(busketProducts)
    //     }
    //     fetchData()
  
    //   },[props.busket.busketNumbers, props])

    //     useEffect(() => {
        
    //     // console.log(props.busket.cart_products) 
    //     let fetchProducts = []

    //      for(let i=0; i<props.busket.cart_products.length; i++) {
    //          axios.get(`http://localhost:8080/api/product/get-single-product-by-id/${props.busket.cart_products[i]._id}`)
    //          .then(res => {
    //             let product = res.data
    //             product.quantity = props.busket.cart_products[i].quantity ? props.busket.cart_products[i].quantity : 1 
    //             product.size  = props.busket.cart_products[i].size ? props.busket.cart_products[i].size : ''
    //             product.color = props.busket.cart_products[i].color ? props.busket.cart_products[i].color: ''
    //             product.weight = props.busket.cart_products[i].weight ? props.busket.cart_products[i].weight: 1
    //             fetchProducts.push(product)
    //          })
    //      }

    //     setCart_products(fetchProducts)
        
         
    //     //  console.log(fetchProducts)
       
    // }, [props.busket.busketNumbers])


    // let { cart_products } = props.busket
    let customerId = props.customer.customerInfo._id
    // let customer = props.customer.customer
    let total = cart_products.map(p => { return p.salePrice * p.quantity })
    let subTotal = total.reduce((a, b) => a + b, 0)
    
    let orderedProducts = props.busket.ordered_products

    orderedProducts.subTotal = subTotal
    // orderedProducts.customer= customer ? customer : ''
    orderedProducts.customerId = customerId ? customerId : ''
    // console.log(orderedProducts)
    // console.log(orderedProducts)

    // let checkOut = (e) => {
    //     e.preventDefault()
    //     if(checked === false) {
    //         setWarning("You must agree with the terms and conditions of sales to check out.")
    //     } else {
    //         // let history = {location: {pathname: "/customer/cart"}}
    //         props.cartSideBar__off()
    //         props.orderedProducts(customerId, orderedProducts, props.history)
    //     }

    // }


    let closeBar = e => {
        e.preventDefault()
        props.cartSideBar('close')
        // props.history.push("/customer/cart")
    }
    let viewCartAction = e => {
        e.preventDefault()
        props.cartSideBar('close')
        props.history.push('/cart')
    }
    // let termsHandler = e => {
    //     e.preventDefault()
    //     props.cartSideBar__off()
    //     props.history.push("/terms-and-condition")
    // }

    return (
        <div>
            <div className="cart__sidebar">

                <div className={props.sideBar.cartSideBar ? "cart__sidebar__content d-flex justify-content-between" : "cart__sidebar__content bar__off d-flex justify-content-between"}>

               
                                <div onClick={closeBar} className="cart__content__closeBtn"></div>
              
                                <div className={props.sideBar.cartSideBar ? "cart__sidebar__cart__details" : "cart__sidebar__cart__details bar__off"}>
                                    
                                    
                                        <div className="h4 ml-2 mb-4">Shopping Cart</div>
                                        <div onClick={closeBar} className={props.sideBar.cartSideBar ? "cart__content__closeBtn__icon mt-1" : " "}><MdClose/></div>
                                    
                                    
                                    <div className="cart__sidebar__cart__table">
                            
                                                {cart_products.map((p, index) => (
                                                    <div className="tableRow " key={index}>
                                                       <hr/>
                                                        <div className="d-flex">
                                                        <div className="mr-1" style={{ width: "170px"}}><img style={{ width: "100%", height: "150px" }} className="img-thumbnail" src={`/tempProductImages/${p.productImage ? p.productImage : ''}`} alt="" /></div>
                                                        <div className="ml-4 " style={{ width: "130px"}}>
                                                            <p className="font-weight-bold" style={{lineHeight: "17px"}}>{p.productName}</p>
                                                            <p className="text-danger font-weight-bold">&#2547; {p.salePrice}</p> 
                                                            <div className="cart__side__bar__productQuantityController d-flex justify-content-center font-weight-bolder">
                                                                <div onClick={() => props.productQuantity('decrease', p._id)} className="" style={{ cursor: 'pointer' }}>-</div>
                                                                <div className="mx-3">{p.quantity}</div>
                                                                <div onClick={() => props.productQuantity('increase', p._id)} className="" style={{ cursor: 'pointer' }}>+</div>
                                                            </div>                                                          
                                                           
                                                        </div>
                                                        </div>
                                                        
                                                    </div>
                                                ))}
                                  
                                    </div>

                                    <hr/>
                                    <div className="checkOut text-center mt-4 px-3">
                                        {/* <div className="h3 font-weight-bold">SubTotal Amount: &#2547;<strong>{subTotal}</strong></div>
                                        <p>Taxes, shipping and discounts codes calculated at checkout</p>
                                        <div className="d-flex justify-content-end my-2">
                                            <input onChange={e => setChecked(!checked)} className="mt-1" type="checkbox" />
                                            <div className="text-danger" style={{textDecorationLine: "underline"}} onClick={termsHandler}>I agree with the terms and conditions.</div>    
                                        </div> */}
                                        <div className="h3 font-weight-bold">SubTotal Amount: <strong style={{color: "#FE0000"}}>&#2547;{subTotal}</strong></div>
                                        <button onClick={viewCartAction} className="btn btn-warning font-weight-bold" style={{width: 200, borderRadius: 40}}>View Cart</button>
                                        {/* <button onClick={checkOut} className="btn btn-primary font-weight-bold mt-2" style={{width: 200, borderRadius: 40}}>CHECK OUT</button> */}
                                    </div>
                                    {/* {
                                    warning === null ? "" : 
                                    <div style={{position: "fixed", bottom: 0, left: 0, width: "100%", zIndex: 1}} className="alert alert-warning alert-dismissible fade show" role="alert">
                                        <ReportProblemOutlinedIcon className="mb-1"/><strong>&nbsp;&nbsp;&nbsp;{warning}</strong>
                                        <button onClick={e => setWarning(null)} type="button" className="close" data-dismiss="alert" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    } */}
                                </div>

                            </div>
            </div>        
        </div>
    );

}
const mapStateToProps = state => ({
    customer: state.customer,
    busket: state.busket,
    sideBar: state.sideBars
})
export default connect(mapStateToProps, { productQuantity, orderedProducts, cartSideBar })(withRouter(CartSideBar));

