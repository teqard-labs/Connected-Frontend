import React, { Component } from 'react'
import img from '../media/Artboard 1.jpg'
import Navbar from '../components/navbar';
class Hero extends Component {
    constructor(props) {
        super(props);
    }
   
    render() { 
        return (<div style={{backgroundImage: 'url(${img})'}}>
            <Navbar/>
            <img src="https://mdbootstrap.com/img/new/standard/city/047.jpg" className="my-6 mx-16 max-w-full h-auto rounded-lg" alt=""></img>
            
            
         
        </div>  );
    }
}
 
export default Hero;