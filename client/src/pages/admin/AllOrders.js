import React, { useState, useEffect } from 'react'
import axios from 'axios'
import "./AllOrders.css"
import Layout from './Layout'
import {Link} from "react-router-dom"
import Moment from 'react-moment';
import TextField from '@material-ui/core/TextField';
import CircularProgress from '@material-ui/core/CircularProgress';





const AllOrders = (props) => {
    const [order, setOrders] = useState(null)
    const [message, setMessage] = useState('')
    const [createAt] = useState(new Date().toJSON())
    const [update, setUpdate] = useState({})

    useEffect(() => {
        async function fetchData() {
            axios.get("/admin/ordered-products")
                .then(res => {
                    setOrders(res.data)
                })
                .catch(e => console.log(e))
        }
        fetchData()
    }, [update])


    let pickedHandler = (e) => {
        let picked = {message, createAt}
        let orderUpdate = {picked}
        axios.put(`/admin/ordered-products/${e.target.dataset.id}`, orderUpdate)
            .then(res => {
                console.log(res.data)
                setUpdate(res.data)
            })
            .catch(e => {
                alert(e)
            })
    }
    let shippedHandler = (e) => {
        let shipped = {message, createAt}
        let orderUpdate = {shipped}

        axios.put(`/admin/ordered-products/${e.target.dataset.id}`, orderUpdate)
            .then(res => {
                console.log(res.data)

                setUpdate(res.data)
            })
            .catch(e => {
                alert(e)
            })
    }

    let deliveredHandler = (e) => {
        let delivered = {message, createAt}
        let orderUpdate = {delivered}
    
        axios.put(`/admin/ordered-products/${e.target.dataset.id}`, orderUpdate)
            .then(res => {
                console.log(res.data)

                setUpdate(res.data)
            })
            .catch(e => {
                alert(e)
            })
    }

    return (
        <Layout>
            <div className="allOrders">
                <div className="allOrders__content">
                    {
                    order === null ? <div className="noOrder text-center "><CircularProgress/></div>
                    :
                    order.length === 0 ? <div className="noOrder display-4 text-center ">No Orders</div>:
                    order.map(order => (
                        <div key={order._id} className={`allOrders__orderedBox ${order.delivered.message !== "false" && "completeDelivery"}`}>
                            <div className="d-flex justify-content-between">
                                <div className="h5 mr-2">{order._id}</div>
                                {order.paid.message === "false" ? 
                                    <div className="btn-sm btn-warning ml-2" >Unpaid</div>
                                    :
                                    <div className="ml-3 btn-sm btn-success ml-2">Paid</div>
                                }
                            </div>
                            <hr/>
                            <div className="allOrders__customer__info h5 text-danger justify-content-between">
                                <div className="">{order.customer.name}</div>
                                <div className="my-2">Phone: {order.customer.phone}</div>
                                <div className="">{order.customer.address}</div>

                            </div>
                            <hr/>
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="text-danger h3">&#2547; {order.subTotal}</div>
                                <div className="text-dark h6"><Moment format="D MMMM, h:mm A" date={order.createdAt}/></div>
                            </div>
                            <hr/>

                            <div className="allOrders__details">
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th scope="col">Product</th>
                                            <th scope="col">Price</th>
                                            <th scope="col">Quantity</th>
                                            <th scope="col">Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {order.cart_products.map((p) => (
                                            <tr className="allOrders__tableRow" key={p._id}>                                   
                                                <td><Link to={`/products/${p._id}`}><img style={{ width: 70, height: 50 }} className="img-thumbnail mr-3" src={`/images/${p.productImgs[0]}`} alt="" />{p.name}</Link></td>                                       
                                                <td>{p.price}</td>
                                                <td>
                                                    <div className="mx-3">{p.quantity}</div>      
                                                </td>
                                                <td>{p.price * p.quantity}</td>                                 
                                            </tr>                  
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            <div className="allOrders__subTotal h3 text-right mt-2">SubTotal Amount: <strong className="text-danger">&#2547; {order.subTotal}</strong></div>
                        
                            <div className="timeLineController text-right mb-2">
                                <div><TextField style={{width: "300px"}}className="my-3" onChange={e => setMessage(e.target.value)}  label="Enter Message To Your Customer" /></div>
                                <button  onClick={pickedHandler} data-id={order._id} disabled={order.picked.message === "false" ? "" : "disabled" } className="btn btn-primary">Picked</button>
                                <button  onClick={shippedHandler} data-id={order._id} disabled={order.shipped.message === "false" ? "" : "disabled" } className="btn btn-warning mx-2">Shipped</button>
                                <button  onClick={deliveredHandler} data-id={order._id} disabled={order.delivered.message === "false" ? "" : "disabled" } className="btn btn-success">Delivered</button>
                            </div>


                        </div>
                    ))}
                </div>
            </div>

        </Layout>
    )
}
export default AllOrders












