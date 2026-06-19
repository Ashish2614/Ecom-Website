import React from 'react'
import { Link } from 'react-router-dom'
export default function AdminSidebar() {
  return (
    <>
      <div className="list-group">
        <Link to="/admin" className="mb-1 list-group-item list-group-item-action active" aria-current="true"><i className='bi bi-house-door fs-5'></i><span className='float-end'>Home</span></Link>
        <Link to="/admin/maincategory" className="mb-1 list-group-item list-group-item-action active" aria-current="true"><i className='bi bi-card-checklist fs-5'></i><span className='float-end'>Main Category</span></Link>
        <Link to="/admin/subcategory" className="mb-1 list-group-item list-group-item-action active" aria-current="true"><i className='bi bi-list-check fs-5'></i><span className='float-end'>Sub Category</span></Link>
        <Link to="/admin/brand" className="mb-1 list-group-item list-group-item-action active" aria-current="true"><i className='bi bi-list fs-5'></i><span className='float-end'>Brand</span></Link>
        <Link to="/admin/feature" className="mb-1 list-group-item list-group-item-action active" aria-current="true"><i className='bi bi-tags fs-5'></i><span className='float-end'>Feature</span></Link>
        <Link to="/admin/product" className="mb-1 list-group-item list-group-item-action active" aria-current="true"><i className='bi bi-bookmark-check fs-5'></i><span className='float-end'>Product</span></Link>
        <Link to="/admin/setting" className="mb-1 list-group-item list-group-item-action active" aria-current="true"><i className='bi bi-gear fs-5'></i><span className='float-end'>Setting</span></Link>
        <Link to="/admin/faq" className="mb-1 list-group-item list-group-item-action active" aria-current="true"><i className='bi bi-question-square fs-5'></i><span className='float-end'>Faq</span></Link>

        <Link to="/admin/newletter" className="mb-1 list-group-item list-group-item-action active" aria-current="true"><i className='bi bi-envelope fs-5'></i><span className='float-end'>Newsletter</span></Link>
        <Link to="/admin/contact" className="mb-1 list-group-item list-group-item-action active" aria-current="true"><i className='bi bi-telephone fs-5'></i><span className='float-end'>Contact Us</span></Link>
        <Link to="/admin/checkouttable" className="mb-1 list-group-item list-group-item-action active" aria-current="true"><i className='bi bi-list-check fs-5'></i><span className='float-end'>Checkout Table</span></Link>

        <Link to="/admin/user" className="mb-1 list-group-item list-group-item-action active" aria-current="true"><i className='bi bi-people fs-5'></i><span className='float-end'>User</span></Link>
        <Link to="/admin/service" className="mb-1 list-group-item list-group-item-action active" aria-current="true"><i className='bi bi-tags fs-5'></i><span className='float-end'>Services</span></Link>
      </div>

    </>
  )
}
