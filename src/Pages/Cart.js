import React from 'react';
import {CartItem} from '../components';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from '../redux/actions/cart';
import { Link } from 'react-router-dom';
import { deletePizzaItem } from '../redux/actions/cart';

const Cart = () => {
    const dispatch = useDispatch();

    const onRemoveItem = (id) => {
        dispatch(deletePizzaItem(id))
    }
    const handleClearCart = React.useCallback( ()=>{
        if (isCartEmpty.length !== 0) {
            if (window.confirm("Delete all items from the cart?")) {
                dispatch(clearCart());
            };
        } else {
            window.alert('Looks like you didn\'t place any pizzas in the cart yet');
        }
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
                        <div 
                            onClick={handleClearCart} 
                            className="cart__clear">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.5 5H4.16667H17.5" stroke="#B6B6B6" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M6.66663 5.00001V3.33334C6.66663 2.89131 6.84222 2.46739 7.15478 2.15483C7.46734 1.84227 7.89127 1.66667 8.33329 1.66667H11.6666C12.1087 1.66667 12.5326 1.84227 12.8451 2.15483C13.1577 2.46739 13.3333 2.89131 13.3333 3.33334V5.00001M15.8333 5.00001V16.6667C15.8333 17.1087 15.6577 17.5326 15.3451 17.8452C15.0326 18.1577 14.6087 18.3333 14.1666 18.3333H5.83329C5.39127 18.3333 4.96734 18.1577 4.65478 17.8452C4.34222 17.5326 4.16663 17.1087 4.16663 16.6667V5.00001H15.8333Z" stroke="#B6B6B6" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M8.33337 9.16667V14.1667" stroke="#B6B6B6" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M11.6666 9.16667V14.1667" stroke="#B6B6B6" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span>Clear cart</span>
                        </div>
                    </div>
                    <div className="content__items">
                        {isCartEmpty.length !== 0
                            ? addedPizzas.map( (obj)=>
                                    <CartItem 
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
                            <div className="cart__empty">Looks like your cart is empty😅 Go to the Home page to find the best pizzas🍕 </div>
                        }
                    </div>
                    <div className="cart__bottom">
                        <div className="cart__bottom-details">
                            <span> Total items: <b>{totalCount}</b> </span>
                            <span> Total price: <b>${totalPrice}</b> </span>
                        </div>
                        <div className="cart__bottom-buttons">
                            <Link to="/online-store">
                                <a href="/" className="button button--outline button--add go-back-btn">
                                    <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7 13L1 6.93015L6.86175 1" stroke="#D3D3D3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <span>Back</span>
                                </a>
                            </Link>
                            <div className="button pay-btn">
                                <span>Pay</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart;
