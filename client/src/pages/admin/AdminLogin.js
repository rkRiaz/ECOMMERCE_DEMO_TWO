import React, {useState} from 'react'
import Layout from '../../components/Layout'
import {FaStarOfLife} from 'react-icons/fa'
import { adminLogin } from '../../store/actions/adminAction'
import { connect } from 'react-redux'
import './AdminLogin.css'



function AdminLoginPage(props) {
    const [loginPhone, setLoginPhone] = useState(null)
    const [loginPassword, setLoginPassword] = useState(null)


    let {error} = props.admin

    return (
        <Layout>
            <div className="admin__login">
                <div className="admin__login__content">
                    <div className="h4 my-3 text-dark">ADMIN LOGIN</div>
                
                    <div className="form-group">
                        <label className="text-dark" htmlFor="name">Enter phone number <sup><FaStarOfLife style={{color: 'red', fontSize:'6px'}}/></sup></label>
                        <input name="loginPhone" type="number" onChange={e => setLoginPhone(e.target.value)} className={error.loginPhone ? "is-invalid form-control" : "form-control"} placeholder="Only Number Accepted" />
                        <div className="invalid-feedback">{error.loginPhone}</div>
                    </div>
                    <div className="form-group">
                        <label className="text-dark" htmlFor="type">Enter password <sup><FaStarOfLife style={{color: 'red', fontSize:'6px'}}/></sup></label>
                        <input name="loginPassword" type="password" onChange={e => setLoginPassword(e.target.value)} className={error.loginPassword ? "is-invalid form-control" : "form-control"} placeholder="Enter Password" />
                        <div className="invalid-feedback">{error.loginPassword}</div>
                    </div>
                    <button onClick={() => props.adminLogin({loginPhone, loginPassword}, props.history)} className="btn btn-outline-dark">Login</button>
                    
                </div>
            </div>
        </Layout>
        
    )
}

const mapStateToProps = state => ({
    admin: state.admin
})

export default connect(mapStateToProps, {adminLogin})(AdminLoginPage)


