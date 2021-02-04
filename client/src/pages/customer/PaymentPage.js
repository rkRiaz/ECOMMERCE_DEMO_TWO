import React, { useState, useEffect } from 'react'
import './PaymentPage.css'
import { } from 'react-redux'

import { Link, useHistory } from 'react-router-dom'

import { BiCreditCard } from 'react-icons/bi'
import { FaMoneyBillWave } from 'react-icons/fa'
import bkashLogo from '../../assets/images/bkash.svg'

import { AiOutlineUser, AiOutlinePhone, AiOutlineMail } from 'react-icons/ai'
import axios from 'axios'
import {connect} from 'react-redux'

import {loginSideBar} from '../../store/actions/sideBarAction'
import {orderAction } from '../../store/actions/busketActions'

function PaymentPage(props) {
    const [subTotal, setSubTotal] = useState('')
    const history = useHistory()


    useEffect(() => {
        setSubTotal(props.busket.order.subTotal)
    }, [])


    const paymentGateWay = e => {
        alert('payment Information Submitted')
        console.log(props.busket.order)
    }


    const openPaymentType = paymentType => e => {
        var x = document.getElementsByClassName("payment__contentMethodsDetailsContent");
        var y = document.getElementsByClassName("payment__contentMethodsMethod");
     

        for (let i = 0; i < x.length; i++) {
          x[i].style.display = "none";
          y[i].style.color = "#000"
          y[i].style.background = "#fff"
        }
        e.target.style.backgroundColor = "rgb(0, 115, 192)"
        e.target.style.color = "#fff"


        document.getElementById(paymentType).style.display = "block";
    }

    return (
        <div className="payment"> 
            <div className="payment__headline">
                PLEASE SELECT PAYMENT METHOD
            </div>
            <div className="payment__content">
                <div className="">
                    <div className="payment__contentMethods">
                        <div className="payment__contentMethodsMethod" onClick={openPaymentType('cash')} style={{backgroundColor: 'rgb(0, 115, 192)', color: '#fff'}}>
                            <div className="payment__contentMethodsMethodContent">
                                <FaMoneyBillWave className="payment__contentMethodsMethodIcon mb-2"/><br/>
                                Cash On Delivery
                            </div>
                        </div>
                        <div className="payment__contentMethodsMethod" onClick={openPaymentType('bkash')}>
                            <div className="payment__contentMethodsMethodContent">
                                <img width="50px" height="50px" src={bkashLogo} className="payment__contentMethodsMethodIcon mb-2"/><br/>
                                Bkash
                            </div>
                        </div>
                        <div className="payment__contentMethodsMethod" onClick={openPaymentType('creditCard')}>
                            <div className="payment__contentMethodsMethodContent">
                                <BiCreditCard className="payment__contentMethodsMethodIcon mb-2"/><br/>
                                Credit/Debit Card
                            </div>
                        </div>
                    </div>
                    <div className="payment__contentMethodsDetails">
                        <div id="cash" className="payment__contentMethodsDetailsContent" style={{display: 'block'}}>
                            <h5>Cash On Delivery</h5>
                            <div className="">
                                <p>1. Rules about cash on delivery</p>
                                <p>1. Rules about cash on delivery</p>
                                <p>1. Rules about cash on delivery</p>
                                <p>1. Rules about cash on delivery</p>
                                <p>1. Rules about cash on delivery</p>
                                <p>1. Rules about cash on delivery</p>
                                <p>1. Rules about cash on delivery</p>
                            </div>
                            <button onClick={paymentGateWay} className="btn btn-success">CONFIRM</button>
                        </div>
                        <div id="bkash" className="payment__contentMethodsDetailsContent">
                        <h5>Mobile Banking</h5>
                            <div className="">
                                <p>1. Rules about mobile banking</p>
                                <p>1. Rules about mobile banking</p>
                                <p>1. Rules about mobile banking</p>
                                <p>1. Rules about mobile banking</p>
                                <p>1. Rules about mobile banking</p>
                                <p>1. Rules about mobile banking</p>
                                <p>1. Rules about mobile banking</p>
                            </div>
                            <button onClick={paymentGateWay} className="btn btn-success">CONFIRM</button>
                        </div>
                        <div id="creditCard" className="payment__contentMethodsDetailsContent">
                        <h5>Payment with Credit/Debit card</h5>
                            <div className="">
                                <p>1. Rules about Credit/Debit card</p>
                                <p>1. Rules about Credit/Debit card</p>
                                <p>1. Rules about Credit/Debit card</p>
                                <p>1. Rules about Credit/Debit card</p>
                                <p>1. Rules about Credit/Debit card</p>
                                <p>1. Rules about Credit/Debit card</p>
                                <p>1. Rules about Credit/Debit card</p>
                            </div>
                            <button onClick={paymentGateWay} className="btn btn-success">CONFIRM</button>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="payment__contentOrderSummery">
                        <h4 className="mb-4">Order Summary</h4>
                        <div className="d-flex justify-content-between">
                            <div className="">Subtotal</div>
                            <div className="text-danger">&#2547;{subTotal ? subTotal : ''}</div>
                        </div>
                        <div className="payment__contentOrderSummeryTotal d-flex justify-content-between mt-3">
                            <div className="">Total cost</div>
                            <div className="text-danger">&#2547;{subTotal ? subTotal : ''}</div>
                        </div>
                    </div>
                </div>

            </div>

            {/* payment__content ends */}
        </div>

    )
}

const mapStateToProps = state => ({
    customer: state.customer,
    busket: state.busket
})

export default connect(mapStateToProps, {loginSideBar, orderAction})(PaymentPage)

