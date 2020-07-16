import React from 'react';
import Location from './cards/Location.js';

const Categories = ({location}) => {
    
    const cardComponent = location.map((user, i) => {
        if (i<7){
            return (
                <Location  
                location={location[i].location} 
                />)
        }
        return null;
    })
    return(
        <div style={{display:'flex'}}>
            {cardComponent}
		</div>
    )
}

export default Categories;