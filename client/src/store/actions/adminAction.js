import axios from 'axios'
import * as Types from './types'
// import jwtDecode from 'jwt-decode'
import setAuthToken from '../../utils/setAuthToken'



export const adminLogin = (admin, history) => dispatch => {
    axios.post('/admin/login', admin)
        .then(res => {
            let admin_auth = res.data
            localStorage.setItem('admin_auth', admin_auth)
            setAuthToken(admin_auth)
            // let decodeToken = jwtDecode(token)
            dispatch({
                type: Types.ADMIN_AUTH,
                payload: {
                    admin: admin_auth
                }
            })
            history.push('/admin/dashboard')
        })

        .catch(error => {
            dispatch({
                type: Types.ADMIN_ERROR,
                payload: {
                    error: error.response.data
                }
            })
            // console.log(error)
        })
}

export const adminLogout = history => dispatch => {
    localStorage.removeItem('admin_auth')
    dispatch({
        type: Types.ADMIN_AUTH,
        payload: {
            user: {}
        }
    })
    history.push('/')
}



