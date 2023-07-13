import React from 'react'
import Product from './product';
const ProductStock = () => {
    let products = [
        {
       name: "Grapes",
       image: "grapes.jpg",
       unit: "kg",
       mrp: 120,
       discount: 10,
       inStock: false,
       qty: 0,
        },
        {
       name: "Mango",
       image: "mango.jpg",
       unit: "doz",
       mrp: 500,
       discount: 8,
       inStock: true,
       qty: 0,
        },
        {
       name: "Banana",
       image: "banana.jpg",
       unit: "doz",
       mrp: 60,
       discount: 0,
       inStock: true,
       qty: 0,
        },
        {
       name: "Apple",
       image: "apple.jpg",
       unit: "kg",
       mrp: 180,
       discount: 7,
       inStock: true,
       qty: 0,
        },
        {
       name: "Anjeer",
       image: "anjeer.jpg",
       unit: "kg",
       mrp: 100,
       discount: 0,
       inStock: true,
       qty: 0,
        },
        {
       name: "Strawberry",
       image: "strawberry.jpg",
       unit: "kg",
       mrp: 200,
       discount: 20,
       inStock: true,
       qty: 0,
        },
        {
       name: "Papaya",
       image: "papaya.jpg",
       unit: "kg",
       mrp: 50,
       discount: 15,
       inStock: true,
       qty: 0,
        },
        {
       name: "Cherry",
       image: "cherry.jpg",
       unit: "kg",
       mrp: 300,
       discount: 5,
       inStock: true,
       qty: 0,
        },
        {
       name: "Chikoo",
       image: "chikoo.jpg",
       unit: "kg",
       mrp: 60,
       discount: 5,
       inStock: false,
       qty: 0,
        },
        {
       name: "Kiwi",
       image: "kiwi.jpg",
       unit: "piece",
       mrp: 20,
       discount: 0,
       inStock: false,
       qty: 0,
        },
        {
       name: "Orange",
       image: "orange.jpg",
       unit: "kg",
       mrp: 200,
       discount: 10,
       inStock: true,
       qty: 0,
        },
        {
       name: "pear",
       image: "pear.jpg",
       unit: "kg",
       mrp: 200,
       discount: 7,
       inStock: true,
       qty: 0,
        },
        {
       name: "Pineapple",
       image: "pineapple.jpg",
       unit: "piece",
       mrp: 100,
       discount: 50,
       inStock: true,
       qty: 0,
        },
        {
       name: "Pomegranete",
       image: "pomegranete.jpg",
       unit: "kg",
       mrp: 200,
       discount: 5,
       inStock: true,
       qty: 0,
        },
        {
       name: "Sitaphal",
       image: "sitaphal.jpg",
       unit: "kg",
       mrp: 100,
       discount: 10,
       inStock: true,
       qty: 0,
        },
        {
       name: "Watermelon",
       image: "watermelon.jpg",
       unit: "peice",
       mrp: 80,
       discount: 50,
       inStock: true,
       qty: 0,
        },
        {
       name: "Sweetlime",
       image: "sweetlime.jpg",
       unit: "kg",
       mrp: 200,
       discount: 5,
       inStock: true,
       qty: 0,
        },
        {
       name: "Peach",
       image: "peach.jpg",
       unit: "kg",
       mrp: 200,
       discount: 10,
       inStock: false,
       qty: 0,
        },
        {
       name: "Dragon",
       image: "dragon.jpg",
       unit: "piece",
       mrp: 60,
       discount: 0,
       inStock: true,
       qty: 0,
        },
        ];
       return (
       <>
       <div className="App">
       <div className="container myborder ">
       <div className="row myborder">
       {products.map((product, index) => (
       <Product
       product={product}
       key={index}
       />
        ))}
       </div>
       </div>
       </div>
       </>
    );       
}

export default ProductStock