import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { setCategory, setSortBy, setMiniCategory } from '../redux/actions/filters';
import { fetchPizzas } from '../redux/actions/pizzas';
import { addPizzaToCart } from '../redux/actions/cart';

import {
    PizzaBlock,
    Categories,
    SortPopUp,
    PizzaLoadingBlock,
    CategoriesPopUp
} from '../components/index.js';

const categoryNames = ["Meat", "Vegetarian", "Grill", "Spicy" ];
const sortItems = [
    { name: "popularity", type: "rating", order: 'desc' },
    { name: "price", type: "price", order: 'desc' },
    { name: "alphabet", type: "title", order: 'asc' }
];

const Home = () => {
    const dispatch = useDispatch();

    const activeMiniCategory = useSelector( (state) => state.filters.category);
    const cartItems = useSelector( ( {cart} )=>cart.items)
    //extracting from state: array of 10 pizzas
    const items = useSelector((state) => state.pizzas.items);
    //extracting from state: boolean value
    const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
    //destructuring the state & extracting from state: category & sortBy values from "filters"
    const { category, sortBy} = useSelector( state => state.filters);

    const handleAddPizzaToCart = obj => {
        dispatch(addPizzaToCart(obj))
    }

    const onSelectCategory = React.useCallback((index) => {
        dispatch(setCategory(index));
    }, []);

    // const onSelectMiniCategory = React.useCallback((index) => {
    //     dispatch(setCategory(index));
    // }, []);

    const onSelectSortType = React.useCallback( (obj) => {
        dispatch(setSortBy(obj))
    }, [])

    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 1060;



    React.useEffect( () => {
        dispatch(fetchPizzas(category, sortBy));
        const handleResizeWindow = () => setWidth(window.innerWidth);
        // subscribe to window resize event "onComponentDidMount"
        window.addEventListener("resize", handleResizeWindow);
        return () => {
            // unsubscribe "onComponentDestroy"
            window.removeEventListener("resize", handleResizeWindow);
        };
    }, [category, sortBy]);
    

    return (
        <div>
            <div className="container">
                <div className="content__top">
                    {
                        (width > breakpoint)
                            ? <Categories
                                items={categoryNames}
                                onClickCategory={onSelectCategory}
                                activeCategory={category}
                            />
                            : <CategoriesPopUp 
                                items={categoryNames}
                                onClickCategory={onSelectCategory}
                                activeCategory={category}
                            />
                    }
                    

                    <SortPopUp
                        items={sortItems}
                        onClickSortType={onSelectSortType}
                        activeSortType={sortBy.name}
                    />

                </div>
                <h2 className="content__title">All pizzas</h2>
                <div className="content__items">
                {
                    isLoaded
                    ? items.map((obj) =>  
                        <PizzaBlock 
                        //using Rest Parameter to pass down the multiple params
                            onClickAddPizza={handleAddPizzaToCart}
                            {...obj}
                            key={obj.id} 
                            categoryUpdated={category}
                            addedCount={cartItems[obj.id] && cartItems[obj.id].items.length}
                        />)
                    : 
                    Array(12)
                        .fill(0)
                        .map((_, index) => <PizzaLoadingBlock key={index} />)
                }
                </div>
            </div>
        </div>
    )
}

export default Home;
