import React from "react";
import './Item.css';
import { Link } from "react-router-dom";

function Item (props) {
    return (
        <div className="item-wrapper">
            <Link to={`/service/${props.id}`} style={{textDecoration: 'none'}}>
            <img className="item-img" src={props.img} alt="Item" />
            <div className="item-text">
                <h2 className="item-title">{props.title}</h2>
                <p className="item-star">{props.star}</p>
                <p className="item-price">{props.price}</p>
            </div>
            </Link>
        </div>
    )
};

export default Item;