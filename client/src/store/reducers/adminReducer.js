import * as Types from '../actions/types'

const init = {
    adminLoggedIn: false,
    error: {},
}

const adminReducer = (state=init, action) => {
    switch(action.type) {
        case Types.ADMIN_AUTH: {
            return {
                adminLoggedIn: action.payload.admin ? true : false,
                error: {}
            }
        }
        case Types.ADMIN_ERROR: {
            return {
                ...state,
                error: action.payload.error,
            }
        }

        default: return state
    }
}

export default adminReducer