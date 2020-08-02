import React, { useState } from 'react';

const Categories = React.memo( function Categories({ items, onClickItem }) {
    const [activeItem, setActiveItem] = useState(null);

    const onSelectItem = (index) => {
        setActiveItem(index);
        onClickItem(index);
    };

    console.log('re-rendered');

    return (
        <div className="categories">
            <ul>           
                <li className={activeItem === null ? 'active' : ''} onClick={ () => onSelectItem(null)}>All</li>     
                {items &&
                    items.map( (name, index)=>{
                        return <li 
                        className={activeItem === index ? 'active' : ''} 
                        onClick={() => {
                            onSelectItem(index)}
                            }
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
)

export default Categories;
