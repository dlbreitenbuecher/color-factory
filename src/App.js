import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import ColorsHome from './ColorsHome';
import Color from './Color';
import NewColorForm from './NewColorForm';
import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Route exact path='/colors'>
          <ColorsHome />
        </Route>

        <Route exact path='/colors/:color'>
          <Color />
        </Route>

        <Route exact path='/colors/new'>
          <NewColorForm />
        </Route>
        <Redirect to='/colors' />
      </BrowserRouter>
    </div>
  );
}

export default App;
