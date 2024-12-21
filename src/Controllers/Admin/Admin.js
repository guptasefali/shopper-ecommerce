import React,{useState,useEffect} from 'react'
import Header from '../Header/Header'
import Slider from '../SliderDemo/Slider'
import axios from 'axios'
import {CUSTOMER,CUSTOMER_PIC} from '../../Utility/Constant'
import {Outlet} from 'react-router-dom'
export default function Admin() {
  const [customer, setcustomer] = useState({})
  const [pic, setpic] = useState("")
  const [address, setaddress] = useState({})


  useEffect(()=>{
    customerDetails()
  },[])

  const customerDetails = ()=>{
    var _id = localStorage.getItem("_id")
    axios.get(CUSTOMER+_id)
    .then((response)=>{
      console.log(response.data)
      var custobj = response.data.record
      setcustomer(custobj)
      setaddress(custobj.address)

    })
    .catch((err)=>{
      console.log(err)
    })

    axios.get(CUSTOMER_PIC+_id)
    .then((response)=>{
      console.log(response.data)
      var imgurl = response.data.profilepic.upload_doc
      setpic(imgurl)
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  return (
    <div>
        <Header />
        <Slider />
        <Outlet />
        <div id="wrapper" className="container" >
					<section className="navbar main-menu">
						<div className="navbar-inner main-menu">
							<h3>Admin Details</h3>
						</div>

					</section>
			</div>
         <div 
      align="left"
      className="container" style={{backgroundColor:'transparent'}}
      >
        <img src={pic} 
        style={{height:200,width:200,borderRadius:100,marginTop:10}} />
        <div style={{margin:"auto"}}>
          <span style={{fontSize:18,fontWeight:'bold'}}>Name:{customer.name}</span><br></br>
          <span style={{fontSize:18,fontWeight:'bold'}}>Email:{customer.email}</span><br></br>
          <span style={{fontSize:18,fontWeight:'bold'}}>Mobile:{customer.mobile}</span><br></br>
          <span style={{fontSize:18,fontWeight:'bold'}}>Address:{`${address.state} ${address.city} ${address.pincode}`}</span> 
          {/* <span style={{fontSize:18,fontWeight:'bold'}}>Gender:{customer.gender}</span> */}
          {/* <h3>Address:{customer.address.state}  {customer.address.city}  {customer.address.pincode}</h3> */}

            </div>
        </div>
        
    </div>
  )
}
