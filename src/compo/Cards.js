import card1 from "../images/card1.webp";
import Card from "react-bootstrap/Card";
import "../style/Cards.css";
const Cards = () => {
  return (
    <Card className="card">
      <Card.Img variant="top" src={card1} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
  );
};
export default Cards;
