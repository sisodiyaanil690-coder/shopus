import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import ProductSidebar from "./Pages/ProductSidebar";
import About from "./Pages/About";
import Blog from "./Pages/Blog";
import UserProfile from "./Pages/User_profile";
import Compaire from "./Pages/Compaire";
import Order from "./Pages/Order";
import Contact from "./Pages/Contact";
import ProductInfo from "./Pages/Product_info";
import Privecy from "./Pages/Privecy";
import ProductWiseCate from "./Pages/ProductWiseCate";
import Term from "./Pages/Term";

function App() {
  return <>



    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Product-Sidebar" element={<ProductSidebar />} />
        <Route path="/About" element={<About />} />
        <Route path="/Blogs" element={<Blog />} />
        <Route path="/User-Profile" element={<UserProfile />} />
        <Route path="/compaire" element={<Compaire />} />
        <Route path="/Order" element={<Order />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Product-info/:id" element={<ProductInfo />} />
        <Route path="/productsidebar/:CategoryWise" element={<ProductWiseCate />} />
        <Route path="/Privecy" element={<Privecy />} />
        <Route path="/Term" element={<Term />} />
      </Routes>
    </BrowserRouter>


  </>;
}
export default App;
