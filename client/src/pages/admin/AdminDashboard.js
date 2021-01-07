import React from 'react'
import './AdminDashboard.css'
import AdminLayout from './AdminLayout'
// import axios from 'axios'
// import {FaStarOfLife} from 'react-icons/fa'



const AdminDashboard = (props) => {


    return (
        <AdminLayout>
            <div className="display-4 text-center" style={{marginTop: 300}}>
                Welcome To Admin's Dashboard
            </div>
        </AdminLayout>
    )
}
export default AdminDashboard
