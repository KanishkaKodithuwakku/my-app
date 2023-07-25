import React, { useEffect, useState} from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import useFetch from "./utils/useFetch";

const Vans = () => {
 
    const [categories, setCategories] = useState(null);
    // const [selectedCategory, setSelectedCategory] = useState(null);
    

   const [loading, error, result] = useFetch("/categories");
   setCategories(result);

    




  return (
    <>
      <Row>
        <Col>
          <h4 style={{ marginTop: 10, marginBottom: 10 }}>
            Explorer Our Van Options
          </h4>
        </Col>
      </Row>

      {/* categories */}

      {JSON.stringify(categories)}

      <Row>
        <Col style={{ marginBottom: 10 }}>
          <ListGroup horizontal>
            {/* {categories.map((cat) => (
              <ListGroup.Item>{cat.category_name}</ListGroup.Item>
            ))} */}
          </ListGroup>
        </Col>
      </Row>

      {/* vans */}
      <Row>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Vans;
