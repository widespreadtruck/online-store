import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { setCategory } from '../redux/actions/filters';

import {
    PizzaBlock,
    Categories,
    SortPopUp
} from '../components/index.js';

const categoryNames = [ "Meat", "Vegan", "Grill", "Spicy", "Pies" ];
const sortItems = [
    { name: "popularity", type: "popularity" },
    { name: "price", type: "price" },
    { name: "alphabet", type: "alphabet" }
];

const Home = () => {
    const dispatch = useDispatch();
      //extracting items from state
    const items = useSelector((state) => state.pizzas.items);

    const onSelectCategory = React.useCallback((index) => {
        dispatch(setCategory(index));
    }, []);


    return (
        <div>
            <div className="container">
                <div className="content__top">

                    <Categories 
                        onClickItem={onSelectCategory}
                        items={categoryNames}
                    />

                    <SortPopUp items={sortItems}
                    />

                </div>
                <h2 className="content__title">All pizzas</h2>
                <div className="content__items">
                {
                    items &&
                        items.map((obj) =>  
                            <PizzaBlock 
                            //using Rest Parameter to pass down the multiple params
                                {...obj}
                                key={obj.id} 
                            />
                    )
                }

                </div>
            </div>
        </div>
    )
}

export default Home;
