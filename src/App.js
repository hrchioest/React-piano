import React, { useState, useEffect } from "react";
import "./App.css";
import Key from "./Key";
import notas from "./listNotas";

function App() {
  const [estaSonando, setEstaSonando] = useState("");
  
  const sonidoNota =(nota)=>{
    const sonido = new Audio(nota.link);
        sonido.play();
  }

  const handleClick = (nota) => {
    setEstaSonando(nota.nombre);
    sonidoNota(nota)
    setTimeout(() => {
      setEstaSonando("");
    }, 250);
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
          Hecho con <span role="img" aria-label="img">❤️</span> por Rocío
        </h2>
        <h3>Esta sonando la nota {estaSonando}</h3>
        <div 
          className="esta-sonando">{estaSonando && `suena ${estaSonando}`}</div>
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
