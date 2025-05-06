import "./style/App.css";
import Body from "./compo/Body";
import Footer from "./compo/Footer";
import Header from "./compo/Header";
import CardsList from "./CardsList";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from "react-bootstrap";

const App = () => {
  return (
    <>
      <Header />
      <Body />
      <CardsList />
      <Footer />
    </>
  )
};

export default App;
