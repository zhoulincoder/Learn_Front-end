import React from 'react';
// import logo from './logo.svg';
import LoginStatus from './LoginStatus';
import ShopCart from './ShopCart';
// import WithLogin from './WithLogin';
import ExampleMobx from './exampleMobx/index'
import ExampleBase from './examplebase/index'
import ExampleDeBounce from './ExampleDeBounce/index'
import './App.css';


// const WithLoginStatus = WithLogin(LoginStatus);
// const WithShopCart = WithLogin(ShopCart);
function App() {
  return (
    <>
  
      <LoginStatus />
      <ShopCart />
      {/* <WithLoginStatus />
      <WithShopCart a="1" b="2"/> */}
      <ExampleMobx />
      {/* <ExampleBase /> */}
      <ExampleDeBounce />
    </>
  )
}

export default App;
