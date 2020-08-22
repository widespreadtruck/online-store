import React from 'react';
import PropTypes from 'prop-types';

const Categories = React.memo(function Categories({ items, onClickCategory, activeCategory }) {

    return (
        <div className="categories">
            <ul>           
                <li className={activeCategory === null ? 'active' : ''} onClick={ () => onClickCategory(null)}>All</li>     
                {items &&
                    items.map( (name, index)=>{
                        return <li 
                        className={activeCategory === index ? 'active' : ''} 
                        onClick={() => onClickCategory(index)}
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
    // activeCategory: PropTypes.oneOf([PropTypes.number, null]),
    items: PropTypes.arrayOf(PropTypes.string).isRequired,
    onSelectItem: PropTypes.func
};

//adding Default Props
Categories.defaultProps = {
    items: [],
    activeCategory: null
}

export default Categories;
