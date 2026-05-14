import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      {/*------------- header-section -------------*/}
      <header id="header" className="header">

        <div className="header-center-section d-none d-lg-block">
          <div className="container">
            <div className="header-center">
              <div className="logo">
                <Link to="/">
                  <img src="../assets/images/logos/logo.webp" alt="logo" />
                </Link>
              </div>
              <div className="header-cart-items">


                {/* <div className="header-user">
                  <Link to="/User-Profile">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width={24}
                        height={24}
                        className="fill-current"
                      >
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path d="M20 22H4v-2a5 5 0 0 1 5-5h6a5 5 0 0 1 5 5v2zm-8-9a6 6 0 1 1 0-12 6 6 0 0 1 0 12z"></path>
                      </svg>
                    </span>
                  </Link>
                </div> */}
              </div>
            </div>
          </div>
        </div>
        <nav className="mobile-menu d-block d-lg-none">
          <div className="mobile-menu-header d-flex justify-content-between align-items-center">
            <button
              className="btn"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasWithBothOptions"
              aria-controls="offcanvasWithBothOptions"
            >
              <span>
                <svg
                  width={14}
                  height={9}
                  viewBox="0 0 14 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width={14} height={1} fill="#1D1D1D" />
                  <rect y={8} width={14} height={1} fill="#1D1D1D" />
                  <rect y={4} width={10} height={1} fill="#1D1D1D" />
                </svg>
              </span>
            </button>
            {/* <a href="index.html" className="mobile-header-logo">
              <img src="assets/images/logos/logo.webp" alt="logo" />
            </a>
            <a href="cart.html" className="header-cart cart-item">
              <span>
                <svg
                  width={35}
                  height={28}
                  viewBox="0 0 35 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.4444 21.897C14.8444 21.897 13.2441 21.8999 11.6441 21.8963C9.79233 21.892 8.65086 21.0273 8.12595 19.2489C7.04294 15.5794 5.95756 11.9107 4.87166 8.24203C4.6362 7.4468 4.37783 7.25412 3.55241 7.25175C2.7786 7.24964 2.00507 7.25754 1.23127 7.24911C0.512247 7.24148 0.0157813 6.79109 0.000242059 6.15064C-0.0160873 5.48281 0.475637 5.01689 1.23232 5.00873C2.11121 4.99952 2.99089 4.99214 3.86951 5.01268C5.36154 5.04769 6.52014 5.93215 6.96393 7.35415C7.14171 7.92378 7.34055 8.49026 7.46382 9.07201C7.54968 9.47713 7.77881 9.49661 8.10566 9.49582C11.8335 9.48897 15.5611 9.49134 19.2889 9.49134C21.0825 9.49134 22.8761 9.48108 24.6694 9.49503C26.0848 9.50608 27.0907 10.4906 27.0156 11.7778C27.0006 12.0363 26.925 12.2958 26.8473 12.5457C26.1317 14.8411 25.4124 17.1351 24.6879 19.4279C24.1851 21.0186 23.0223 21.8826 21.3504 21.8944C19.7151 21.906 18.0797 21.897 16.4444 21.897Z"
                    fill="#6E6D79"
                  />
                  <path
                    d="M12.4012 27.5161C11.167 27.5227 10.1488 26.524 10.1345 25.2928C10.1201 24.0419 11.1528 22.9982 12.3967 23.0066C13.6209 23.0151 14.6422 24.0404 14.6436 25.2623C14.6451 26.4855 13.6261 27.5095 12.4012 27.5161Z"
                    fill="#6E6D79"
                  />
                  <path
                    d="M22.509 25.2393C22.5193 26.4842 21.5393 27.4971 20.3064 27.5155C19.048 27.5342 18.0272 26.525 18.0277 25.2622C18.0279 24.0208 19.0214 23.0161 20.2572 23.0074C21.4877 22.9984 22.4988 24.0006 22.509 25.2393Z"
                    fill="#6E6D79"
                  />
                  <circle cx="26.9523" cy={8} r={8} fill="#AE1C9A" />
                  <path
                    d="M23.7061 13V11.8864L27.1514 8.31676C27.5193 7.92898 27.8226 7.58925 28.0612 7.29759C28.3032 7.0026 28.4838 6.72254 28.6031 6.45739C28.7225 6.19223 28.7821 5.91051 28.7821 5.61222C28.7821 5.27415 28.7026 4.98248 28.5435 4.73722C28.3844 4.48864 28.1673 4.29806 27.8922 4.16548C27.6171 4.02959 27.3072 3.96165 26.9625 3.96165C26.5979 3.96165 26.2797 4.03622 26.008 4.18537C25.7362 4.33452 25.5274 4.54498 25.3815 4.81676C25.2357 5.08854 25.1628 5.40672 25.1628 5.77131H23.6962C23.6962 5.15151 23.8387 4.60961 24.1237 4.1456C24.4088 3.68158 24.7999 3.32197 25.297 3.06676C25.7942 2.80824 26.3593 2.67898 26.9923 2.67898C27.632 2.67898 28.1955 2.80658 28.6827 3.06179C29.1732 3.31368 29.556 3.65838 29.8311 4.09588C30.1062 4.53007 30.2438 5.0206 30.2438 5.56747C30.2438 5.94531 30.1725 6.31487 30.03 6.67614C29.8908 7.0374 29.6472 7.4401 29.2992 7.88423C28.9511 8.32505 28.4672 8.86032 27.8475 9.49006L25.824 11.608V11.6825H30.4078V13H23.7061Z"
                    fill="#F9FFFB"
                  />
                </svg>
              </span>
            </a> */}
          </div>
          <div
            className="offcanvas offcanvas-start"
            data-bs-scroll="true"
            tabIndex={-1}
            id="offcanvasWithBothOptions"
          >
            <div className="offcanvas-body">
              <div className="header-top">
                <div className="header-cart ">
                  <div className="header-compaire">
                    <a href="compaire.html" className="cart-item">

                    </a>
                  </div>
                  <div className="logo" style={{ width: "70px" }}>
                    <Link to="/">
                      <img src="../assets/images/logos/logo.webp" alt="logo" />
                    </Link>
                  </div>
                  <hr></hr>
                </div>
                <div className="shop-btn">
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  ></button>
                </div>
              </div>
              {/* <div className="header-input">
                <input type="text" placeholder="Search...." />
                <span>
                  <svg
                    width={22}
                    height={22}
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.9708 16.4151C12.5227 17.4021 10.9758 17.9723 9.27353 18.0062C5.58462 18.0802 2.75802 16.483 1.05056 13.1945C-1.76315 7.77253 1.33485 1.37571 7.25086 0.167548C12.2281 -0.848249 17.2053 2.87895 17.7198 7.98579C17.9182 9.95558 17.5566 11.7939 16.5852 13.5061C16.4512 13.742 16.483 13.8725 16.6651 14.0553C18.2412 15.6386 19.8112 17.2272 21.3735 18.8244C22.1826 19.6513 22.2058 20.7559 21.456 21.4932C20.7697 22.1678 19.7047 22.1747 18.9764 21.4793C18.3623 20.8917 17.7774 20.2737 17.1796 19.6688C16.118 18.5929 15.0564 17.5153 13.9708 16.4151ZM2.89545 9.0364C2.91692 12.4172 5.59664 15.1164 8.91967 15.1042C12.2384 15.092 14.9138 12.3493 14.8889 8.98505C14.864 5.63213 12.1826 2.92508 8.89047 2.92857C5.58204 2.93118 2.87397 5.68958 2.89545 9.0364Z"
                      fill="black"
                    />
                  </svg>
                </span>
              </div> */}
              <div className="category-dropdown">
                <ul className="category-list">
                  <li className="category-list-item">
                    <Link to="/">
                      <div className="dropdown-item d-flex justify-content-between align-items-center">
                        <div className="dropdown-list-item d-flex">

                          <span className="dropdown-text">Home</span>
                        </div>
                        <div className="drop-down-list-icon">
                          <span>
                            <svg
                              width={6}
                              height={9}
                              viewBox="0 0 6 9"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <rect
                                x="1.5"
                                y="0.818359"
                                width="5.78538"
                                height="1.28564"
                                transform="rotate(45 1.5 0.818359)"
                              />
                              <rect
                                x="5.58984"
                                y="4.90918"
                                width="5.78538"
                                height="1.28564"
                                transform="rotate(135 5.58984 4.90918)"
                              />
                            </svg>
                          </span>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li className="category-list-item">
                    <Link to="/product-sidebar">
                      <div className="dropdown-item d-flex justify-content-between align-items-center">
                        <div className="dropdown-list-item d-flex">

                          <span className="dropdown-text">Shop</span>
                        </div>
                        <div className="drop-down-list-icon">
                          <span>
                            <svg
                              width={6}
                              height={9}
                              viewBox="0 0 6 9"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <rect
                                x="1.5"
                                y="0.818359"
                                width="5.78538"
                                height="1.28564"
                                transform="rotate(45 1.5 0.818359)"
                              />
                              <rect
                                x="5.58984"
                                y="4.90918"
                                width="5.78538"
                                height="1.28564"
                                transform="rotate(135 5.58984 4.90918)"
                              />
                            </svg>
                          </span>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li className="category-list-item">
                    <Link to="/About">
                      <div className="dropdown-item d-flex justify-content-between align-items-center">
                        <div className="dropdown-list-item d-flex">

                          <span className="dropdown-text">About</span>
                        </div>
                        <div className="drop-down-list-icon">
                          <span>
                            <svg
                              width={6}
                              height={9}
                              viewBox="0 0 6 9"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <rect
                                x="1.5"
                                y="0.818359"
                                width="5.78538"
                                height="1.28564"
                                transform="rotate(45 1.5 0.818359)"
                              />
                              <rect
                                x="5.58984"
                                y="4.90918"
                                width="5.78538"
                                height="1.28564"
                                transform="rotate(135 5.58984 4.90918)"
                              />
                            </svg>
                          </span>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li className="category-list-item">
                    <Link to="/Contact">
                      <div className="dropdown-item d-flex justify-content-between align-items-center">
                        <div className="dropdown-list-item d-flex">

                          <span className="dropdown-text">Contact</span>
                        </div>
                        <div className="drop-down-list-icon">
                          <span>
                            <svg
                              width={6}
                              height={9}
                              viewBox="0 0 6 9"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <rect
                                x="1.5"
                                y="0.818359"
                                width="5.78538"
                                height="1.28564"
                                transform="rotate(45 1.5 0.818359)"
                              />
                              <rect
                                x="5.58984"
                                y="4.90918"
                                width="5.78538"
                                height="1.28564"
                                transform="rotate(135 5.58984 4.90918)"
                              />
                            </svg>
                          </span>
                        </div>
                      </div>
                    </Link>
                  </li>

                </ul>
              </div>
            </div>
          </div>
        </nav>
        <div className="header-bottom d-lg-block d-none">
          <div className="container">
            <div className="header-nav">
              <div className="category-menu-section position-relative">
                <div className="empty position-fixed" onclick="tooglmenu()" />


              </div>
              <div className="header-nav-menu">
                <ul className="menu-list">
                  <li>
                    <Link to="/">
                      <span className="list-text">Home</span>
                    </Link>
                  </li>
                  <li className="mega-menu">
                    <Link to="/Product-Sidebar">
                      <span className="list-text">Shop</span>

                    </Link>

                  </li>

                  <li>
                    <Link to="/About">
                      <span className="list-text">About</span>
                    </Link>
                  </li>


                  <li>
                    <Link to="/Contact">
                      <span className="list-text">Contact</span>
                    </Link>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </header>
      {/*------------- header-section-end -------------*/}
    </>
  );
}
export default Header;
