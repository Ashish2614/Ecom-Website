// import React from 'react'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { getSetting } from "../Redux/ActionCreators/SettingActionCreators"

export default function Footer() {
  let [settingData, setSettingData] = useState({
    siteName: import.meta.env.VITE_APP_SITE_NAME,
    map1: import.meta.env.VITE_APP_MAP1,
    address: import.meta.env.VITE_APP_ADDRESS,
    email: import.meta.env.VITE_APP_EMAIL,
    phone: import.meta.env.VITE_APP_PHONE,
    whatsapp: import.meta.env.VITE_APP_WHATSAPP,
    facebook: import.meta.env.VITE_APP_FACEBOOK,
    twitter: import.meta.env.VITE_APP_TWITTER,
    instagram: import.meta.env.VITE_APP_INSTAGRM,
    linkedin: import.meta.env.VITE_APP_LINKEDIN,
    youtube: import.meta.env.VITE_APP_YOUTUBE,
  })
  let SettingStateData = useSelector(state => state.SettingStateData)

  const dispatch = useDispatch()
  useEffect(() => {
    (() => {
      dispatch(getSetting())
      if (SettingStateData.length)
        setSettingData(() => {
          let item = {}
          Object.keys(settingData).map(key => item[key] = SettingStateData[0][key] || settingData[key])
          return item
        })
    })()
  }, [SettingStateData.length])

  return (
    <>
      <div className="container-fluid footer py-5 wow fadeIn" data-wow-delay="0.2s">
        <div className="container py-5">
          <div className="row g-4 rounded mb-5" style={{ background: "rgba(255, 255, 255, .03)" }}>
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="rounded p-4">
                <div className="rounded-circle bg-secondary d-flex align-items-center justify-content-center mb-4"
                  style={{ width: "70px", height: "70px" }}>
                  <i className="fas fa-map-marker-alt fa-2x text-light"></i>
                </div>
                <div>
                  <h4 className="text-white">Address</h4>
                  <a href={settingData.map1} target='_blank' className="mb-2 text-light">{settingData.address}</a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="rounded p-4">
                <div className="rounded-circle bg-secondary d-flex align-items-center justify-content-center mb-4"
                  style={{ width: "70px", height: "70px" }}>
                  <i className="fas fa-envelope fa-2x text-primary"></i>
                </div>
                <div>
                  <h4 className="text-white">Mail Us</h4>
                  <a href={`mailto:${settingData.email}`} target='_blank' className="mb-2 text-light">{settingData.email}</a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="rounded p-4">
                <div className="rounded-circle bg-secondary d-flex align-items-center justify-content-center mb-4"
                  style={{ width: "70px", height: "70px" }}>
                  <i className="fa fa-phone-alt fa-2x text-primary"></i>
                </div>
                <div>
                  <h4 className="text-white">Telephone</h4>
                  <a href={`tel:${settingData.phone}`} target='_blank' className="mb-2 text-light">{settingData.phone}</a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="rounded p-4">
                <div className="rounded-circle bg-secondary d-flex align-items-center justify-content-center mb-4"
                  style={{ width: "70px", height: "70px" }}>
                  <i className="bi bi-whatsapp fa-2x text-primary"></i>
                </div>
                <div>
                  <h4 className="text-white">Whatsapp</h4>
                  <a href={`mailto:${settingData.whatsapp}`} target='_blank' className="mb-2 text-light">{settingData.whatsapp}</a>
                </div>
              </div>
            </div>
          </div>
          <div className="row g-5">
            <div className="col-md-6  ">
              <div className="footer-item d-flex flex-column">
                <div className="footer-item">
                  <h4 className="text-primary mb-4">{settingData.siteName}</h4>
                  <p className="mb-3">ShopMart is your trusted online shopping destination, offering quality products, great deals, and a seamless shopping experience. We make shopping simple, secure, and convenient for everyone.
                    amet.</p>
                  <div className="position-relative mx-auto rounded-pill">
                    <input className="form-control rounded-pill w-100 py-3 ps-4 pe-5" type="text"
                      placeholder="Enter your email" />
                    <button type="button"
                      className="btn btn-primary rounded-pill position-absolute top-0 end-0 py-2 mt-2 me-2">SignUp</button>
                  </div>
                </div>
                <div className='mt-3'>
                  <a href={settingData.facebook} target='_blank' className="me-2"><i className='fs-3 me-2 bi bi-facebook'></i>
                  </a>
                  <a href={settingData.twitter} target='_blank' className="me-2"><i className='fs-3 me-2 bi bi-twitter'></i>
                  </a>
                  <a href={settingData.instagram} target='_blank' className="me-2"><i className='fs-3 me-2 bi bi-instagram'></i>
                  </a>
                  <a href={settingData.linkedin} target='_blank' className="me-2"><i className='fs-3 me-2 bi bi-linkedin'></i>
                  </a>
                  <a href={settingData.youtube} target='_blank' className="me-2"><i className='fs-3 me-2 bi bi-youtube'></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="footer-item d-flex flex-column">
                <h4 className="text-primary mb-4">Quick Links</h4>
                <Link to="/" className=""><i className="fas fa-angle-right me-2"></i> Home</Link>
                <Link to="/about" className=""><i className="fas fa-angle-right me-2"></i> About</Link>
                <Link to="/shop" className=""><i className="fas fa-angle-right me-2"></i> Shop</Link>
                <Link to="/testimonials" className=""><i className="fas fa-angle-right me-2"></i> Testimonials</Link>
                <Link to="/contact" className=""><i className="fas fa-angle-right me-2"></i> Contact Us</Link>

              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="footer-item d-flex flex-column">
                <h4 className="text-primary mb-4">Other Links</h4>
                <Link to="/features" className=""><i className="fas fa-angle-right me-2"></i> Features</Link>
                <Link to="/faq" className=""><i className="fas fa-angle-right me-2"></i> Faq</Link>
                <Link to="/privacy-policy" className=""><i className="fas fa-angle-right me-2"></i> Privacy Policy</Link>
                <Link to="/tc" className=""><i className="fas fa-angle-right me-2"></i> Terms & Conditions</Link>
                <Link to="/return-policy" className=""><i className="fas fa-angle-right me-2"></i> Return Policy</Link>

              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-3">
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid copyright py-4">
        <div className="container">
          <div className="row g-4 align-items-center">
            <div className="col-md-6 text-center text-md-start mb-md-0">
              <span className="text-white"><a href="#" className="border-bottom text-white"><i
                className="fas fa-copyright text-light me-2"></i>{settingData.siteName}</a>, All right
                reserved.</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
