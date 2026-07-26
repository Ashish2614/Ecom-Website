import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Navbar from './Components/Navbar'
import Footer from './Components/Footer'

import HomePage from './Pages/HomePage'
import AboutPage from './Pages/AboutPage'
import ShopPage from './Pages/ShopPage'
import ProductPage from './Pages/ProductPage'
import FeaturePage from './Pages/FeaturePage'
import FaqPage from './Pages/FaqPage'
import TestimonialPage from './Pages/TestimonialPage'
import CartPage from './Pages/User/CartPage'
import CheckoutPage from './Pages/User/CheckoutPage'
import ErrorPage from './Pages/ErrorPage'
import ContactUsPage from './Pages/ContactUsPage'
import PrivacyPolicy from './Pages/PrivacyPolicy'
import TermsAndConditions from './Pages/TermsAndConditions'
import ReturnAndRefundPolicy from './Pages/ReturnAndRefundPolicy'

import SignupPage from './Pages/User/SignupPage'
import LoginPage from './Pages/User/LoginPage'
import ProfilePage from './Pages/User/ProfilePage'
import OrderConfirmation from './Pages/User/OrderConfirmation'

import AdminHomePage from './Pages/Admin/AdminHomePage'

import AdminMaincategoryPage from './Pages/Admin/Maincategory/AdminMaincategoryPage'
import AdminMaincategoryCreatePage from './Pages/Admin/Maincategory/AdminMaincategoryCreatePage'
import AdminMaincategoryUpdatePage from './Pages/Admin/Maincategory/AdminMaincategoryUpdatePage'

import AdminSubcategoryPage from './Pages/Admin/Subcategory/AdminSubcategoryPage'
import AdminSubcategoryCreatePage from './Pages/Admin/Subcategory/AdminSubcategoryCreatePage'
import AdminSubcategoryUpdatePage from './Pages/Admin/Subcategory/AdminSubcategoryUpdatePage'

import AdminBrandPage from './Pages/Admin/Brand/AdminBrandPage'
import AdminBrandCreatePage from './Pages/Admin/Brand/AdminBrandCreatePage'
import AdminBrandUpdatePage from './Pages/Admin/Brand/AdminBrandUpdatePage'

import AdminFeaturePage from './Pages/Admin/Feature/AdminFeaturePage'
import AdminFeatureCreatePage from './Pages/Admin/Feature/AdminFeatureCreatePage'
import AdminFeatureUpdatePage from './Pages/Admin/Feature/AdminFeatureUpdatePage'

import AdminFaqPage from './Pages/Admin/Faq/AdminFaqPage'
import AdminFaqCreatePage from './Pages/Admin/Faq/AdminFaqCreatePage'
import AdminFaqUpdatePage from './Pages/Admin/Faq/AdminFaqUpdatePage'

import AdminSettingPage from './Pages/Admin/Setting/AdminSettingPage'

import AdminProductPage from './Pages/Admin/Product/AdminProductPage'
import AdminProductCreatePage from './Pages/Admin/Product/AdminProductCreatePage'
import AdminProductUpdatePage from './Pages/Admin/Product/AdminProductUpdatePage'

import AdminNewsletterPage from './Pages/Admin/Newsletter/AdminNewsletterPage'

import AdminContactUsPage from './Pages/Admin/ContactUs/AdminContactUsPage'
import AdminContactUsShowPage from './Pages/Admin/ContactUs/AdminContactUsShowPage'

import AdminCheckoutPage from './Pages/Admin/Checkout/AdminCheckoutPage'
import AdminCheckoutShowPage from './Pages/Admin/Checkout/AdminCheckoutShowPage'

import AdminUserPage from './Pages/Admin/User/AdminUserPage'
import AdminUserCreatePage from './Pages/Admin/User/AdminUserCreatePage'
import AdminUserUpdatePage from './Pages/Admin/User/AdminUserUpdatePage'


export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/shop' element={<ShopPage />} />
        <Route path='/product/:id' element={<ProductPage />} />
        <Route path='/feature' element={<FeaturePage />} />
        <Route path='/faq' element={<FaqPage />} />
        <Route path='/testimonial' element={<TestimonialPage />} />
        <Route path='/contact' element={<ContactUsPage />} />


        <Route path='/privacy-policy' element={<PrivacyPolicy />} />
        <Route path='/tc' element={<TermsAndConditions />} />
        <Route path='/refund-policy' element={<ReturnAndRefundPolicy />} />

        <Route path='/signup' element={<SignupPage />} />
        <Route path='/login' element={<LoginPage />} />

        {/* User Routes */}
        {localStorage.getItem("login") ?
          <>
            <Route path='/profile' element={<ProfilePage />} />
            <Route path='/cart' element={<CartPage />} />
            <Route path='/checkout' element={<CheckoutPage />} />
            <Route path='/order-confirmation' element={<OrderConfirmation />} />
          </> : null}

        {/* Admin Routes */}
        {localStorage.getItem("login") && localStorage.getItem("role") !== "Buyer" ?
          <>

            <Route path='/admin' element={<AdminHomePage />} />


            <Route path='/admin/maincategory' element={<AdminMaincategoryPage />} />
            <Route path='/admin/maincategory/create' element={<AdminMaincategoryCreatePage />} />
            <Route path='/admin/maincategory/update/:id' element={<AdminMaincategoryUpdatePage />} />

            <Route path='/admin/subcategory' element={<AdminSubcategoryPage />} />
            <Route path='/admin/subcategory/create' element={<AdminSubcategoryCreatePage />} />
            <Route path='/admin/subcategory/update/:id' element={<AdminSubcategoryUpdatePage />} />

            <Route path='/admin/brand' element={<AdminBrandPage />} />
            <Route path='/admin/brand/create' element={<AdminBrandCreatePage />} />
            <Route path='/admin/brand/update/:id' element={<AdminBrandUpdatePage />} />

            <Route path='/admin/feature' element={<AdminFeaturePage />} />
            <Route path='/admin/feature/create' element={<AdminFeatureCreatePage />} />
            <Route path='/admin/feature/update/:id' element={<AdminFeatureUpdatePage />} />

            <Route path='/admin/faq' element={<AdminFaqPage />} />
            <Route path='/admin/faq/create' element={<AdminFaqCreatePage />} />
            <Route path='/admin/faq/update/:id' element={<AdminFaqUpdatePage />} />

            <Route path='/admin/setting' element={<AdminSettingPage />} />

            <Route path='/admin/product' element={<AdminProductPage />} />
            <Route path='/admin/product/create' element={<AdminProductCreatePage />} />
            <Route path='/admin/product/update/:id' element={<AdminProductUpdatePage />} />

            <Route path='/admin/newsletter' element={<AdminNewsletterPage />} />

            <Route path='/admin/contact' element={<AdminContactUsPage />} />
            <Route path='/admin/contact/show/:id' element={<AdminContactUsShowPage />} />

            <Route path='/admin/checkout' element={<AdminCheckoutPage />} />
            <Route path='/admin/checkout/show/:id' element={<AdminCheckoutShowPage />} />

            {localStorage.getItem("role") === "Super Admin" ?
              <>
                <Route path='/admin/user' element={<AdminUserPage />} />
                <Route path='/admin/user/create' element={<AdminUserCreatePage />} />
                <Route path='/admin/user/update/:id' element={<AdminUserUpdatePage />} />
              </> : null}

          </> : null}
        <Route path='/*' element={<ErrorPage />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  )
}












// import React from 'react'
// import { BrowserRouter, Route, Routes } from 'react-router-dom'

// import Navbar from './Components/Navbar'
// import Footer from './Components/Footer'

// import HomePage from './Pages/HomePage'
// import ShopPage from './Pages/ShopPage'
// import ProductPage from './Pages/ProductPage'
// import TestimonialPage from './Pages/TestimonialPage'
// import Faqage from './Pages/FaqPage'
// import FeaturePage from './Pages/FeaturePage'
// import AboutPage from './Pages/AboutPage'

// import ContactUsPage from './Pages/ContactUsPage'
// import PrivacyPolicy from './Pages/PrivacyPolicy'
// import TermsAndConditions from './Pages/TermsAndConditions'
// import ReturnPolicy from './Pages/ReturnPolicy'
// import AdminHomePages from './Pages/Admin/AdminHomePage'

// import AdminMaincategoryPage from './Pages/MainCategory/AdminMainCategoryPage'
// import AdminMaincategoryCreatePage from './Pages/MainCategory/AdminMainCategoryCreatePage'
// import AdminMainCategoryUpdatePage from './Pages/MainCategory/AdminMainCategoryUpdatePage'

// import AdminSubcategoryCreatePage from './Pages/SubCategory/AdminSubCategoryCreatePage'
// import AdminSubcategoryPage from './Pages/SubCategory/AdminSubCategoryPage'
// import AdminSubCategoryUpdatePage from './Pages/SubCategory/AdminSubCategoryUpdatePage'

// import AdminBrandPage from './Pages/Brand/AdminBrandPage'
// import AdminBrandUpdatePage from './Pages/Brand/AdminBrandUpdatePage'
// import AdminBrandCreatePage from './Pages/Brand/AdminBrandCreatePage'


// import AdminFeaturePage from './Pages/Feature/AdminFeaturePage'
// import AdminFeatureCreatePage from './Pages/Feature/AdminFeatureCreatePage'
// import AdminFeatureUpdatePage from './Pages/Feature/AdminBrandUpdatePage'

// import AdminFaqUpdatePage from './Pages/Faq/AdminFaqUpdatePage'
// import AdminFaqPage from './Pages/Faq/AdminFaqPage'
// import AdminFaqCreatePage from './Pages/Faq/AdminFaqCreatePage'

// import AdminSettingPage from './Pages/Setting/AdminSettingPage'

// import AdminProductdPage from './Pages/Product/AdminProductPage'
// import AdminProductCreatePage from './Pages/Product/AdminProductCreatePage'
// import AdminProductUpdatePage from './Pages/Product/AdminProductUpdatePage'

// import SignupPage from './User/SignupPage'
// import LoginPage from './User/LoginPage'
// import ProfilePage from './User/ProfilePage'
// import OrderConfirmation from './User/OrderConfirmation'
// import CartPage from './User/CartPage'
// import CheckoutPage from './User/CheckoutPage'
// import ErrorPage from './Pages/ErrorPage'

// import AdminNewsletterPage from './Pages/Newsletter/AdminNewsletterPage'
// import AdminContactUsPage from './Pages/ContactUs/AdminContactUsPage'
// import AdminContactUsShowPage from './Pages/ContactUs/AdminContactUsShowPage'




// export default function App() {
//   return (
//     <BrowserRouter>
//       <Navbar />
//       <Routes>
//         <Route path='/' element={<HomePage />} />
//         <Route path='/shop' element={<ShopPage />} />
//         <Route path='/product' element={<ProductPage />} />
//         <Route path='/feature' element={<FeaturePage />} />
//         <Route path='/testimonial' element={<TestimonialPage />} />
//         <Route path='/faq' element={<Faqage />} />
//         <Route path='/about' element={<AboutPage />} />
//         <Route path='/contact' element={<ContactUsPage />} />
//         <Route path='/privacy-policy' element={<PrivacyPolicy />} />
//         <Route path='/tc' element={<TermsAndConditions />} />
//         <Route path='/return-policy' element={<ReturnPolicy />} />


//         //Admin Routes//

//         <Route path='/admin' element={<AdminHomePages />} />

//         <Route path='/admin/maincategory' element={<AdminMaincategoryPage />} />
//         <Route path='/admin/maincategory/create' element={<AdminMaincategoryCreatePage />} />
//         <Route path='/admin/maincategory/update:id' element={<AdminMainCategoryUpdatePage />} />

//         <Route path='/admin/subcategory' element={<AdminSubcategoryPage />} />
//         <Route path='/admin/subcategory/create' element={<AdminSubcategoryCreatePage />} />
//         <Route path='/admin/subcategory/update:id' element={<AdminSubCategoryUpdatePage />} />

//         <Route path='/admin/brand' element={<AdminBrandPage />} />
//         <Route path='/admin/brand/create' element={<AdminBrandCreatePage />} />
//         <Route path='/admin/brand/update:id' element={<AdminBrandUpdatePage />} />

//         <Route path='/admin/feature' element={<AdminFeaturePage />} />
//         <Route path='/admin/feature/create' element={<AdminFeatureCreatePage />} />
//         <Route path='/admin/feature/update:id' element={<AdminFeatureUpdatePage />} />

//         <Route path='/admin/faq' element={<AdminFaqPage />} />
//         <Route path='/admin/faq/create' element={<AdminFaqCreatePage />} />
//         <Route path='/admin/faq/update:id' element={<AdminFaqUpdatePage />} />

//         <Route path='/admin/setting' element={<AdminSettingPage />} />

//         <Route path='/admin/product' element={<AdminProductdPage />} />
//         <Route path='/admin/product/create' element={<AdminProductCreatePage />} />
//         <Route path='/admin/product/update:id' element={<AdminProductUpdatePage />} />

//         <Route path='/admin/newsletter' element={<AdminNewsletterPage />} />
//         <Route path='/admin/contact' element={<AdminContactUsPage />} />
//         <Route path='/admin/contact/show/:id' element={<AdminContactUsShowPage />} />


// //User Routes//
//         <Route path='/signup' element={<SignupPage />} />
//         <Route path='/login' element={<LoginPage />} />
//         <Route path='/profile' element={<ProfilePage />} />
//         <Route path='/cart' element={<CartPage />} />
//         <Route path='/checkout' element={<CheckoutPage />} />
//         <Route path='/* ' element={<ErrorPage />} />
//         <Route path='/order-confiramtion' element={<OrderConfirmation />} />


//       </Routes>
//       <Footer />
//     </BrowserRouter>
//   )
// }
