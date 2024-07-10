import * as d3 from "d3";
import { useEffect, useRef } from "react";

const Random = () => {
  const ref = useRef();

  useEffect(() => {
    var margin = { top: 10, right: 30, bottom: 30, left: 60 },
      width = 460 - margin.left - margin.right,
      height = 400 - margin.top - margin.bottom;

    // Append the svg object to the body of the page
    var svg = d3.select("#my_dataviz")
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    // Create a tooltip div that is hidden by default
    var tooltip = d3.select("body").append("div")
      .attr("class", "tooltip")
      .style("opacity", 0)
      .style("position", "absolute")
      .style("background", "#f9f9f9")
      .style("border", "1px solid #d3d3d3")
      .style("padding", "5px")
      .style("border-radius", "5px")
      .style("pointer-events", "none");

    // Read the data
    d3.csv("https://raw.githubusercontent.com/christine-iyer/d3-practice/main/src/data/newdata.csv")
      .then(function (data) {
        // Format variables
        data = data.map(function (d) {
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
          .domain([new Date(2020, 4, 1), new Date(2021, 3, 30)]) // May to April
          .range([0, width]);

        // Define y-axis scale
        var y = d3.scaleLinear()
          .domain([0, d3.max(data, function (d) { return d.value; })])
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
          .x(function (d) {
            // Adjust the date for the x-axis range starting in May
         
            var adjustedDate = new Date(2020, (d.month - 1) % 12, 1);
            return x(adjustedDate);
          })
          .y(function (d) {
            return y(d.value);
          });

        var years = d3.groups(data, d => d.year); // Group data by year

        years.forEach(function (yearData) {
          svg.append("path")
            .datum(yearData[1])
            .attr("fill", "none")
            .attr("stroke", color(yearData[0])) // Color by year
            .attr("stroke-width", 1.5)
            .attr("d", line);

          // Add circles for each data point
          svg.selectAll("circle")
            .data(yearData[1])
            .enter()
            .append("circle")
            .attr("cx", function (d) {
              
              var adjustedDate = new Date(2020, (d.month - 1) % 12, 1);
              return x(adjustedDate);
            })
            .attr("cy", function (d) { return y(d.value); })
            .attr("r", 4)
            .attr("fill", color(yearData[0]))
            .on("mouseover", function (event, d) {
              tooltip.transition()
                .duration(200)
                .style("opacity", .9);
              tooltip.html("Year: " + d.year + "<br/>Value: " + d.value)
                .style("left", (event.pageX + 5) + "px")
                .style("top", (event.pageY - 28) + "px");
            })
            .on("mousemove", function (event) {
              tooltip.style("left", (event.pageX + 5) + "px")
                .style("top", (event.pageY - 28) + "px");
            })
            .on("mouseout", function (d) {
              tooltip.transition()
                .duration(500)
                .style("opacity", 0);
            });
        });

        // Add legend
        var legend = svg.selectAll(".legend")
          .data(color.domain())
          .enter().append("g")
          .attr("class", "legend")
          .attr("transform", function (d, i) {
            return "translate(0," + i * 20 + ")";
          });

        legend.append("rect")
          .attr("x", width - 18)
          .attr("width", 18)
          .attr("height", 18)
          .style("fill", color);

        legend.append("text")
          .attr("x", width - 24)
          .attr("y", 9)
          .attr("dy", ".35em")
          .style("text-anchor", "end")
          .text(function (d) { return d; });

      })
      .catch(function (error) {
        console.error('Error loading or processing data:', error);
      });

  }, []);

  return <svg width={460} height={400} id="my_dataviz" ref={ref} />;
};

export default Random;

            // Adjust the date for the x-axis range starting in May
            // var adjustedMonth = (d.month + 7) % 12; // Offset months by 7 to start from May
            // var adjustedYear = d.month > 4 ? 2020 : 2021;
            // var adjustedDate = new Date(adjustedYear, adjustedMonth, 1);
            // var adjustedDate = new Date(2020, (d.month - 1) % 12, 1);
 