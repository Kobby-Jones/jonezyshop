import React from 'react';
import gaming from "../../src/images/gaming.jpg"
import electronics from "../../src/images/electronics.jpg"
import phones from "../../src/images/phones.jpg"
import fashion from "../../src/images/fashion.jpg"
import laptop from "../../src/images/laptop.jpg"
import automobile from "../../src/images/automobile.jpg"
import { Card, Col, Container, Row } from 'react-bootstrap';

function CategoryCarousel() {
    return (
      <Container className="mb-5">
        <Row>
          <Col lg="12">
            <Card className="py-3">
              <Container>
                <Row>
                  <Col lg="2">
                    <a href="jonezy" className='text-decoration-none'>
                      <Card className="text-center p-2">
                        <Card.Img src={gaming} />
                        <Card.Title>Gaming</Card.Title>
                      </Card>
                    </a>
                  </Col>
                  <Col lg="2">
                    <a href="jonezy" className='text-decoration-none'>
                      <Card className="text-center p-2">
                        <Card.Img src={electronics} />
                        <Card.Title>Electronics</Card.Title>
                      </Card>
                    </a>
                  </Col>
                  <Col lg="2">
                    <a href="jonezy" className='text-decoration-none'>
                      <Card className="text-center p-2">
                        <Card.Img src={phones} />
                        <Card.Title>Phones</Card.Title>
                      </Card>
                    </a>
                  </Col>
                  <Col lg="2">
                    <a href="jonezy" className='text-decoration-none'>
                      <Card className="text-center p-2">
                        <Card.Img src={fashion} />
                        <Card.Title>Fashion</Card.Title>
                      </Card>
                    </a>
                  </Col>
                  <Col lg="2">
                    <a href="jonezy" className='text-decoration-none'>
                      <Card className="text-center p-2">
                        <Card.Img src={laptop} />
                        <Card.Title>Computing</Card.Title>
                      </Card>
                    </a>
                  </Col>
                  <Col lg="2">
                    <a href="jonezy" className='text-decoration-none'>
                      <Card className="text-center p-2">
                        <Card.Img src={automobile} />
                        <Card.Title>Automobile</Card.Title>
                      </Card>
                    </a>
                  </Col>
                </Row>
              </Container>
            </Card>
          </Col>
        </Row>
      </Container>
    );
}

export default CategoryCarousel;