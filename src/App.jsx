import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Navbar from './Components/Navbar'
import Footer from './Components/Footer'

import SignupPage from './Pages/User/SignupPage'

import HomePage from './Pages/HomePage'
import ShopPage from './Pages/ShopPage'
import ProductPage from './Pages/ProductPage'
import TestimonialPage from './Pages/TestimonialPage'
import Faqage from './Pages/FaqPage'
import FeaturePage from './Pages/FeaturePage'
import AboutPage from './Pages/AboutPage'
import CartPage from './Pages/User/CartPage'
import CheckoutPage from './Pages/User/CheckoutPage'
import ErrorPage from './Pages/ErrorPage'
import ContactUsPage from './Pages/ContactUsPage'
import PrivacyPolicy from './Pages/PrivacyPolicy'
import TermsAndConditions from './Pages/TermsAndConditions'
import ReturnPolicy from './Pages/ReturnPolicy'
import AdminHomePages from './Pages/Admin/AdminHomePage'

import AdminMaincategoryPage from './Pages/MainCategory/AdminMainCategoryPage'
import AdminMaincategoryCreatePage from './Pages/MainCategory/AdminMainCategoryCreatePage'
import AdminMainCategoryUpdatePage from './Pages/MainCategory/AdminMainCategoryUpdatePage'

import AdminSubcategoryCreatePage from './Pages/SubCategory/AdminSubCategoryCreatePage'
import AdminSubcategoryPage from './Pages/SubCategory/AdminSubCategoryPage'
import AdminSubCategoryUpdatePage from './Pages/SubCategory/AdminSubCategoryUpdatePage'

import AdminBrandPage from './Pages/Brand/AdminBrandPage'
import AdminBrandUpdatePage from './Pages/Brand/AdminBrandUpdatePage'
import AdminBrandCreatePage from './Pages/Brand/AdminBrandCreatePage'


import AdminFeaturePage from './Pages/Feature/AdminFeaturePage'
import AdminFeatureCreatePage from './Pages/Feature/AdminFeatureCreatePage'
import AdminFeatureUpdatePage from './Pages/Feature/AdminBrandUpdatePage'

import AdminFaqUpdatePage from './Pages/Faq/AdminFaqUpdatePage'
import AdminFaqPage from './Pages/Faq/AdminFaqPage'
import AdminFaqCreatePage from './Pages/Faq/AdminFaqCreatePage'

import AdminSettingPage from './Pages/Setting/AdminSettingPage'

import AdminProductdPage from './Pages/Product/AdminProductPage'
import AdminProductCreatePage from './Pages/Product/AdminProductCreatePage'
import AdminProductUpdatePage from './Pages/Product/AdminProductUpdatePage'









export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/shop' element={<ShopPage />} />
        <Route path='/product' element={<ProductPage />} />
        <Route path='/feature' element={<FeaturePage />} />
        <Route path='/testimonial' element={<TestimonialPage />} />
        <Route path='/faq' element={<Faqage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/contact' element={<ContactUsPage />} />
        <Route path='/privacy-policy' element={<PrivacyPolicy />} />
        <Route path='/tc' element={<TermsAndConditions />} />
        <Route path='/return-policy' element={<ReturnPolicy />} />



//User Routes//
        <Route path='/cart' element={<CartPage />} />
        <Route path='/checkout' element={<CheckoutPage />} />

        <Route path='/* ' element={<ErrorPage />} />

//Admin Routes//

        <Route path='/admin' element={<AdminHomePages />} />

        <Route path='/admin/maincategory' element={<AdminMaincategoryPage />} />
        <Route path='/admin/maincategory/create' element={<AdminMaincategoryCreatePage />} />
        <Route path='/admin/maincategory/update:id' element={<AdminMainCategoryUpdatePage />} />

        <Route path='/admin/subcategory' element={<AdminSubcategoryPage />} />
        <Route path='/admin/subcategory/create' element={<AdminSubcategoryCreatePage />} />
        <Route path='/admin/subcategory/update:id' element={<AdminSubCategoryUpdatePage />} />

        <Route path='/admin/brand' element={<AdminBrandPage />} />
        <Route path='/admin/brand/create' element={<AdminBrandCreatePage />} />
        <Route path='/admin/brand/update:id' element={<AdminBrandUpdatePage />} />

        <Route path='/admin/feature' element={<AdminFeaturePage />} />
        <Route path='/admin/feature/create' element={<AdminFeatureCreatePage />} />
        <Route path='/admin/feature/update:id' element={<AdminFeatureUpdatePage />} />

        <Route path='/admin/faq' element={<AdminFaqPage />} />
        <Route path='/admin/faq/create' element={<AdminFaqCreatePage />} />
        <Route path='/admin/faq/update:id' element={<AdminFaqUpdatePage />} />

        <Route path='/admin/setting' element={<AdminSettingPage />} />

        <Route path='/admin/product' element={<AdminProductdPage />} />
        <Route path='/admin/product/create' element={<AdminProductCreatePage />} />
        <Route path='/admin/product/update:id' element={<AdminProductUpdatePage />} />




      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
