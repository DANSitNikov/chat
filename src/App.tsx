import React from 'react';
import Input from './components/input';
import Messages from './components/messages';
import style from './App.module.css';

function App() {
  return (
    <div className={style.container}>
      <Input />
      <Messages />
    </div>
  );
}

export default App;
