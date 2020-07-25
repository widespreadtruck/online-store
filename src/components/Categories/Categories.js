import React, { useState } from 'react';

const Categories = ( { items } ) => {
    const [activeItem, setActiveItem] = useState(null);
    console.log(activeItem);

    const onSelectItem = (index) => {
        setActiveItem(index);
    }

    return (
        <div className="categories">
            <ul>           
                <li className={activeItem === null ? 'active' : ''} onClick={ () => onSelectItem(null)}>All</li>     
                {items &&
                    items.map( (name, index)=>{
                        return <li 
                        className={activeItem === index ? 'active' : ''} 
                        onClick={() => onSelectItem(index)} 
                        key={`${name}_${index}`}
                        >
                            {name}
                        </li>
                    })
                }                
            </ul>
        </div>
    );
}

export default Categories;