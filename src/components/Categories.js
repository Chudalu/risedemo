import React from 'react';
import Category from './cards/Category.js';
import './Categories.css';

const Categories = ({categories}) => {
    
    const cardComponent = categories.map((user, i) => {
       if (i<8){
           return (
            <Category  
            product={categories[i].product} 
            />)
       }
       return null;
    })
    return(
        <div className='container'>
            {cardComponent}
		</div>
    )
}

export default Categories;