import React from 'react';
import {Button} from 'react-bootstrap';
import locator from './locator.png';
import phone from './telephone.png';
import blank from './blank.jpg';


const Pick = ({business, product}) => {
    return(
            <div>
                <div style={{height:'565px', width:'290px', fontSize:'0.9rem'}} className= 'tc dib br3 pa3 ma2 grow shadow-2'>
                    <div>
                         <img alt='robots' src={blank} width='260px' height='280px'/>
                         <div style={{ paddingBottom:'20px'}}>
                            <Button style={{background: 'linear-gradient(105.33deg, #F41313 -28.55%, #F90178 125.13%)', width:'100%'}} 
                            className='dim ph4 br2 bw0' type="submit">{`${product}`}</Button>
                         </div>
                    </div>
                    <h5> {business} </h5>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    </p>
                    <p><span style={{textDecoration:'line-through', color:'brown'}}  className='ma2'>$450 </span><span  className='ma2'> $350</span></p> 

                    <a  className='ma2' href="#"> <img alt='phone' src={locator} width='20px' height='20px' /> Lekki</a>
                    <a  className='ma2' href="#"> <img alt='phone' src={phone} width='20px' height='23px' /> +2347014958823</a>
                
            </div>
        </div>
    )
}


export default Pick;