import React, { useState } from 'react'
import Header from '../Header/Header'
import Slider from '../SliderDemo/Slider'
import { UPLOAD_DOC } from '../../Utility/Constant'
import axios from 'axios'
import Footer from '../Footer/Footer'

export default function UploadDoc() {
  const [upload_doc, setupload_doc] = useState("")

  const handleSubmit = (e) => {

    e.preventDefault()
    var _id = localStorage.getItem("_id")
    console.log(_id)
    console.log("this is uploaddoc", upload_doc)

    const formdata = new FormData()
    formdata.append("customer_id", _id)
    formdata.append("upload_doc", upload_doc)
    axios.post(UPLOAD_DOC, formdata, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
      .then((response) => {
        console.log(response)
        alert("Profile Pic Uploaded Successfully!!!")
        setupload_doc([])
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const saveFile = (e) => {
    console.log(e.target.files.length)
    console.log(e.target.files[0])
    setupload_doc(e.target.files[0])
  }
  return (
    <div>
      <Header />
      <Slider />
      <section className="main-content" >
        <div className="row">
          <div align="center">
            <h4 className="title">
              <span className="text"><strong>Upload</strong> Profile Pic</span></h4>
            <form action="#" method="post" onSubmit={handleSubmit}

            >

              <div className="control-group">
                <div className="controls">
                  <input type="file" className="form-control border-0 p-6" id="postimg"
                    required="required"
                    onChange={saveFile}
                    name='upload_doc'
                  />
                </div>
              </div>
              <div>
                <button className="btn btn-info" type="submit"
                >Add Profile Pic</button>
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
