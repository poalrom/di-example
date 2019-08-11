import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './App';
import { registryContext } from '@bem-react/di';
import { registry } from './registry@mobile';

const RegistryContext = registryContext;

ReactDOM.render(<RegistryContext.Provider value={{app: registry}}><App /></RegistryContext.Provider>, document.getElementById('root'));
