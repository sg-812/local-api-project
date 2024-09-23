import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function FooterPart() {
  return (
    <footer>
      <Card className="text-center">
        <Card.Header>Featured</Card.Header>
        <Card.Body>
          <Card.Title>Footer Part</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional
            content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </footer>
  );
}

export default FooterPart;
