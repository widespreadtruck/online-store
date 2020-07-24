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
                                {...obj}
                                key={obj.id} 
                                // name={obj.name} 
                                // url={obj.imageUrl} 
                                // price={obj.price} 
                                // sizes={[
                                //     26,
                                //     30,
                                //     40
                                // ]}

                            />
                    )
                }

                </div>
            </div>
        </div>
    )
}

export default Home;
