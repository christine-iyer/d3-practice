import * as d3 from "d3";
import { useEffect, useRef } from "react";

const customTimeParser = d3.timeParse("%Y-%m-%d");

const Random = () => {
  const ref = useRef();

  useEffect(() => {
    var margin = {top: 10, right: 30, bottom: 30, left: 60},
    width = 460 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

// Append the svg object to the body of the page
var svg = d3.select("#my_dataviz")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// Read the data
d3.csv("https://raw.githubusercontent.com/christine-iyer/d3-practice/main/src/data/newdata.csv")
  .then(function(data) {
    // Format variables
    data = data.map(function(d) {
        let parsedDate = d3.timeParse("%Y-%m-%d")(d.date);
        return {
            date: parsedDate,
            value: +d.value, // Convert value to number
            year: parsedDate.getFullYear(),
            month: parsedDate.getMonth() + 1 // Months are zero-indexed in JavaScript
        };
    });

    // Log the data to verify structure
    console.log(data);

    // Define color scale for years
    var color = d3.scaleOrdinal()
      .domain([2020, 2021, 2022, 2023, 2024])
      .range(["red", "blue", "orange", "green", "pink"]);

    // Define x-axis scale
    var x = d3.scaleTime()
      .domain([new Date(2020, 6, 1), new Date(2021, 5, 31)]) // May to April
      .range([0, width]);

    // Define y-axis scale
    var y = d3.scaleLinear()
      .domain([0, d3.max(data, function(d) { return d.value; })])
      .range([height, 0]);

    // Add x-axis
    svg.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x).ticks(d3.timeMonth.every(1)).tickFormat(d3.timeFormat("%b")));

    // Add y-axis
    svg.append("g")
      .call(d3.axisLeft(y));

    // Add the line with color encoding by year
    var line = d3.line()
      .curve(d3.curveBasis) // Apply smoothing curve
      .x(function(d) { return x(new Date(2020, d.month - 1, 1)); }) // Map month to x-axis
      .y(function(d) { return y(d.value); });

    var years = d3.groups(data, d => d.year); // Group data by year

    years.forEach(function(yearData) {
        svg.append("path")
          .datum(yearData[1])
          .attr("fill", "none")
          .attr("stroke", color(yearData[0])) // Color by year
          .attr("stroke-width", 1.5)
          .attr("d", line);
    });
  })
  .catch(function(error) {
    console.error('Error loading or processing data:', error);
  });




    
  }, []);

  return <svg width={460} height={400} id="my_dataviz" ref={ref} />;
};

export default Random;