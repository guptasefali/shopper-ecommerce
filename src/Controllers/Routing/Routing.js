import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Index from '../Index/Index'
import Login from '../Login/Login'
import ProductDetails from '../ProductDetails/ProductDetails'
import Logout from '../Logout/Logout'
import Customer from '../Customer/Customer'
import Admin from '../Admin/Admin'
import Register from '../Register/Register'
import AddProduct from '../AddProduct/Addproduct'
import { Cart } from '../AddtoCart/Cart'
import ChangePassword from '../ChangePassword/ChangePassword'
import ManageCustomer from '../ManageCustomer/ManageCustomer'
import CustomerDetails from '../CustomerDetails/CustomerDetails'
import Email from '../ForgotPassword/Email'
import ResetPassword from '../ForgotPassword/ResetPassword'
import CustomerEditProfile from '../CustomerEditProfile/CustomerEditProfile'
import UploadDoc from '../UploadDoc/UploadDoc'
export default function Routing() {
  return (
    <div>
      <Router>
        <Routes>
          
          <Route path="/" element={<Index />}></Route>
          <Route path='login/' element={<Login />}></Route>
          <Route path='logout/' element={<Logout />}></Route>
          <Route path="productdetails/:id" element={<ProductDetails />}></Route>
          <Route path='customer/' element={<Customer />}></Route>
          <Route path="customer/cart" element={<Cart />}></Route>
          <Route path="customer/changepassword/" element={<ChangePassword />} ></Route>
          <Route path='admin/' element={<Admin />}></Route>
          <Route path='admin/managecustomer' element={<ManageCustomer />}></Route>
          <Route path="admin/addproduct" element={<AddProduct />} ></Route>
          <Route path='customer/details' element={<CustomerDetails />}></Route>
          <Route path='register/' element={<Register />}></Route>
          <Route path='email/' element={<Email />}></Route>
          <Route path='resetpassword/' element={<ResetPassword />}></Route>
          <Route path="customer/editprofile/" element={<CustomerEditProfile />}></Route>
          <Route path="customer/uploaddocument" element={<UploadDoc />}></Route>

        </Routes>
      </Router>
    </div>
  )
}
