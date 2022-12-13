import React, { Component } from 'react';
import AnchorLink from "react-anchor-link-smooth-scroll";
class Navbar extends Component {
    constructor(props) {
        super(props);
    }
    
    render() { 
        return ( <div>

<nav className="relative flex flex-wrap items-center justify-between px-2 py-3 mb-3">
  <div className="container flex flex-wrap items-center justify-between px-4 mx-auto">
    <div className="relative flex justify-between w-full px-4 lg:w-auto lg:static lg:block lg:justify-start">
      <a className="inline-block py-2 mr-4 text-sm font-bold leading-relaxed text-white uppercase whitespace-nowrap" >
       <AnchorLink href='#hero'> LOGO</AnchorLink>
      </a>
      <button className="block px-3 py-1 text-xl leading-none bg-transparent border border-transparent border-solid rounded outline-none cursor-pointer lg:hidden focus:outline-none" type="button">
        <span className="relative block w-6 h-px bg-white rounded-sm"></span>
        <span className="relative block w-6 h-px mt-1 bg-white rounded-sm"></span>
        <span className="relative block w-6 h-px mt-1 bg-white rounded-sm"></span>
      </button>
    </div>
    <div className="items-center flex-grow lg:flex" id="example-navbar-warning">
      <ul className="flex flex-col ml-auto list-none lg:flex-row">
          <li className="nav-item">
            <a className="flex items-center px-3 py-2 text-xs font-bold leading-snug text-white uppercase hover:opacity-75" >
            <AnchorLink href='#service'> Services</AnchorLink> 
            </a>
          </li>
          <li className="nav-item">
            <a className="flex items-center px-3 py-2 text-xs font-bold leading-snug text-white uppercase hover:opacity-75" >
            <AnchorLink href='#faq'> FAQs</AnchorLink> 
            </a>
          </li>
          <li className="nav-item">
            <a className="flex items-center px-3 py-2 text-xs font-bold leading-snug text-white uppercase hover:opacity-75" >
            <AnchorLink href='#contact'> Contact </AnchorLink> 
            </a>
          </li>
      </ul>
    </div>
  </div>
</nav>
        </div> );
    }
}
 
export default Navbar;