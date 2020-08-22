import React, { useState, useEffect } from "react";
import "./App.css";
import Key from "./Key";
import notas from "./listNotas";

function App() {
  const [estaSonando, setEstaSonando] = useState("");
  
  const sonidoNota =(nota)=>{
    setEstaSonando(nota.nombre);
    const sonido = new Audio(nota.link);
        sonido.play();
    setTimeout(() => {
      setEstaSonando("");
    }, 350);
  }

  const handleClick = (nota) => {
    sonidoNota(nota)    
  };  

  const handleKeyPress = (event) =>{
    const nota =notas.find(nota=>nota.key===event.key)
    if (nota){
       sonidoNota(nota)
    }
  }
  useEffect(()=>{
    document.addEventListener('keypress', handleKeyPress);

  },[])

  return (
    <div className="App">
      <div className="titulo">
        <h1><span role="img" aria-label="img">🎶 🎹 </span>Piano con React <span role="img" aria-label="img">🎶</span></h1>
        <h2>
          Hecho con <span role="icono" aria-label="img">❤️</span> por Rocío gracias a Ada ITW
        </h2>
        <p> Nota: Se puede tocar con click o presionando los números desde el 1 al 7 por cada nota 😉</p>
        <div 
          className="esta-sonando">{estaSonando && `Suena la nota " ${estaSonando} "`}</div>
      </div>
      <div className="contenedor">
        {notas.map((nota, i) => (
          <Key
            key={i}
            estaSonando={estaSonando}
            nota={nota}
            handleClick={handleClick}
            handleKeyPress={handleKeyPress}

          />
        ))}
      </div>
    </div>
  );
}

export default App;
