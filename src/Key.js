import React from 'react';

const Key = ({estaSonando, nota, handleClick, handleKeyPress}) => {
  return (
    <>
      <div
        className={`nota ${estaSonando === nota.nombre && 'suena'}`}
        onClick={() => handleClick(nota)}
        onKeyPress={handleKeyPress}        
      >{nota.key}
            {nota.tieneSostenido && <div className="negra"></div>}
      </div>

    </>
  );
};

export default Key;
