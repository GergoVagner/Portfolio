import React from "react";
import "./Cards.css";
import {Button} from "react-bootstrap";
import { useShoppingCart } from "../../Context/ShoppingCartContext";
import { formatCurrency } from "../../Helper/FormatCurrency";


export default function Card({title,imageUrl,price,rev,author,id})
{
    const { increaseCartQuantity, getItemQuantity, decreaseCartQuantity } = useShoppingCart();
    const quantity = getItemQuantity(id);
    return (
        <div className="card-container">
            <div className="image-container">
                <img src={imageUrl} alt=""/>
            </div>
            <div className="card-title">
                <h4>{title}</h4>
            </div>
            <div className="card-author">
                <p>{author}</p>
            </div>
            <div className="card-price">
                <span>{formatCurrency(price)}</span>
            </div>
            <div className="card-rev">
                <p>{rev}</p>
            </div>
            <div className="add-to-cart-btn">
                {quantity === 0 ? (
                    <Button className="add-to-cart-btn-bg" onClick={() => increaseCartQuantity(id)}>
                    Add to Cart
                </Button>
                ) :  
                <div className="d-flex align-items-center flex-column">
                    <div className="d-flex align-items-center justify-content-center">
                <Button className="add-to-cart-btn-bg" onClick={() => decreaseCartQuantity(id)}> - </Button>
                <div className="in-cart-quantity">
                    <span>{quantity}</span> in cart
                </div>
                <Button className="add-to-cart-btn-bg" onClick={() => increaseCartQuantity(id)}> + </Button>
                </div>
                </div>
                }
                
            </div>
            
        </div>
    )
}