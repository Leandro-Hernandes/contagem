import React, { useState } from 'react';
import './funcoes.css';

const Funcoes = () => {
let [n, setN] = useState(0)
        
  function msg2(){
    setInterval(()=>{
        while(n<=10){
            
            setN(n++)
            break;
          
        }},
       1000)
        }  
        

  return (
    <div className='principal'>
        <p>{n}</p>
      <button onClick={msg2}>Iniciar contagem</button>
    </div>
  )
}

export default Funcoes