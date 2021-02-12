import React, { useEffect, useState } from 'react'
import './AllProducts.css'
import AdminLayout from './AdminLayout'
import AdminProductCard from './AdminProductCard'
import axios from 'axios'
import { FiSearch } from 'react-icons/fi'
import { Pagination } from 'react-bootstrap'
import Loading from '../../components/Loading'

const AllProducts = (props) => {
    const [products, setProducts] = useState('')
    const [searchProducts, setSearchProducts] = useState('')
    const [pageNumber, setPageNumber] = useState(1)
    const [totalPage, setTotalPage] = useState('')


console.log(totalPage)
    useEffect(() => {
        axios.get(`/api/product/get-all-products-list-by-mega-search?page=${pageNumber}`)
    
        .then(res => {
            setProducts(res.data.allProducts.reverse())
            setTotalPage(res.data.totalPage)
        })
        .catch(err => {
            console.log(err)
        })
    }, [pageNumber])

    const search = e => {
        axios.get(`/api/product/get-products-by-text-search?q=${e.target.value}`)

        .then(res => {
             setSearchProducts(res.data.searchProducts)
        })
        .catch(err => {
            console.log(err.response)
        })
    }
    let changePage = pageNumber => e => {
        e.preventDefault()
        setPageNumber(pageNumber)
    }

    return (
        <AdminLayout>
            <div className="allProducts">
                <div className="allProductsSearch">
                    <input type="text" placeholder="Search" onChange={search}/> 
                    <div className="allProductsSearchIcon"><FiSearch/></div>
                </div>
                <div className="allProductsList">
                    {
                        searchProducts ?
                            searchProducts.map(product => (
                                <AdminProductCard key={product._id} product={product}/>
                            ))

                                :
                        
                        products ? products.map(product => (
                            <AdminProductCard key={product._id} product={product}/> 
                        )) : <div className="loading">
                                <Loading/>
                            </div>        
                    }
                </div>
                    {
                        totalPage ? 
                        <div className="allProducts__pagination">
                        <Pagination>
                                {
                                    Array(totalPage).fill().map((_, i) => (
                                        <Pagination.Item onClick={changePage(i+1)}>{i+1}</Pagination.Item>
                                    ))
                                }
                        </Pagination>
                        </div>
                        :
                        ""
                    }
            </div>
        </AdminLayout>
    )
}
export default AllProducts
