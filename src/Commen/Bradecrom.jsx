import { Link } from "react-router-dom";

function Bradecrom({ name }) {
  return (
    <>
      <section className="blog about-blog">
        <div className="container">
          <div className="blog-bradcrum">
            <span>
              <Link to="/">Home </Link>
            </span>
            <span className="devider"> / </span>
            <span>
              <a href="#"> {name}</a>
            </span>
          </div>
          <div className="blog-heading about-heading">
            <h1 className="heading"> {name}</h1>
          </div>
        </div>
      </section>
    </>
  );
}

export default Bradecrom;