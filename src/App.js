import React, { useState } from 'react';

import Header from './components/Header';
import CreateArea from './components/CreateArea';
import Note from './components/Note';

import './App.css';

function App() {

  return (
    <div className="App">
      <Header />
      <CreateArea />
      <Note />
    </div>
  );
}

export default App;

