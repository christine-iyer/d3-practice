import * as d3 from 'd3'
import React from 'react';

const Petal = () => (
// const [petal, setPetal] = useState({
// m1: 0,
// m2: 0,
// c1: 0,
// c2: 0, 
// c3: 0,
// c4: 0,
// c5: 0,
// c6: 0,
// l1: 0,
// l2: 0,
// l3: 0,
// l4: 0,
// c7: 0,
// c8: 0,
// c9: 0,
// c10: 0
  
//  })
  



  // })
        // M
        // 0,
        // 0 
        // C
        // 44,(P1) -44,(P12), inverse of P1
        // 49 (P2) 49 (P13), same as P2
        // 15, (P3) -15, (P10) inverse of P3
        // 70  (P4) 70 (P11), same as P4
        // 20, (P5) -20, (P8), inverse of P5
        // 100 (P6) 100 (P9), same as P6
        // L
        // 0,
        // 85 (P7)
        // L
        // -20, (P8), inverse of P5
        // 100 (P9), same as P6
        // C
        // -15, (P10) inverse of P3
        // 70 (P11), same as P4
        // -44,(P12), inverse of P1
        // 49 (P13), same as P2
        // 0,
        // 0

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
