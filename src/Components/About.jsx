import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { getSetting } from "../Redux/ActionCreators/SettingActionCreators"
import { useDispatch, useSelector } from 'react-redux'

export default function About() {

  let [settingData, setSettingData] = useState({
    siteName: import.meta.env.VITE_APP_SITE_NAME,
    facebook: import.meta.env.VITE_APP_FACEBOOK,
    twitter: import.meta.env.VITE_APP_TWITTER,
    instagram: import.meta.env.VITE_APP_INSTAGRM,
    linkedin: import.meta.env.VITE_APP_LINKEDIN,
    youtube: import.meta.env.VITE_APP_YOUTUBE,
  })

  let SettingStateData = useSelector(state => state.SettingStateData)
  let dispatch = useDispatch()

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
      <div className="conatiner my-4 py-5">
        <h1>Your Trusted Destination for Quality shopping,Great Value,and Exceptional customer Experience</h1>
        <div className="row">
          <div className="col-md-6 className = text-dark">
            <p> At ShopMart, we believe online shopping should be simple, enjoyable, and reliable. Our mission is to provide customers with a carefully curated selection of high-quality products at competitive prices, ensuring exceptional value with every purchase. From fashion and lifestyle essentials to everyday necessities, we bring together products that combine style, functionality, and affordability. We are committed to delivering a seamless shopping experience through an easy-to-use platform, secure payment options, and dependable customer support. Every product is selected with customer satisfaction in mind, making ShopMart a trusted destination for shoppers who value quality and convenience.</p>
            <p>Customer satisfaction is at the heart of everything we do. We continuously strive to improve our services by offering fast delivery, transparent pricing, and a hassle-free shopping experience from start to finish. Our dedicated team works tirelessly to ensure every order is processed efficiently and arrives on time. Whether you're shopping for yourself, your family, or searching for the perfect gift, ShopMart is here to make every purchase simple, secure, and rewarding. As we continue to grow, our commitment remains the same—to provide outstanding products, exceptional service, and a shopping experience that exceeds expectations every time.</p>

            <div>
              <a href={settingData.facebook} target='_blank' className='me-2'><i className=' fs-3 text-primary bi  bi-facebook'></i>
              </a>
              <a href={settingData.twitter} target='_blank' className='me-2'><i className='fs-3 text-primary bi  bi-twitter'></i>
              </a>
              <a href={settingData.instagram} target='_blank' className='me-2'><i className='fs-3 text-primary bi  bi-instagram'></i>
              </a>
              <a href={settingData.linkedin} target='_blank' className='me-2'><i className='fs-3 text-primary bi  bi-linkedin'></i>
              </a>
              <a href={settingData.youtube} target='_blank' className='me-2'><i className='fs-3 text-primary bi  bi-youtube'>   </i> </a>
            </div>
          </div>
          <div className="col-md-6">
            <img src="/images/banner1.jpg" className='img-fluid w-100' alt="" />
          </div>
        </div>
      </div>


    </>
  )
}
