import { createRoot } from 'react-dom/client';



//import ReactDOM from 'react-dom'
import React from 'react'


import App from './pages/App'

const container = document.getElementById('root');
const root = createRoot(container);

root.render(<App tab="home" />);
//ReactDOM.render(<App />, document.getElementById('root'))
