import React from 'react'

import {
    PizzaBlock,
    Categories,
    SortPopUp
} from '../components/index.js';

const Home = ( { items } ) => {
    return (
        <div>
            <div className="container">
                <div className="content__top">

                    <Categories items={[
                        "Meat",
                        "Vegan",
                        "Grill",
                        "Spicy",
                        "Pies"]}
                    />

                    <SortPopUp items={[
                        "popularity",
                        "price",
                        "alphabet"]}
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
