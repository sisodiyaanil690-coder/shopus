import { data, Link } from "react-router-dom";
import Footer from "../Commen/Footer";
import Header from "../Commen/Header";
import { useEffect, useState } from "react";
import axios from "axios";
import Bradecrom from "../Commen/Bradecrom";

function ProductSidebar() {
  let [ProductApi, SetProduct] = useState([]);
  let [productCategory, SetCategory] = useState([]);

  // product api call
  async function FetchProduct() {
    try {
      let respons = await axios.get("https://dummyjson.com/products");
      SetProduct(respons.data.products);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  // category api call
  async function Category() {
    try {
      let respons = await axios.get("https://dummyjson.com/products/categories");
      SetCategory(respons.data);
    } catch (error) {
      console.log(error);

    }
  }

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    })
    FetchProduct();
    Category();
  }, [])
  return (
    <>
      <Header />
      <Bradecrom name={"Shop"} />
      {/*------------- products-sidebar-section-------------*/}
      <section className="product product-sidebar footer-padding">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-3">
              <div className="sidebar" data-aos="fade-right">
                <div className="sidebar-section">
                  <div className="sidebar-wrapper">
                    <h5 className="wrapper-heading">Product Categories</h5>
                    <div className="sidebar-item">
                      <ul className="sidebar-list">
                        {
                          productCategory.map((value) => {
                            return (
                              <li>
                                <input type="checkbox" id="mobile" name="mobile" />
                                <label ><Link to={`/productsidebar/${value.slug}`}>{value.name}</Link></label>
                              </li>
                            )
                          })
                        }

                      </ul>
                    </div>
                  </div>
                  <hr />





                </div>
                {/* <div className="sidebar-shop-section">
                  <span className="wrapper-subtitle">TRENDY</span>
                  <h5 className="wrapper-heading">Best wireless Shoes</h5>
                  <a href="seller-sidebar.html" className="shop-btn deal-btn">
                    Shop Now{" "}
                  </a>
                </div> */}
              </div>
            </div>
            <div className="col-lg-9">
              <div className="product-sidebar-section" data-aos="fade-up">
                <div className="row g-5">
                  {
                    ProductApi.map((value, index) => {
                      return (

                        <div className="col-lg-4 col-sm-6">
                          <div className="product-wrapper" data-aos="fade-up">
                            <div className="product-img">
                              <Link to={`/Product-info/${value.id}`}> <img
                                src={value.thumbnail}
                                alt="product-img"
                              /></Link>

                            </div>
                            <div className="product-info">

                              <div className="product-description">
                                <Link
                                  to={`/Product-info/${value.id}`}
                                  className="product-details"
                                >
                                  {value.title}
                                </Link>
                                <div className="price">
                                  {/* <span className="price-cut">$</span> */}
                                  <span className="new-price">₹ {value.price}</span>
                                </div>
                              </div>
                            </div>
                            <div className="product-cart-btn">
                              <Link to={`/Product-info/${value.id}`} className="product-btn">
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
          </div>
        </div>
      </section>
      {/*------------- products-sidebar-section-end-------------*/}
      <Footer />
    </>
  );
}
export default ProductSidebar;
