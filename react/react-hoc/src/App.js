import React from 'react';
// import logo from './logo.svg';
import './App.css';
import LoginStatus from './LoginStatus';
import ShopCart from './ShopCart';
import WithLogin from './WithLogin'

// const WithLoginStatus = WithLogin(LoginStatus)
// const WithShopCard = WithLogin(ShopCart) 
function App() {
  return (
    <React.Fragment>
      <LoginStatus />
      <ShopCart />
      {/* <WithLoginStatus />
      <WithShopCard  a="1" b="2" /> */}
    </React.Fragment>
  );
}

export default App;
