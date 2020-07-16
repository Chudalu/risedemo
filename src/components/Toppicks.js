import React from 'react';
import Pick from './cards/Pick.js';

const Toppicks = ({picks}) => {
    
    const cardComponent = picks.map((user, i) => {
        return (
            <Pick key={i} 
            business={picks[i].name} 
            product={picks[i].product}  
            />)
    })
    return(
        <div style={{display:'flex'}}>
            {cardComponent}
		</div>
    )
}

export default Toppicks;