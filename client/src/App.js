import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Category from './pages/Category'
import SubCategory from './pages/SubCategory'
import ProductDetails from './pages/ProductDetails'
import Cart from './pages/Cart'

// customer route
import CustomerLogin from './pages/customer/CustomerLogin'
import CustomerRegistration from './pages/customer/CustomerRegistration'
import CustomerEdit from './pages/customer/CustomerEdit'
import CustomerChangePassword from './pages/customer/CustomerChangePassword'
import CustomerDashboard from './pages/customer/CustomerDashboard'
// import Ordered from './pages/customer/Ordered'
// import OrderedDetails from './pages/customer/OrderedDetails'


// admin Routes
import AdminDashboard from './pages/admin/AdminDashboard'
import AddProduct from './pages/admin/AddProduct'
import EditProduct from './pages/admin/EditProduct'

// import EditProduct from './pages/admin/EditProduct'
// import Customers from './pages/admin/Customers'
// import AllOrders from './pages/admin/AllOrders'


import CartSideBar from './components/sidebars/CartSideBar'





function App() {
  return (
    <div className="app">
      <div className="app__body">
          <Router>
            {/* cart sidebar starts */}
              <CartSideBar/>
            {/* cart sidebar ends */}
            
            <Switch>
              <Route exact path="/"><Header/><Home/><Footer/></Route>
              <Route exact path="/subCategory/:subCategorySlug"><Header/><SubCategory/><Footer/></Route>
              <Route exact path="/category/:categorySlug"><Header/><Category/><Footer/></Route>
              <Route exact path="/product/:productId"><Header/><ProductDetails/><Footer/></Route>

              {/* customer Routes */}
              <Route exact path="/customerRegistration"><Header/><CustomerRegistration/><Footer/></Route>
              <Route exact path="/customerEdit"><Header/><CustomerEdit/><Footer/></Route>
              <Route exact path="/customerLogin"><Header/><CustomerLogin/><Footer/></Route>
              <Route exact path="/customerDashboard"><Header/><CustomerDashboard/><Footer/></Route>
              <Route exact path="/customerChangePassword"><Header/><CustomerChangePassword/><Footer/></Route>

              {/* <Route exact path="/customer/ordered" component={Ordered} />
              <Route exact path="/customer/ordered/:orderId" component={OrderedDetails} /> */}

              {/* Admin Routes */}
              <Route exact path="/adminDashboard"  component={AdminDashboard} />
              {/* <Route exact path="/admin/customers"  component={Customers} />  */}
              {/* <Route exact path="/admin/all-orders"  component={AllOrders} />  */}
              <Route exact path="/admin/add-product" component={AddProduct} /> 
              <Route exact path="/admin/edit-product/:productId" component={EditProduct} /> 

              {/* <Route exact path="/admin/edit-product/:productId" component={EditProduct} />  */}

              <Route exact path="/cart"><Header/><Cart/><Footer/></Route>
            </Switch>
            
        </Router>
      </div>
    </div>
  );
}

export default App;
