import React, { useEffect, useState } from 'react'
import Header from '../Header/Header'
import Slider from '../SliderDemo/Slider'
import { useSelector, useDispatch } from 'react-redux'
import { deleteProduct } from '../ReduxDemo/ActionCreator'
import { useNavigate } from 'react-router-dom';


export function Cart() {
  const navigate = useNavigate()

  let sum = 0 
  const products = useSelector(state => state.products)
  console.log("Product Details:", products)
  sum = products.reduce((sum,item)=>sum+(item.p_sprice*item.p_qty),0)
  console.log(sum)
 
  const dispatch = useDispatch()
  return (
    <div>
      <Header />
      <Slider />
      <div>
        <h4 className="title"><span className="text"><strong>Cart</strong></span></h4>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Image</th>
              <th>Product Name</th>
              <th>Quantity</th>
              <th>Unit Price in &#8377;</th>
              <th>Total Price in &#8377;</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) =>
              <tr>
                <td><a href="product_detail.html"><img alt="" src={product.p_simg} height={100} width={100} /></a></td>
                <td>{product.p_brand} {product.p_variant}</td>
                <td>{product.p_qty}</td>
                <td>{product.p_sprice}</td>
                <td>{product.p_sprice * product.p_qty}</td>
                <td><input
                  className="btn btn-inverse"
                  type="button"
                  onClick={()=> dispatch(deleteProduct(product.id))}
                  value="Delete"
                /></td>
              </tr>
            )}
            <tr>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td><strong>Total Price: &#8377;{sum}</strong></td>
            </tr>
          </tbody>
        </table>
        {/* <h4>What would you like to do next?</h4>
        <p>Choose if you have a discount code or reward points you want to use or would like to estimate your delivery cost.</p>

        <hr></hr>
        <p className="cart-total right">
          <strong>Sub-Total</strong>:	$100.00<br></br>
          <strong>Eco Tax (-2.00)</strong>: $2.00<br></br>
          <strong>VAT (17.5%)</strong>: $17.50<br></br>
          <strong>Total</strong>: $119.50<br></br>
        </p> */}
        <hr />
        <p className="buttons center">
          <button className="btn btn-inverse" type="button"
          onClick={()=> navigate('/customer/details',{state:sum})}
          >Place Order</button>
          {/* <button className="btn" type="button">Continue</button>
          <button className="btn btn-inverse" type="submit" id="checkout">Checkout</button> */}
        </p>
      </div>
    </div>
  )
}
