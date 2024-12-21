import React, { useState, useEffect } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom';

import axios from 'axios'
import { CUSTOMER, CUSTOMER_PIC, PRODUCT_LIST } from '../../Utility/Constant'
import Slider from '../SliderDemo/Slider'


export default function Customer() {
    const [customer, setcustomer] = useState({})
    const [pic, setpic] = useState("")
    const [prodList, setprodList] = useState([])
    const [address, setaddress] = useState({})

    useEffect(() => {
        customerDetails()
        productList()
    }, [])

    const customerDetails = () => {
        var _id = localStorage.getItem("_id")
        axios.get(CUSTOMER + _id)
            .then((response) => {
                console.log(response.data)
                var custobj = response.data.record
                setcustomer(custobj)
                setaddress(custobj.address)

            })
            .catch((err) => {
                console.log(err)
            })

        axios.get(CUSTOMER_PIC + _id)
            .then((response) => {
                console.log(response.data)
                var imgurl = response.data.profilepic.upload_doc
                setpic(imgurl)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const productList = () => {
        axios.get(PRODUCT_LIST)
            .then((response) => {
                // console.log(response.data)
                var obj = response.data
                setprodList(obj["productlist"])
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <div>
            <Header />
            <Slider />
            {/* =================Customer Details========================= */}
            <div id="wrapper" className="container" >
                <section className="navbar main-menu">
                    <div className="navbar-inner main-menu">
                        <h3>Customer Details</h3>
                    </div>
                </section>
            </div>
            <div
                align="left"
                className="container" style={{ backgroundColor: 'transparent' }}
            >
                <img src={pic}
                    style={{ height: 200, width: 200, borderRadius: 100, marginTop: 10 }} />
                <div style={{ margin: "auto" }}>
                    <span style={{ fontSize: 18, fontWeight: 'bold' }}>Name: {customer.name}</span><br></br>
                    <span style={{ fontSize: 18, fontWeight: 'bold' }}>Email: {customer.email}</span><br></br>
                    <span style={{ fontSize: 18, fontWeight: 'bold' }}>Mobile: {customer.mobile}</span><br></br>
                    <span style={{ fontSize: 18, fontWeight: 'bold' }}>Address: {`${address.state} ${address.city} ${address.pincode}`}</span>
                </div>
            </div>
            <div id="wrapper" className="container">
                <section className="main-content">
                    <div className="row">
                        <div className="span12">
                            <div className="row">
                                <div className="span12">
                                    <h4 className="title">
                                        <span className="pull-left"><span className="text"><span className="line">Feature <strong>Products</strong></span></span></span>
                                        <span className="pull-right">
                                            <a className="left button" href="#myCarousel" data-slide="prev"></a><a className="right button" href="#myCarousel" data-slide="next"></a>
                                        </span>
                                    </h4>
                                    <div id="myCarousel" className="myCarousel carousel slide">
                                        <div className="carousel-inner">
                                            <div className="active item">
                                                <ul className="thumbnails">
                                                    {prodList.map((product, index) =>
                                                        <li className="span3" key={index}>
                                                            <div className="product-box">
                                                                <span className="sale_tag"></span>
                                                                <p>
                                                                <a href={`/productdetails/${product._id}`}>
                                                                <img src={product.product_imgurl[0]["path"]} alt="" /></a></p>
                                                                <a href="product_detail.html" className="title">{product.product_brand}</a><br />
                                                                <a href="products.html" className="category">{product.product_description}</a>
                                                                <p className="price">&#8377;{product.product_sellingprice}</p>
                                                            </div>
                                                        </li>
                                                    )}

                                                </ul>
                                            </div>
                                            <div className="item">
                                                <ul className="thumbnails">
                                                    <li className="span3">
                                                        <div className="product-box">
                                                            <p><a href="product_detail.html"><img src="themes/images/ladies/5.jpg" alt="" /></a></p>
                                                            <a href="product_detail.html" className="title">Know exactly</a><br />
                                                            <a href="products.html" className="category">Quis nostrud</a>
                                                            <p className="price">$22.30</p>
                                                        </div>
                                                    </li>
                                                    <li className="span3">
                                                        <div className="product-box">
                                                            <p><a href="product_detail.html"><img src="themes/images/ladies/6.jpg" alt="" /></a></p>
                                                            <a href="product_detail.html" className="title">Ut wisi enim ad</a><br />
                                                            <a href="products.html" className="category">Commodo consequat</a>
                                                            <p className="price">$40.25</p>
                                                        </div>
                                                    </li>
                                                    <li className="span3">
                                                        <div className="product-box">
                                                            <p><a href="product_detail.html"><img src="themes/images/ladies/7.jpg" alt="" /></a></p>
                                                            <a href="product_detail.html" className="title">You think water</a><br />
                                                            <a href="products.html" className="category">World once</a>
                                                            <p className="price">$10.45</p>
                                                        </div>
                                                    </li>
                                                    <li className="span3">
                                                        <div className="product-box">
                                                            <p><a href="product_detail.html"><img src="themes/images/ladies/8.jpg" alt="" /></a></p>
                                                            <a href="product_detail.html" className="title">Quis nostrud exerci</a><br />
                                                            <a href="products.html" className="category">Quis nostrud</a>
                                                            <p className="price">$35.50</p>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <br />

                            <div className="row feature_box">
                                <div className="span4">
                                    <div className="service">
                                        <div className="responsive">
                                            <img src="themes/images/feature_img_2.png" alt="" />
                                            <h4>MODERN <strong>DESIGN</strong></h4>
                                            <p>Lorem Ipsum is simply dummy text of the printing and printing industry unknown printer.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="span4">
                                    <div className="service">
                                        <div className="customize">
                                            <img src="themes/images/feature_img_1.png" alt="" />
                                            <h4>FREE <strong>SHIPPING</strong></h4>
                                            <p>Lorem Ipsum is simply dummy text of the printing and printing industry unknown printer.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="span4">
                                    <div className="service">
                                        <div className="support">
                                            <img src="themes/images/feature_img_3.png" alt="" />
                                            <h4>24/7 LIVE <strong>SUPPORT</strong></h4>
                                            <p>Lorem Ipsum is simply dummy text of the printing and printing industry unknown printer.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="our_client">
                    <h4 className="title"><span className="text">Manufactures</span></h4>
                    <div className="row">
                        <div className="span2">
                            <a href="#"><img alt="" src="themes/images/clients/14.png"></img></a>
                        </div>
                        <div className="span2">
                            <a href="#"><img alt="" src="themes/images/clients/35.png"></img></a>
                        </div>
                        <div className="span2">
                            <a href="#"><img alt="" src="themes/images/clients/1.png"></img></a>
                        </div>
                        <div className="span2">
                            <a href="#"><img alt="" src="themes/images/clients/2.png"></img></a>
                        </div>
                        <div className="span2">
                            <a href="#"><img alt="" src="themes/images/clients/3.png"></img></a>
                        </div>
                        <div className="span2">
                            <a href="#"><img alt="" src="themes/images/clients/4.png"></img></a>
                        </div>
                    </div>
                </section>
                <Footer />
            </div>

        </div>
    )
}
