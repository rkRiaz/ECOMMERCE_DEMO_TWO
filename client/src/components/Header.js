import React, {useState, useEffect} from 'react'
import './Header.css'
import {connect} from 'react-redux'
import {Link, useHistory} from 'react-router-dom'
import MenuIcon from '@material-ui/icons/Menu';
import {NavDropdown} from 'react-bootstrap'
// import menu from '../dummy_db/menu'

import logo from '../assets/icons/logo.svg'
import phone from '../assets/icons/phone.svg'
import user from '../assets/icons/user.svg'
import shoppingCart from '../assets/icons/shoppingCart.svg'
import menuHeart from '../assets/icons/menuHeart.svg'
import menuUser from '../assets/icons/menuUser.svg'
import menuPhone from '../assets/icons/menuPhone.svg'


import {FaRegUser} from 'react-icons/fa'
import searchIcon from '../assets/icons/search.svg'
import axios from 'axios';





function Header(props) {
    const[categories, setCategories] = useState([])
    const[search, setSearch] = useState('')
    const[showSideBar, setShowSideBar] = useState(false)

    const history = useHistory()

    const submit = e => {
        e.preventDefault()
    }

    const action = name => e => {
        e.preventDefault()
        setShowSideBar(!showSideBar)
        if(name === 'login') {
            history.push('/customerLogin')
        } else {
            history.push('/customerRegistration')
        }
    }

    useEffect(() => {
        axios.get(`http://localhost:8080/api/category/get-all-category`)
        .then(res => {
            setCategories(res.data.allCategory.splice(0, 10))
        })
        .catch(err => {
            console.log(err.response)
        })
    }, [])

    return (
        <div className="header">

            {/* header__top starts */}
            <div className="header__top">
                <div className="header__topContent">
                    <div className="header__topPhone">
                        <div className="header__topPhoneIcon"><img src={phone} alt=""/></div>
                        <div className="header__topPhoneNumber">01747400992 (10PM - 5PM)</div>
                    </div>
                    <div className="header__topNews">
                        <marquee>**আমাদের অনলাইন অর্ডার যথারীতি চালু আছে **</marquee>
                    </div>
                     <div className="header__topLogin">
                        <div className="header__topLoginIcon"><img src={user} alt=""/></div>
                        <p className="header__topLoginText">
                            { props.customer.customerLoggedIn ? <Link to="/customerDashboard">{props.customer.customerInfo.name} </Link> :
                            <><Link to="/customerLogin">Login</Link> or <Link to="/customerRegistration">Registration</Link></>
                            }    
                        </p>
                    </div>
                </div>
            </div>
            {/* header__top ends */}


            {/* header__middle starts */}
            <div className="header__middle">
                <div className="header__middleContent">
                    <Link to="/" className="header__middleLogo">
                        <img src={logo} alt=""/>
                    </Link>
                    <form className="header__middleSearch" onSubmit={submit}>
                        <div className="header__middleSearchCategoryDropDown">
                            <select onChange={e => console.log(e.target.value)}>
                                <option value="categories">Categories</option> 
                                <option value="b">Meat</option>    
                                <option value="c">Fish</option>    
                                <option value="d">Vegitable</option>    
                            </select>
                        </div>
                        <input type="text" placeholder="Search" onChange={e => setSearch(e.target.value)}/>
                        <div className="header__middleSearchIcon" onClick={submit}><img src={searchIcon} alt=""/></div>
                    </form>
                    <div className="header__middleIcons">
                        <Link to="/cart"> <img src={shoppingCart} alt=""/><sup className="header__middleIconsSup">{props.busket.busketNumbers}</sup> </Link>
                        <Link to="#"> <img src={menuHeart} alt=""/><sup className="header__middleIconsSup">0</sup> </Link>
                        <Link to={props.customer.customerLoggedIn  ? `/customerDashboard` : '/customerLogin'}><img src={menuUser} alt=""/></Link>
                        <Link to="#"> <img src={menuPhone} alt=""/></Link>
                    </div>

                    {/*Responsive: will show under 768px starts*/}
                    <div className="header__middleMenuBarIcon" onClick={e => setShowSideBar(!showSideBar)}> 
                        <MenuIcon/>
                    </div>
                    {/*Responsive: will show under 768px ends*/}
                </div>
            </div>
            {/* header__middle ends */}


            {/* header__menu starts */}
            <div className={`${showSideBar ? "header__menu header__menuShow" : "header__menu"}`}>
                <div className="header__menuContent">
                   {/* will show inside the side bar under 768px starts*/}
                   {props.customer.customerLoggedIn 
                   ? 
                   <Link to="/customerDashboard" 
                        className="header__menuContentUser" 
                        onClick={e => setShowSideBar(!showSideBar)}
                        style={{fontSize: 16, display: 'flex'}}>
                        <FaRegUser 
                            className="mr-2 mb-2"
                            style={{color: 'red', fontSize: 20}}/>
                                <p style={{color: "#FE0000"}}>{props.customer.customerInfo.name}</p>
                    </Link> 
                   :   
                    <div className="header__menuContentSidebarLogin">
                        <span onClick={action("login")}>Login</span>
                        <span>OR</span>
                        <span onClick={action("registration")}>Registration</span>
                    </div>}
                    <Link onClick={e => setShowSideBar(!showSideBar)} to="/" className="header__menuLogo">
                        <img src={logo} alt=""/>
                    </Link>
                   {/* will show inside the side bar under 768px ends*/}
                    {
                        categories.map((category) => (
                            Array.isArray(category.subCategory) ?
                            //have to fix the key value
                            <NavDropdown key={category._id} title={category.category} id="collasible-nav-dropdown">
                                {category.subCategory.map((subC) => (
                                    <NavDropdown.Item key={subC._id}><Link to={subC.subCategorySlug}>{subC.name}</Link></NavDropdown.Item>
                                ))}
                            </NavDropdown> :
                            <Link key={category._id} to={category.categorySlug}>{category.category}</Link>
                        ))
                    }
                   
                </div>
              
            </div>
            {/* header__menu ends */}
            

            {/*Responsive: side bar close btn */}
            <div onClick={e => {setShowSideBar(!showSideBar)}} className={`${showSideBar ? "header__sidebarRightClose " : ""}`}></div>
            {/*Responsive: side bar close btn */}


        </div>
    )
}

const mapStateToProps = state => ({
    customer: state.customer,
    busket: state.busket
})

export default connect(mapStateToProps, { })(Header)
