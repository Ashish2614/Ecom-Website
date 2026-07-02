import React from 'react'
import Breadcrum from '../Components/Breadcrum'
import About from '../Components/About'
import ContactDetails from '../Components/ContactDetails'
import Features from '../Components/Features'
import Faq from '../Components/Faq'
import Testimonial from '../Components/Testimonial'


export default function AboutPage() {
  return (
    <>
      <Breadcrum title="Abouts" />
      <About />
      <ContactDetails />
      <Features />
      <Faq />
      <Testimonial />
    </>
  )
}