import React, { useState, useEffect } from 'react'
import Header from '../Header/Header'
import Slider from '../SliderDemo/Slider'
import axios from 'axios'
import { CHANGE_PASSWORD } from '../../Utility/Constant'
import Footer from '../Footer/Footer'
import {useNavigate} from 'react-router-dom'


export default function ChangePassword() {
    const navigate = useNavigate()
    const [oldPass, setoldPass] = useState("")
    const [newPass, setnewPass] = useState("")
    const [conPass, setconPass] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        let params = {
            "oldPass": oldPass,
            "newPass": newPass,
            "conPass": conPass
        }
        console.log(params)
        var _id = localStorage.getItem("_id")
        axios.put(CHANGE_PASSWORD + _id, params)
            .then((response) => {
                console.log(response.data)
                alert(response.data.msg)
                navigate("/")
            })
            .catch((err) => {
                alert(err.response.data.msg)
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
                            <span className="text"><strong>Change</strong> Password</span>
                        </h4>
                        <form onSubmit={handleSubmit} method="post" >
                            <div className="control-group">
                                <label className="control-label"
                                    style={{ fontSize: 20, fontWeight: 'bold' }}>Old Password</label>
                                <div className="controls">
                                    <input
                                        type="password"
                                        required placeholder="Enter old Password" id="password"
                                        style={{ fontSize: 18 }}
                                        onChange={(event) => setoldPass(event.target.value)}
                                        className="input-xlarge" />
                                </div>
                            </div>
                            <div className="control-group">
                                   <label className="control-label"
                                    style={{ fontSize: 20, fontWeight: 'bold' }}>New Password</label>
                                <div className="controls">
                                    <input
                                        type="password" placeholder="Enter old Password" id="oldpassword"
                                        required
                                        style={{ fontSize: 18 }}
                                        onChange={(event) => setnewPass(event.target.value)}
                                        className="input-xlarge" />
                                </div>
                            </div>
                            <div className="control-group">
                                <label className="control-label"
                                    style={{ fontSize: 20, fontWeight: 'bold' }}>Confirm Password</label>
                                <div className="controls">
                                    <input
                                        type="password"
                                        required
                                        placeholder="Enter new Password" id="conpassword"
                                        style={{ fontSize: 18 }}
                                        onChange={(event) => setconPass(event.target.value)}
                                        className="input-xlarge" />
                                </div>
                            </div>

                            <div>
                                <input
                                    className="btn btn-primary " type="submit"
                                    value="Change Password" />
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
