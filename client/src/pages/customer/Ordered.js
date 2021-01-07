import React, {useState, useEffect} from 'react'
import {Link} from "react-router-dom"
import axios from 'axios'
import './Ordered.css'
import Layout from './Layout'
import Moment from 'react-moment';
import CircularProgress from '@material-ui/core/CircularProgress';



 const Ordered = (props) => {
    const[ordered, setOrdered] = useState(null)
    // const[isOpen, setIsOpen] = useState(true)


    useEffect(() =>{
       async function fetchData() {
        axios.get("/customers/dashboard")
        .then(res => {
            setOrdered(res.data.orderedProducts)
            // console.log(res.data)
        })
        .catch(e => console.log(e))

       }
       fetchData()
    }, [])

    // let toggle = () => {
    //     setIsOpen(!isOpen)
    // }


    return (
        <Layout>
            <div className="ordered">
               <div className="ordered__content">
                    {

                    ordered === null ? <div className="noOrder text-center "><CircularProgress/></div>
                    :
                    ordered.length === 0 ? <div className="noOrder display-4 text-center ">Not Ordered Yet ? <br /> <Link className="text-success" to="/">Go to shop</Link></div>
                    :
                    ordered.map(orderedProduct => (
                        <div key={orderedProduct._id} className="orderedBox">
                            <div className="d-flex justify-content-between">
                                <div className="h5 mr-2">{orderedProduct._id}</div>
                                {orderedProduct.paid.message === "false" ? 
                                    <div className="btn-sm btn-warning ml-2" >Unpaid</div>
                                    :
                                    <div className="ml-3 btn-sm btn-success ml-2">Paid</div>
                                }
                            </div>
                            <hr/>
                            <div className="d-flex justify-content-between">
                                <div className="text-danger h3">&#2547; {orderedProduct.subTotal}</div>
                                <div className="text-dark h6"><Moment format="D MMMM, h:mm A" date={orderedProduct.createdAt}/></div>
                            </div>
                            <hr/>



                            <div className="">
                                <Link to={`/customer/ordered/${orderedProduct._id}`} className="btn btn-info" style={{width: "100%"}}>Details</Link>
                            </div>
                            
                        </div>
                    ))
                    }


               </div>

            </div>
        </Layout>
    )
}

export default Ordered