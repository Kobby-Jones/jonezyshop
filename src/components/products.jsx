import axios from 'axios';
import { useEffect, useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
function Products() {

    const [products, setProducts] = useState([])

    useEffect(() => {
        axios
            .get("https://dummyjson.com/products?limit=6&skip=4")
            .then((response) => {
                setProducts(response.data.products);
                
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);
    useEffect(() => {
        console.log(products);
    }, [products]);
    
   
    return (
        <Container>
            <Row>
                <Col lg="12">
                    <Card className="text-center" style={
                        {
                            width: '100%',
                            height: '50px',
                            backgroundColor:'#22c1c3'
                        }
                    }>
                        <Card.Title className="mt-3">Don't Miss This Awesome Deals</Card.Title>
                    </Card>
                </Col>
            </Row>
            <Row>
                {products.map((product, index) => (
                    <Col lg="2" key={index}>
                        <Card style={
                            {
                                height:'150px'
                            }
                        }>
                            <Card.Img src={product.thumbnail} />
                            <Card.Title>{ product.title}</Card.Title>
                        </Card>
                   </Col>
               ))}
            </Row>
      </Container>
    );
}

export default Products;
