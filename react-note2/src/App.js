import React from 'react';
import logo from './logo.svg';
import './App.css';
import Parent from './component/Parent'
import Child from './component/Child'

import 'antd/dist/antd.css';
function App() {
  return (
    <div className="App">
     <Parent />
     {/* <Child /> */}
     {/* <CommentInput /> */}
    </div>
  );
}

export default App;
