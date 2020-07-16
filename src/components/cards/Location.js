import React from 'react';


const Location = ({location}) => {
    return(
        <div>

            <div style={{fontSize:'0.9rem'}} className= 'tc dib br3 pv3 ph5 pa3 ma2 grow shadow-3'>
                <h5> {location} </h5>
                <div style={{width:'100%'}}>
                <a style={{color:'black'}} href="#">32 artisans</a> <br />
                <a style={{color:'black'}} href="#">5 SMEs</a>

                </div>
            </div>
        </div>
    )
}


export default Location;