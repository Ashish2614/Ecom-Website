import React from 'react'
import SingleProduct from './SingleProduct'
import { useState } from 'react'
export default function Products({ maincategory, data }) {
  const [selected, setSelected] = useState()
  return (
    <>
      <div className="container-fluid product py-5">
        <div className="container py-5">
          <div className="tab-className">
            <div className="row g-4">
              <div className="col-lg-4 text-start wow fadeInLeft" data-wow-delay="0.1s">
                <h1>Our Products</h1>
              </div>
              <div className="col-lg-8 text-end wow fadeInRight" data-wow-delay="0.1s">
                <ul className="nav nav-pills d-inline-flex text-center mb-5">
                  <li className="nav-item mb-4">
                    <button className={`d-flex mx-2 py-2 border-dark rounded-pill btn ${selected === "" ? 'btn-primary' : 'btn-light'}`} onClick={() => setSelected("")}>
                      <span style={{ width: "130px" }}>All Products</span>
                    </button>
                  </li>
                  {maincategory.map(item => {
                    return <li key={item.id} className="nav-item mb-4">
                      <button className={`d-flex mx-2 py-2 border-dark rounded-pill btn ${selected === item.name ? 'btn-primary' : 'btn-light'}`} onClick={() => setSelected(item.name)}>
                        <span style={{ width: "100px" }}>{item.name}</span>
                      </button>
                    </li>
                  })}
                </ul>
              </div>
            </div>
            <div className="tab-content">
              <div id="tab-1" className="tab-pane fade show p-0 active">
                <div className="row g-4">
                  {data.filter(x => selected === "" || x.maincategory === selected).slice(0, 24).map(item => {
                    return <SingleProduct key={item.id} item={item} />
                  })}


                  <div className="product-item rounded wow fadeInUp" data-wow-delay="0.7s">
                    <div className="product-item-inner border rounded">
                      <div className="product-item-inner-item">
                        <img src="img/product-16.png" className="img-fluid w-100 rounded-top"
                          alt="Image" />
                        <div className="product-details">
                          <a href="#"><i className="fa fa-eye fa-1x"></i></a>
                        </div>
                      </div>
                      <div className="text-center rounded-bottom p-4">
                        <a href="#" className="d-block mb-2">SmartPhone</a>
                        <a href="#" className="d-block h4">Apple iPad Mini <br /> G2356</a>
                        <del className="me-2 fs-5">$1,250.00</del>
                        <span className="text-primary fs-5">$1,050.00</span>
                      </div>
                    </div>
                    <div
                      className="product-item-add border border-top-0 rounded-bottom  text-center p-4 pt-0">
                      <a href="#"
                        className="btn btn-primary border-secondary rounded-pill py-2 px-4 mb-4"><i
                          className="fas fa-shopping-cart me-2"></i> Add To Cart</a>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex">
                          <i className="fas fa-star text-primary"></i>
                          <i className="fas fa-star text-primary"></i>
                          <i className="fas fa-star text-primary"></i>
                          <i className="fas fa-star text-primary"></i>
                          <i className="fas fa-star"></i>
                        </div>
                        <div className="d-flex">
                          <a href="#"
                            className="text-primary d-flex align-items-center justify-content-center me-3"><span
                              className="rounded-circle btn-sm-square border"><i
                                className="fas fa-random"></i></span></a>
                          <a href="#"
                            className="text-primary d-flex align-items-center justify-content-center me-0"><span
                              className="rounded-circle btn-sm-square border"><i
                                className="fas fa-heart"></i></span></a>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
