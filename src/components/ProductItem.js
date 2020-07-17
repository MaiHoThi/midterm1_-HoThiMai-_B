import React, { Component } from 'react';
import './style.css';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, Button, Col } from 'reactstrap';

class ProductItem extends Component {
    render() {
        let { onClick } = this.props;
        return (
            <Col sm="3">
                <Card className="card">
                    <CardImg top src={'image/' + this.props.item.img} alt="image" className="img" />
                    <CardBody>
                        <CardTitle><h5>{this.props.item.name}</h5></CardTitle>
                        <CardTitle><h5>{this.props.item.code}</h5></CardTitle>
                        <CardSubtitle><span><span class="oldprice" color="red">{this.props.item.oldPrice}</span><span class="price" >{this.props.item.price} </span></span></CardSubtitle>
                        <Button color="warning" onClick={onClick}>Đặt mua</Button>
                    </CardBody>
                </Card>
            </Col>

        );
    }
}
export default ProductItem;