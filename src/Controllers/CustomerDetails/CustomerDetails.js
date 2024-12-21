import React, { useState, useEffect } from 'react'
import Header from '../Header/Header'
import Slider from '../SliderDemo/Slider'
import { CUSTOMER } from '../../Utility/Constant'
import axios from 'axios'
export default function CustomerDetails() {
    const [customer, setcustomer] = useState({})
    const [address, setaddress] = useState({})

    useEffect(() => {
        customerDetails()
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
      }
    return (
        <div>
             <Header />
             <Slider />
            <div class="accordion-group">
                <h4 className="title"><span className="text"><strong>Accounts &amp; Billing Details</strong></span></h4>
                <div class="accordion-inner">
                        <div class="row-fluid">
                            <div class="span6">
                                <h4>Your Personal Details</h4>
                                <div class="control-group">
                                    <label class="control-label">Full Name</label>
                                    <div class="controls">
                                        <input type="text" placeholder="" 
                                        disabled
                                        class="input-xlarge"
                                        value={customer.name}
                                        />
                                    </div>
                                </div>
                                
                                <div class="control-group">
                                    <label class="control-label">Email Address</label>
                                    <div class="controls">
                                        <input type="text" placeholder="" class="input-xlarge"
                                        disabled
                                        value={customer.email}
                                        />
                                    </div>
                                </div>
                                <div class="control-group">
                                    <label class="control-label">Mobile</label>
                                    <div class="controls">
                                        <input type="text" placeholder="" 
                                         disabled
                                         value={customer.mobile}
                                        class="input-xlarge"/>
                                    </div>
                                </div>
                                
                            </div>
                            <div class="span6">
                                <h4>Your Address</h4>
                                {/* <div class="control-group">
                                    <label class="control-label">Company</label>
                                    <div class="controls">
                                        <input type="text" placeholder="" class="input-xlarge"/>
                                    </div>
                                </div> */}
                                {/* <div class="control-group">
                                    <label class="control-label">Company ID:</label>
                                    <div class="controls">
                                        <input type="text" placeholder="" class="input-xlarge"/>
                                    </div>
                                </div> */}
                                <div class="control-group">
                                    <label class="control-label"><span class="required">*</span> Address 1:</label>
                                    <div class="controls">
                                        <input type="text" placeholder="" class="input-xlarge"
                                        disabled
                                value={`${address.state} ${address.city} ${address.pincode}`}
                                        />
                                    </div>
                                </div>
                                {/* <div class="control-group">
                                    <label class="control-label">Address 2:</label>
                                    <div class="controls">
                                        <input type="text" placeholder="" class="input-xlarge"/>
                                    </div>
                                </div> */}
                                <div class="control-group">
                                    <label class="control-label"><span class="required">*</span> City:</label>
                                    <div class="controls">
                                        <input type="text" placeholder="" class="input-xlarge"
                                        disabled
                                        value={address.city}
                                        />
                                    </div>
                                </div>
                                <div class="control-group">
                                    <label class="control-label"><span class="required">*</span> Post Code:</label>
                                    <div class="controls">
                                        <input type="text" placeholder="" class="input-xlarge"
                                        disabled
                                        value={address.pincode}
                                        />
                                    </div>
                                </div>
                                {/* <div class="control-group">
                                    <label class="control-label"><span class="required">*</span> Country:</label>
                                    <div class="controls">
                                        <select class="input-xlarge">
                                            <option value="1">Afghanistan</option>
                                            <option value="2">Albania</option>
                                            <option value="3">Algeria</option>
                                            <option value="4">American Samoa</option>
                                            <option value="5">Andorra</option>
                                            <option value="6">Angola</option>
                                        </select>
                                    </div>
                                </div> */}
                                <div class="control-group">
                                    <label class="control-label"><span class="required">*</span> Region / State:</label>
                                    <div class="controls">
                                        <input type="text" placeholder="" class="input-xlarge"
                                        disabled
                                        value={address.state}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
                <p className="buttons center">
          <button className="btn btn-inverse" type="button"
          >Make Payment</button>
          {/* <button className="btn" type="button">Continue</button>
          <button className="btn btn-inverse" type="submit" id="checkout">Checkout</button> */}
        </p>
            </div>
        </div>
    )
}
