import * as d3 from 'd3'
import React from 'react';

const Petal = () => (

  <>
  <h1>A petal</h1> <svg width="100" height="100" style={{ overflow: 'visible', margin: '5px' }}>
    <path
      d="
      M0,0 
      C44,49 15,70 20,100 
      L0,85 
      L-20,100 
      C-15,70 -44,49 0,0
      "
      fill="blue"
      stroke="red"
      strokeWidth="2"
      transform="translate(50,0)
      "
    />
  </svg>
  </>
);

export default Petal;
