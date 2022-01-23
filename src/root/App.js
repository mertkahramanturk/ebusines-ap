import Navi from "../components/navi/Navi";
import {Container} from "reactstrap"
import {Route, Routes} from "react-router-dom"
import Dashboard from "./Dashboard";
import CategoryList from "../components/category/CategoryList";
import CartGroup from "../components/cartGroup/CartGroup";
import Footer from "../components/footer/Footer";
function App() {
  return (
  <Container>
    <Navi />
    <br></br>
    <br></br>
    <CategoryList />
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <CartGroup />
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <Footer />
  </Container>
  );
}

export default App;
