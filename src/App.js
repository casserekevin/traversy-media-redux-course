import React from 'react';
import { Provider } from 'react-redux'
import store from './redux/store'

import Posts from './components/Posts'
import Postform from './components/Postform'

import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Postform/>
        <hr/>
        <Posts/>
      </div>
    </Provider>
  );
}

export default App;
