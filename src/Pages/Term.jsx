import Bradecrom from "../Commen/Bradecrom";
import Footer from "../Commen/Footer";
import Header from "../Commen/Header";

function Term() {

  return (

    <>
      <Header />
      <Component />
      <Footer />


    </>
  )
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

        <Bradecrom name={"Terms and Condition"} />
        {/*------------- blog-tittle-section-end--------------*/}
        {/*------------- terms-section -------------*/}
        <section className="product privacy footer-padding">
          <div className="container">
            <div className="privacy-section">
              <div className="policy">
                <h5 className="intro-heading">1. What Are Privacy Policy ?</h5>
                <p className="policy-details">Terms and conditions typically have a short description of your privacy
                  policy or a statement
                  declaring that using the site means expressing consent to the way you handle and process
                  personal data. It has survived not only five centuries but also the on leap into electronic
                  typesetting, remaining essentially unchanged. It wasn’t popularised in the 1960s with the
                  release of Letraset sheets containing Lorem Ipsum passages, andei more recently with desktop
                  publishing software like Aldus PageMaker including versions of Lorem Ipsum to make a type
                  specimen book.</p>
              </div>
              <div className="policy">
                <h5 className="intro-heading">2. Ecommerce Terms and Conditions Examples</h5>
                <p className="policy-details">While it’s not legally required for ecommerce websites to have a terms and
                  conditions agreement, adding one will help protect your online business.As terms and conditions
                  are legally enforceable rules, they allow you to set standards for how users interact with your
                  site. Here are some of the major benefits of including terms and conditions on your ecommerce
                  site:
                  <span className="policy-inner-text">
                    It has survived not only five centuries but also the on leap into electronic typesetting,
                    remaining essentially unchanged. It wasn’t popularised in the 1960s with the release of
                    Letraset
                    sheets containing Lorem Ipsum passages, andei more recently with desktop.
                  </span>
                </p>
                <div className="policy-features">
                  <h5 className="intro-heading">Features :</h5>
                  <ul>
                    <li>
                      <p>slim body with metal cover</p>
                    </li>
                    <li>
                      <p>latest Intel Core i5-1135G7 processor (4 cores / 8 threads)</p>
                    </li>
                    <li>
                      <p>8GB DDR4 RAM and fast 512GB PCIe SSD</p>
                    </li>
                    <li>
                      <p>NVIDIA GeForce MX350 2GB GDDR5 graphics card backlit keyboard, touchpad with gesture
                        support</p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="policy">
                <h5 className="intro-heading">3. Ecommerce Terms and Conditions Template [Free]</h5>
                <p className="policy-details">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type specimen book. It has survived not
                  only five centuries but also the on leap into electronic typesetting, remaining essentially
                  unchanged. It wasn’t popularised in the 1960s with the release of Letraset sheets containing
                  Lorem Ipsum passages, andei more recently with desktop publishing software like Aldus PageMaker
                  including versions of Lorem Ipsum to make a type specimen book. five centuries but also the on
                  leap into electronic typesetting, remaining essentially unchanged. It wasn’t popularised in the
                  1960s with the release of Letraset sheets containing Lorem Ipsum passages, andei more recently
                  with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum to make
                  a type specimen book.
                </p>
              </div>
              <div className="policy">
                <h5 className="intro-heading">4. What to Include in Terms and Conditions for Online Stores</h5>
                <p className="policy-details">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type specimen book. It has survived not
                  only five centuries but also the on leap into electronic typesetting, remaining essentially
                  unchanged. It wasn’t popularised in the 1960s with the release of Letraset sheets containing
                  Lorem Ipsum passages, andei more recently with desktop publishing software like Aldus PageMaker
                  including versions of Lorem Ipsum to make a type specimen book.
                  <span className="policy-inner-text">
                    five centuries, not to mention the transition to electronic typesetting, which remained
                    largely unaltered. It didn't become widely known until the 1960s, when Letraset sheets with
                    sections from Lorem Ipsum were released. More recently, desktop publishing programs like
                    Aldus PageMaker have included renditions of Lorem Ipsum to create type specimen books. It
                    didn't become widely known until the 1960s, when Letraset sheets with sections from Lorem
                    Ipsum were released. More recently, desktop publishing programs like Aldus PageMaker have
                    included renditions of Lorem Ipsum to create type specimen books.
                  </span>
                </p>
              </div>
              <div className="policy">
                <h5 className="intro-heading">05.Pricing and Payment Terms</h5>
                <p className="policy-details">Lorem Ipsum is essentially the typeset and printing industry's dummy text.
                  Since an unidentified printer jumbled a galley of type to create a type specimen book in the
                  1500s, Lorem Ipsum has been the industry standard sham text. It has remained virtually constant
                  for five centuries, and it has even withstood the transition to electronic typesetting. It
                  didn't become widely known until the 1960s, when Letraset sheets with sections from Lorem Ipsum
                  were released. More recently, desktop publishing programs like Aldus PageMaker have included
                  renditions of Lorem Ipsum to create type specimen books.
                  <span className="policy-inner-text">
                    five centuries but also the on leap into electronic typesetting, remaining essentially
                    unchanged. It wasn’t popularised in the 1960s with the release of Letraset sheets containing
                    Lorem Ipsum passages, andei more recently with desktop publishing software like Aldus
                    PageMaker including versions of Lorem Ipsum to make a type specimen book. It wasn’t
                    popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                    passages, andei more recently with desktop publishing software like Aldus PageMaker
                    including versions of Lorem Ipsum to make a type specimen book.
                  </span>
                  <span className="policy-inner-text">
                    It has remained virtually constant for five centuries, and it has even withstood the
                    transition to electronic typesetting. It didn't become widely known until the 1960s, when
                    Letraset sheets with sections from Lorem Ipsum were released. More recently, desktop
                    publishing programs like Aldus PageMaker have included renditions of Lorem Ipsum to create
                    type specimen books.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </section>
        {/*------------- terms-section-end -------------*/}


      </div>


    </>
  )

}
export default Term;
