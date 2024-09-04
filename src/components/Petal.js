import React, { useRef, useEffect }from 'react'
import * as d3 from 'd3'
const Petal = () => {
     const ref = useRef()
   
     useEffect(() => {
       const svgElement = d3.select(ref.current)
       svgElement.append("circle")
         .attr("cx", 150)
         .attr("cy", 77)
         .attr("r",  50)
         .attr('fill', 'blue')
     }, [])
   
     return (
      <>
      <h1>Petal</h1>
       <svg
         ref={ref}
       /></>
     )
   }
   export default Petal