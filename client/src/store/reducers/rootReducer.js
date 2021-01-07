import { combineReducers } from 'redux'

import customerReducer from './customerReducer'
import busketReducer from './busketReducer'
import adminReducer from './adminReducer'
import sideBarsReducer from './sideBarsReducer'

 


const rootReducer = combineReducers({
    customer: customerReducer,
    busket: busketReducer,
    admin: adminReducer,
    sideBars: sideBarsReducer
})

export default rootReducer