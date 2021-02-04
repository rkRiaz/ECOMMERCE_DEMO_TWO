import React, {useState, useEffect} from 'react';
import './Cart.css'
import { connect } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'

import { productQuantity, removeFromBusket, orderAction, setBusketFromDB } from '../store/actions/busketActions'
import {loginSideBar} from '../store/actions/sideBarAction'

import { FaTrash } from 'react-icons/fa'

import { Table } from 'react-bootstrap'
import axios from 'axios'

import Loading from '../components/Loading'


// import {cartSideBar__off} from '../store/actions/sideBarAction'
// import axios from 'axios';

const Cart = (props) => {
    const [cart_products, setCart_products] = useState('')
    const [subTotal, setSubTotal] = useState('')

    const history = useHistory()


    const fetchData = async () => {
        let cartProducts = []
        for(let i = 0; i < props.busket.cart_products.length; i++ ) {
            let {data} = await axios.get(`http://localhost:8080/api/product/get-single-product-by-id/${props.busket.cart_products[i]._id}`)
            cartProducts.push({
                _id: data.product._id,
                productName: data.product.productName,
                salePrice: data.product.salePrice,
                quantity: props.busket.cart_products[i].quantity,
                productImage: data.product.productImages[0],
            })
        }
        setCart_products(cartProducts)
        if(cartProducts.length > 0) {
            let total = cartProducts.map(p => { return p.salePrice * p.quantity })
            setSubTotal(total.reduce((a, b) => a + b, 0))
        }
    }


    useEffect(() => {
        // if(!props.customer.customerLoggedIn) {
            fetchData()
        // }
        props.orderAction({subTotal})

    }, [props.busket.busketNumbers, subTotal])





        // fetch cart from customer database
        // useEffect(() => {
        //     if(props.customer.customerLoggedIn) {
        //         let cartProducts = []

        //         axios.get(`http://localhost:8080/api/customer/loginCustomerInfo`, {
        //             headers: {
        //                 Authorization: `Bearer ${props.customer.customerToken}`
        //             }
        //         }) 
        //         .then(res => {
        //             if(res.data.customerInfo.cart.length !== 0) {
        //                 // return console.log(res.data.customerInfo)
        //                 // setCart_products (res.data.customerInfo.cart)
        //                 let quantity = res.data.customerInfo.cart.map(p => {return p.quantity})   
        //                 let busketNumbers = quantity.reduce((a, b) => a + b, 0)
        //                 props.setBusketFromDB(res.data.customerInfo.cart, busketNumbers)
        //             }
        //         })
        //         .catch(e => console.log(e))


        //         const fetchData = async() => {
        //             for(let i = 0; i < props.busket.cart_products.length; i++ ) {
        //                 let {data} = await axios.get(`http://localhost:8080/api/product/get-single-product-by-id/${props.busket.cart_products[i]._id}`)
        //                 cartProducts.push({
        //                     _id: data.product._id,
        //                     productName: data.product.productName,
        //                     salePrice: data.product.salePrice,
        //                     quantity: props.busket.cart_products[i].quantity,
        //                     productImage: data.product.productImages[0],
        //                 })
        //             }
        //             setCart_products(cartProducts)
        //             if(cartProducts.length > 0) {
        //                 let total = cartProducts.map(p => { return p.salePrice * p.quantity })
        //                 setSubTotal(total.reduce((a, b) => a + b, 0))
        //             }
        //         }
        //         fetchData()

        //         axios.put(`http://localhost:8080/api/customer/editInfo`, props.busket.cart_products, {
        //             headers: {
        //                 'Authorization': `Bearer ${props.customer.customerToken}` 
        //             }
        //         })


        //     }
        // },[props.busket.busketNumbers])




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

    // let total = cart_products.length !== 0 && cart_products !== '' ? cart_products.map(p => { return p.salePrice * p.quantity }) : ''
    // let subTotal = total.reduce((a, b) => a + b, 0)
    
    // let orderedProducts = props.busket.ordered_products

    // orderedProducts.subTotal = subTotal
    // orderedProducts.customer= customer ? customer : ''
    // orderedProducts.customerId = customerId ? customerId : ''
    // console.log(orderedProducts)

    let checkOut = (e) => {
        e.preventDefault()
 
        props.customer.customerLoggedIn ?
        history.push('/shippingInformation')
        :
        props.loginSideBar('open')
        // props.orderedProducts(customerId, orderedProducts, props.history)
    }

    if(cart_products === '') {
        return(
            <div className="cart__loading">
                <Loading/>
            </div>
        )
    }

    if(cart_products.length === 0) {
        return(
            <div className="display-4 text-center">Your Cart is Empty<br /> <Link className="text-success" to="/">Go to shop</Link></div>
        )
    }

    if(cart_products.length !== 0) {
       return(
        <div className="cart"> 
        <div className="">
            {/* {console.log(cart_products)}  */}
            <div className="text-center text-dark" style={{padding: "2% 0", background: '#eaeaea'}}>
                <div className="h2 font-weight-bold">My Cart</div>
                <Link to="/"><div className="badge badge-secondary text-center">&#8594; Go To Shop</div></Link> 
            </div>
            <div className="cart__content">
                    <div className="cart__details mt-5 px-3">
                        <Table  hover>
                            <thead>
                                <tr>
                                    <th>Product</th>
                                    <th>Quantity</th>
                                    <th>Price</th>
                                    <th>Total</th>
                                    <th>Remove</th>                                            
                                </tr>
                            </thead>
                            <tbody>
                                {cart_products.map(p => (
                                    <tr className="tableRow">
                                        <td><Link to={`/product/${p._id}`}><img className="img-thumbnail mr-3" src={`http://localhost:8080/uploads/images/${p.productImage}`} alt="" />{p.productName}</Link></td>
                                        <td>
                                            <div className="productQuantityController d-flex font-weight-bolder">
                                                <div onClick={() => props.productQuantity('decrease', p._id)} className="" style={{ cursor: 'pointer' }}>-</div>
                                                <div className="mx-3">{p.quantity}</div>
                                                <div onClick={() => props.productQuantity('increase', p._id)} className="" style={{ cursor: 'pointer' }}>+</div>
                                            </div>
                                        </td>
                                        <td>&#2547;{p.salePrice}</td>
                                        <td>&#2547;{p.salePrice * p.quantity}</td>
                                        <td>
                                            <FaTrash onClick={() => props.removeFromBusket(p._id)} style={{ marginBottom: 7, cursor: 'pointer', color: "#FE0000"}}/>
                                        </td>
                                    </tr>
                                    
                                ))}
                            </tbody>
                        </Table>
                        <hr/>
                    </div>
                    <div className="checkOut text-right mt-4 px-3">
                        <div className="h3 font-weight-bold">SubTotal Amount: <strong style={{color: "#FE0000"}}>&#2547;{subTotal}</strong></div>
                        <p>Taxes, shipping and discounts codes calculated at checkout</p>
                        <button onClick={checkOut} className="btn btn-primary mt-2" style={{width: 300}}>CHECK OUT</button>
                    </div>
                    {/* warning alert starts */}
                    {/* { warning === null ? "" : 
                    <div style={{position: "fixed", bottom: 0, left: 0, width: "100%", zIndex: 1000}} className="alert alert-warning alert-dismissible fade show text-center" role="alert">
                        <MdReportProblem className="mb-1"/><strong>&nbsp;&nbsp;&nbsp;{warning}</strong>
                        <button onClick={e => setWarning(null)} type="button" className="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    } */}
                    {/* warning alert ends */}
                </div>
        </div>
    </div>
       )
    }
} 

    

const mapStateToProps = state => ({
    customer: state.customer,
    busket: state.busket
})
export default connect(mapStateToProps, { productQuantity, removeFromBusket, orderAction, setBusketFromDB, loginSideBar })(Cart);



