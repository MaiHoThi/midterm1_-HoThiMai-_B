import React, {Component} from 'react';
import {Container} from 'react-bootstrap';

class AddProduct extends Component{
        constructor(props){
            super(props);
            let product = JSON.parse(localStorage.getItem("products"));
            if(!product){
            product = [];
            }
            this.onAddProduct=this.onAddProduct.bind(this);
    }

onAddProduct(event){
    event.preventDefault();
    let id =0;
    let name_categories =event.target["name_categories"].value;
    let name = event.target["name"].value;
    let code = event.target["code"].value;
    let price = event.target["price"].value;
    let oldPrice = event.target["oldPrice"].value;
    let img = event.target["img"].files.item(0).name;
    var products = JSON.parse(localStorage.getItem("products"));
    if(!products){
        products=[];
        id=0;
    }else{
        id=products[products.length-1].id+1;
    }
    let product = {
        id: id,
        name_categories:name_categories,
        name: name,
        code:code,
        oldPrice: oldPrice,
        price: price,
        img: img
    }
    products.push(product);
    localStorage.setItem("products", JSON.stringify(products));
    console.log(products);
}
    render(){
        return(
            <Container>
            <form onSubmit={ this.onAddProduct} className="AddProduct">
                <h2>Add Product</h2>
                <label name="fname">Categories:</label>
                <select id="name_categories" >
                    <option value="1">Thời trang nam</option>
                    <option value="2">Thời trang nữ</option>
                   
                </select>
                 <input type="text" name="name" id="name" placeholder="Enter name"  />
                <input type="text" name="price" id="price"  placeholder="Enter price" />
                <input type="text" name="oldPrice" id="oldPrice"   placeholder="Enter oldPrice"/>
                <input type="text" name="code"  id="code" placeholder="Enter code"/>
                <input type="file" name="img"   placeholder="upload image" />
                <p>
                <button >ADD</button>
               </p> 
            </form>
            </Container>
        )
    }
}
export default AddProduct;