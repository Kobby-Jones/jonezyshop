import { Col, Container, Row, Card } from 'react-bootstrap';
import Product1 from '../../src/images/flash-sales-3.png'
import Product2 from '../../src/images/flash-sales.png'
import Product3 from '../../src/images/weekend-sales.png'
import { GiShoppingBag, GiSmartphone, GiClothes } from "react-icons/gi";
import { FcHome, FcElectronics, FcAutomotive } from "react-icons/fc";
import { MdComputer } from "react-icons/md";
import { MdSportsBaseball } from "react-icons/md";
import { GrGamepad } from "react-icons/gr";
function CarouselComponent() {

    
    return (
      <Container className="p-4">
        <Row>
          <Col lg="3">
            <Card className="pt-5" style={
              {
                height:'400px'
              }
            }>
              <ul className="list-unstyled">
                <li className="ms-3 my-2">
                  <a
                    className="text-decoration-none text-dark"
                    href="jonezy.com"
                  >
                    <GiShoppingBag className="me-3" />
                    Supermarket
                  </a>
                </li>
                <li className="ms-3 my-2">
                  <a
                    className="text-decoration-none text-dark"
                    href="jonezy.com"
                  >
                    <GiSmartphone className="me-3" />
                    Phones and Tablets
                  </a>
                </li>
                <li className="ms-3 my-2">
                  <a
                    className="text-decoration-none text-dark"
                    href="jonezy.com"
                  >
                    <FcHome className="me-3" />
                    Home & Office
                  </a>
                </li>
                <li className="ms-3 my-2">
                  <a
                    className="text-decoration-none text-dark"
                    href="jonezy.com"
                  >
                    <FcElectronics className="me-3" />
                    Electronics
                  </a>
                </li>
                <li className="ms-3 my-2">
                  <a
                    className="text-decoration-none text-dark"
                    href="jonezy.com"
                  >
                    <MdComputer className="me-3" />
                    Computing
                  </a>
                </li>
                <li className="ms-3 my-2">
                  <a
                    className="text-decoration-none text-dark"
                    href="jonezy.com"
                  >
                    <GiClothes className="me-3" />
                    Fashion
                  </a>
                </li>
                <li className="ms-3 my-2">
                  <a
                    className="text-decoration-none text-dark"
                    href="jonezy.com"
                  >
                    <MdSportsBaseball className="me-3" />
                    Sporting Goods
                  </a>
                </li>
                <li className="ms-3 my-2">
                  <a
                    className="text-decoration-none text-dark"
                    href="jonezy.com"
                  >
                    <FcAutomotive className="me-3" />
                    Automobile
                  </a>
                </li>
                <li className="ms-3 my-2">
                  <a
                    className="text-decoration-none text-dark"
                    href="jonezy.com"
                  >
                    <GrGamepad className="me-3" />
                    Gaming
                  </a>
                </li>
              </ul>
            </Card>
          </Col>
          <Col lg="8">
            <div
              id="carousel-main"
              className="carousel slide"
              data-bs-ride="carousel"
              // style={{
              //   height: "400px",
              // }}
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src={Product1}
                    className="d-block w-100"
                    alt="..."
                    style={{
                      height: "400px",
                    }}
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={Product2}
                    className="d-block w-100"
                    alt="..."
                    style={{
                      height: "400px",
                    }}
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={Product3}
                    className="d-block w-100"
                    alt="..."
                    style={{
                      height: "400px",
                    }}
                  />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carousel-main"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carousel-main"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    );
}

export default CarouselComponent;
 