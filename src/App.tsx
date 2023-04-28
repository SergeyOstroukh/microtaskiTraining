import React from 'react';
import './App.css';
import {Comp1} from "./Newcomponents/Comp1";
import {NewButton} from "./Newcomponents/NewButton";






export const topCars = [
    {manufacturer:'BMW', model:'m5cs'},
    {manufacturer:'Mercedes', model:'e63s'},
    {manufacturer:'Audi', model:'rs6'}
]



function App() {
  return (
   <>
     <Comp1 cartype={topCars} />
       <NewButton />
   </>

  );
}

export default App;
