import React from 'react'
import SingleProduct2 from './SingleProduct2'

export default function BestSellerProduct({ data }) {
  return (
    <>
      <div className="container-fluid products pb-5">
        <div className="container products-mini py-5">
          <div className="mx-auto text-center mb-5" style={{ maxwidth: "700px" }}>
            <h4 className="text-primary mb-4 border-bottom border-primary border-2 d-inline-block p-2 title-border-radius wow fadeInUp"
              data-wow-delay="0.1s">Bestseller Products</h4>
            <p className="mb-0 wow fadeInUp" data-wow-delay="0.2s">Discover our best-selling products, loved by thousands of happy customers for their exceptional quality, unbeatable value, and stylish designs. Shop our top picks today and experience the perfect blend of performance, comfort, and affordability.
            </p>
          </div>
          <div className="row g-4">
            {data.map(item => {
              return <div key={item.id} className="col-md-6 col-lg-6 col-xl-4 wow fadeInUp" data-wow-delay="0.1s">
                <SingleProduct2 item={item} />
              </div>
            })}

          </div>
        </div>
      </div>


    </>
  )
}
