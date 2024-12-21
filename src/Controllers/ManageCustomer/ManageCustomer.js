import React, { useEffect, useState } from 'react'
import Header from '../Header/Header'
import axios from 'axios'
import { MANAGE_CUSTOMER, CUSTOMER_LIST } from '../../Utility/Constant'

export default function ManageCustomer() {

    const [customers, setcustomers] = useState([])

    useEffect(() => {
        customerList()
    }, [])

    const customerList = () => {
        axios.get(CUSTOMER_LIST)
            .then((response) => {
                console.log(response.data)
                var list = response.data.customerlist
                console.log(list)
                setcustomers(list)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const handleStatus = (id,s) => {
        console.log(id,s)
        if (s===0) {
            var url = MANAGE_CUSTOMER+id+"&s=verify"
            axios.get(url)
            .then((response) => {
                console.log(response.data) 
                customerList()              
            })
            .catch((err) => {
                console.log(err)
            })
        }else if (s===1) {
            var url = MANAGE_CUSTOMER+id+"&s=block"
            axios.get(url)
            .then((response) => {
                console.log(response.data) 
                customerList()              
            })
            .catch((err) => {
                console.log(err)
            })
        }else{
            axios.get(MANAGE_CUSTOMER+id)
            .then((response) => {
                console.log(response.data) 
                customerList()
                alert(response.data.msg)              
            })
            .catch((err) => {
                console.log(err)
            })
        }
    }

    return (
        <div>
            <Header />
            <div>
                <h4 className="title"><span className="text"><strong>Manage</strong>  & View Customers</span></h4>
                <table className="table table-striped" style={{ fontSize: 22 }}>
                    <thead>
                        <tr>
                            <th>S.No</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Mobile</th>
                            <th>Address</th>
                            {/* <th>Gender</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {customers.map((customer, index) =>
                           
                          customer.role === "customer" ? <tr>
                          <td>{index + 1}</td>
                          <td>{customer.name}</td>
                          <td>{customer.email}</td>
                          <td>{customer.mobile}</td>
                          <td>{customer.address.state} {customer.address.city} {customer.address.pincode}</td>
                          {/* <td>{customer.gender}</td> */}
                          <td>
                              <button className="btn btn-danger" type="button"
                                  style={{ fontSize: 18, padding: 8 }}
                                  onClick={()=>handleStatus(customer._id,-1)}
                              >
                                  Delete</button>
                          </td>
                          <td>
                              { customer.status === 0 ? 
                              <button className="btn btn-success" type="button"
                                  style={{ fontSize: 18, padding: 8 }}
                              onClick={()=>handleStatus(customer._id,customer.status)}    
                              >
                                  Verify</button> : 
                                  <button className="btn btn-warning" type="button"
                                  style={{ fontSize: 18, padding: 8 }}
                              onClick={()=>handleStatus(customer._id,customer.status)}    
                              >
                                  Block</button>}
                          </td>
                      </tr> : null  
                            
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
