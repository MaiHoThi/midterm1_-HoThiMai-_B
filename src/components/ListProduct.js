import React, { Component } from 'react';

class ListProduct extends Component {
    constructor() {
        super();
        this.state = {
            products: JSON.parse(localStorage.getItem("products"))
        }
    }
    render() {
        const {products}=this.state;
        return (
            <div class="list">
                 <h3> List Product</h3>
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>name</th>
                            <th>image</th>
                            <th>old Price</th>
                            <th>price</th>
                            <th>code</th>

                        </tr>
                    </thead>
                    {products.map((item) => (
                        <tbody>
                            <tr>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td><img src={'image/' + item.img} width="100px" alt="image"></img></td>
                                <td>{item.oldPrice}</td>
                                <td>{item.price}</td>
                                <td>{item.code}</td>
                            </tr>
                        </tbody>
                    ))}
                </table>

            </div>
        )
    }
}
export default ListProduct;