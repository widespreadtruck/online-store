import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { setCategory, setSortBy } from '../redux/actions/filters';
import { fetchPizzas } from '../redux/actions/pizzas';

import {
    PizzaBlock,
    Categories,
    SortPopUp,
    PizzaLoadingBlock
} from '../components/index.js';

const categoryNames = [ "Meat", "Vegan", "Grill", "Spicy", "Pies" ];
const sortItems = [
    { name: "popularity", type: "popularity" },
    { name: "price", type: "price" },
    { name: "alphabet", type: "alphabet" }
];

const Home = () => {
    const dispatch = useDispatch();

    //extracting from state: array of 10 pizzas
    const items = useSelector((state) => state.pizzas.items);
    //extracting from state: boolean value
    const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
    //destructuring the state & extracting from state: category & sortBy values from "filters"
    const { category, sortBy} = useSelector( state => state.filters);

    const onSelectCategory = React.useCallback((index) => {
        dispatch(setCategory(index));
    }, []);

    const onSelectSortType = React.useCallback( (type) => {
        dispatch(setSortBy(type))
    }, [])

    React.useEffect(() => {
            dispatch(fetchPizzas());
    }, [category, sortBy])
    

    return (
        <div>
            <div className="container">
                <div className="content__top">

                    <Categories 
                        onClickCategory={onSelectCategory}
                        items={categoryNames}
                        activeCategory={category}
                    />

                    <SortPopUp
                        items={sortItems}
                        activeSortType={sortBy}
                        onClickSortType={onSelectSortType}
                    />

                </div>
                <h2 className="content__title">All pizzas</h2>
                <div className="content__items">
                {
                    isLoaded
                    ? items.map((obj) =>  
                        <PizzaBlock 
                        //using Rest Parameter to pass down the multiple params
                            {...obj}
                            key={obj.id} 
                            isLoading={true}
                            categoryUpdated={category}
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
