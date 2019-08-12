import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Container } from './blocks/Container/Container';

export const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Container />
      </header>
    </div>
  );
}
