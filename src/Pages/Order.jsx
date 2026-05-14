import Footer from "../Commen/Footer";
import Header from "../Commen/Header";

function Order() {
  return (
    <>
      <Header />
      <Component />
      <Footer />
    </>
  );
}
function Component() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth"
  })
  return (
    <>
      <div>
        {/*------------- blog-tittle-section--------------*/}
        <section className="blog about-blog">
          <div className="container">
            <div className="blog-bradcrum">
              <span>
                <a href="index.html">Home</a>
              </span>
              <span className="devider">/</span>
              <span>
                <a href="#">Order</a>
              </span>
            </div>
            <div className="blog-heading about-heading">
              <h1 className="heading">Order</h1>
            </div>
          </div>
        </section>
        {/*------------- blog-tittle-section-end--------------*/}
        {/*------------- order-section--------------*/}
        <section className="order product footer-padding">
          <div className="container">
            <div className="order-title">
              <h5 className="wrapper-heading">Track Your Order</h5>
              <p className="paragraph">
                Enter your order taracking number and your secreet id.
              </p>
              <div className="order-section">
                <div className="row gy-5">
                  <div className="col-lg-8">
                    <div className="login-section">
                      <div className="review-form">
                        <div className="review-inner-form ">
                          <div className="review-form-name">
                            <label
                              htmlFor="track-number"
                              className="form-label"
                            >
                              Order Tracking Number**
                            </label>
                            <input
                              type="number"
                              id="track-number"
                              className="form-control"
                              placeholder="Order Number"
                            />
                          </div>
                          <div className="review-form-name">
                            <label htmlFor="Delivery" className="form-label">
                              Delivery Date*
                            </label>
                            <input
                              type="date"
                              id="Delivery"
                              className="form-control"
                            />
                          </div>
                        </div>
                        <a href="#" className="shop-btn">
                          Track Now
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div
                      className="order-img text-center"
                      data-aos="fade-right"
                      data-aos-duration={1000}
                    >
                      <img
                        src="assets/images/homepage-one/order.png"
                        alt="order"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*-
         */}
      </div>
    </>
  );
}
export default Order;
