import React from 'react';
import { CartItem, EmptyCart, Button, ClearCart } from '../components';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart, removeCartItem } from '../redux/actions/cart';
import { Link } from 'react-router-dom';

const Cart = () => {
    const dispatch = useDispatch();

    const onRemoveItem = (id) => {
        dispatch(removeCartItem(id))
    }
    const handleClearCart = React.useCallback( ()=>{
        dispatch(clearCart());
    })

    //extract data from state
    const {totalPrice, totalCount, items} = useSelector((state) => state.cart)
    //map through added to cart pizzas
    const addedPizzas = Object.keys(items).map( key => {
        return items[key].items[0]
    });
    const isCartEmpty = Object.values(items).flat();



    return (
        <div className="content">
            <div className="container container--cart">
                <div className="cart">
                    <div className="cart__top">
                        <h2 className="content__title">
                            <span>🛒</span>Cart
                        </h2>
                        {
                            isCartEmpty.length !== 0
                            ? <ClearCart />
                            : ''
                        }
                        
                    </div>
                    <div className="cart__items">
                        {isCartEmpty.length !== 0
                            ? addedPizzas.map( (obj)=>
                                    <CartItem 
                                        id={obj.id}
                                        name={obj.name}
                                        type={obj.type}
                                        size={obj.size}
                                        imageUrl={obj.imageUrl}
                                        totalPrice={items[obj.id].totalPrice}
                                        totalCount={items[obj.id].items.length}
                                        onRemove={onRemoveItem}
                                    />
                                )
                            : 
                            <EmptyCart />
                        }
                    </div>
                    {
                        isCartEmpty.length !== 0 
                        ? 
                        <div className="cart__bottom">
                            <div className="cart__bottom-details">
                                <span> Total items: <b>{totalCount}</b> </span>
                                <span> Total price: <b>${totalPrice}</b> </span>
                            </div>
                            <div className="cart__bottom-buttons">
                                <Link to="/online-store">
                                    <Button className="button button--outline button--add go-back-btn">
                                        <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7 13L1 6.93015L6.86175 1" stroke="#D3D3D3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        <span>Back</span>
                                    </Button>
                                </Link>
                                <Button className="button pay-btn">
                                    <span>Pay</span>
                                </Button>
                            </div>
                        </div>
                        :
                        <></>
                    }
                    
                </div>
            </div>
        </div>
    )
}

export default Cart;
