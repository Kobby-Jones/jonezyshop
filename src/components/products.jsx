import axios from 'axios';
import { useEffect, useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function Products({skip, title}) {
    const [products, setProducts] = useState([])
    useEffect(() => {
        axios
            .get(`https://dummyjson.com/products?limit=6&skip=${skip}`)
        .then((response) => {
            setProducts(response.data.products); 
        })
        .catch((error) => {
                console.error(error);
            });
    }, [skip]);
    useEffect(() => {
        console.log(products);
    }, [products]);
    return (
      <Container>
        <Row className="bg-light pb-3 mb-4 text-center">
          <h1 className="bg-info fs-4 py-2">{title}</h1>
          {products.map((product, index) => (
            <Col lg="2" key={index}>
              <a href="joezy" className='text-decoration-none'>
                <Card
                  className="text-center"
                  style={{
                    height: "250px",
                  }}
                >
                  <Card.Img
                    style={{ height: "150px" }}
                    src={product.thumbnail}
                  />
                  <Card.Title className="fs-6 text-start ms-3">
                    {product.title.substring(0, 16) + "...."}
                  </Card.Title>
                  <Card.Title className="fs-6 text-start ms-3">
                    GH&#8373; {product.price - 4}
                  </Card.Title>
                  <Card.Title className="fs-6 text-secondary ms-3 text-start text-decoration-line-through">
                    GH&#8373; {product.price}
                  </Card.Title>
                </Card>
              </a>
            </Col>
          ))}
        </Row>
      </Container>
    );
}

export default Products;
