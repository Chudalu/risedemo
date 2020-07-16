import React, {Component} from 'react';
import Navigation from './components/Navigation.js';
import Header from './components/Header.js';
import Searchbar from './components/Searchbar.js';
import Categories from './components/Categories.js';
import Toppicks from './components/Toppicks.js';
import Suggestedlocations from './components/Suggestedlocations.js';
import Scroll from './components/Scroll.js';
import Scroll2 from './components/Scroll2.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap';
import facebook from './facebook.jpg';
import twitter from './twitter.jpg';
import linkedin from './linkedin.jpg';
import logo from './components/logo.png';
import './App.css';
import 'tachyons';

class App extends Component {


  render(){
    
    const business = [
      {
        name: "Adeka's Fashion",
        location: "Abuja",
        product: "Bespoke Fashion wears"
      },

      {
        name: "LadyRose Shoes",
        location: "Lagos",
        product: "Shoes"
      },

      {
        name: "Chi Cakes",
        location: "Owerri",
        product: "Baking"
      },

      {
        name: "Malem Concept",
        location: "Enugu",
        product: "Funitures"
      },

      {
        name: "Jake Saloon",
        location: "Kano",
        product: "Make-over"
      },

      {
        name: "Jamilah's Kitchen",
        location: "Abuja",
        product: "Food"
      },

      {
        name: "IK photography",
        location: "Lagos",
        product: "Photography"
      },

      {
        name: "ASIN5",
        location: "Abuja",
        product: "Consultancy"
      },

      {
        name: "Onyeka Paints",
        location: "Calabar",
        product: "Painting"
      }
    ]

    return (
      <div style={{height: '100%'}}>
            <div>
            <div className='head'>
              <Navigation />
              <Header />

              <div style={{width:'80%'}} className='neck shadow-1'>
                  <Searchbar />
              </div>

            </div>
            
            <div className='body ma3'>
              <div style={{paddingTop:'80px'}}>
                <h3>Suggested Locations</h3>
                <p>See out top pick of cities with good artisans</p>
                <div className='tc'>
                  <Scroll>
                    <Suggestedlocations location={business} />
                  </Scroll>
                </div>
                </div>

                <div style={{paddingTop:'80px'}}>
                  <h3>Top Picks</h3>
                  <p>See out top pick of cities with good artisans</p>
                  <div className='tc ma2'>
                    <Scroll2>
                      <Toppicks picks={business} />
                    </Scroll2>
                  </div>
                </div>

                <div style={{paddingTop:'80px'}}>
                <h3>Available Categories</h3>
                <p>See out top pick of cities with good artisans</p>
                <div style={{display:'inline-flex', paddingBottom:'100px'}}>
                  <Categories categories={business} />
                  
                </div>
                <div className='tc'>
                  <Button style={{background: 'linear-gradient(105.33deg, #F41313 -28.55%, #F90178 125.13%)'}} className='dim ph4 pv3 br0 bw0' type="submit">Load More Categories</Button>
                </div>
                </div>

            </div>
          </div>
        <div style={{width:'100%', color:'white'}} className='tail'>
            <div style={{display:'flex', height:'500px', width:'100%'}}>
              <div style={{width: '20%', paddingTop:'30px', paddingRight:'20px'}} className='ma2'>
              <img
                    src={logo}
                    width="70"
                    height="30"
                    className="d-inline-block align-top"
                    alt="Rise logo"
                />
                <p style={{paddingTop:'30px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

              </div>
              <div style={{ width: '35%', paddingTop:'25px', fontSize:'0.8rem'}} className='ma3'>
                <h5>Categories</h5>
                <div style={{display:'flex',  paddingTop:'10px'}}>
                    <div style={{width:'50%'}} className='ma3'>
                      <p  className='dim pointer'>{'> Fashion Design'}</p>
                      <p  className='dim pointer'>{'> Furniture'}</p>
                      <p  className='dim pointer'>{'> Baking'}</p>
                      <p  className='dim pointer'>{'> Make Over'}</p>
                      <p  className='dim pointer'>{'> Electricity'}</p>
                      <p  className='dim pointer'>{'> Photography'}</p>
                      <p  className='dim pointer'>{'> Painting'}</p>
                    </div>
                    <div style={{width:'50%'}} className='ma3'>
                      <p  className='dim pointer'>{'> Interior Design'}</p>
                      <p  className='dim pointer'>{'> Hair Dressing'}</p>
                      <p  className='dim pointer'>{'> Electrician'}</p>
                      <p  className='dim pointer'>{'> Plumber'}</p>
                      <p  className='dim pointer'>{'> Builder'}</p>
                      <p  className='dim pointer'>{'> Carpenter'}</p>
                      <p  className='dim pointer'>{'> Bricklayer'}</p>
                    </div>
                </div>
                
              </div>
              <div style={{display:'', width: '30%', paddingTop:'25px', float:'right'}} className='ma3'>
              <h5>Quick Links</h5>
                <div style={{paddingTop:'20px', fontSize:'0.8rem'}} className='ma3'>
                      <p  className='dim pointer'>{'> Interior Design'}</p>
                      <p  className='dim pointer'>{'> Home'}</p>
                      <p  className='dim pointer'>{'> FAQs'}</p>
                      <p  className='dim pointer'>{'> Contact Us'}</p>
                      <p  className='dim pointer'>{'> Help'}</p>
                      <p  className='dim pointer'>{'> Categories'}</p>
                      <p  className='dim pointer'>{'> Vendors'}</p>
                      <p  className='dim pointer'>{'> About'}</p>
                </div>
              </div>
                  
              </div>

            <div style={{width:'100%',display:'inline-block', backgroundColor:' rgba(40, 40, 40, 0.9)'}}>
              <div style={{float:'left', width:'50%'}}>
                <h7>© Copyright 2020 Rise. All Right Reserved</h7>
              </div>
              <div style={{float:'right', width:'30%'}}>
                <a> <img alt='facebook' src={facebook} height='20px' width='20px'/></a>
                <a> <img alt='twitter' src={twitter} height='20px' width='20px'/></a>
                <a> <img alt='linkedin' src={linkedin} height='20px' width='20px'/></a>
              </div>
              </div>
        </div>
    </div>
    )
  }
}

export default App;
