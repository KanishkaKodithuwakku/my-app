import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import useFetch from "./utils/useFetch";
import Badge from "react-bootstrap/Badge";
import './van.css'


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

    
// const {
//   loading: filterLoading,
//   error: filterError,
//   result: filterResult,
//     } = useFetch("/");
    
//     useEffect(() => { 
        

//     },[selectedCategory])

    
    
   

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

      {/* {JSON.stringify(categories)} */}

      <Row>
        <Col style={{ marginBottom: 10 }}>
          {categoryLoading && <div>Loading</div>}
          {categoryError && <div>{categoryError}</div>}
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
                  <Card.Body>
                    <div className="d-flex justify-content-between">
                      <Card.Title>{van.van_name}</Card.Title>
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
