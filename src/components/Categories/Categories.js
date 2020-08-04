import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Categories = React.memo(function Categories({ items, onClickCategory, activeCategory }) {
    // const [activeItem, setActiveItem] = useState(null);


    return (
        <div className="categories">
            <ul>           
                <li className={activeCategory === null ? 'active' : ''} onClick={ () => onClickCategory(null)}>All</li>     
                {items &&
                    items.map( (name, index)=>{
                        return <li 
                        className={activeCategory === index ? 'active' : ''} 
                        onClick={() => {
                            onClickCategory(index)}
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

//making sure Property Types are correct
Categories.propTypes = {
    activeCategory: PropTypes.number.isRequired,
    items: PropTypes.arrayOf(PropTypes.object).isRequired,
    onSelectItem: PropTypes.func
};

//adding Default Props
Categories.defaultProps = {
    items: [],
    activeCategory: null
}

export default Categories;
