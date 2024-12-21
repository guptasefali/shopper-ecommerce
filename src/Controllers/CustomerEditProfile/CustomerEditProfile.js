import React, { useEffect, useState } from 'react'
import Header from '../Header/Header'
import Slider from '../SliderDemo/Slider'
import Footer from '../Footer/Footer'
import axios from 'axios'
import { CUSTOMER_EDIT_PROFILE,CUSTOMER } from '../../Utility/Constant'
// import {useNavigate} from 'react-router-dom'

export default function CustomerEditProfile() {
  // const navigate = useNavigate()
  const [name, setname] = useState("")
  const [email, setemail] = useState("")
  // const [password, setpassword] = useState("")
  const [mobile, setmobile] = useState("")
  const [state, setstate] = useState("")
  const [city, setcity] = useState("")
  const [pincode, setpincode] = useState("")
  const [gender, setgender] = useState("")
  

  useEffect(() => {
    customerDetails()
  }, [])

  const customerDetails = () => {
    var _id = localStorage.getItem("_id")
    axios.get(CUSTOMER + _id)
      .then((response) => {
        console.log(response.data)
        var custobj = response.data.customer_record
        setname(custobj.name)
        setemail(custobj.email)
        setmobile(custobj.mobile)
        setstate(custobj.address.state)
        setcity(custobj.address.city)
        setpincode(custobj.address.pincode)
        setgender(custobj.gender)
    

      })
      .catch((err) => {
        console.log(err)
      })
    }

  const handleEditProfile = () => {
    console.log("handleEditProfile")
    let params = {
      "name": name,
      "mobile": mobile,
      "state": state,
      "city": city,
      "pincode": pincode,
      "gender": gender
    }
    console.log(params)
    var _id = localStorage.getItem("_id")
    var token = localStorage.getItem("token")
    axios.put(CUSTOMER_EDIT_PROFILE+_id,params,{
      'headers': {
        'Authorization': 'Bearer ' + token
      }})
    .then((response)=>{
      console.log(response.data)
      alert(response.data.msg)
      // navigate("/customer")
      customerDetails()
    })
    .catch((error)=>{
      console.log(error)
    })
  }
  return (
    <div>
      <Header />
      <Slider />
      <section className="main-content" >
        <div className="row">
          <div align="center">
            <h4 className="title">
              <span className="text"><strong>Edit</strong> Profile</span></h4>
            <form action="#" method="post" >
              <div className="control-group">
                <label className="control-label"
                  style={{ fontSize: 20, }}
                >Name</label>
                <div className="controls">
                  <input type="text" placeholder="Enter your Name" id="name"
                    style={{ fontSize: 18 }}
                    className="input-xlarge"
                    name='name'
                    value={name}
                    onChange={(e) => setname(e.target.value)}
                  />
                </div>
              </div>
              <div className="control-group">
                <label className="control-label"
                  style={{ fontSize: 20, }}
                >Email</label>
                <div className="controls">
                  <input type="text" placeholder="Enter your Email" id="email"
                    style={{ fontSize: 18 }}
                    className="input-xlarge"
                    name='email'
                    disabled
                    value={email}
                    onChange={(e) => setemail(e.target.value)}
                  />
                </div>
              </div>
              {/* <div className="control-group">
                <label className="control-label"
                  style={{ fontSize: 20, }}
                >Password</label>
                <div className="controls">
                  <input type="password" placeholder="Enter your Password" id="password"
                    style={{ fontSize: 18 }}
                    className="input-xlarge"
                    name='password'
                    value={password}
                    onChange={(e) => setpassword(e.target.value)}
                  />
                </div>
              </div> */}
              <div className="control-group">
                <label className="control-label"
                  style={{ fontSize: 20, }}
                >Mobile</label>
                <div className="controls">
                  <input type="text" placeholder="Enter your Mobile" id="mobile"
                    style={{ fontSize: 18 }}
                    className="input-xlarge"
                    name='mobile'
                    value={mobile}
                    onChange={(e) => setmobile(e.target.value)}
                  />
                </div>
              </div>
              <div className="control-group">
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
              </div>


              <div className="control-group">
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
              </div>
              <div className="control-group">
                <label className="control-label"
                  style={{ fontSize: 20, }}
                >Pincode</label>
                <div className="controls">
                  <input type="text" placeholder="Enter your Pincode" id="pincode"
                    style={{ fontSize: 18 }}
                    className="input-xlarge"
                    name='pincode'
                    value={pincode}
                    onChange={(e) => setpincode(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <button className="btn btn-info" type="button"
                  onClick={handleEditProfile}
                >Update Profile</button>
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
