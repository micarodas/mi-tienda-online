import React from 'react';
import CartWidget from './CartWidget';


function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">Bakugo Store</a>
      <CartWidget />
    </nav>
  );
}

export default NavBar;
