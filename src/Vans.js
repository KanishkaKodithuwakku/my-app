import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import useFetch from "./utils/useFetch";
import Badge from "react-bootstrap/Badge";
import './van.css'
import Spinner from "react-bootstrap/Spinner";


const Vans = () => {

    //states
  const [categories, setCategories] = useState(null);
  const [vans, setVans] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

    //fetch hook
  const {
    loading: categoryLoading,
    error: categoryError,
    result: categoryResult,
    } = useFetch("/categories");
    
    //get categoruies
  useEffect(() => {
    if (categoryResult) {
      setCategories(categoryResult);
    }
  }, [categoryResult]);

    //get vans
  const {
    loading: vansLoading,
    error: vansError,
    result: vansResult,
    } = useFetch("/vans");
    
  useEffect(() => {
    if (vansResult) {
      setVans(vansResult);
    }
  }, [vansResult]);
    
    //get filterd data

    
const {
  loading: filterLoading,
  error: filterError,
  result: filterResult,
} = useFetch("/vans?category=" + selectedCategory);
    
    useEffect(() => { 
        setVans(filterResult);
        

    },[selectedCategory])

    
    
   

  return (
    <>
      {vansLoading && (
        <Spinner
          animation="grow"
          variant="danger"
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />
      )}
      <Row>
        <Col>
          <h4 style={{ marginTop: 10, marginBottom: 10 }}>
            Explorer Our Van Options
          </h4>
        </Col>
      </Row>

      {/* categories */}

      {/* {JSON.stringify(categories)} */}

      <Row>
        <Col lg={12} style={{ marginBottom: 10 }}>
          {categoryLoading && (
            <Spinner
              animation="grow"
              variant="warning"
              style={{
                position: "fixed",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            />
          )}
          {categoryError && <div>{categoryError}</div>}
          <div className="d-flex justify-content-between align-items-center">
            <ListGroup horizontal>
              {categories &&
                categories.map((cat) => (
                  <ListGroup.Item
                    key={cat.id}
                    style={{ backgroundColor: "#FFDBAA" }}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={selectedCategory === cat.id ? "active" : ""}
                  >
                    {cat.category_name}
                  </ListGroup.Item>
                ))}
            </ListGroup>
            <ListGroup horizontal>
              <ListGroup.Item onClick={() => setVans(vansResult)}>
                Clear Filter
              </ListGroup.Item>
            </ListGroup>
          </div>
        </Col>
      </Row>

      {/* vans */}
      <Row>
        {vans &&
          categories &&
          vans.map((van) => {
            const category = categories?.find((c) => c.id === van.category);
            //console.log(category);
            return (
              <Col key={van.id}>
                <Card
                  style={{ width: "18rem", marginBottom: 10 }}
                  className="card-container"
                >
                  <Card.Img variant="top" src={van.image} />
                  {filterLoading && (
                    <Spinner
                      animation="border"
                      variant="warning"
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        margin: "auto",
                        display: "block",
                      }}
                    />
                  )}
                  <Card.Body>
                    <div className="d-flex justify-content-between">
                      <Card.Title>{van.van_name} </Card.Title>
                      <p className="mb-0">{van.price}</p>
                    </div>
                    <Card.Text>{van.description}</Card.Text>

                    <Badge pill style={{ backgroundColor: `#FFE17B` }}>
                      {category.category_name}
                    </Badge>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
      </Row>
    </>
  );
};

export default Vans;
