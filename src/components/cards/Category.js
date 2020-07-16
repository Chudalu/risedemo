import React from 'react';
import {Button} from 'react-bootstrap';
import blank from './blank.jpg';


const Category = ({product}) => {
    return(
        <div>

            <div>
                    <div style={{height:'390px', width:'290px', fontSize:'0.7rem'}} className= 'tc dib br3 pa3 ma2 grow shadow-2'>
                        <div>
                            <img alt='products' src={blank} width='100%' height='200px'/>
                            <div style={{ paddingBottom:'20px'}}>
                                <Button style={{background: 'linear-gradient(105.33deg, #F41313 -28.55%, #F90178 125.13%)', width:'100%'}} 
                                className='dim ph4 br2 bw0' type="submit">{`${product}`}</Button>
                            </div>
                        </div>
                            <p>Local Services : <span style={{color:'brown'}}>32</span></p>
                            <p>Internation Services : <span style={{color:'brown'}}>15</span></p>
                            <p>Pay on Delivery : <span style={{color:'brown'}}>10</span></p>
                </div>
            </div>

        </div>
    )
}


export default Category;