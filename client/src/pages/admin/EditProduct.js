import React, {Component} from 'react'
import './EditProduct.css'
import{ Link } from 'react-router-dom'
// import Layout from '../../components/Layout'
import Layout from './Layout'
import {FaStarOfLife} from 'react-icons/fa'
import axios from 'axios'

class EditProduct extends Component {

    state = {
        productId: '',
        name: '',
        price: '',
        quantity: '',
        details: '',
        department:'',
        soldOut: false,
        type: '',
        tag: '',
        productImgs: [],
        productImgsName: null,
        error: {},
        updatedProduct:''
    }

    componentDidMount() {
        const { match: { params } } = this.props;
        // this.props.aProduct(params.productId)
        axios.get(`/products/${params.productId}`)
        
            .then(res => {
                let {name, price, quantity, details, department, soldOut, type, tag, productImgs, productImgsName} = res.data
                this.setState({
                    productId: params.productId,
                    name,
                    details,
                    size: 'M',
                    department,
                    soldOut,
                    quantity,
                    price: price,
                    type: type,
                    tag: tag,
                    productImgs: productImgs,
                    productImgsName
                })
            })


    }
    
    fileSelectHandler = event => {
        let productImgsName = []
        for(const key of Object.keys(event.target.files)) {
            let files = event.target.files
            productImgsName.push(`productImgs-${files[key].name}`)
        }
        this.setState({
            productImgs: event.target.files,
            productImgsName: productImgsName
        })  
    }
    changeHandler = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    submitHandler = event => {
        event.preventDefault()

        let {name, price, details, department, soldOut, quantity, type, tag, productImgsName} = this.state 
        let product = {name, price, quantity, department, soldOut, details, type, tag, productImgsName}
    
        axios.put(`/products/edit-product/${this.state.productId}`, product)
            .then(res => {
                this.setState({
                    updatedProduct: res.data.updatedProduct
                })
                this.props.history.push('/')
            })
            .catch(err => {
                this.setState({
                    error: err.response.data
                }) 
            })
            
            let formData = new FormData()
            for(const key of Object.keys(this.state.productImgs)) {
                formData.append('productImgs', this.state.productImgs[key])
            }
            axios.post('/uploads/product-imgs', formData)

            

    }



    render() {
        console.log(this.state.updatedProduct)
        let {name, price, details,quantity, department, type, tag, error } = this.state
   
        return (
            <Layout>
                <div className="editProduct">
                    <div className="editProduct__content">
                        <div className="text-center my-3 h1">Product Editing Page</div>
                        <div className="row">
                            <div className="col-md-6">
                                <form onSubmit={this.submitHandler}>
                                    <div className="form-group">
                                        <label className="font-weight-bold" htmlFor="name">Product Name <sup><FaStarOfLife style={{color: 'red', fontSize:'8px'}}/></sup></label>
                                        <input required name="name" type="text" onChange={this.changeHandler} className={error.name ? "is-invalid form-control" : "form-control"} value={name} />
                                        <div className="invalid-feedback">{error.name}</div>
                                    </div>
                                    <div className="form-group">
                                        <label className="font-weight-bold" htmlFor="price">Product Price <sup><FaStarOfLife style={{color: 'red', fontSize:'8px'}}/></sup></label>
                                        <input required name="price" type="number" onChange={this.changeHandler} className={error.price ? "is-invalid form-control" : "form-control"} value={price} />
                                        <div className="invalid-feedback">{error.price}</div>
                                    </div>
                                    <div className="form-group">
                                            <label className="font-weight-bold" htmlFor="quantity">Product Quantity <sup><FaStarOfLife style={{color: 'red', fontSize:'8px'}}/></sup></label><br/>
                                            <input required type="number" id="quantity" name="quantity" onChange={this.changeHandler} min="1" max="500" value={quantity}/>
                                            <div className="invalid-feedback">{error.quantity}</div>
                                        </div>
                                    <div className="form-group">
                                        <label className="font-weight-bold" htmlFor="details">Product Details</label>
                                        <textarea name="details" style={{height: '200px'}}type="text" onChange={this.changeHandler} className="form-control" value={details}/>
                                    </div>
                                    <div className="form-group">
                                        <label className="font-weight-bold" htmlFor="tag">Product Tag <sup><FaStarOfLife style={{color: 'red', fontSize:'8px'}}/></sup></label><br/>
                                        <select required name="tag" id="tag" onChange={this.changeHandler}>
                                                <option value={tag}>{tag}</option>
                                                <option value="best-seller">Best Seller</option>
                                                <option value="trending">Trending</option>
                                                <option value="featured-products">Featured Products</option>
                                                <option value="new-arrival">New Arrival</option>
                                                <option value="other">other</option>
                                        </select>
                                        {/* <div className="invalid-feedback">{error.tag}</div> */}
                                    </div> 
                                    <div className="form-group">
                                        <label className="font-weight-bold" htmlFor="department">Department<sup><FaStarOfLife style={{color: 'red', fontSize:'8px'}}/></sup></label>
                                        <div className="">
                                        <select required name="department" id="department" onChange={this.changeHandler}>
                                                    <option value={department}>{department}</option>
                                                    <option value="electronics">Electronics</option>
                                                    <option value="fashion-and-fashion-accessories">Fashion And Fashion Accessories</option>
                                                    <option value="grocery-household-food-pets">Grocery, Household, Food & Pets</option>
                                                    <option value="baby">Baby</option>
                                                    <option value="vehicles-tires-industrial">Vehicles, Tires & Industria</option>
                                                    <option value="property-construction-improvements">Property, Construction & Improvements</option>
                                                    <option value="home-furniture-appliances">Home, Furniture & Appliances</option>
                                                    <option value="pharmacy-health-beauty">Pharmacy, Health & Beauty</option>
                                                    <option value="movies-music-books-stationaries">Movies, Music, Books & Stationaries</option>
                                                    <option value="sports-fitness-outdoor">Sports, Fitness & Outdoor</option>
                                                    <option value="service">Service</option>
                                                    <option value="corporate">Corporate</option>
                                                    <option value="art-craft-personalizedshops">Art, Craft, Personalized shops</option>
                                                    <option value="agricultural">Agricultural</option>
                                                    <option value="other">Other</option>
                                                </select>
                                        </div>
                                        {/* <div className="invalid-feedback">{error.department}</div> */}
                                    </div>
                                    <div className="form-group">
                                        <label className="font-weight-bold" htmlFor="type">Product Type <sup><FaStarOfLife style={{color: 'red', fontSize:'8px'}}/></sup></label><br/>
                                                <select required name="type" id="type" onChange={this.changeHandler}>
                                                    <option value={type}>{type}</option>
                                                    <option value="electric-parts">Electric & Parts</option>
                                                    <option value="electronics-and-appliance">Electronics and Appliance</option>
                                                    <option value="watch-clock">Watch & Clock</option>
                                                    <option value="pant">Pant</option>
                                                    <option value="shirt">Shirt</option>
                                                    <option value="grocery">Grocery</option>
                                                    <option value="mobile">Mobile</option>
                                                    <option value="headphone">Headphone</option>
                                                    <option value="laptop">Laptop</option>
                                                    <option value="cosmetics">Cosmetics</option>
                                                    <option value="medicine">Medicine</option>
                                                    <option value="other">other</option>
                                                </select>
                                        {/* <div className="invalid-feedback">{error.type}</div> */}
                                    </div>




                                    <label className="font-weight-bold" htmlFor="soldOut">SoldOut? <sup><FaStarOfLife style={{color: 'red', fontSize:'8px'}}/></sup></label>
                                    <div className="soldOut d-flex">
                                        <input type="radio" id="true" name="soldOut" value="true" onChange={this.changeHandler}/>
                                        <label htmlFor="true">Yes</label>
                                        <input type="radio" id="false" name="soldOut" value="false" onChange={this.changeHandler}/>
                                        <label htmlFor="female">No</label>      
                                    </div> 
                                

                                    <div className="custom">
                                        <label className="font-weight-bold" htmlFor="productImgs">Please select min one image of your product (required) <sup><FaStarOfLife style={{color: 'red', fontSize:'8px'}}/></sup></label>
                                        <input name="productImgs" type="file" className={` ${error.productImgsName ? 'is-invalid': ''}`} accept="image/*" onChange={this.fileSelectHandler} multiple />
                                        <div className="invalid-feedback">{error.productImgsName}</div>
                                    </div>


                                    <button type="submit" className="my-3 btn btn-primary">update Product</button>
                                    <Link to="/"><button className="btn btn-danger ml-2">Home</button></Link>
                                </form>






                            </div>

                            
                        </div>
                    </div>
                </div>
            </Layout>
        )
    }
}




export default EditProduct
