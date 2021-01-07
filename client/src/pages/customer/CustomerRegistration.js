import React, {useState} from 'react'
import './CustomerRegistration.css'
import axios from 'axios'
import {Link} from 'react-router-dom'
import {Button, Form} from 'react-bootstrap'
import home from '../../assets/icons/home.svg'
import rightArrow from '../../assets/icons/right-arrow.svg'
// import userFill from '../../assets/icons/userFill.svg'
// import lock from '../../assets/icons/lock.svg'
import {AiOutlineUser, AiOutlinePhone, AiOutlineLock} from 'react-icons/ai'
import {GoLocation} from 'react-icons/go'




function CustomerRegistration() {
    const[values, setValues] = useState({
        name: '',
        phone: '',
        address: '',
        password: '',
        confirmPassword: '',
        error: {}
    })
    const[checked, setChecked] = useState(false)


    const change = name => e => {
        setValues({ ...values, [name]: e.target.value });
    };

    const submit = e => {
        e.preventDefault()
        checked === false ? alert("You must agree with the privacy policy") : 
        axios.post("http://localhost:8080/api/customer/registration", values)
        .then(res => {
            console.log(res.data)
            alert(res.data.message)
        })
        .catch(err => {
            setValues({ ...values, error: err.response.data });
        })
    }

    return (
        <div className="registration">
            <div className="registration__container">
                {console.log(values.error)}
                 {/* registrationTop starts */}
                 <div className="registrationTop">
                    <img src={home} alt=""/>
                    <Link to="#">ACCOUNT</Link>
                    <img className="registrationTopArrowIcon" src={rightArrow} alt=""/>
                    <Link to="#">REGISTRATION</Link>
                </div>
                {/* registrationTop ends */}

                {/* registration__headline starts */}
                <div className="registration__headline">ACCOUNT REGISTRATION</div>
                {/* registration__headline ends */}



                {/* registration__content starts */}
                <div className="registration__content">
                    
                        <h3>RETURNING CUSTOMER</h3>
                        <Form onSubmit={submit} className="registration__contentForm">
                            <div className="registration__contentFormInputs">
                                <Form.Group controlId="formGroupEmail" className="registration__contentFormGroup">
                                    <Form.Control onChange={change('name')} isInvalid={values.error.name ? true : false} className="registration__contentInput" type="text" placeholder="Full Name *" />
                                    <Form.Control.Feedback type="invalid" tooltip>
                                        {values.error.name ? values.error.name : ""}
                                    </Form.Control.Feedback>
                                    <AiOutlineUser className="registration__contentFormIcon"/>
                                </Form.Group>
                                <Form.Group controlId="formGroupPassword" className="registration__contentFormGroup">
                                    <Form.Control onChange={change('phone')} isInvalid={values.error.phone ? true : false} className="registration__contentInput" type="number" placeholder="Phone Number *" />
                                    <Form.Control.Feedback type="invalid" tooltip>
                                        {values.error.phone ? values.error.phone : ""}
                                    </Form.Control.Feedback>
                                    <AiOutlinePhone className="registration__contentFormIcon"/>
                                </Form.Group>  
                                <Form.Group controlId="formGroupPassword" className="registration__contentFormGroup">
                                    <Form.Control onChange={change('address')} isInvalid={values.error.address ? true : false} className="registration__contentInput" type="text" placeholder="Your Address *" />
                                    <Form.Control.Feedback type="invalid" tooltip>
                                        {values.error.address ? values.error.address  : ""}
                                    </Form.Control.Feedback>
                                    <GoLocation className="registration__contentFormIcon"/>
                                </Form.Group>        
                                <Form.Group controlId="formGroupPassword" className="registration__contentFormGroup">
                                    <Form.Control onChange={change('password')} isInvalid={values.error.password ? true : false} className="registration__contentInput" type="password" placeholder="Password" />
                                    <Form.Control.Feedback type="invalid" tooltip>
                                        {values.error.password ? values.error.password  : ""}
                                    </Form.Control.Feedback>
                                    <AiOutlineLock className="registration__contentFormIcon"/>
                                </Form.Group>          
                                <Form.Group controlId="formGroupConfirmPassword" className="registration__contentFormGroup">
                                    <Form.Control onChange={change('confirmPassword')} isInvalid={values.error.confirmPassword ? true : false} className="registration__contentInput" type="password" placeholder="Confirm Password" />
                                    <Form.Control.Feedback type="invalid" tooltip>
                                        {values.error.confirmPassword ? values.error.confirmPassword  : ""}
                                    </Form.Control.Feedback>
                                    <AiOutlineLock className="registration__contentFormIcon"/>
                                </Form.Group>     
                            </div>
                            {/* has to fix some css registration__contentFormCheckBox */}
                            <div className="registration__contentFormCheckBox">
                                <div className="d-flex align-items-center">
                                    <input onChange={e => setChecked(!checked)} type="checkbox" /> &nbsp;&nbsp;
                                    <div style={{textDecorationLine: "underline"}}>I agree with the <Link to="#">privacy policy</Link></div>    
                                </div>
                                <Link to="/customerLogin">
                                    <p>Already have an account? Login</p>
                                </Link>
                            </div>
                            <Button className="registration__contentBtn" type="submit">REGISTRATION</Button>
                        </Form>
                   
                </div>
                {/* registration__content ends */}

            </div>
        </div>
    )
}

export default CustomerRegistration
