import React, {useState, useEffect} from 'react'
import "./Customers.css"
import Layout from './Layout'
import axios from 'axios'
import Moment from 'react-moment'


const Customers = () => {
    const [customers, setCustomers] = useState([])

    useEffect(() => {
        async function fetchData() {
            axios.get("/customers")
                .then(res => {
                    setCustomers(res.data)
                })
                .catch(e => console.log(e))
        }
        fetchData()
    }, [])
   
    return (
        <Layout>
            <div className="customers">
                <div className="customers__chart">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">Image</th>
                                <th scope="col">Name</th>
                                <th scope="col">Phone</th>
                                <th scope="col">Address</th>
                                <th scope="col">Email</th>
                                <th scope="col">Create Date</th>
                                <th scope="col">Orders</th>
                            </tr>
                        </thead>
                        <tbody>
                        { customers.map(customer => (
                            <tr className="tableRow" key={customer._id}>
                                <td><img style={{ width: 70, height: 50 }} className="img-thumbnail mr-3" src={`/images/`} alt="" /></td>
                                <td>{customer.name}</td>
                                <td>{customer.phone}</td>
                                <td>{customer.address}</td>
                                <td>{customer.email}</td>
                                <td><Moment format="D MMMM, h:mm A">{customer.createdAt}</Moment></td>
                                <td><div className="btn btn-warning">Click</div></td>
                            </tr>
                            ))
                        }    
                        </tbody>
                    </table>



                </div>
            </div>
        </Layout>
    )
}
export default Customers
