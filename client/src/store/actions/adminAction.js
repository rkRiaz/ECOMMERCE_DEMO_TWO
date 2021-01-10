import axios from 'axios'
import * as Types from './types'
import jwtDecode from 'jwt-decode'
import setAuthToken from '../../utils/setAuthToken'




export const adminLogin = (loginInfo, history) => dispatch => {
    axios.put('http://localhost:8080/api/admin/login', loginInfo)
        .then(res => {
            let token = res.data.token
            localStorage.setItem('admin_auth_token', token)
            setAuthToken(token)
            let decodeToken = jwtDecode(token)

            dispatch({
                type: Types.SET_ADMIN,
                payload: {
                    adminToken: token,
                    adminInfo: decodeToken
                }
            })
            
            // history.location.pathname === "/admin/cart" ? 
            // history.push("/admin/cart") :
            // history.push("/adminDashboard")
        })
        .catch(error => {
            dispatch({
                type: Types.SET_ADMIN_ERROR,
                payload: {
                    error: error.response.data
                },
            })
            // dispatch({
            //     type: Types.SIDE_BARS,
            //     payload: {
            //         addProduct: '',
            //         open: history.location.pathname === "/admin/signup-login" ? false : true,
            //     }
            // })
            console.log(error)
        })
}

export const adminLogout = () => dispatch => {
    localStorage.removeItem('admin_auth_token')
    dispatch({
        type: Types.SET_ADMIN,
        payload: {
            adminLoggedIn: false,
            adminInfo: {}
        }
    })
}



