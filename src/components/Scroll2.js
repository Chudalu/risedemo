import React from 'react';

const Scroll2 = (props) => {
    return (
        <div style={{overflowX: 'scroll', height:'610px'}}>
            {props.children}
        </div>
    )
}

export default Scroll2;