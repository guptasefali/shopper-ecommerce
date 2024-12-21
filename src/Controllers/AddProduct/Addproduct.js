import React,{useState,useEffect} from 'react'
import Header from '../Header/Header'
import Slider from '../SliderDemo/Slider'
import axios from 'axios'
import {ADD_PRODUCT} from '../../Utility/Constant'
import Footer from '../Footer/Footer'

export default function AddProduct() {
  let imgarr = []
  let imgarrdata = []
  const [p_brand, setp_brand] = useState("")
  const [p_variant_name, setp_variant_name] = useState("")  
  const [p_description, setp_description] = useState("")
  const [p_category, setp_category] = useState("")
  const [p_max_retailprice, setp_max_retailprice] = useState("")
  const [p_sellingprice, setp_sellingprice] = useState("")
  const [p_discount_percentage, setp_discount_percentage] = useState("")
  const [p_size, setp_size] = useState("")
  const [p_quantity, setp_quantity] = useState("")
  const [p_availability, setp_availability] = useState("")

  const [upload_doc, setupload_doc] = useState([])
  const [upload_docdata, setupload_docdata] = useState([])

  const handleSubmit = (e)=>{
    e.preventDefault()
    // let params = {
    //     product_brand: p_brand,
    //     product_variant_name: p_variant_name,
    //     product_description: p_description,
    //     product_category: p_category,
    //     product_max_retailprice: p_max_retailprice,
    //     product_sellingprice: p_sellingprice,
    //     product_discount_percentage: p_discount_percentage,
    //     product_size:p_size ,
    //     product_quantity:p_quantity,
    //     product_availability: p_availability,
    //     product_imageurl: images 
    // }
    console.log(imgarr)
    console.log(imgarrdata)
    
    console.log(upload_docdata)
    

    const formdata = new FormData()
    formdata.append("product_brand", p_brand)
    formdata.append("product_variant_name", p_variant_name)
    formdata.append("product_description",p_description)
    formdata.append("product_category",p_category)
    formdata.append("product_max_retailprice",p_max_retailprice)
    formdata.append("product_sellingprice",p_sellingprice)
    formdata.append("product_discount_percentage",p_discount_percentage)
    formdata.append("product_size",p_size)
    formdata.append("product_quantity",p_quantity)
    formdata.append("product_availability",p_availability)
    imgarr.forEach(image => {
      formdata.append("product_imgurl", image)
    });
    axios.post(ADD_PRODUCT, formdata, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
        .then((response) => {
          console.log(response)
          alert("Document Uploaded Successfully!!!")
          setp_brand("")
          setp_variant_name("")
          setp_category("")
          setp_availability("")
          setp_description("")
          setp_discount_percentage("")
          setp_max_retailprice("")
          setp_quantity("")
          setp_sellingprice("")
          setp_size("")
          setupload_doc([])
          setupload_docdata([])
        })
        .catch((err) => {
          alert(err)
        })  
         
  }  
  const saveFile = (e) => {
    console.log(e.target.files.length,e.target.files[0])
    for(var a=0; a<e.target.files.length; a++){
      imgarr.push(e.target.files[a])
    }
  }
  return (
    <div>
        <Header />
        <Slider />
        <section className="main-content" >
        <div className="row">
          <div align="center">
            <h4 className="title">
              <span className="text"><strong>Add</strong> Product</span></h4>
            <form action="#" method="post" onSubmit={handleSubmit}>
              <div className="control-group">
                <label className="control-label"
                  style={{ fontSize: 20, }}
                >Product Brand</label>
                <div className="controls">
                  <input type="text" placeholder="Enter Product Brand" id="p_brand"
                    style={{ fontSize: 18 }}
                    className="input-xlarge"
                    name='p_brand'
                    value={p_brand}
                    onChange={(e) => setp_brand(e.target.value)}
                  />
                </div>
              </div>
              <div className="control-group">
                <label className="control-label"
                  style={{ fontSize: 20, }}
                >Variant Name</label>
                <div className="controls">
                  <input type="text" placeholder="Enter Variant Name" id="p_variant_name"
                    style={{ fontSize: 18 }}
                    className="input-xlarge"
                    name='p_variant_name'
                    value={p_variant_name}
                    onChange={(e) => setp_variant_name(e.target.value)}
                  />
                </div>
              </div>
              <div className="control-group">
                <label className="control-label"
                  style={{ fontSize: 20, }}
                >Product Description</label>
                <div className="controls">
                  <input type="text" placeholder="Enter  Product Description" id="password"
                    style={{ fontSize: 18 }}
                    className="input-xlarge"
                    name='p_description'
                    value={p_description}
                    onChange={(e) => setp_description(e.target.value)}
                  />
                </div>
              </div>
              <div className="control-group">
                <label className="control-label"
                  style={{ fontSize: 20, }}
                >Product Category</label>
                <div className="controls">
                  <input type="text" placeholder="Enter Product Category" id="p_category"
                    style={{ fontSize: 18 }}
                    className="input-xlarge"
                    name='p_category'
                    value={p_category}
                    onChange={(e) => setp_category(e.target.value)}
                  />
                </div>
              </div>
              {/* <div className="control-group">
                <label className="control-label"
                  style={{ fontSize: 20, }}
                >Gender</label>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <div style={{ display: "flex" }}>
                    <input type="radio"
                      onChange={(event) => setgender(event.target.value)}
                      checked={gender === "Male"}
                      value="Male"
                      name="gender"
                    />
                    &nbsp;&nbsp;
                    <label className="control-label"
                      style={{ fontSize: 20 }}
                    >Male</label>
                  </div>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <div style={{ display: "flex" }}>
                    <input type="radio"
                      onChange={(event) => setgender(event.target.value)}
                      checked={gender === "Female"}
                      value="Female"
                      name="gender"
                    />
                    &nbsp;&nbsp;
                    <label className="control-label"
                      style={{ fontSize: 20 }}
                    >Female</label>
                  </div>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <div style={{ display: "flex" }}>
                    <input type="radio"
                      onChange={(event) => setgender(event.target.value)}
                      checked={gender === "Other"}
                      value="Other"
                      name="gender"
                    />
                    &nbsp;&nbsp;
                    <label className="control-label"
                      style={{ fontSize: 20 }}
                    >Other</label>
                  </div>
                </div>
              </div> */}


              {/* <div className="control-group">
                <label className="control-label" style={{ fontSize: 20, }}><span
                ></span> State</label>
                <div >
                  <select className="input-xlarge" style={{ fontSize: 18, }}
                    name='state'
                    value={state}
                    onChange={(e) => setstate(e.target.value)}
                  >
                    <option value="">Select a State</option>
                    <option value="M.P">M.P</option>
                    <option value="U.P">U.P</option>
                    <option value="Maharastra">Maharastra</option>
                    <option value="Gujarat">Gujarat</option>
                  </select>
                </div>
              </div>
              <div className="control-group">
                <label className="control-label" style={{ fontSize: 20, }}><span
                ></span> City</label>
                <div >
                  <select className="input-xlarge" style={{ fontSize: 18, }}
                    name='city'
                    value={city}
                    onChange={(e) => setcity(e.target.value)}
                  >
                    <option value="">Select a City</option>
                    <option value="Indore">Indore</option>
                    <option value="Ujjain">Ujjain</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Pune">Pune</option>
                  </select>
                </div>
              </div> */}

              <div className="control-group">
                <label className="control-label"
                  style={{ fontSize: 20, }}
                >Product Max RetailPrice</label>
                <div className="controls">
                  <input type="text" placeholder="Enter Product Max RetailPrice" id="pincode"
                    style={{ fontSize: 18 }}
                    className="input-xlarge"
                    name='p_max_retailprice'
                    value={p_max_retailprice}
                    onChange={(e) => setp_max_retailprice(e.target.value)}
                  />
                </div>
              </div>
              
              <div className="control-group">
                <label className="control-label"
                  style={{ fontSize: 20, }}
                >Product SellingPrice</label>
                <div className="controls">
                  <input type="text" placeholder="Enter Product SellingPrice" id="p_sellingprice"
                    style={{ fontSize: 18 }}
                    className="input-xlarge"
                    name='p_sellingprice'
                    value={p_sellingprice}
                    onChange={(e) => setp_sellingprice(e.target.value)}
                  />
                </div>
              </div>

              
              <div className="control-group">
                <label className="control-label"
                  style={{ fontSize: 20, }}
                >Product Discount Percentage</label>
                <div className="controls">
                  <input type="text" placeholder="Enter Product Discount Percentage" id="p_discount_percentage"
                    style={{ fontSize: 18 }}
                    className="input-xlarge"
                    name='p_discount_percentage'
                    value={p_discount_percentage}
                    onChange={(e) => setp_discount_percentage(e.target.value)}
                  />
                </div>
              </div>
              
              <div className="control-group">
                <label className="control-label"
                  style={{ fontSize: 20, }}
                >Product Size</label>
                <div className="controls">
                  <input type="text" placeholder="Enter Product Size" id="p_size"
                    style={{ fontSize: 18 }}
                    className="input-xlarge"
                    name='p_size'
                    value={p_size}
                    onChange={(e) => setp_size(e.target.value)}
                  />
                </div>
              </div>
              
              <div className="control-group">
                <label className="control-label"
                  style={{ fontSize: 20, }}
                >Product Quantity</label>
                <div className="controls">
                  <input type="text" placeholder="Enter Product Quantity" id="p_quantity"
                    style={{ fontSize: 18 }}
                    className="input-xlarge"
                    name='p_quantity'
                    value={p_quantity}
                    onChange={(e) => setp_quantity(e.target.value)}
                  />
                </div>
              </div>
              
              <div className="control-group">
                <label className="control-label"
                  style={{ fontSize: 20, }}
                >Product Availability</label>
                <div className="controls">
                  <input type="text" placeholder="Enter Product Availability" id="p_availability"
                    style={{ fontSize: 18 }}
                    className="input-xlarge"
                    name='p_availability'
                    value={p_availability}
                    onChange={(e) => setp_availability(e.target.value)}
                  />
                </div>
              </div>


              
            <div className="control-group">
                <label className="control-label"
                  style={{ fontSize: 20, }}
                >Product Availability</label>
                <div className="controls">
                <input type="file" className="form-control border-0 p-6" id="postimg"
                  multiple
                  required="required"
                  onChange={saveFile}
                  name='upload_doc'
                />
                </div>
              </div>    

              <div>
                <button className="btn btn-info" type="submit"
                >Add Product</button>
              </div>
              <hr></hr>
            </form>
          </div>
          
        </div>
      </section>
      <Footer />
    </div>
  )
}
