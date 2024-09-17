import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Error from "./pages/Error";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Blog from "./pages/Blog";
import Tours from "./pages/Tours";
import Admin from "./pages/Admin";
import BlogForm from "./components/BlogForm/Form";
import EditUser from "./components/Admin/EditUser";
import Detail from "./pages/Detail";
import Sucess from "./pages/Sucess";
import Cancel from "./pages/Cancel";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
const stripePromise = loadStripe(
  "pk_test_51PyvL1CNzZU7Audgmw6yOxQWRDXnIoxspQvJbbv3YAREr38E1NcF33JgMolW4dHlRvMeFqKxNgTefqLVx1OniOrk008J8XMbiM"
);

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/tours" element={<Tours />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="/admin/blogForm" element={<BlogForm />} />
          <Route path="*" element={<Error />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/users/:id/edit" element={<EditUser />} />
          <Route path="/details/success" element={<Sucess />} />
          <Route path="/details/cancel" element={<Cancel />} />
          <Route
            path="/detail/:id"
            element={
              <Elements stripe={stripePromise}>
                <Detail />
              </Elements>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
