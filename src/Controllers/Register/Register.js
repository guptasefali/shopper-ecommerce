// import React, { useEffect, useState } from 'react'
// import Header from '../Header/Header'
// import Slider from '../SliderDemo/Slider'
// import Footer from '../Footer/Footer'

// export default function Register() {

//   const handleSignUp = () => {
//     console.log("handleSignUp")
//   }
//   return (
//     <div>
//       <Header />
//       <Slider />
//       <section className="main-content" >
//         <div className="row">
//           <div align="center">
//             <h4 className="title">
//               <span className="text"><strong>Register</strong> Form</span></h4>
//             <form action="#" method="post" >
//               <div className="control-group">
//                 <label className="control-label"
//                   style={{ fontSize: 20,  }}
//                 >Name</label>
//                 <div className="controls">
//                   <input type="text" placeholder="Enter your Name" id="name"
//                     style={{ fontSize: 18 }}
//                     className="input-xlarge" />
//                 </div>
//               </div>
//               <div className="control-group">
//                 <label className="control-label"
//                   style={{ fontSize: 20,  }}
//                 >Email</label>
//                 <div className="controls">
//                   <input type="text" placeholder="Enter your Email" id="email"
//                     style={{ fontSize: 18 }}
//                     className="input-xlarge" />
//                 </div>
//               </div>
//               <div className="control-group">
//                 <label className="control-label"
//                   style={{ fontSize: 20,  }}
//                 >Password</label>
//                 <div className="controls">
//                   <input type="password" placeholder="Enter your Password" id="password"
//                     style={{ fontSize: 18 }}
//                     className="input-xlarge" />
//                 </div>
//               </div>
//               <div className="control-group">
//                 <label className="control-label"
//                   style={{ fontSize: 20,  }}
//                 >Mobile</label>
//                 <div className="controls">
//                   <input type="text" placeholder="Enter your Mobile" id="mobile"
//                     style={{ fontSize: 18 }}
//                     className="input-xlarge" />
//                 </div>
//               </div>
//               <div className="control-group">
//                 <label className="control-label" style={{ fontSize: 20,  }}><span
//                 ></span> State</label>
//                 <div >
//                   <select className="input-xlarge" style={{ fontSize: 18,  }}>
//                     <option value="">Select a State</option>
//                     <option value="M.P">M.P</option>
//                     <option value="U.P">U.P</option>
//                     <option value="Maharastra">Maharastra</option>
//                     <option value="Gujarat">Gujarat</option>
//                   </select>
//                 </div>
//               </div>
//               <div className="control-group">
//                 <label className="control-label" style={{ fontSize: 20,  }}><span
//                 ></span> City</label>
//                 <div >
//                   <select className="input-xlarge" style={{ fontSize: 18,  }}>
//                     <option value="">Select a City</option>
//                     <option value="Indore">Indore</option>
//                     <option value="Ujjain">Ujjain</option>
//                     <option value="Mumbai">Mumbai</option>
//                     <option value="Pune">Pune</option>
//                   </select>
//                 </div>
//               </div>
//               <div className="control-group">
//                 <label className="control-label"
//                   style={{ fontSize: 20,  }}
//                 >Pincode</label>
//                 <div className="controls">
//                   <input type="text" placeholder="Enter your Pincode" id="pincode"
//                     style={{ fontSize: 18 }}
//                     className="input-xlarge" />
//                 </div>
//               </div>
//               <div>
//                 <input tabindex="3" className="btn btn-inverse large" type="button"
//                   onClick={handleSignUp}
//                   value="SignUp" />
//               </div>
//               <hr></hr>
//             </form>
//           </div>
//           {/* <div className="span7">
//                   <h4 className="title"><span className="text"><strong>Register</strong> Form</span></h4>
//                   <form action="#" method="post" className="form-stacked">
//                     <fieldset>
//                       <div className="control-group">
//                         <label className="control-label">Username</label>
//                         <div className="controls">
//                           <input type="text" placeholder="Enter your username" className="input-xlarge" />
//                         </div>
//                       </div>
//                       <div className="control-group">
//                         <label className="control-label">Email address:</label>
//                         <div className="controls">
//                           <input type="password" placeholder="Enter your email" className="input-xlarge" />
//                         </div>
//                       </div>
//                       <div className="control-group">
//                         <label className="control-label">Password:</label>
//                         <div className="controls">
//                           <input type="password" placeholder="Enter your password" className="input-xlarge" />
//                         </div>
//                       </div>
//                       <div className="control-group">
//                         <p>Now that we know who you are. I'm not a mistake! In a comic, you know how you can
//                           tell who the arch-villain's going to be?</p>
//                       </div>
//                       <hr></hr>
//                       <div className="actions"><input tabindex="9" className="btn btn-inverse large" type="submit"
//                         value="Create your account" /></div>
//                     </fieldset>
//                   </form>
//                 </div> */}
//         </div>
//       </section>
//       <Footer />
//     </div>
//   )
// }

import React, { useEffect, useState } from 'react'
import Header from '../Header/Header'
import Slider from '../SliderDemo/Slider'
import Footer from '../Footer/Footer'
import axios from 'axios'
import { REGISTER } from '../../Utility/Constant'
import {useNavigate} from 'react-router-dom'
export default function Register() {
  const navigate = useNavigate()
  const [name, setname] = useState("")
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const [mobile, setmobile] = useState("")
  const [state, setstate] = useState("")
  const [city, setcity] = useState("")
  const [pincode, setpincode] = useState("")
  const [gender, setgender] = useState("")

  const handleSignUp = () => {
    console.log("handleSignUp")
    let params = {
      "name": name,
      "email": email,
      "password": password,
      "mobile": mobile,
      "state": state,
      "city": city,
      "pincode": pincode,
      "gender": gender
    }
    console.log(params)
    axios.post(REGISTER,params)
    .then((response)=>{
      console.log(response.data)
      alert(response.data.msg)
      setname("")
      setemail("")
      setpassword("")
      setmobile("")
      setstate("")
      setcity("")
      setpincode("")
      setgender("Male")
      navigate("/login")
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
              <span className="text"><strong>Register</strong> Form</span></h4>
            <form action="#" method="post" >
              <div className="control-group">
                <label className="control-label"
                  style={{ fontSize: 20, }}
                >Name</label>
                <div className="controls">
                  <input type="text" placeholder="Enter your Name" id="name"
                    required=""
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
                    value={email}
                    onChange={(e) => setemail(e.target.value)}
                  />
                </div>
              </div>
              <div className="control-group">
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
              </div>
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
                  onClick={handleSignUp}
                >SignUp</button>
              </div>
              <hr></hr>
            </form>
          </div>
          {/* <div className="span7">
                  <h4 className="title"><span className="text"><strong>Register</strong> Form</span></h4>
                  <form action="#" method="post" className="form-stacked">
                    <fieldset>
                      <div className="control-group">
                        <label className="control-label">Username</label>
                        <div className="controls">
                          <input type="text" placeholder="Enter your username" className="input-xlarge" />
                        </div>
                      </div>
                      <div className="control-group">
                        <label className="control-label">Email address:</label>
                        <div className="controls">
                          <input type="password" placeholder="Enter your email" className="input-xlarge" />
                        </div>
                      </div>
                      <div className="control-group">
                        <label className="control-label">Password:</label>
                        <div className="controls">
                          <input type="password" placeholder="Enter your password" className="input-xlarge" />
                        </div>
                      </div>
                      <div className="control-group">
                        <p>Now that we know who you are. I'm not a mistake! In a comic, you know how you can
                          tell who the arch-villain's going to be?</p>
                      </div>
                      <hr></hr>
                      <div className="actions"><input tabindex="9" className="btn btn-inverse large" type="submit"
                        value="Create your account" /></div>
                    </fieldset>
                  </form>
                </div> */}
        </div>
      </section>
      <Footer />
    </div>
  )
}
