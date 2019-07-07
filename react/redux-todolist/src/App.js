import React from 'react';
import { Provider } from 'react-redux';
import AddTodo from './containers/addtodo';
import ShowList from './containers/showlist';
import Filter from './containers/filter'
import store from './redux/store'

function App() {
  return (
    <Provider store = {store}>
      <AddTodo />
      <ShowList />
      <Filter />
    </Provider>
  );
}

export default App;
