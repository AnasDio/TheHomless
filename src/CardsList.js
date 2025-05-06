import Button from "react-bootstrap/Button";
import Cards from "../src/compo/Cards";
import "../src/style/Cards.css";
const CardsList = () => {
  return (
    <div className="section">
      <Cards />
      <Cards />
      <Cards />
      <Cards />
      <Cards />
      <Cards />
      <Cards />
      <Cards />
      <div className="button-container">
        <Button>View More</Button>
      </div>
    </div>
  );
};
export default CardsList;
