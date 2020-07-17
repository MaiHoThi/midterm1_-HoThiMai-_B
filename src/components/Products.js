import React, { Component } from 'react';
import ProductItem from './ProductItem';
import { Row, Container } from 'react-bootstrap';
class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: JSON.parse(localStorage.getItem("products"))
        }
    }
    onItemClick(item) {
        return (event) => {
            alert("thank you your order");
        }
    }
    render() {
        const { products } = this.state;
        return (
            <Container>
                <Row className="col-product">

                    {products.map((item, index) =>
                        <ProductItem
                            key={index}
                            item={item}
                            onClick={this.onItemClick(item)}
                        />
                    )
                    }
                </Row>
            </Container>
        )
    }
}
export default Products;