import React, {useState} from 'react';
import { useParams } from 'react-router-dom';
import { Card, Col, Container, Row } from 'react-bootstrap';
import axios from 'axios';
function SearchProduct() {
    const [products, setProducts] = useState([])
    const { category } = useParams()
    axios
        .get(`https://dummyjson.com/products/category/${category}`)
        .then((response) => {
            setProducts(response.data.products);
            
        })
        .catch((error) => {
            console.error(error)
        })
    
    return (
        <Container>
            <Row>
                {products.map((product) => (
                    <Col lg='3' key={product.id}>
                        <Card>
                            <Card.Img src={product.thumbnail} />
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default SearchProduct;