import { useState } from 'react'
import './App.css'
import Card from './components/Card';
import img from './assets/guru_chela.png';

function App() {

 

  const card = {
    img_src : img,
    cardName : 'GURU - CHELA GAME',
    description: 'if you want to see the magic and want me to turn this young boy into an old man "CLICK THE BUTTON BELOW"',
    btnName: 'CHELA' 
  }

  return (
    <>
      <div>
        < Card {...card}/>
       
      </div>
    </>
  )
}

export default App
