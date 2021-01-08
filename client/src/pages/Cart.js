import React, {useState, useEffect} from 'react';
import './Cart.css'
import { connect } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'


import { productQuantity, removeFromBusket, orderedProducts } from '../store/actions/busketActions'
import { FaTrash } from 'react-icons/fa'
import { MdReportProblem } from 'react-icons/md'

import axios from 'axios'


// import {cartSideBar__off} from '../store/actions/sideBarAction'
// import axios from 'axios';

const Cart = (props) => {
    const [checked, setChecked] = useState(false)
    const [warning, setWarning] = useState(null)
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

    

    // let fetchData = async() => {
    //     props.busket.cart_products.map(async busket_product => {  
    //         let {data} =  await axios.get(`http://localhost:8080/api/product/get-single-product-by-id/${busket_product._id}`)
    //         busket_product.productName = data.product.productName
    //         busket_product.salePrice = data.product.salePrice
    //         busket_product.productImage = data.product.productImages[0]
    //    })
      
    // }

    // fetchData()

    // useEffect(() => {
        
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
    //             setLoading(false)
    //          })
    //      }

    //     setCart_products(fetchProducts)
        
         
    //     //  console.log(fetchProducts)
       
    // }, [props.busket.busketNumbers])


    // let { cart_products } = props.busket
    // let customerId = props.customer.customerInfo._id
    // let customer = props.customer.customer
    let total = cart_products.map(p => { return p.salePrice * p.quantity })
    let subTotal = total.reduce((a, b) => a + b, 0)
    
    // let orderedProducts = props.busket.ordered_products

    // orderedProducts.subTotal = subTotal
    // orderedProducts.customer= customer ? customer : ''
    // orderedProducts.customerId = customerId ? customerId : ''
    // console.log(orderedProducts)

    let checkOut = (e) => {
        e.preventDefault()
        // checked === false ? setWarning("You must agree with the terms and conditions of sales to check out.") : 
        // props.orderedProducts(customerId, orderedProducts, props.history)
    }
    let termsHandler = e => {
        e.preventDefault()
        // props.cartSideBar__off()
        // props.history.push("/terms-and-condition")
    }



return(
    <div className="cart"> 

    {
        cart_products.length == 0 ? 
        <div className="display-4 text-center">Your Cart is Empty<br /> <Link className="text-success" to="/">Go to shop</Link></div>
        :
        <div className="">
            {/* {console.log(cart_products)}  */}
            <div className="text-center text-dark" style={{padding: "2% 0", background: '#eaeaea'}}>
                <div className="h2">My Cart</div>
                <Link to="/"><div className="badge badge-secondary text-center">&#8594; Go To Shop</div></Link> 
            </div>
            <div className="cart__content">
                    <div className="cart__details mt-5 px-3">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Product</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Amount</th>
                                    <th scope="col">Total</th>
                                    <th scope="col">Remove</th>                                            
                                </tr>
                            </thead>
                            <tbody className="table__body">
                                {cart_products.map(p => (
                                    <tr className="tableRow">
                                        <td><Link to={`/product/${p._id}`}><img className="img-thumbnail mr-3" src={`/tempProductImages/${p.productImage ? p.productImage : ''}`} alt="" />{p.productName}</Link></td>
                                        <td>{p.salePrice}</td>
                                        <td>
                                            <div className="productQuantityController d-flex font-weight-bolder">
                                                <div onClick={() => props.productQuantity('decrease', p._id)} className="" style={{ cursor: 'pointer' }}>-</div>
                                                <div className="mx-3">{p.quantity}</div>
                                                <div onClick={() => props.productQuantity('increase', p._id)} className="" style={{ cursor: 'pointer' }}>+</div>
                                            </div>
                                        </td>
                                        <td>{p.salePrice * p.quantity}</td>
                                        <td>
                                            <FaTrash onClick={() => props.removeFromBusket(p._id)} style={{ marginBottom: 7, cursor: 'pointer', color: "#FE0000"}}/>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <hr/>
                    <div className="checkOut text-right mt-4 px-3">
                        <div className="h3 font-weight-bold">SubTotal Amount: <strong style={{color: "#FE0000"}}>&#2547;{subTotal}</strong></div>
                        <p>Taxes, shipping and discounts codes calculated at checkout</p>
                        <div className="d-flex justify-content-end my-2">
                            <input onChange={e => setChecked(!checked)} className="mt-1" type="checkbox" /> &nbsp;&nbsp;
                            <div className="text-danger" style={{textDecorationLine: "underline"}} onClick={termsHandler}>I agree with the terms and conditions.</div>    
                        </div>
                        <button onClick={checkOut} className="btn btn-primary font-weight-bold mt-2" style={{width: 300, borderRadius: 5, background: '#0B273D', border: 'none', outline: 'none'}}>CHECK OUT</button>
                    </div>
                    {/* warning alert starts */}
                    { warning === null ? "" : 
                    <div style={{position: "fixed", bottom: 0, left: 0, width: "100%", zIndex: 1000}} className="alert alert-warning alert-dismissible fade show text-center" role="alert">
                        <MdReportProblem className="mb-1"/><strong>&nbsp;&nbsp;&nbsp;{warning}</strong>
                        <button onClick={e => setWarning(null)} type="button" className="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    }{/* warning alert ends */}
                </div>
        </div>
    }
    
    </div>
)
} 

    


const mapStateToProps = state => ({
    customer: state.customer,
    busket: state.busket
})
export default connect(mapStateToProps, { productQuantity, removeFromBusket,  orderedProducts })(Cart);



