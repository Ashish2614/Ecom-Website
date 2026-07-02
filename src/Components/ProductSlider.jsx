import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import "swiper/css";
import { Autoplay } from 'swiper/modules'
import SingleProduct2 from './SingleProduct2';

export default function ProductSlider({ maincategory, data }) {
  let sliderOptions = {
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    modules: [Autoplay]
  }
  return (
    <>
      <div className="container-fluid products productList overflow-hidden">
        <div className="container products-mini py-5">
          <div className="mx-auto text-center mb-5" style={{ maxwidth: "900px" }}>
            <h4 className="text-primary border-bottom border-primary border-2 d-inline-block p-2 title-border-radius wow fadeInUp"
              data-wow-delay="0.1s">Products</h4>
            <h1 className="mb-0 display-3 wow fadeInUp" data-wow-delay="0.3s">All {maincategory} Items</h1>
          </div>
          <div className="productList-carousel  pt-4 wow fadeInUp" data-wow-delay="0.3s">
            <Swiper{...sliderOptions}>
              {data.map(item => {
                return <SwiperSlide key={item.id}>
                  <SingleProduct2 item={item} />
                </SwiperSlide>
              })}

            </Swiper>
          </div>
        </div>
      </div>
    </>
  )
}
