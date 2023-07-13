import React from 'react'

function Product({ product }) {
    
    product.finalPrice = product.mrp - (product.mrp * 
    product.discount) / 100;
    return (
    <div className="col-2 myborder my-3">
    <div className="row">
    {product.discount != 0 && product.discount != 50 && (
    <div className="col-12 text-red">Get 
    {product.discount}% OFF</div>
     )}
    {product.discount == 0 && <div className="col-12 textred">&nbsp;</div>}
    {product.discount == 50 && <div className="col-12 textred">Buy 1 Get 1</div>}
    <div className="col-12 myborder">
    <img src={"/images/" + product.image} alt="" />
    </div>
    <div className="col-12">{product.name}</div>
    <div className="col-12">
     Per {product.unit}: Rs.{" "}
    <span className="textstriked">{product.mrp.toFixed(2)}</span>{" "}
    {product.discount!=0&&<span className="textred">{product.finalPrice.toFixed(2)}</span>}
    </div>
    <div>
    <button className={"btn "+ (product.inStock?"btnlight": "btn-grey")}>{product.inStock?"Add to Cart":"Out of Stock"}</button>
    </div>
    </div>
    </div>
     );
    }
    export default Product