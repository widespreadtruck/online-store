import React from 'react';
import emptyCartImg from '../../assets/img/empty-cart.png';
import { Button } from '../../components';
import { Link } from 'react-router-dom';

const EmptyCart = () => {
    return (
        <>
            <img className="cart__image" src={emptyCartImg} alt="image of an empty cart"/>
            <p className="cart__empty">Looks like your cart is empty😅 Go to the Home page to find the best pizzas🍕</p>
            <Link to="/online-store">
            <div className="test">
                <Button className="button button--outline button--add go-home-btn">
                    <span>Back</span>
                </Button>
            </div>
            </Link>
        </>
    )
}

export default EmptyCart;
