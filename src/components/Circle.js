import React, { useRef, useEffect }from 'react'
import * as d3 from 'd3'
const Circle = () => {
     const ref = useRef()
   
     useEffect(() => {
       const svgElement = d3.select(ref.current)
       svgElement.append("circle")
         .attr("cx", 150)
         .attr("cy", 77)
         .attr("r",  50)
         .attr('fill', 'yellow')
     }, [])
   
     return (
      <>
      <h1>Circle</h1>
       <svg
         ref={ref}
       /></>
     )
   }
   export default Circle