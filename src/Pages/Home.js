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

    console.log(category, sortBy);

    const onSelectCategory = React.useCallback((index) => {
        dispatch(setCategory(index));
    }, []);

    const onSelectSortBy = React.useCallback( (sortBy) => {
        dispatch(setSortBy(sortBy))
    }, [])

    React.useEffect(() => {
            dispatch(fetchPizzas());
    }, [])
    

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
                        onClickItem={onSelectSortBy}
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
