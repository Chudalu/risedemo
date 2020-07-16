import React from 'react';
import {Button} from 'react-bootstrap';

const Header = () => {
    return (
        <div style={{ width:'100%', height:'390px', color:'white'}} className='tc'>

            <h1 className='pa3'>Advertise Your Business Online Free</h1>
            <p style={{color:'rgba(255,255,255,.5)', paddingRight:'70px', paddingLeft:'70px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                 Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

                 <Button style={{background: 'linear-gradient(105.33deg, #F41313 -28.55%, #F90178 125.13%)'}} className='dim ph3 pv2 br2 bw0 ma3' type="submit"><span style={{color:'rgba(255,255,255,.5)'}}>REGISTER</span></Button>
                 <a style={{color: '#F90178'}} className="f6 link dim ba bw2 ph4 pv2 mb2 dib dark-pink ma3 br2" href="#0"><span style={{color:'rgba(255,255,255,.5)'}}>lOG IN</span></a>
                 

        </div>
    )
}

export default Header;