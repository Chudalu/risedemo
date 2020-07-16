import React from 'react';

const Scroll = (props) => {
    return (
        <div style={{overflowX: 'auto', height:'200px'}}>
            {props.children}
        </div>
    )
}

export default Scroll;