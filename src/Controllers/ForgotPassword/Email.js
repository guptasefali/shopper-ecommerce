import React,{useState} from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Slider from '../SliderDemo/Slider'
import {SEND_EMAIL} from '../../Utility/Constant'
import axios from 'axios'
import { useNavigate} from 'react-router-dom';

export default function Email() {
    const navigate = useNavigate()
    const [email, setemail] = useState("")

    const handleSubmit = (e)=>{
     e.preventDefault()   
    let params = {
        "email":email
      }
      axios.post(SEND_EMAIL,params)
      .then((response)=>{
        console.log(response.data)
        const {msg,id,token} = response.data
        localStorage.setItem('id',id)
        localStorage.setItem('forgottoken',token)
        alert(msg)
        navigate("/resetpassword")
      })
      .catch((error)=>{
        console.log(error)
        alert("Email is not Send")
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
                            <span className="text"><strong>Send</strong> Email</span></h4>
                        <form onSubmit={handleSubmit} method="post" >
                            <div className="control-group">
                                <label className="control-label"
                                    style={{ fontSize: 20, fontWeight: 'bold' }}
                                >Email</label>
                                <div className="controls">
                                    <input type="email"
                                    required placeholder="Enter email" id="email"
                                    style={{ fontSize: 18 }}
                                    onChange={(event) => setemail(event.target.value)}
                                    className="input-xlarge" />
                                </div>
                            </div>
                            
                            

                            <div>
                                <input
                                    className="btn btn-primary " type="submit"
                                    value="Send Email" />
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
