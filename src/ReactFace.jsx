import React from 'react'

const ReactFace = (props) => {
    const type = props["type"];
  
    let faceClassName = `react-face ${type}`;
    
    return (<div className={faceClassName}></div>);
}

export default ReactFace