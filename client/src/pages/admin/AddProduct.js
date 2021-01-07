import React, {useState, useEffect} from 'react'
import "./AddProduct.css"
import AdminLayout from './AdminLayout'
import axios from 'axios'
import {Link} from 'react-router-dom'
import {Button, Form} from 'react-bootstrap'


function AddProductPage() {
    const[values, setValues] = useState({
        productName: '',
        slug: '',
        category: '',
        subCategory: '',
        regularPrice: '',
        salePrice: '',
        brand: '',
        productCode: '',
        quantity: '',
        tag: [],
        productImages: [],
        shortDescription: '',
        longDescription: '',

        formData: new FormData(),
        error: {}
    })
    const [formData, setFormData] = useState(new FormData())
    const [error, setError] = useState({})
    const [category, setCategory] = useState([])
    const [subCategories, setSubCategories] = useState([])

    const[showCategoryForm, setShowCategoryFrom] = useState(false)
    const[addCategory, setAddCategory] = useState('')
    const[categoryFormData, setCategoryFormData] = useState(new FormData())


    {console.log(addCategory)}

    const change = name => event => {
        if(name === 'categorySlug') {
            axios.get(`http://localhost:8080/api/category/find-sub-categories-by-category-slug/${event.target.value}`)
            .then(res => {
                console.log(res.data.subCategories)
                setSubCategories(res.data.subCategories)
            })
            .catch(err => {
                console.log(err.response)
            })
            formData.append(name, event.target.value)  
        }
        if(name === 'files') {
            for(const key of Object.keys(event.target.files)) {
                formData.append(name, event.target.files[key])
            }


        } else{
            formData.set( name, event.target.value )
            setValues({ ...values, [name]: event.target.value })
        }
    };

    const submit = event => {
        event.preventDefault()
        axios.post('http://localhost:8080/api/product/add-product', formData)
        .then(res => {
            console.log(res.data.message)
            alert(res.data.message)
        })
        .catch(err => {
            setError(err.response)
        })
    }

    const changeCategory = name => event => {
        if(addCategory) {
            categoryFormData.set('category', addCategory)
        }
        if(name === 'categoryImage') {
            categoryFormData.append("categoryImages", event.target.files[0])
            
        }
        if(name === 'subCategoryImage') {
            categoryFormData.append("categoryImages", event.target.files[0])
        }
        else{
            categoryFormData.set( name, event.target.value )
        }
    };
    const submitCategory = e => {
        e.preventDefault()
        axios.put('http://localhost:8080/api/category/add-category-or-push-sub-category-into-category', categoryFormData)
        .then(res=> {
            console.log(res.data)
            alert(res.data.message)
            categoryFormData.delete("categoryImages")
        })
        .catch(err => {
            console.log(err.response)
        })
    }

    useEffect(() => {
        axios.get(`http://localhost:8080/api/category/get-all-category`)
        .then(res => {
            setCategory(res.data.allCategory)
        })
        .catch(err => {
            console.log(err.response)
        })
    }, [categoryFormData])

    







  
        return (
           <AdminLayout>
                <div className="addProduct">
                    <div className="d-flex justify-content-between">
                        <div className="addProduct__headline">Product Adding Page</div>
                        <Button onClick={e => setShowCategoryFrom(!showCategoryForm)} className="btn btn-primary m-2">Add Category</Button>
                    </div>
                    <div className="addProduct__content">
                        <Form onSubmit={submit} className="addProduct__contentForm" encType="multipart/form-data">
                                <Form.Group className="addProduct__contentFormGroup">
                                    <Form.Control onChange={change('productName')} isInvalid={error.productName ? true : false} className="addProduct__contentInput" type="text" placeholder="Full Product Name *" />
                                    <Form.Control.Feedback type="invalid" tooltip>
                                        {error.productName ? error.productName : ""}
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group controlId="formGroupSlug" className="addProduct__contentFormGroup">
                                    <Form.Control onChange={change('slug')} className="addProduct__contentInput" type="text" placeholder="Enter product slug using english lower case letter and use hyphen(-) instead of using space *" />
                                </Form.Group> 
                                <Form.Group className="addProduct__contentFormGroup">
                                    <Form.Control onChange={change('categorySlug')}
                                        className="addProduct__contentFormGroup" 
                                        type="text"
                                        as="select"
                                        id="inlineFormCustomSelectPref"
                                        custom
                                    >
                                        <option value="noValue">Choose category</option>
                                        {category.map(c => (
                                           <option value={c.categorySlug}>{c.category}</option> 
                                        ))}
                                      
                                    
                                    </Form.Control> 
                                </Form.Group>
                                <Form.Group className="addProduct__contentFormGroup">
                                    <Form.Control onChange={change('subCategorySlug')}
                                        className="addProduct__contentFormGroup" 
                                        type="text"
                                        as="select"
                                        id="inlineFormCustomSelectPref"
                                        custom
                                    >
                                        <option value="">Choose sub category</option>
                                        {Array.isArray(subCategories) ? subCategories.map(s => (
                                           <option value={s.subCategorySlug}>{s.name}</option> 
                                        )):
                                        <option value="">Choose sub category</option>
                                        }
                                    </Form.Control> 
                                </Form.Group>
                                <Form.Group className="addProduct__contentFormGroup">
                                    <Form.Control onChange={change('regularPrice')} isInvalid={error.regularPrice ? true : false} className="addProduct__contentInput" type="number" placeholder="Enter regular price" />
                                    <Form.Control.Feedback type="invalid" tooltip>
                                        {error.regularPrice ? error.regularPrice  : ""}
                                    </Form.Control.Feedback>
                                </Form.Group>  
                                <Form.Group className="addProduct__contentFormGroup">
                                    <Form.Control onChange={change('salePrice')} isInvalid={error.salePrice ? true : false} className="addProduct__contentInput" type="number" placeholder="Enter sale price" />
                                    <Form.Control.Feedback type="invalid" tooltip>
                                        {error.salePrice ? error.salePrice  : ""}
                                    </Form.Control.Feedback>
                                </Form.Group> 
                                <Form.Group className="addProduct__contentFormGroup">
                                    <Form.Control onChange={change('brand')} isInvalid={error.brand ? true : false} className="addProduct__contentInput" type="text" placeholder="Enter brand" />
                                    <Form.Control.Feedback type="invalid" tooltip>
                                        {error.brand ? error.brand  : ""}
                                    </Form.Control.Feedback>
                                </Form.Group>   
                                <Form.Group className="addProduct__contentFormGroup">
                                    <Form.Control onChange={change('productCode')} isInvalid={error.productCode ? true : false} className="addProduct__contentInput" type="number" placeholder="Enter product code" />
                                    <Form.Control.Feedback type="invalid" tooltip>
                                        {error.productCode ? error.productCode  : ""}
                                    </Form.Control.Feedback>
                                </Form.Group> 
                                <Form.Group className="addProduct__contentFormGroup">
                                    <Form.Control onChange={change('quantity')} isInvalid={error.quantity ? true : false} className="addProduct__contentInput" type="number" placeholder="Enter product quantity" />
                                    <Form.Control.Feedback type="invalid" tooltip>
                                        {error.quantity ? error.quantity  : ""}
                                    </Form.Control.Feedback>
                                </Form.Group> 
                                <Form.Group  className="addProduct__contentFormGroup">
                                    <Form.Control  as="textarea" rows={3} onChange={change('shortDescription')}  type="text" placeholder="Enter product's short description" />
                                </Form.Group> 
                                <Form.Group className="addProduct__contentFormGroup">
                                    <Form.Control as="textarea" rows={5} onChange={change('longDescription')} className="addProduct__contentInput" type="text" placeholder="Enter product's long description" />
                                </Form.Group> 
                                <Form.File 
                                    onChange={change('files')}
                                    id="custom-file-translate-scss"
                                    label="Upload product images"
                                    type="image"
                                    lang="en"
                                    multiple= 'true'
                                    accept="image/*"
                                />    
                            <Button className="addProduct__contentBtn" type="submit">Add Product</Button>
                        </Form>


                        
                        <Form onSubmit={submitCategory} className={showCategoryForm ? "addCategory__contentForm" : "hideAddCategory__contentForm"} encType="multipart/form-data">
                            <div className="text-center my-3 h4 text-light">Enter Category</div>
                                

                                {
                                    addCategory ?
                                    <>
                                    <Form.Group className="addCategory__contentFormGroup">
                                        <Form.Control onChange={e => setAddCategory(e.target.value)}
                                            className="addCategory__contentInput" 
                                            type="text"
                                            as="select"
                                            id="inlineFormCustomSelectPref"
                                            custom
                                        >
                                            <option value="">Choose Existing Category</option>
                                            {category.map(c => (
                                            <option value={c.categorySlug}>{c.category}</option> 
                                            ))}
                                        </Form.Control>
                                    </Form.Group>
                                    <Form.Group className="addCategory__contentFormGroup">
                                        <Form.Control disabled onChange={changeCategory('category')} isInvalid={error.productName ? true : false} className="addCategory__contentInput"  type="text" placeholder="Enter Category (Fruits)" />
                                    </Form.Group>
                                    <Form.Group className="addCategory__contentFormGroup">
                                        <Form.Control disabled onChange={changeCategory('categorySlug')} isInvalid={error.productName ? true : false} className="addCategory__contentInput"  type="text" placeholder="Enter Category Slug (fruits)" />
                                    </Form.Group>
                                    <Form.Group controlId="formGroupProductName" className="addCategory__contentFormGroup">
                                        <Form.File 
                                        id="custom-file-translate-scss"
                                        label="Select Category Image"
                                        type="image"
                                        lang="en"
                                        accept="image/*"
                                        disabled
                                    />
                                    </Form.Group>
                                    </>
                                    :
                                    <>
                                    <Form.Group className="addCategory__contentFormGroup">
                                    <Form.Control onChange={e => setAddCategory(e.target.value)}
                                        className="addCategory__contentInput" 
                                        type="text"
                                        as="select"
                                        label="Select Category Image"
                                        id="inlineFormCustomSelectPref"
                                        custom
                                    >
                                        <option value="">Choose Existing Category</option>
                                        {category.map(c => (
                                        <option value={c.categorySlug}>{c.category}</option> 
                                        ))}
                                    </Form.Control>
                                    </Form.Group>
                                    <Form.Group className="addCategory__contentFormGroup">
                                        <Form.Control onChange={changeCategory('category')} isInvalid={error.productName ? true : false} className="addCategory__contentInput"  type="text" placeholder="Enter Category (Fruits)" />
                                    </Form.Group>
                
                                    <Form.Group className="addCategory__contentFormGroup">
                                        <Form.Control onChange={changeCategory('categorySlug')} isInvalid={error.productName ? true : false} className="addCategory__contentInput"  type="text" placeholder="Enter Category Slug (fruits)" />
                                    </Form.Group>
                                    <Form.Group controlId="formGroupProductName" className="addCategory__contentFormGroup">
                                        <Form.File 
                                        onChange={changeCategory('categoryImage')}
                                        id="custom-file-translate-scss"
                                        label="Select Category Image"
                                        type="image"
                                        lang="en"
                                        accept="image/*"
                                    />
                                    </Form.Group>
                                    </>
                                }





                                <Form.Group className="addCategory__contentFormGroup">
                                    <Form.Control onChange={changeCategory('subCategory')} className="addCategory__contentInput" type="text" placeholder="Enter Sub Category"/>
                                </Form.Group> 
                                <Form.Group  className="addCategory__contentFormGroup">
                                    <Form.Control onChange={changeCategory('subCategorySlug')} isInvalid={error.productName ? true : false} className="addCategory__contentInput" type="text" placeholder="Enter Sub Category Slug (fruits)" />
                                </Form.Group>
                                <Form.Group  className="addCategory__contentFormGroup">
                                    <Form.File 
                                        onChange={changeCategory('subCategoryImage')}
                                        id="custom-file-translate-scss"
                                        label="Select Sub Category Image"
                                        type="image"
                                        lang="en"
                                        accept="image/*"
                                    />    
                                </Form.Group>
                                <Button className="text-center mt-3" type="submit">Add Category</Button>
                                <Button onClick={e => setShowCategoryFrom(!showCategoryForm)} className="text-center btn btn-danger mt-2" >Close</Button>
                        </Form>
                    </div>    
               
                </div>
           </AdminLayout>
        )
    }





export default AddProductPage
