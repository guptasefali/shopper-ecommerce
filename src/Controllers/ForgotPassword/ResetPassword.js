import React,{useState,useEffect} from 'react'
import Header from '../Header/Header'
import Slider from '../SliderDemo/Slider'
import Footer from '../Footer/Footer'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import {RESET_PASSWORD} from '../../Utility/Constant'

export default function ResetPassword() {
const navigate = useNavigate()
const [password, setpassword] = useState("")
const [confirm_password, setconfirm_password] = useState("")

  const handleSubmit = (e)=>{
    e.preventDefault()
    const id = localStorage.getItem('id')
    const token = localStorage.getItem('forgottoken')
    const url = RESET_PASSWORD + id + "&token=" + token
    console.log(url)
    let params = { 
      "password":password, 
      "confirm_password":confirm_password 
  }
    axios.post(url, params)
      .then((response) => {
        console.log(response.data)
        alert(response.data.msg)
        navigate("/login")
      })
      .catch((error) => {
        console.log(error)
        alert("Password is not reset")
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
                            <span className="text"><strong>Reset</strong> Password</span></h4>
                        <form onSubmit={handleSubmit} method="post" >
                            <div className="control-group">
                                <label className="control-label"
                                    style={{ fontSize: 20, fontWeight: 'bold' }}
                                >Password</label>
                                <div className="controls">
                                    <input type="password"
                                    required placeholder="Enter New Password" id="password"
                                        style={{ fontSize: 18 }}
                                        onChange={(event) => setpassword(event.target.value)}
                                        className="input-xlarge" />
                                </div>
                            </div>
                            
                            <div className="control-group">
                                <label className="control-label"
                                    style={{ fontSize: 20, fontWeight: 'bold' }}
                                >Confirm Password</label>
                                <div className="controls">
                                    <input type="password"
                                    required
                                        placeholder="Enter Confirm Password" id="confirm_password"
                                        style={{ fontSize: 18 }}
                                        onChange={(event) => setconfirm_password(event.target.value)}
                                        className="input-xlarge" />
                                </div>
                            </div>

                            <div>
                                <input
                                    className="btn btn-primary " type="submit"
                                    value="Reset Password" />
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
