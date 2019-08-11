import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useComponentRegistry } from '@bem-react/di';
// import { Container } from './blocks/Container/Container';

export const App: React.FC = () => {
  const { Datepicker } = useComponentRegistry('app');

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Datepicker />
        {/* <Container /> */}
      </header>
    </div>
  );
}
