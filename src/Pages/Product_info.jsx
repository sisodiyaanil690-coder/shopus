import { useEffect, useEffectEvent, useState } from "react";
import Footer from "../Commen/Footer";
import Header from "../Commen/Header";
import axios, { Axios } from "axios";
import { Link, useParams } from "react-router-dom";

function ProductInfo() {
  return (
    <>
      <Header />
      <Component1 />
      <Component2 />
      <Component3 />
      <Footer />
    </>
  );
}

function Component1() {
  let [singleProduct, SetSingleProduct] = useState([]);
  let { id } = useParams();
  async function SingleProducts() {
    try {
      let response = await axios.get(`https://dummyjson.com/products/${id}`);
      SetSingleProduct(response.data);
    } catch (error) {
      console.log(error);
    }
  }
  console.log("log single products", singleProduct);

  useEffect(() => {
      window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    SingleProducts();
  }, [id]);
  return (
    <>
      {/*------------- products-info-section-------------*/}
      <section className="product product-info">
        <div className="container">
          <div className="blog-bradcrum">
            <span>
              <a href="index.html">Home</a>
            </span>
            <span className="devider">/</span>
            <span>
              <a href="product-sidebar.html">Shop</a>
            </span>
            <span className="devider">/</span>
            <span>
              <a href="#">Product Details</a>
            </span>
          </div>
          <div className="product-info-section">
            <div className="row ">
              {
                <div className="col-md-6">
                  <div className="product-info-img" data-aos="fade-right">
                    <div className="swiper product-top">
                     
                      <div className="swiper-wrapper">
                        <div className="swiper-slide slider-top-img">
                          <img src={singleProduct.thumbnail} alt="img" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              }
           {
               <div className="col-md-6">
                <div className="product-info-content" data-aos="fade-left">
                  <span className="wrapper-subtitle">{singleProduct.brand}</span>
                  <h5>{singleProduct.title}</h5>
                  <div className="ratings">
                    <span>
                      <svg
                        width={75}
                        height={15}
                        viewBox="0 0 75 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.5 0L9.18386 5.18237H14.6329L10.2245 8.38525L11.9084 13.5676L7.5 10.3647L3.09161 13.5676L4.77547 8.38525L0.367076 5.18237H5.81614L7.5 0Z"
                          fill="#FFA800"
                        />
                        <path
                          d="M22.5 0L24.1839 5.18237H29.6329L25.2245 8.38525L26.9084 13.5676L22.5 10.3647L18.0916 13.5676L19.7755 8.38525L15.3671 5.18237H20.8161L22.5 0Z"
                          fill="#FFA800"
                        />
                        <path
                          d="M37.5 0L39.1839 5.18237H44.6329L40.2245 8.38525L41.9084 13.5676L37.5 10.3647L33.0916 13.5676L34.7755 8.38525L30.3671 5.18237H35.8161L37.5 0Z"
                          fill="#FFA800"
                        />
                        <path
                          d="M52.5 0L54.1839 5.18237H59.6329L55.2245 8.38525L56.9084 13.5676L52.5 10.3647L48.0916 13.5676L49.7755 8.38525L45.3671 5.18237H50.8161L52.5 0Z"
                          fill="#FFA800"
                        />
                        <path
                          d="M67.5 0L69.1839 5.18237H74.6329L70.2245 8.38525L71.9084 13.5676L67.5 10.3647L63.0916 13.5676L64.7755 8.38525L60.3671 5.18237H65.8161L67.5 0Z"
                          fill="#FFA800"
                        />
                      </svg>
                    </span>
                    <span className="text">{singleProduct.rating} Reviews</span>
                  </div>
                  <div className="price">
                    {/* <span className="price-cut">${singleProduct.price}</span> */}
                    <span className="new-price">₹{singleProduct.price}</span>
                  </div>
                  <p className="content-paragraph">
                    It is a long established fact that a reader will be
                    distracted by{" "}
                    <span className="inner-text">
                      the readable there content of a page.
                    </span>
                  </p>
                  <hr />
                  <div className="product-availability">
                    <span>Availabillity : </span>
                    <span className="inner-text">{singleProduct.stock} Products Available</span>
                  </div>
                 

                  <hr />
                  <div className="product-details">
                    <p className="category">
                      Category : <span className="inner-text">{singleProduct.category}</span>
                    </p>
                    <p className="tags">
                      Tags : <span className="inner-text">{singleProduct.tags}</span>
                    </p>
                    <p className="sku">
                      SKU : <span className="inner-text">{singleProduct.sku}</span>
                    </p>
                  </div>
                  <hr />
                  <div className="product-report">
                    <a
                      href="#"
                      className="report"
                      onclick="modalAction('.action')"
                    >
                      {/* <span>
                        <svg
                          width={15}
                          height={16}
                          viewBox="0 0 15 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M0 0C0.30478 0 0.585152 0 0.897442 0C0.908707 0.197137 0.919972 0.389267 0.932488 0.607056C1.30235 0.482516 1.64781 0.347336 2.00391 0.250332C3.83134 -0.247829 5.5555 0.0450599 7.19017 0.959399C7.97121 1.39686 8.7898 1.71165 9.68599 1.81178C10.9308 1.95072 12.0873 1.6716 13.1813 1.08832C13.4566 0.941876 13.7257 0.783541 14.0443 0.604553C14.0505 0.745991 14.0599 0.853634 14.0599 0.960651C14.0605 3.92396 14.058 6.88665 14.0662 9.84996C14.0668 10.079 13.9961 10.2042 13.7964 10.3143C11.4702 11.5973 9.14277 11.6123 6.82531 10.3106C4.99976 9.28546 3.14292 9.1484 1.22162 10.0164C0.990065 10.1209 0.908081 10.2524 0.909958 10.5096C0.921849 12.21 0.916217 13.911 0.916217 15.6114C0.916217 15.7353 0.916217 15.8586 0.916217 16C0.600172 16 0.312916 16 0 16C0 10.6779 0 5.35336 0 0Z"
                            fill="#EB5757"
                          />
                        </svg>
                      </span> */}
                      {/* <span>Report This Item</span> */}
                    </a>
                    {/* modal */}
                    <div className="modal-wrapper action">
                      <div
                        onclick="modalAction('.action')"
                        className="anywhere-away"
                      />
                      {/* change this */}
                      <div className="login-section account-section modal-main">
                        <div className="review-form">
                          {/* <div className="review-content">
                            <h5 className="comment-title">Report Products</h5>
                            <div className="close-btn">
                              <img
                                src="assets/images/homepage-one/close-btn.png"
                                onclick="modalAction('.action')"
                                alt="close-btn"
                              />
                            </div>
                          </div> */}
                          {/* <div className="review-form-name address-form">
                            <label htmlFor="reporttitle" className="form-label">
                              Enter Report Ttile*
                            </label>
                            <input
                              type="text"
                              id="reporttitle"
                              className="form-control"
                              placeholder="Reports Headline here"
                            />
                          </div>
                          <div className="review-form-name address-form">
                            <label htmlFor="reportnote" className="form-label">
                              Enter Report Note*
                            </label>
                            <textarea
                              name="ticketmassage"
                              id="reportnote"
                              cols={40}
                              rows={3}
                              className="form-control"
                              placeholder="Type Here"
                              defaultValue={""}
                            />
                          </div> */}
                          <div className="login-btn text-center">
                            <a
                              href="#"
                              onclick="modalAction('.action')"
                              className="shop-btn"
                            >
                              Submit Report
                            </a>
                          </div>
                        </div>
                      </div>
                      {/* change this */}
                    </div>
                  </div>
                  {/* <div className="product-share">
                    <p>Share This:</p>
                    <div className="social-icons">
                      <a href="#">
                        <span className="facebook">
                          <svg
                            width={10}
                            height={16}
                            viewBox="0 0 10 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M3 16V9H0V6H3V4C3 1.3 4.7 0 7.1 0C8.3 0 9.2 0.1 9.5 0.1V2.9H7.8C6.5 2.9 6.2 3.5 6.2 4.4V6H10L9 9H6.3V16H3Z"
                              fill="#3E75B2"
                            />
                          </svg>
                        </span>
                      </a>
                      <a href="#">
                        <span className="pinterest">
                          <svg
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M8 0C3.6 0 0 3.6 0 8C0 11.4 2.1 14.3 5.1 15.4C5 14.8 5 13.8 5.1 13.1C5.2 12.5 6 9.1 6 9.1C6 9.1 5.8 8.7 5.8 8C5.8 6.9 6.5 6 7.3 6C8 6 8.3 6.5 8.3 7.1C8.3 7.8 7.9 8.8 7.6 9.8C7.4 10.6 8 11.2 8.8 11.2C10.2 11.2 11.3 9.7 11.3 7.5C11.3 5.6 9.9 4.2 8 4.2C5.7 4.2 4.4 5.9 4.4 7.7C4.4 8.4 4.7 9.1 5 9.5C5 9.7 5 9.8 5 9.9C4.9 10.2 4.8 10.7 4.8 10.8C4.8 10.9 4.7 11 4.5 10.9C3.5 10.4 2.9 9 2.9 7.8C2.9 5.3 4.7 3 8.2 3C11 3 13.1 5 13.1 7.6C13.1 10.4 11.4 12.6 8.9 12.6C8.1 12.6 7.3 12.2 7.1 11.7C7.1 11.7 6.7 13.2 6.6 13.6C6.4 14.3 5.9 15.2 5.6 15.7C6.4 15.9 7.2 16 8 16C12.4 16 16 12.4 16 8C16 3.6 12.4 0 8 0Z"
                              fill="#E12828"
                            />
                          </svg>
                        </span>
                      </a>
                      <a href="#">
                        <span className="twitter">
                          <svg
                            width={18}
                            height={14}
                            viewBox="0 0 18 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M17.0722 1.60052C16.432 1.88505 15.7562 2.06289 15.0448 2.16959C15.7562 1.74278 16.3253 1.06701 16.5742 0.248969C15.8985 0.640206 15.1515 0.924742 14.3335 1.10258C13.6933 0.426804 12.7686 0 11.7727 0C9.85206 0 8.28711 1.56495 8.28711 3.48557C8.28711 3.7701 8.32268 4.01907 8.39382 4.26804C5.51289 4.12577 2.9165 2.73866 1.17371 0.604639C0.889175 1.13814 0.71134 1.70722 0.71134 2.34742C0.71134 3.5567 1.31598 4.62371 2.27629 5.26392C1.70722 5.22835 1.17371 5.08608 0.675773 4.83711V4.87268C0.675773 6.5799 1.88505 8.00258 3.48557 8.32268C3.20103 8.39382 2.88093 8.42938 2.56082 8.42938C2.34742 8.42938 2.09845 8.39382 1.88505 8.35825C2.34742 9.74536 3.62784 10.7768 5.15722 10.7768C3.94794 11.7015 2.45412 12.2706 0.818041 12.2706C0.533505 12.2706 0.248969 12.2706 0 12.2351C1.56495 13.2309 3.37887 13.8 5.37062 13.8C11.8082 13.8 15.3294 8.46495 15.3294 3.84124C15.3294 3.69897 15.3294 3.52113 15.3294 3.37887C16.0052 2.9165 16.6098 2.31186 17.0722 1.60052Z"
                              fill="#3FD1FF"
                            />
                          </svg>
                        </span>
                      </a>
                    </div>
                  </div> */}
                </div>
              </div>
           }
            </div>
          </div>
        </div>
      </section>
      {/*------------- products-info-end-------------*/}
      {/*------------- products-details-section-------------*/}
      <section className="product product-description">
        <div className="container">
          <div className="product-detail-section">
            <nav>
              <div
                className="nav nav-tabs nav-item"
                id="nav-tab"
                role="tablist"
              >
                <button
                  className="nav-link active"
                  id="nav-home-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-home"
                  type="button"
                  role="tab"
                  aria-controls="nav-home"
                  aria-selected="true"
                >
                  Description
                </button>
                <button
                  className="nav-link"
                  id="nav-review-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-review"
                  type="button"
                  role="tab"
                  aria-controls="nav-review"
                  aria-selected="false"
                >
                  Reviews
                </button>

              </div>
            </nav>
            <div className="tab-content tab-item" id="nav-tabContent">
              <div
                className="tab-pane fade show active"
                id="nav-home"
                role="tabpanel"
                aria-labelledby="nav-home-tab"
                tabIndex={0}
                data-aos="fade-up"
              >
                <div className="product-intro-section">
                  <h5 className="intro-heading">Introduction</h5>
                  <p className="product-details">
                    {singleProduct.description}
                  </p>
                </div>
                {/* <div className="product-feature">
                  <h5 className="intro-heading">Features :</h5>
                  <ul>
                    <li>
                      <p>slim body with metal cover</p>
                    </li>
                    <li>
                      <p>
                        latest Intel Core i5-1135G7 processor (4 cores / 8
                        threads)
                      </p>
                    </li>
                    <li>
                      <p>8GB DDR4 RAM and fast 512GB PCIe SSD</p>
                    </li>
                    <li>
                      <p>
                        NVIDIA GeForce MX350 2GB GDDR5 graphics card backlit
                        keyboard, touchpad with gesture support
                      </p>
                    </li>
                  </ul>
                </div> */}
              </div>
              <div
                className="tab-pane fade"
                id="nav-review"
                role="tabpanel"
                aria-labelledby="nav-review-tab"
                tabIndex={0}
              >
                <div className="product-review-section" data-aos="fade-up">
                  <h5 className="intro-heading">Reviews</h5>
                 {
                  singleProduct.reviews?.map((value)=>{
                    return(
                       <div className="review-wrapper">
                    <div className="wrapper">
                      <div className="wrapper-aurthor">
                        <div className="wrapper-info">
                          <div className="aurthor-img">
                            <img
                              src="../assets/images/homepage-one/aurthor-img-1.webp"
                              alt="aurthor-img"
                            />
                          </div>
                          <div className="author-details">
                            <h5>{value.reviewerName}</h5>
                            <p>{value.reviewerEmail}</p>
                          </div>
                        </div>
                        {/* <div className="ratings">
                          <span>
                            <svg
                              width={75}
                              height={15}
                              viewBox="0 0 75 15"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M7.5 0L9.18386 5.18237H14.6329L10.2245 8.38525L11.9084 13.5676L7.5 10.3647L3.09161 13.5676L4.77547 8.38525L0.367076 5.18237H5.81614L7.5 0Z"
                                fill="#FFA800"
                              />
                              <path
                                d="M22.5 0L24.1839 5.18237H29.6329L25.2245 8.38525L26.9084 13.5676L22.5 10.3647L18.0916 13.5676L19.7755 8.38525L15.3671 5.18237H20.8161L22.5 0Z"
                                fill="#FFA800"
                              />
                              <path
                                d="M37.5 0L39.1839 5.18237H44.6329L40.2245 8.38525L41.9084 13.5676L37.5 10.3647L33.0916 13.5676L34.7755 8.38525L30.3671 5.18237H35.8161L37.5 0Z"
                                fill="#FFA800"
                              />
                              <path
                                d="M52.5 0L54.1839 5.18237H59.6329L55.2245 8.38525L56.9084 13.5676L52.5 10.3647L48.0916 13.5676L49.7755 8.38525L45.3671 5.18237H50.8161L52.5 0Z"
                                fill="#FFA800"
                              />
                              <path
                                d="M67.5 0L69.1839 5.18237H74.6329L70.2245 8.38525L71.9084 13.5676L67.5 10.3647L63.0916 13.5676L64.7755 8.38525L60.3671 5.18237H65.8161L67.5 0Z"
                                fill="#FFA800"
                              />
                            </svg>
                          </span>
                          <span>(5.0)</span>
                        </div> */}
                      </div>
                      <div className="wrapper-description">
                        <p className="wrapper-details">
                         {value.comment}
                        </p>
                      </div>
                    </div>
                  </div>
                    )

                  })
                 }
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*------------- products-details-end-------------*/}
    </>
  );
}

function Component2() {
  return <></>;
}

function Component3() {
  let [product,setProduct] = useState([]);
async function Productlist() {
  try{
let respon = await axios.get("https://dummyjson.com/products");
setProduct(respon.data.products)
  }catch(error){
    console.log(error);
    
  }
  
}
useEffect(()=>{
   window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
Productlist();
},[])

  return (
    <>
      {/*------------- weekly-section-------------*/}
      <section className="product weekly-sale product-weekly footer-padding">
        <div className="container">
          <div className="section-title">
            <h5>Best Sell in this Week</h5>
            <Link to="/Product-Sidebar" className="view">
              View All
            </Link>
          </div>
          <div className="weekly-sale-section">
            <div className="row g-5">
             {
              product.slice(0,4).map((value)=>{
                return(
                   <div className="col-lg-3 col-md-6">
                <div className="product-wrapper" data-aos="fade-up">
                  <div className="product-img">
                   
                   <Link to={`/Product-info/${value.id}`}> <img
                          src={value.thumbnail}
                          alt="product-img"
                        /></Link>
                    <div className="product-cart-items">
                      {/* <a href="#" className="cart cart-item">
                        <span>
                          <svg
                            width={40}
                            height={40}
                            viewBox="0 0 40 40"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect width={40} height={40} rx={20} fill="white" />
                            <path
                              d="M12 14.4482V16.5664H12.5466H13.0933V15.3957V14.2204L15.6214 16.7486L18.1496 19.2767L18.5459 18.8759L18.9468 18.4796L16.4186 15.9514L13.8904 13.4232H15.0657H16.2364V12.8766V12.33H14.1182H12V14.4482Z"
                              fill="#181818"
                            />
                            <path
                              d="M12 14.4482V16.5664H12.5466H13.0933V15.3957V14.2204L15.6214 16.7486L18.1496 19.2767L18.5459 18.8759L18.9468 18.4796L16.4186 15.9514L13.8904 13.4232H15.0657H16.2364V12.8766V12.33H14.1182H12V14.4482Z"
                              fill="black"
                              fillOpacity="0.2"
                            />
                            <path
                              d="M23.4345 12.8766V13.4232H24.6052H25.7805L23.2523 15.9514L20.7241 18.4796L21.125 18.8759L21.5213 19.2767L24.0495 16.7486L26.5776 14.2204V15.3957V16.5664H27.1243H27.6709V14.4482V12.33H25.5527H23.4345V12.8766Z"
                              fill="#181818"
                            />
                            <path
                              d="M23.4345 12.8766V13.4232H24.6052H25.7805L23.2523 15.9514L20.7241 18.4796L21.125 18.8759L21.5213 19.2767L24.0495 16.7486L26.5776 14.2204V15.3957V16.5664H27.1243H27.6709V14.4482V12.33H25.5527H23.4345V12.8766Z"
                              fill="black"
                              fillOpacity="0.2"
                            />
                            <path
                              d="M15.6078 23.5905L13.0933 26.1096V24.9343V23.7636H12.5466H12V25.8818V28H14.1182H16.2364V27.4534V26.9067H15.0657H13.8904L16.4186 24.3786L18.9468 21.8504L18.5596 21.4632C18.35 21.2491 18.1633 21.076 18.1496 21.076C18.1359 21.076 16.9926 22.2103 15.6078 23.5905Z"
                              fill="#181818"
                            />
                            <path
                              d="M15.6078 23.5905L13.0933 26.1096V24.9343V23.7636H12.5466H12V25.8818V28H14.1182H16.2364V27.4534V26.9067H15.0657H13.8904L16.4186 24.3786L18.9468 21.8504L18.5596 21.4632C18.35 21.2491 18.1633 21.076 18.1496 21.076C18.1359 21.076 16.9926 22.2103 15.6078 23.5905Z"
                              fill="black"
                              fillOpacity="0.2"
                            />
                            <path
                              d="M21.1113 21.4632L20.7241 21.8504L23.2523 24.3786L25.7805 26.9067H24.6052H23.4345V27.4534V28H25.5527H27.6709V25.8818V23.7636H27.1243H26.5776V24.9343V26.1096L24.0586 23.5905C22.6783 22.2103 21.535 21.076 21.5213 21.076C21.5076 21.076 21.3209 21.2491 21.1113 21.4632Z"
                              fill="#181818"
                            />
                            <path
                              d="M21.1113 21.4632L20.7241 21.8504L23.2523 24.3786L25.7805 26.9067H24.6052H23.4345V27.4534V28H25.5527H27.6709V25.8818V23.7636H27.1243H26.5776V24.9343V26.1096L24.0586 23.5905C22.6783 22.2103 21.535 21.076 21.5213 21.076C21.5076 21.076 21.3209 21.2491 21.1113 21.4632Z"
                              fill="black"
                              fillOpacity="0.2"
                            />
                          </svg>
                        </span>
                      </a> */}
                    
                      
                    </div>
                  </div>
                  <div className="product-info">


                    <div className="product-description">
                      <a href="product-info.html" className="product-details">
                        {value.title}
                      </a>
                      <div className="price">
                        {/* <span className="price-cut">$32.99</span> */}
                        <span className="new-price">₹{value.discountPercentage}</span>
                      </div>
                    </div>
                  </div>
                  <div className="product-cart-btn">
                    <Link to={`/Product-info/${value.id}`}className="product-btn">
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
             
                )
              })
             }
             
            </div>
          </div>
        </div>
      </section>
      {/*------------- weekly-section-end-------------*/}
    </>
  );
}

export default ProductInfo;
