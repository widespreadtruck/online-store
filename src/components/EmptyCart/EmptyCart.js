import React from 'react';
import emptyCartImg from '../../assets/img/empty-cart.png';
import { Button } from '../../components';
import { Link } from 'react-router-dom';

const EmptyCart = () => {
    return (
        <>
            <p className="cart__emoji">🕵️‍♀️🕵️‍♂️</p>
            <p className="cart__empty">Our detectives report your cart looks empty... Go to the Home page to find best pizzas!</p>
            <Link to="/online-store">
                <div className="btn-wrapper">
                <Button className="button button--outline button--add go-home-btn">
                    <span>Home</span>
                </Button>
            </div>
            </Link>
        </>
    )
}

export default EmptyCart;
